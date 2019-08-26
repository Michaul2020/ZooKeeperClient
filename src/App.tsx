import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation";
import { createStore } from "redux";
import { registerRootComponent } from "expo";
import rootReducer from "./redux/reducers/rootReducer";

const AppNavigator = createStackNavigator(
  {
    HomePage: HomePage,
    LoginPage: LoginPage,
    CameraPage: CameraPage
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const store = createStore(rootReducer);
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default registerRootComponent(App);
