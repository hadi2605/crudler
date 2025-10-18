import { MaterialIcons } from '@expo/vector-icons';

const Icons = {};

const Add = () => <MaterialIcons name="add" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;

// Compose
Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;

export default Icons;
