import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../screens/Login';
import { Food } from '../../screens/Food';

const Stack = createNativeStackNavigator<StackRootParamList>();

export type StackRootParamList = {
    Login: undefined,
    Food: undefined
}

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Food" component={Food} />
    </Stack.Navigator>
  );
}