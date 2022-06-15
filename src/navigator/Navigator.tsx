import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageSelection from "../screens/LanguageSelection";
import CategorySelection from "../screens/CategorySelection";
import Lesson from "../screens/Lesson";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lesson" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="Lesson" component={Lesson} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
