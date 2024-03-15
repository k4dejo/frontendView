import './App.css'
import Navbar from './components/navbar'
import Carrusel from './components/Carrusel'
import Featured from './components/Featured'
import BestSellers from './components/BestSellers'
import { Flex, Text, Button } from '@radix-ui/themes';

function App() {
  return (
    <>
      <Navbar />
      <Flex direction="column" gap="4">
        <Carrusel />
        <Featured />
        <BestSellers />
      </Flex>
    </>
  )
}

export default App
