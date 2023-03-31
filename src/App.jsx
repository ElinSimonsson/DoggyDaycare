import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Catalog from './components/Catalog'

function App() {
  const [data, setData] = useState(null);
  const apiUrl = 'https://api.jsonbin.io/v3/b/642585f1ace6f33a2200b1e5';

  useEffect(() => {
    fetch(apiUrl)
    .then((response)=> response.json())
    .then((actualData)=> {
      setData(actualData);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    
    <div>
      <Catalog data = {data}/>
    </div>
  )
}

export default App
