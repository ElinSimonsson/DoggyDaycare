import { useState } from "react";

const Catalog = (props) => {
    const [selectedDog, setSelectedDog] = useState(null);

    return (
        <div className="dogs-container">
            {props.data && props.data.record.map(({name, img, present}, i )=> (
            <section key={i} className = 'dog-section' onClick={() => setSelectedDog(i)}>
              
            <img className="dog-img" src={img} alt={`A pic of ${name}`} />
            <div>
            <p className="dog-name"> <b>Name:</b> {name} </p> 
            {present ? <p className="present-true">{name} is currently here</p> : 
            <p className="present-false">{name} is currently away</p>}
            </div>
            </section>
        ))}
        </div>
    )
}

const handleClick = (index) => {
    console.log()
}

export default Catalog;