import { Box, Flex, Image, Heading, Text, Circle } from '@chakra-ui/react';

// 創建步驟項組件以提高可重用性
const StepItem = ({ number, text, isCompleted, isActive }) => {
  function isOK() {
    if (isCompleted == false) {
      return (
        <Circle
          size='20px'
          borderWidth='1px'
          borderColor={isCompleted ? 'black' : isActive ? 'black' : 'gray.400'}
          borderStyle='solid'
          color={isCompleted ? 'black' : isActive ? 'black' : 'gray.400'}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Text>{number}</Text>
        </Circle>
      );
    } else {
      return (
        <Image
          src='/shop/pg-complete.svg'
          width={50}
          height={50}
          style={{
            width: 'auto',
            height: '20px',
          }}
        />
      );
    }
  }
  return (
    <Flex align='center'>
      {isOK()}
      <Text fontWeight='medium' color={isCompleted ? 'black' : isActive ? 'black' : 'gray.400'} ml='20px'>
        {text}
      </Text>
    </Flex>
  );
};

// 創建連接線組件
const Connector = ({isCompleted}) => (
  <Box
    width='60px'
    height='1px'
    borderWidth='1.5px'
    borderStyle='solid'
    borderColor={isCompleted ? 'black' : 'gray.400'}
    mx={2}
    flex='1'
  />
);
function StepProgress({step}) {
    const step1Status = {
      isCompleted: step === 'step2' || step === 'step3',
      isActive: step === 'step1',
    }
    const step2Status = {
      isCompleted: step === 'step3',
      isActive: step === 'step2',
    }
    const step3Status = {
      isCompleted: false,
      isActive: step === 'step3',
    }
  return (
    <Box width='100%' px='10px'>
      <Heading size='lg' mb='40px'>
        結帳
      </Heading>
      <Flex align='center' width='100%' gap='40px'>
        <StepItem number='1' text='寄送地址' {...step1Status} />
        <Connector isCompleted={step1Status.isCompleted} />
        <StepItem number='2' text='運送方式' {...step2Status} />
        <Connector isCompleted={step2Status.isCompleted} />
        <StepItem number='3' text='付款資訊' {...step3Status} />
      </Flex>
    </Box>
  );
}

export default StepProgress;
