import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import Notfound from "./features/notfound/Notfound";
import BaseRoute from "./routes/BaseRoute";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route index path="/auth/*" element={<AuthRoutes />} />
          <Route index path="/*" element={<BaseRoute />} />
          <Route index path="*" element={<Notfound />} />
        </Routes>
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
