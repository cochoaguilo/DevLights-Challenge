import {Box, Image, Text, WrapItem, Wrap, Badge} from '@chakra-ui/react'

const Game = (props) => {
    console.log(props);
    return ( 
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={props.imageUrl} />
  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {props.beds} beds &bull; {props.baths} baths
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.title}
          </Box>
  
          <Box>
            {props.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
  
          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {props.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
     );
}
 
export default Game;