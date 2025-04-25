import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import Notfound from "./features/notfound/Notfound";
import BaseRoute from "./routes/BaseRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/auth/*" element={<AuthRoutes />} />
        <Route index path="/*" element={<BaseRoute />} />
        <Route index path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
