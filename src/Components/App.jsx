import './App.css';

//Componentes
import {Menu} from './Navbar/NavBar'

import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
    <Menu />
     
      <ItemListContainer />
      <ItemDetailContainer />

    </>
  );
}

export default App;
