import React from "react";
import { Provider } from "react-redux";
import Map from "../src/Map"
import store from './store';

export default function App() {
  
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
}
