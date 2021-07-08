import axios from 'axios';
import {useEffect, useState} from 'react'
import Game from './Game'
import { Flex} from '@chakra-ui/react'

const ListadoGames = () => {


    const [data, saveData] = useState([])

    

    useEffect(()=>{

        const apiGET = async ()=>{
            let res = await axios.get('http://localhost:3500/deals')
            
            //let json = await res.json()
            
                console.log(res.data.data);
                saveData(res.data.data)
        
        }
        
        apiGET()
    },[])
    
    return ( 

        <div>
            
    <ul style={{display:'flex', flexWrap:'wrap', margin:'5% 5%'}}>{data.map(game=>{

        return(
        <Flex
        align="center"
        justify={{
          base: "center",
          md: "space-around",
          xl: "space-between",
        }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
       
        px={8}
        mb={16}
        >
        <Game 
            key={game.gameID}
            title={game.title} 
            imageUrl={game.thumb} 
            rating={game.dealRating}
            price={game.normalPrice}
            salePrice={game.salePrice}
            />
        </Flex>
            )
    })}</ul>
    
    </div>
    );
}
 
export default ListadoGames;