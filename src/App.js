
import './App.css';
import { Route, Routes} from 'react-router-dom';

// import User1 from './src/pages/User/User';
// import Post1 from './src/pages/User/Post';
  import  User1 from './pages/User/User';
  import Post1 from './pages/Post/Post';
  import { Form } from './forms/Form';
import {Addtransaction} from './Finance/Addtransaction'
import { Alltransaction } from './Finance/Alltransaction';
import { View } from './Finance/View';
import Register from './Register';
import Login from './Login';
import Authentication from './Authentication/Authentication';

const App = () => {
  
  return (
    
    <div>

   <Routes>
        <Route  path='/login' element={<Login />}/> 
        <Route  path='/register' element={<Register />}/> 
<Route path='/' element={<Authentication/>}>
       
        <Route  path='/' element={<User1 />}/> 
        <Route  path='/user-post' element={<Post1 />}/>  
        <Route  path='/form' element={<Form />}/> 
        <Route  path='/addtransaction' element={<Addtransaction />}/> 
        <Route  path='/addtransaction/:id' element={<Addtransaction />}/> 
        <Route  path='/alltransaction' element={<Alltransaction />}/> 
        <Route  path='/View' element={<View />}/> 
        </Route>
</Routes>
    </div>
    
  )

}

export default App;
