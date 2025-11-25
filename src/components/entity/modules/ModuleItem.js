import { StyleSheet, Text, View } from 'react-native';
import Selector from '../../UI/Selector';

const ModuleItem = ({ module, onSelect }) => {
  // Intialisations --------------------------
  // State -----------------------------------
  // Handlers --------------------------------
  const handleSelect = () => onSelect(module);
  //View -------------------------------------
  return (
    <Selector onPress={handleSelect} pressedStyle={styles.pressedItem}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  text: {
    fontSize: 16,
  },
  pressedItem: {
    backgroundColor: 'azure',
  },
});

export default ModuleItem;
