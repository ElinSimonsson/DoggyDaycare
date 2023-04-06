import './catalog.css'
import { useState, useEffect } from "react";

const Catalog = (props) => {

  const SHOW_ALL_DOGS = "Show all dogs";
  const SHOW_PRESENT_DOGS = "Show only present dogs";
  const SHOW_ABSENT_DOGS = "Show only absent dogs";

  const [dogsToShow, setDogsToShow] = useState([]);
  const [selectedOption, setSelectedOption] = useState(SHOW_ALL_DOGS);

  useEffect(() => {
    props.setHeaderTitle("test");
   }, []);

  useEffect(() => {
    const dogs = JSON.parse(localStorage.getItem('dogs'));

    if (dogs) {
      if (selectedOption === SHOW_PRESENT_DOGS) {
        setDogsToShow(dogs.record.filter((dog) => dog.present));
      } else if (selectedOption === SHOW_ABSENT_DOGS) {
        setDogsToShow(dogs.record.filter((dog) => !dog.present));
      } else {
        setDogsToShow(dogs.record);
      }
    }
  }, [selectedOption]);

  const handleDogClick = (dog) => {
    props.setSelectedDog(dog);
  };

  const handleDecided = (option) => {
    setSelectedOption(option);
  };

  const options = [SHOW_ALL_DOGS, SHOW_PRESENT_DOGS, SHOW_ABSENT_DOGS].map(
    (option, i) => (
      <p className="option" key={i}>
        <label>
          <input
            type="radio"
            name="option"
            defaultChecked={option === SHOW_ALL_DOGS}
            onClick={() => handleDecided(option)}
          />{" "}
          {option}
        </label>
      </p>
    )
  );

  const dogItems = dogsToShow && dogsToShow.map((dog, i) => (
  
    <section key={i} className={`dog-section${dog.present ? " present" : " absent"}`} 
    onClick={() => handleDogClick(dog)}>
      <img className="dog-img" src={dog.img} alt={`A pic of ${dog.name}`} />
      <div className="dog-card-info-container">
        <p><b>Name:</b> {dog.name}</p>
        <p><b>Breed:</b> {dog.breed}</p>
        <p><b>Owner:</b> {dog.owner.name} {dog.owner.lastName}</p>
        
      </div>
    </section>
  ));

  return (
    <div className="catalog">
      <h1>The Doggy Daycare</h1>
      <section className="options">{options}</section>
      <div className="dogs-container">{dogItems}</div>
    </div>
  );
};

export default Catalog;
