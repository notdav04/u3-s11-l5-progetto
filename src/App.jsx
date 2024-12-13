import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Playerbar from "./components/Playerbar";

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
        <Aside />
        <Playerbar />
      </Provider>
    </>
  );
}

export default App;
