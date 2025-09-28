import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "./screens/AboutScreen";
import NotesScreen from "./screens/NotesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import splash from "./screens/SplashScreen";
import TasksScreen from "./screens/TasksScreen";

const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

function ProfileDrawer() {
  return (
    <Drawer.Navigator initialRouteName="profile">
        <Drawer.Screen name="profile" component={ProfileScreen} />
        <Drawer.Screen name="settings" component={SettingsScreen} />
        <Drawer.Screen name="about" component={AboutScreen} />
    </Drawer.Navigator>

  );
}

// Bottom Tabs
function MainTabs() {
  return (
<Tab.Navigator initialRouteName="tasks">
    <Tab.Screen name="tasks" component={TasksScreen} />
    <Tab.Screen name="notes" component={NotesScreen} />
    <Tab.Screen name="profile" component={ProfileDrawer} />
</Tab.Navigator>
  )};


  export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
        <Stack.Screen 
        name="splash"
        component={splash}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="main"
        component={MainTabs}
        />
        </Stack.Navigator>
    </NavigationContainer>
    );
}