import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
export default function Main() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </PaperProvider>
    );
}
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Main);
