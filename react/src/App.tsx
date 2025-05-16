import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Layout from './Layout';
import useAuth from './hooks/useAuth';


import './App.css'

function App() {
  const [auth, setAuth] = useAuth('auth', '')

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/profile' element={<PrivateRoute><Profile userData={auth} /></PrivateRoute>} />
            <Route path='/create' element={<PrivateRoute><Create userData={auth} /></PrivateRoute>} />
            <Route path='/edit/:id' element={<PrivateRoute><Edit userData={auth} /></PrivateRoute>} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} /> */}
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
