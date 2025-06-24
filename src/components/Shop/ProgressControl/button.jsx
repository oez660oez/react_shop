import { Text, Flex } from '@chakra-ui/react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

function LeftButton({step, setStep}){
    return(
      <Flex
      as='button'
      align='center'
      gap='10px'
      cursor='pointer'
      background='none'
      border='none'
      _hover={{ opacity: 0.8 }}
      onClick={() => setStep(step)}
    >
      <HiArrowLongLeft size={16} />
      <Text>上一步</Text>
    </Flex>
    )
}
function RightButton({step, setStep}){
  return(
    <Flex
      as='button'
      align='center'
      justify='center'
      gap='10px'
      cursor='pointer'
      color='white'
      backgroundColor='#F67599'
      borderWidth='0'
      borderRadius='10px'
      width='160px'
      height='40px'
      _hover={{ opacity: 0.8 }}
      onClick={() => setStep(step)}
    >
      <Text>下一步</Text>
      <HiArrowLongRight size={16} />
    </Flex>
  )
}

export { LeftButton, RightButton };