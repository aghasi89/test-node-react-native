import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from '../screens/users/users';
import EditUser from '../screens/editUser/editUser';
import Register from '../screens/registerUser/registerUser';

export type NavigationParamList = {
  Users: undefined;
  EditUser: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<NavigationParamList>();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
export default Navigation;
