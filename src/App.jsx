import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Catalog from './components/Catalog'
import { Route, Routes, useParams } from 'react-router-dom'
import Welcome from './components/Welcome'
import DogDetails from './components/DogDetails'
import { useNavigate } from 'react-router-dom'

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const apiUrl = 'https://api.jsonbin.io/v3/b/642585f1ace6f33a2200b1e5';

  let navigate = useNavigate();

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
  const params = useParams();

  useEffect(() => {
    if (selectedDog!= null) {
      console.log(selectedDog)
      const dogs = JSON.parse(localStorage.getItem('dogs'));
      const currentDogIndex = dogs.record.findIndex(dog => selectedDog.chipNumber === dog.chipNumber);
      navigate("/dogdetails/" + (currentDogIndex + 1));
      
      const currentDog = !isNaN(params.currentdog) ? Number(params.currentdog) : 1;
      console.log(currentDog);
    }
    
    
  }, [selectedDog]);


  return (
    <div>
      <Routes>
        <Route path='/' element = {
          <Welcome />
        }/>
        <Route path='/dogs' element = {
           <Catalog setSelectedDog={setSelectedDog}/>
         } />
         <Route path='/dogdetails' element = {
          <DogDetails selectedDog = {selectedDog} />
         } />
        
         <Route path='/dogdetails/:currentdog' element = {
          <DogDetails selectedDog = {selectedDog} setSelectedDog={setSelectedDog} />
         } />
      </Routes>
    </div>
  )
}

export default App
