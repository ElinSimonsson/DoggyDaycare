import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Catalog from './components/Catalog'

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const apiUrl = 'https://api.jsonbin.io/v3/b/642585f1ace6f33a2200b1e5';

  useEffect(() => {
    fetch(apiUrl)
    .then((response)=> response.json())
    .then((actualData)=> {
      localStorage.setItem('dogs', JSON.stringify(actualData));
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    if (selectedDog!= null) {
      console.log(selectedDog)
    }
    
  }, [selectedDog]);

  return (
    <div>
      <Catalog setSelectedDog={setSelectedDog}/>
    </div>
  )
}

export default App
