import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Notfound from "./features/notfound/Notfound";
import store from "./redux/store";
import AuthRoutes from "./routes/AuthRoutes";
import BaseRoute from "./routes/BaseRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route index path="/auth/*" element={<AuthRoutes />} />
            <Route index path="/*" element={<BaseRoute />} />
            <Route index path="*" element={<Notfound />} />
          </Routes>
        </Provider>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
