import React, { useState } from 'react';
import { View, TextInput, Button, Text,StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const api1Response = await fetch('API1_URL');
      const api1Data = await api1Response.json();

      const api2Response = await fetch('API2_URL');
      const api2Data = await api2Response.json();

      const api3Response = await fetch('API3_URL');
      const api3Data = await api3Response.json();

      const api4Response = await fetch('API4_URL');
      const api4Data = await api4Response.json();

      const api5Response = await fetch('API5_URL');
      const api5Data = await api5Response.json();

      const combinedResults = [...api1Data.results, ...api2Data.results, ...api3Data.results, ...api4Data.results, ...api5Data.results];
      setResults(combinedResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={ styles.container }>
      <TextInput
        placeholder="Ingrese una palabra o frase"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {results.slice(0, 15).map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

export default SearchScreen;