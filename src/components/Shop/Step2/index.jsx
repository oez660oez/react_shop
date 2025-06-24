import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React from 'react';

function RadioExample() {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack spacing={4} mr='60px'>
        <Flex
          justify='space-between'
          align='center'
          border={value === '1' ? '1px solid black' : '1px solid transparent'}
          borderRadius='md'
          p={4}
        >
          <Flex gap={10} justify='center'>
            <Radio colorScheme='gray' size='lg' value='1'></Radio>
            <Box>
              <Text fontWeight='bold'>標準運送</Text>
              <Text>約3~7個工作天</Text>
            </Box>
          </Flex>
          <Text>免費</Text>
        </Flex>
        <Flex
          justify='space-between'
          align='center'
          border={value === '2' ? '1px solid black' : '1px solid transparent'}
          borderRadius='md'
          p={4}
        >
          <Flex gap={10} justify='center'>
            <Radio colorScheme='gray' size='lg' value='2'></Radio>
            <Box>
              <Text fontWeight='bold'>DHL貨運</Text>
              <Text>48小時內送達</Text>
            </Box>
          </Flex>
          <Text>$500</Text>
        </Flex>
      </Stack>
    </RadioGroup>
  );
}

function Step2() {
  return (
    <Box width='100%' px='10px' mt='60px' mb='123px'>
      <Heading size='lg' mb='40px'>
        運送方式
      </Heading>
      <RadioExample />
    </Box>
  );
}

export default Step2;
