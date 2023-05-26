import { render } from "@testing-library/react";

const Card = ({ images, cardClicked }) => {
    //
    //console.log(images);
    return (
        <div>
            {images.map((i) => (
                <div key={i.id} onClick={() => cardClicked(i.id)}>
                    {i.id}
                    <img
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
export default Card;
