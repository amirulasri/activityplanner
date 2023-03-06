import About from '../pages/about';
import Home from '../pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="event-note" size={size} color={color} />
                ),
            }} name="Activity" component={Home} />
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" size={size} color={color} />
                ),
            }} name="Favorite" component={About} />
        </Tab.Navigator>
    );
}