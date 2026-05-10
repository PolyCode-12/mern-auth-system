import Register from './Register';
import Login from './Login';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
<main className='App'>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
</main>
</BrowserRouter>
  );
}

export default App;