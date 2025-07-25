import { Box, Flex, Button, Divider } from '@chakra-ui/react';
import { LeftButton, RightButton } from './button';
import { useCart, useForm } from '../../../contexts/Shop/index.jsx';

function ProgressControl({ step, setStep }) {
  const { totalPrice } = useCart();
  const { formData } = useForm();

  const handleConfirmOrder = () => {
    console.log('=== 訂單資訊 ===');
    console.log('購物車總金額 (小計):', totalPrice);
    console.log('持卡人姓名:', formData.name);
    console.log('卡號:', formData.cardNumber);
    console.log('有效期限:', formData.expiryDate);
    console.log('CVC/CCV:', formData.cvc);
    console.log('===============');

    alert('訂單已送出！請查看 console 了解詳細資訊');
  };

  function stepChange(step) {
    if (step === 'step1') {
      return (
        <>
          <Box />
          <RightButton step='step2' setStep={setStep} />
        </>
      );
    } else if (step === 'step2') {
      return (
        <>
          <LeftButton step='step1' setStep={setStep} />
          <RightButton step='step3' setStep={setStep} />
        </>
      );
    } else {
      return (
        <>
          <LeftButton step='step2' setStep={setStep} />
          <Button
            color='white'
            backgroundColor='#F67599'
            borderWidth='0'
            borderRadius='10px'
            width='160px'
            height='40px'
            onClick={handleConfirmOrder}
            _hover={{ opacity: 0.8 }}
          >
            確認下單
          </Button>
        </>
      );
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
