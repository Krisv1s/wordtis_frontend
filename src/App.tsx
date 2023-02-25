import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Game from './pages/Game/Game';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Forget from './pages/Forget/Forget';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import store from './store';

function App() {
  store.getUser();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute mustBeAuth>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute mustBeAuth>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute mustBeAuth>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute>
              <SignIn />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/forget"
          element={
            <ProtectedRoute>
              <Forget />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Navigate to="/signin" />} />
      </Routes>
    </>
  );
}

export default App;
