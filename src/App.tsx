import { Text, View } from 'react-native';

import { Provider } from "react-redux";
import React from 'react';
import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import styles from "./styles";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </Provider>
  );
}
