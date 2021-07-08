import {
  Box,
  Image,
  
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";

const Game = (props) => {
  
  return (
    <Box w="220px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.imageUrl} width="100%" height='100px' />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          height='60px'
          position='relative'
          width='100%'
        >
          {props.title}
        </Box>
        <div
          
        >
          <Box d="flex" mt="2" alignItems="center" flexDirection='column'>
            <h2 as="span" ml="2" color="white" fontSize="sm">
              Steam reviews
            </h2>
            <br/>
            <StarRatingComponent
              name="rate1"
              starCount={10}
              value={parseInt(props.rating)}
            />
          </Box>
        </div>
      </Box>
      <Box
        d='flex' margin='auto'
        maxW="50%" borderWidth="1px" borderRadius="lg"
        alignItems="center" flexDirection='row'
        letterSpacing="wide"
        bgGradient="linear(to-r, green.200, pink.500)" 
        marginBottom='15px'
      >
        <h3 style={{textDecoration:'line-through', margin:'14px', fontSize:'10px' }}>{props.price}</h3>
        <h1 style={{fontSize:'18px'}}>{props.salePrice}</h1>
      </Box>
    </Box>
  );
};

export default Game;
