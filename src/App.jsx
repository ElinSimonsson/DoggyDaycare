import { useEffect, useState } from 'react'
import './App.css'
import Catalog from './components/Catalog'
import Header from './components/Header'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Welcome from './components/Welcome'
import DogDetails from './components/DogDetails'
import { useNavigate } from 'react-router-dom'

function App() {
  const [selectedDog, setSelectedDog] = useState(null);
  const [headerTitle, setHeaderTitle] = useState('');
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
    }
    
  }, [selectedDog]);


  return (
    <div className='App'>
      <Header title= {headerTitle} />
      <Routes>
        <Route path='/' element = {
          <Welcome setHeaderTitle={() => setHeaderTitle("Welcome to Doggy Daycare")}/>
        }/>
        <Route path='/dogs' element = {
           <Catalog setSelectedDog={setSelectedDog} setHeaderTitle={() => setHeaderTitle("")}/>
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
