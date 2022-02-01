import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  // const navigation = useNavigation(); // <-- add this line

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HOME</Text>
      <View>
        <Button title="HOME 2" onPress={() => navigation.navigate("Home2")} />
        <Button
          title="OTHER 2"
          onPress={() =>
            navigation.navigate("OtherStack", { screen: "Other2" })
          }
        />
      </View>
    </View>
  );
};

const HomeScreen2 = () => {
  return (
    <View>
      <Text>HOME 2</Text>
    </View>
  );
};

const OtherScreen = ({ navigation }) => {
  return (
    <View>
      <Text>OTHER</Text>
      <Button title="OTHER 2" onPress={() => navigation.navigate("Other2")} />
    </View>
  );
};

const OtherScreen2 = () => {
  return (
    <View>
      <Text>OTHER 2</Text>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home1">
      <Stack.Screen name="Home1" component={HomeScreen} />
      <Stack.Screen name="Home2" component={HomeScreen2} />
    </Stack.Navigator>
  );
};

const OtherStack = () => {
  return (
    <Stack.Navigator initialRouteName="Other1">
      <Stack.Screen name="Other1" component={OtherScreen} />
      <Stack.Screen name="Other2" component={OtherScreen2} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="OtherStack"
        component={OtherStack}
      />
    </Tab.Navigator>
  );
};
