import './dogDetails.css'
import { useParams, Link } from "react-router-dom";


const DogDetails = (props) => {
    const dog = props.selectedDog;
    const params = useParams();

    const dogs = JSON.parse(localStorage.getItem('dogs'));
    const currentDogIndex = dogs.record.findIndex(dog => props.selectedDog.chipNumber === dog.chipNumber);
    

    if ((params.currentdog -1) != currentDogIndex ) {
        const correctDog = dogs.record[Number(params.currentdog -1)];
        props.setSelectedDog(correctDog); 
    } 

    const Dogimage = ({img, name}) => (
        <section className='img-section'>
            <img src={dog.img} alt={`A pic of ${dog.name}`} />   
        </section>
    )

    const DogInfo = () => (
        <div>
            <p><b>Name:</b> {dog.name}</p>
            <p><b>Age:</b> {dog.age}</p>
            <p><b>Sex:</b> {dog.sex}</p>
            <p><b>Breed:</b> {dog.breed}</p>
            <p><b>ChipNumber:</b> {dog.chipNumber}</p>
        </div>
    )

    const OwnerInfo = ({owner}) => (
        <div>
            <section className="owner-title">
                <p>Owner:</p>
            </section>
                       
            <p><b>Name:</b> {owner.name}</p>
            <p><b>Last name:</b> {owner.lastName}</p>
            <p><b>Phone number:</b> {owner.phoneNumber}</p>
        </div>
    )

    const BackButton = () => (
        <Link to = "/dogs">
            <button className='back-button'>Back</button>
        </Link>
    )

    return (
        <div className="dogDetails">
            <h1>{dog.name}</h1>
            <div className= {`container present-${dog.present ? 'true' : 'false'}`}>
                <Dogimage img = {dog.img} name = {dog.name}/>
                <section className="dog-info-sect">
                    <DogInfo dog = {dog.name}/>
                    <OwnerInfo owner = {dog.owner} />     
                </section>
            </div>
            <BackButton />
       </div>
    );
}

export default DogDetails;