import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./Components/PrivateRoute";
import { AuthContext } from "./Context/AuthContext";
import { PostContext } from "./Context/PostContext";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { PostPage } from "./Pages/PostPage/PostPage";
import { Signup } from "./Pages/Signup/Signup";

function App() {
  return (
    <AuthContext>
      <PostContext>
        <Routes>
          <Route element={<Signup />} path='/signup' />
          <Route exact element={<Login />} path='/login' />
          <Route element={<PrivateRoute><Home /></PrivateRoute>} path='/' />
          <Route element={<PrivateRoute><PostPage /></PrivateRoute>} path='/post/:post' />
        </Routes>
      </PostContext>
    </AuthContext>
  );
}

export default App;
