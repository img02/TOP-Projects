import { render } from "@testing-library/react";
import "../assets/cards.css";

const Cards = ({ images, cardClicked }) => {
    //
    //console.log(images);
    return (
        <div>
            {images.length > 0 &&
                images.map((i) => (
                    <div
                        key={i.id}
                        onClick={() => cardClicked(i.id)}
                        className="card-image-div"
                    >
                        {i.id}
                        <img
                            className="card-image"
                            src={i.src}
                            alt={i.alt}
                            key={i.id}
                            onClick={() => cardClicked(i.id)}
                        ></img>
                    </div>
                ))}
        </div>
    );
};
export default Cards;
