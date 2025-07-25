import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { useForm } from '../../../contexts/Shop/index.jsx';

function Step1() {
  const { formData, updateField } = useForm();

  return (
    <Box width='100%' px='10px' mt='60px'>
      <Heading size='lg' mb='20px'>
        付款資訊
      </Heading>
      <Stack gap='20px'>
        <FormControl h='auto'>
          <FormLabel mb='10px'>持卡人姓名</FormLabel>
          <Input
            placeholder='請輸入持卡人姓名'
            size='lg'
            w='60%'
            h='40px'
            pl='10px'
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
          />
        </FormControl>
        <FormControl h='auto'>
          <FormLabel mb='10px'>卡號</FormLabel>
          <Input
            placeholder='請輸入卡號'
            size='lg'
            w='60%'
            h='40px'
            pl='10px'
            value={formData.cardNumber}
            onChange={(e) => updateField('cardNumber', e.target.value)}
          />
        </FormControl>
        <Flex gap={10}>
          <FormControl h='auto' flex='1'>
            <FormLabel mb='10px'>有效期限</FormLabel>
            <Input
              placeholder='請輸入有效期限'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
              value={formData.expiryDate}
              onChange={(e) => updateField('expiryDate', e.target.value)}
            />
          </FormControl>
          <FormControl h='auto' flex='1'>
            <FormLabel mb='10px'>CVC/CCV</FormLabel>
            <Input
              placeholder='請輸入後三碼'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
              value={formData.cvc}
              onChange={(e) => updateField('cvc', e.target.value)}
            />
          </FormControl>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Step1;
