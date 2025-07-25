import { CartProvider } from './CartContext';
import { FormProvider } from './FormContext';

// Shop 相關的 Context 統一匯出
export { CartProvider, useCart, CartContext } from './CartContext';
export { FormProvider, useForm, FormContext } from './FormContext';

export const ShopProvider = ({ children }) => {
  return (
    <CartProvider>
      <FormProvider>
        {children}
      </FormProvider>
    </CartProvider>
  );
}; 