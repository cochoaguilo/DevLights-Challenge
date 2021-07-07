import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {Fragment} from 'react'
import ListadoGames from './Components/ListadoGames'
import Filter from './Components/Filter'
import {ChakraProvider} from '@chakra-ui/react'

function App() {
  return (
    
    <Fragment>
      <ChakraProvider >
      <Navbar />
      <Filter />
      <ListadoGames />
      </ChakraProvider>
    </Fragment>
   
  );
}

export default App;
