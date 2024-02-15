import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import { useAuth } from './context/authContext';
import { useEffect } from "react";
import OpenRoute from './components/OpenRoute';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import MyImages from './components/Dashboard/MyImages';
import UploadImage from './components/Dashboard/UploadImage';

function App() {

  return (
    <>
      <Routes>
        {/* for non - logged in user */}
        <Route
          path='/'
          element={
            <OpenRoute>
              <Home />
            </OpenRoute>}
        />
        <Route
          path='signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>} />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path='dashboard/my-images' element={<MyImages />} />
          <Route path='dashboard/upload-image' element={<UploadImage />} />
        </Route>

        {/* error 404 page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
