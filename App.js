import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ResultScreen from "./screens/ResultScreen";
import RecommendationScreen from "./screens/RecommendationScreen";
import UnderWeight from "./screens/subScreen/UnderWeight";
import NormalWeight from "./screens/subScreen/NormalWeight";
import OverWeight from "./screens/subScreen/OverWeight";
import Obesity from "./screens/subScreen/Obesity";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 80.2%)",
            height: 85,
            borderBottomColor: "#f0f0f0",
            borderWidth: 0.5,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="BMI CALCULATOR" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Recommendation" component={RecommendationScreen} />

        <Stack.Screen name="UnderWeight" component={UnderWeight} />
        <Stack.Screen name="NormalWeight" component={NormalWeight} />
        <Stack.Screen name="OverWeight" component={OverWeight} />
        <Stack.Screen name="Obesity" component={Obesity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
