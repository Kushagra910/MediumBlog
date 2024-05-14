import './App.css'
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Routes,Route } from 'react-router-dom';
import { Publish } from './pages/Publish';
import ProtectedRoute from './components/Protected';
import Home from './pages/Home';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/blogs' element={<ProtectedRoute><Blogs/></ProtectedRoute>} />
          <Route path='/publish' element={<ProtectedRoute><Publish/></ProtectedRoute>}/>
          <Route path='/*' element={<div className='flex justify-center items-center h-screen'>ERROR 404</div>}/>
        </Routes>
      </>
    )
}

export default App
