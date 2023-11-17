import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from './navigation';

type PropsUsers = NativeStackScreenProps<NavigationParamList, 'Users'>;
export type UsersScreenNavigationProp = PropsUsers['navigation'];

type PropsEditUser = NativeStackScreenProps<NavigationParamList, 'EditUser'>;
export type EditUserScreenNavigationProp = PropsEditUser['navigation'];
