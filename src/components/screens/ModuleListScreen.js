import {
  ActivityIndicator,
  Alert,
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useLoad from '../API/useLoad.js';
import useStore from '../store/useStore.js';
import API from '../API/API.js';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';
import { useEffect } from 'react';

const ModuleListScreen = ({ navigation }) => {
  // Initialisation --------------
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const modulesEndPoint = 'https://softwarehub.uk/unibase/api/modules';
  const loggedinUserKey = 'loggedinUser';
  const favouritesKey = 'moduleFavourites';

  // State ----------------
  const [modules, setModules, isLoading, loadModules] =
    useLoad(modulesEndPoint);
  const [loggedinUser, saveLoggedinUser] = useStore(loggedinUserKey, null);
  const [favourites, saveFavourites] = useStore(favouritesKey, []);

  const augmentModulesWithFavourites = () => {
    const modifyModule = (module) => ({
      ...module,
      ModuleFavourite: favourites.includes(module.ModuleID),
    });
    const augmentedModules = modules.map(modifyModule);
    setModules(augmentedModules);
  };

  useEffect(() => {
    augmentModulesWithFavourites();
  }, [isLoading]);

  // Handlers -------------

  const handleFavourite = (module) => {
    // Update module state
    const isFavourite = !module.ModuleFavourite;
    const updateModule = (item) =>
      item.ModuleID === module.ModuleID
        ? { ...item, ModuleFavourite: isFavourite }
        : item;
    const updatedModuleList = modules.map(updateModule);
    setModules(updatedModuleList);

    // save the new favourites
    const updatedFavouritesList = updatedModuleList
      .filter((item) => item.ModuleFavourite)
      .map((item) => item.ModuleID);
    saveFavourites(updatedFavouritesList);
  };

  const onDelete = async (module) => {
    const deletEndpoint = `${modulesEndPoint}/${module.ModuleID}`;
    const result = await API.delete(deletEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndPoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (module) => {
    const result = await API.post(modulesEndPoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndPoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (module) => {
    const putEndpoint = `${modulesEndPoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndPoint);
      navigation.replace('ModuleViewScreen', { module, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const gotoViewScreen = (module) =>
    navigation.navigate('ModuleViewScreen', { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });

  // View -------------
  return (
    <Screen>
      <RenderCount />
      {loggedinUser && (
        <Text style={styles.welcome}>Welcome {loggedinUser.UserFirstname}</Text>
      )}
      <View style={styles.container}>
        <ButtonTray>
          <Button
            label="Add Module"
            icon={<Icons.Add />}
            onClick={gotoAddScreen}
          />
        </ButtonTray>
        {isLoading && (
          <View style={styles.spinner}>
            <Text>Retrieving records from {modulesEndPoint} ...</Text>
            <ActivityIndicator size="large" />
          </View>
        )}

        <ModuleList
          modules={modules}
          onSelect={gotoViewScreen}
          onFavourite={handleFavourite}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    gap: 15,
  },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ModuleListScreen;
