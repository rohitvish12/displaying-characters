import {Box} from '@material-ui/core';
import Header from './components/Header'
import React, {useState, useEffect} from 'react';
import Character from './components/Character'

import {fetchData} from './server/api';

const App = () => {

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(()=> {
    const getData = async () => {
      const result = await fetchData(text);
      setData(result.data);
      console.log(result);

    }
    getData();
  }, [text]);

  const getText = (text) => { 
    setText(text);
    console.log(text);
  }


  return (
    <Box>
      <Header getText={getText} />
      <Character data={data} />
    </Box>
  );
}

export default App;
