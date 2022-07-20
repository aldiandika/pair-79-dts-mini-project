import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedComponent from "./component/ProtectedComponent";
import DetailMoviePage from "./container/detail-movie-page";
import HomePage from "./container/home-page";
import LoginPage from "./container/login-page";
import RegisterPage from "./container/register-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="detail"
          element={
            <ProtectedComponent>
              <DetailMoviePage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
