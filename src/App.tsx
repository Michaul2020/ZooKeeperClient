import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { registerRootComponent } from "expo";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer></AppContainer>
    </Provider>
  );
};

export default registerRootComponent(App);
