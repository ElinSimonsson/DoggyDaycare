import { useState, useEffect } from "react";

const Catalog = (props) => {
  //let dogs = JSON.parse(localStorage.getItem("dogs"));

  const SHOW_ALL_DOGS = "Show all dogs";
  const SHOW_PRESENT_DOGS = "Show only present dogs";
  const SHOW_ABSENT_DOGS = "Show only absent dogs";

  const [dogsToShow, setDogsToShow] = useState([]);
  const [selectedOption, setSelectedOption] = useState(SHOW_ALL_DOGS);

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
    <section key={i} className="dog-section" onClick={() => handleDogClick(dog)}>
      <img className="dog-img" src={dog.img} alt={`A pic of ${dog.name}`} />
      <div>
        <p className="dog-name">
          {" "}
          <b>Name:</b> {dog.name}{" "}
        </p>
        {dog.present ? (
          <p className="present-true">{dog.name} is currently here</p>
        ) : (
          <p className="present-false">{dog.name} is currently away</p>
        )}
      </div>
    </section>
  ));

  return (
    <div>
      <section className="options">{options}</section>
      <div className="dogs-container">{dogItems}</div>
    </div>
  );
};

export default Catalog;
