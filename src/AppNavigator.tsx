import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator({
  HomePage: HomePage,
  LoginPage: LoginPage
});

export default AppNavigator;
