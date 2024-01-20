import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const NumberFactForm = () => {
  const [number, setNumber] = useState('');
  const [fact, setFact] = useState('');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${6}/21/date`,
      params: {
        fragment: 'true',
        json: 'true',
      },
      headers: {
        'X-RapidAPI-Key': 'f0196a86d4mshe3c28233b0faf7bp181186jsn9dc2badd56cb',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setFact(response.data.text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a number"
        value={number}
        onChangeText={(text) => setNumber(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
      />
      <Button title="Get a Fact on a particular number" onPress={fetchData} />

      {fact !== '' && <Text>{fact}</Text>}
    </View>
  );
};

export default NumberFactForm;
