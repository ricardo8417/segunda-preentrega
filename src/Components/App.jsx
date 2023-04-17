import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './Footer/Footer';

//Componentes
import {Menu} from './Navbar/NavBar'

import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>

{/*  BrowserRouter: va a definir la configuración de mis rutas*/ }
    <BrowserRouter> 
    <Menu />
<Routes>
  <Route path='/' element={<ItemListContainer />} />
  <Route path='/category/:category' element={<ItemListContainer />} />     
  <Route path='/product/:id' element={<ItemDetailContainer />} />   
</Routes>
<Footer />
</BrowserRouter>
    </>
  );
}

export default App;
