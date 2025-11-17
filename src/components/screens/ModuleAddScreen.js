import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import { Button, ButtonTray } from '../UI/Button.js';

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};
const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisation --------------
  const { onAdd } = route.params;
  ((defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000)),
    (defaultModule.ModuleImage =
      'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg'));
  // State ----------------
  const [module, setModule] = useState(defaultModule);
  // Handlers -------------
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  // View -------------
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLable}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange('ModuleCode', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLable}>Module Name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange('ModuleName', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLable}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange('ModuleLevel', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLable}>Module Leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange('ModuleLeaderName', value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLable}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange('ModuleImage', value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLable: {
    color: 'grey',
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export default ModuleAddScreen;
