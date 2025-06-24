import { Box, Flex, Button, Divider } from '@chakra-ui/react';
import {LeftButton, RightButton} from './button';
function ProgressControl({step, setStep}) {

  function stepChange(step){
    if(step === 'step1'){
      return(
        <>
      <Box/>
      <RightButton step='step2' setStep={setStep}/>
      </>
      )
    }else if(step === 'step2'){
      return(
        <>
      <LeftButton step='step1' setStep={setStep}/>
      <RightButton step='step3' setStep={setStep}/>
      </>
      )
    }else{
        return(
          <>
      <LeftButton step='step2' setStep={setStep}/>
        <Button
          color='white'
          backgroundColor='#F67599'
          borderWidth='0'
          borderRadius='10px'
          width='160px'
          height='40px'
        >
          確認下單
        </Button>
        </>
        )
    }
  }
  return (
    <Box width='100%' px='10px' mt='60px'>
      <Divider borderColor='gray.200' borderBottomWidth='2px' my='15px' />
      <Flex justify='space-between' align='center' mt='20px'>
        {stepChange(step)}
      </Flex>
    </Box>
  );
}

export default ProgressControl;
