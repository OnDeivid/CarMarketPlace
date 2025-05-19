import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import Layout from './Layout';
import Home from './pages/Home/Home';
import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Register from './pages/Register/Register';


import './App.css'

function App() {

  const [auth, setAuth] = useAuth('auth', null)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            {/* <Route path='/profile' element={<PrivateRoute><Profile userData={auth} /></PrivateRoute>} />
            <Route path='/edit/:id' element={<PrivateRoute><Edit userData={auth} /></PrivateRoute>} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            // */}
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
