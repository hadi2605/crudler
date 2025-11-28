import { Text } from 'react-native';
import Selector from './Selector';
import Icons from './Icons';

const Favourite = ({ isFavourite, onSelect, style }) => {
  // Intialisations --------------------------
  // State -----------------------------------
  // Handlers --------------------------------
  // View ------------------------------------
  return (
    <Selector onPress={onSelect} style={style}>
      <Text>{isFavourite ? <Icons.Favourite /> : <Icons.Notfavourite />}</Text>
    </Selector>
  );
};

export default Favourite;
