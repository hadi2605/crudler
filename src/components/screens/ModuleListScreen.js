import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import ModuleList from '../entity/modules/ModuleList.js';
import RenderCount from '../UI/RenderCount.js';

import initialModules from '../../data/modules.js';

const ModuleListScreen = ({ navigation }) => {
  // Initialisation --------------
  // State ----------------
  const [modules, setModules] = useState(initialModules);

  // Handlers -------------
  const handleSelect = (module) =>
    navigation.navigate('ModuleViewScreen', { module });
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View -------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
