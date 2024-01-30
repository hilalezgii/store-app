import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, FlatList } from 'react-native';
import ProductCard from './components/ProductCard';
import ProductData from './product_data.json';

export default function App() {
  const renderItem = ({item}) => <ProductCard product={item}/>;  

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput 
        style={styles.search_input}
        placeholder="Ara..."
      />
      <FlatList keyExtractor={product => product.id.toString()} numColumns={2}
      data={ProductData}
      renderItem={renderItem}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20,
    padding:8,
    gap:10,
  },
  title:{
    color:'purple',
    fontSize:25,
    fontWeight:'bold',
  },
  search_input: {
    backgroundColor:'#eceff1',
    padding:5,
    borderRadius:8,
  }
});
