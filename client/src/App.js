import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import {Fragment} from 'react'
import ListadoGames from './Components/ListadoGames'
import Filter from './Components/Filter'
import Footer from './Components/Footer'
import {ChakraProvider, Image} from '@chakra-ui/react'
import mainImage from'./202121015552089_1.jpeg'

function App() {
  return (
    
    <Fragment>
      <ChakraProvider >
      <Navbar />
      <Image src = {mainImage} htmlWidth='100%'/>
      <Filter />
      <ListadoGames />
      <Footer />
      </ChakraProvider>
    </Fragment>
   
  );
}

export default App;
