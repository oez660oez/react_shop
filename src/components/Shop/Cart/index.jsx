import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Stack,
  Circle,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { data } from '../../../constants/cartItem';

function CartItem({ data, quantity, onQuantityChange }) {
  const handleQuantity = (type) => {
    let newQuantity = 0;
    if(type === 'minus' ){
      if(quantity > 1){
        newQuantity = quantity - 1;
      }else{
        newQuantity = 1;
      }
    }else{
      newQuantity = quantity + 1;
    }
    onQuantityChange(data.id, newQuantity);
  };
  
  const totalPrice = data.price * quantity;
  
  return (
    <Flex justify='space-between'>
      <Flex gap={4}>
        <Image
          src={data.img}
          alt={data.name}
          width={110}
          height={110}
          borderRadius='md'
        />
        <Stack>
          <Text>{data.name}</Text>
          <Flex gap={4} align='center'>
            <Circle
              as='button'
              size='30px'
              backgroundColor='gray.200'
              color='black'
              display='flex'
              alignItems='center'
              justifyContent='center'
              onClick={() => handleQuantity('minus')}
            >
              <Text as='b'>－</Text>
            </Circle>
            <Text as='b'>{quantity}</Text>
            <Circle
              as='button'
              size='30px'
              backgroundColor='gray.200'
              color='black'
              display='flex'
              alignItems='center'
              justifyContent='center'
              onClick={() => handleQuantity('plus')}
            >
              <Text as='b'>＋</Text>
            </Circle>
          </Flex>
        </Stack>
      </Flex>
      <Text as='b'>${totalPrice}</Text>
    </Flex>
  );
}

function Cart() {
  // 在父層管理所有商品的數量
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    data.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    return initialQuantities;
  });

  // 處理數量變更
  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: newQuantity
    }));
  };

  // 計算總價
  const totalPrice = data.reduce((total, item) => {
    return total + (item.price * quantities[item.id]);
  }, 0);

  return (
    <Box
      width='100%'
      my='70px'
      border={'1px solid'}
      borderColor='gray.300'
      borderRadius='md'
      p='20px'
    >
      <Stack gap='30px' mb='20px'>
        <Heading size='md'>購物籃</Heading>
        {data.map((item) => (
          <CartItem 
            key={item.id} 
            data={item}
            quantity={quantities[item.id]}
            onQuantityChange={handleQuantityChange}
          />
        ))}
        <Divider borderColor='gray.500' opacity={0.3} />
        <Flex justify='space-between' align='center'>
          <Text>運費</Text>
          <Text as='b'>免費</Text>
        </Flex>
        <Divider borderColor='gray.500' opacity={0.3} />
        <Flex justify='space-between' align='center'>
          <Text>小計</Text>
          <Text as='b'>${totalPrice}</Text>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Cart;
