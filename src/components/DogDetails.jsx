import './dogDetails.css'
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
        <div className="dogDetails">
            <h1>{dog.name}</h1>
            <div className="container">
       
                <section>
                    <img src={dog.img} alt={`A pic of ${dog.name}`} />   
                </section>
        
                <section className="dog-info-sect">
                    <section className="dog-title">
                        <p>Details :</p>
                    </section>

                    <p><b>Name:</b> {dog.name}</p>
                    <p><b>Age:</b> {dog.age}</p>
                    <p><b>Sex:</b> {dog.sex}</p>
                    <p><b>Breed:</b> {dog.breed}</p>
                    <p><b>ChipNumber:</b> {dog.chipNumber}</p>

                    <section className="owner-title">
                        <p>Owner:</p>
                    </section>
                       
                    <p><b>Name:</b> {dog.owner.name}</p>
                    <p><b>Last name:</b> {dog.owner.lastName}</p>
                    <p><b>Phone number:</b> {dog.owner.phoneNumber}</p>
                       
                    
       
                </section>
            </div>
       </div>
    );
}

export default DogDetails;