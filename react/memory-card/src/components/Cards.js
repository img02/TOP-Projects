import "../assets/Cards.css";

const Cards = ({ images, cardClicked }) => {
    //
    //console.log(images);
    return (
        <div className="cards-main-div">
            <div className="cards-grid-div">
                {images.length > 0 &&
                    images.map((i) => (
                        <div
                            key={i.id}
                            onClick={() => cardClicked(i.id)}
                            className="card-image-div"
                        >
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
        </div>
    );
};
export default Cards;
