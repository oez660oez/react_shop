import { Box, Flex } from '@chakra-ui/react';
import StepProgress from './StepProgress';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Cart from './Cart';
import { useState } from 'react';

function Shop() {
  const [step, setStep] = useState('step1');
  const renderStep = () => {
    if(step === 'step1'){
      return <Step1 />;
    }else if(step === 'step2'){
      return <Step2 />;
    }else{
      return <Step3 />;
    }
  }
  return (
    <Flex gap='60px'>
      <Box width='60%'>
        <StepProgress step={step}/>
        {renderStep()}
        <ProgressControl step={step} setStep={setStep}/>
      </Box>
      <Box width='40%'>
        <Cart />
      </Box>
    </Flex>
  );
}

export default Shop;
