import {
  Box,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Stack,
  Select,
} from '@chakra-ui/react';

function Step3() {
  return (
    <Box width='100%' px='10px' mt='60px'>
      <Heading size='lg' mb='20px'>
        寄送地址
      </Heading>
      <Stack gap='20px'>
        <Flex gap={10}>
          <FormControl h='auto' flex='1'>
            <FormLabel mb='10px'>稱謂</FormLabel>
            <Select placeholder='請選擇稱謂'>
              <option value='option1'>先生</option>
              <option value='option2'>小姐</option>
            </Select>
          </FormControl>
          <FormControl h='auto' flex='2'>
            <FormLabel mb='10px'>姓名</FormLabel>
            <Input
              placeholder='請輸入姓名'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
            />
          </FormControl>
        </Flex>
        <Flex gap={10}>
          <FormControl h='auto' flex='1.5'>
            <FormLabel mb='10px'>電話</FormLabel>
            <Input
              placeholder='請輸入行動電話'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
            />
          </FormControl>
          <FormControl h='auto' flex='1'>
            <FormLabel mb='10px'>Email</FormLabel>
            <Input
              placeholder='請輸入Email'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
            />
          </FormControl>
        </Flex>
        <Flex gap={10}>
          <FormControl h='auto' flex='1'>
            <FormLabel mb='10px'>縣市</FormLabel>
            <Select placeholder='請選擇縣市'>
              <option value='option1'>員林市</option>
              <option value='option2'>高雄市</option>
            </Select>
          </FormControl>
          <FormControl h='auto' flex='2'>
            <FormLabel mb='10px'>地址</FormLabel>
            <Input
              placeholder='請輸入地址'
              size='lg'
              w='100%'
              h='40px'
              pl='10px'
            />
          </FormControl>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Step3;
