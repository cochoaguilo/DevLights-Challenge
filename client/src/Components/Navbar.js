//import react from 'react'
import { Flex} from '@chakra-ui/react'
import '../App.css'

const Navbar = () => {
    return ( <nav>
       
        <ul style={{display:'flex'}}>
            <li className='li'>Home</li>
            <li className='li'>Browse</li>
        </ul>
    
        </nav> );
}
 
export default Navbar;