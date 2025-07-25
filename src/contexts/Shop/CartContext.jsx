import { createContext, useState, useContext } from 'react';
import { data } from '../../constants/cartItem';

export const CartContext = createContext(null);

// 自定義 hook 方便使用
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // 初始化購物車商品數量
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

  // 取得特定商品數量
  const getQuantity = (itemId) => quantities[itemId];

  const value = {
    cartData: data,
    quantities,
    handleQuantityChange,
    totalPrice,
    getQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 