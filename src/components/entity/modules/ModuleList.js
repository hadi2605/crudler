import { ScrollView, StyleSheet } from 'react-native';
import ModuleItem from './ModuleItem.js';

const ModuleList = ({ modules, onSelect, onFavourite }) => {
  // Intialisations --------------------------
  // State -----------------------------------
  // Handlers --------------------------------

  //View -------------------------------------
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => {
        return (
          <ModuleItem
            key={module.ModuleCode}
            ModuleItem
            module={module}
            onSelect={onSelect}
            onFavourite={onFavourite}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ModuleList;
