import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '../stacks/HomeStack';
import About from '../pages/about';
const Drawer = createDrawerNavigator();
export default function PlannerAppDrawer() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Activities" component={HomeStack} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      );
}