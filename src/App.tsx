import { AnyAction, Store, createStore } from "redux";
import { NavigationContainer, createAppContainer } from "react-navigation";

import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import React from "react";
import { createStackNavigator } from "react-navigation";
import { registerRootComponent } from "expo";
import rootReducer from "./redux/reducers/rootReducer";

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    LoginPage: LoginPage,
    HomePage: HomePage,
    CameraPage: CameraPage
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const store: Store<any, AnyAction> = createStore(rootReducer);
const AppContainer: NavigationContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default registerRootComponent(App);
