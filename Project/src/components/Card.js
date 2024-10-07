import { Heading, HStack, Image, Text, VStack,  } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log(imageSrc);
  return (
    <>
      <>
        <VStack bg='white' borderRadius="lg" w='md' >
          <Image src={imageSrc} borderRadius='lg' alt={title}/>
          <VStack textAlign='start' >
            <Heading px='12px' size='sm' w='md' color='black'  >{title}</Heading>
            <Text color='black' px='12px' >{ description }</Text>
          </VStack>
          <HStack>
            <Heading w='md' px='12px' my='6px'size='xs' color='black'>See More <FontAwesomeIcon icon={faArrowRight} color='black' size="1x" /> </Heading>
          </HStack>
        </VStack>
      </>
   
      
    </>
  );
};

export default Card;
