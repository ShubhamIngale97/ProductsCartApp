import React, { useEffect } from 'react';
import { getProducts } from './src/features/products/productsApi';
import { Text, View } from 'react-native';

function App() {

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getProducts(10, 0);
        console.log('Total products:', result.total);
        console.log('First product:', result.products[0]);
      } catch (e) {
        console.log('API failed:', e);
      }
    };

    loadProducts();
  }, []);


  return (
    <View>
      <Text>Products App</Text>
    </View>
  );
}

export default App;