import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlannerAppDrawer from './drawer/drawer';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={{flex: 1}}>
      <PlannerAppDrawer />
      <StatusBar style="dark" />
    </View>
  );
}

export default App;