import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';

export const Routes = () =>{
    return <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
}