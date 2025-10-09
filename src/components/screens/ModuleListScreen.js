import { StyleSheet,} from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';


import initalModules from '../../data/modules.js';

const ModuleListScreen = () => {
  // Initialisation --------------
  const modules = initalModules;
  // State ----------------
  // Handlers -------------
  const handleSelect = (module) => alert (`Item ${module.ModuleCode} selected`)
  // View -------------
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
