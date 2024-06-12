import "./App.css";
import { Home } from "./components/home";
import About from "./components/aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../src/redux/reducer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
function App() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
