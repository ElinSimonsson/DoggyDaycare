import { useParams } from "react-router-dom";


const DogDetails = (props) => {
    const dog = props.selectedDog;

    const params = useParams();

    const dogs = JSON.parse(localStorage.getItem('dogs'));
    const currentDogIndex = dogs.record.findIndex(dog => props.selectedDog.chipNumber === dog.chipNumber);
    

    if ((params.currentdog -1) != currentDogIndex ) {
        const correctDog = dogs.record[Number(params.currentdog -1)];
        props.setSelectedDog(correctDog); 
    } 

    return (
       <div className="dog-details">
        <img className="dog-details-img" src={dog.img} alt={`A pic of ${dog.name}`} />
        <section className="dog-details-section">
        {dog.name}
        {dog.chipNumber}
        </section>
       
       
       </div>
    );
}

export default DogDetails;