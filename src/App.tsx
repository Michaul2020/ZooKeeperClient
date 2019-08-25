import { Text, View } from "react-native";

import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(rootReducer);
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer></AppContainer>
    </Provider>
  );
}
