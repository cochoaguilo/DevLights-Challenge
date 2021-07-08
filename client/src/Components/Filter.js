import {  Button, Flex } from "@chakra-ui/react";
import {useState } from "react/cjs/react.development";
import axios from "axios";
import Game from './Game'

const Filter = () => {

    const [game, saveGame] = useState([])
  const [ data, saveData ] = useState({
      name: ''
  });


  const onChange = (e) => {
    saveData({
      ...data,
      name: e.target.value,
    });
  };

  const onSubmit = () => {
      
      const apiGETbyName = async ()=>{
          try {
            let res = await axios.get(`http://localhost:3500/deals/title?title=${data.name}`)
        
                saveGame(res.data.data)
          } catch (error) {
              console.log(error);
          }
       
    
    }
    apiGETbyName();
  };

  console.log(game);

  return (
    <div style={{ position: "relative", width: "50%", margin: "5%" }}>
      <form onSubmit={onSubmit}>
        <input 
        placeholder="Busque por titulo" 
        style={{color:'black'}}
        onChange={onChange} 
        defaultValue = {data.name}
        name="name"
        />
        
      </form>
      <Button marginTop='40px' colorScheme='blue' type="submit" onClick={onSubmit}>Buscar</Button>
      
      <div>
          {game.length >0?<ul style={{display:'flex', flexWrap:'wrap', margin:'5% 5%'}}>{game.map(element =>{
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
                  title={element.title} 
                  imageUrl={element.thumb} 
                  rating={element.dealRating}
                  />
              </Flex>
              )
          })}</ul>:<h2></h2>
        }
      </div>
    </div>
  );
};

export default Filter;
