import { MaterialIcons } from '@expo/vector-icons';

const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Close = () => <MaterialIcons name="close" size={16} />;
const Sync = () => <MaterialIcons name="sync" size={16} />;
const Favourite = () => (
  <MaterialIcons name="favorite" size={18} color="crimson" />
);
const Notfavourite = () => (
  <MaterialIcons name="favorite-border" size={18} color="grey" />
);

// Compose
Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Close = Close;
Icons.Sync = Sync;
Icons.Favourite = Favourite;
Icons.Notfavourite = Notfavourite;

export default Icons;
