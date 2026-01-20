import { useState } from "react";
import { createRoot } from "react-dom/client";

const FavoriteColor = () => {
    const [color, setColor] = useState("Red");
    const [brand, setBrand] = useState("Toyota");
    const [model, setModel] = useState("");
    const [year, setYear] = useState(2020);
    const [price, setPrice] = useState(20000);

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const updateColor = () => {
        setCar(previousState => {
            return {
                ...previousState,
                color: "blue"
            }
        });
    }
    return (
        <>
            <h1>My favorite color is {color}</h1>
            <h2>My car is a {year} {brand} {model} worth ${price}</h2>
            <button onClick={() => setBrand("Ford")}>Ford</button>
            <button onClick={() => setBrand("Corolla")}>Corolla</button>
            <button onClick={() => setColor("Blue")}>Blue</button>
            <button onClick={() => setColor("Green")}>Green</button>
            <button onClick={() => setColor("Red")}>Red</button>
            <p>it is a {car.color} {car.brand} {car.model}</p>
            <button onClick={updateColor}>Change Color</button>
        </>
    );
}

export default FavoriteColor;