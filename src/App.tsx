import CatsList from "components/cats-list";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <CatsList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
