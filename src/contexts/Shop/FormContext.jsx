import { createContext, useState, useContext } from 'react';

export const FormContext = createContext(null);

// 自定義 hook 方便使用
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',           // 持卡人姓名
    cardNumber: '',     // 卡號
    expiryDate: '',     // 有效期限
    cvc: ''             // CVC/CCV
  });

  // 更新單個欄位的函式
  const updateField = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const value = {
    formData,
    setFormData,
    updateField
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
}; 