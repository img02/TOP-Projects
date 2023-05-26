import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Cats from "./Cats";

const App = () => {
    const [score, setScore] = useState(0);
    const [cardHistory, setCardHistory] = useState([]);
    const [images, setImages] = useState([]);
    const [lost, setLost] = useState(false);
    const [hiScore, setHiScore] = useState(0);

    useEffect(() => {
        //Cats.getImages().then(setImages);
        async function fetchData() {
            const images = await Cats.getImages();
            setImages(images);
        }
        fetchData();
    }, []);

    const increaseScore = () => {
        setScore(score + 1);
        setLost(false);
    };
    const resetScore = () => {
        setScore(0);
        setCardHistory([]);
    };
    const gameLost = () => {
        var finalScore = score;
        //show popup or modal component pop up?
        // "game over!"
        // "you scored: {finalScore}"
        console.log(`Game Over! :${finalScore}`);
        updateHighScore();
        resetScore();
        setLost(true);
    };
    const updateHighScore = () => {
        if (hiScore < score) setHiScore(score);
    };

    const cardClicked = (id) => {
        if (cardHistory.some((c) => c === id)) {
            gameLost();
            console.log("clicked b4");
        } else {
            setCardHistory([...cardHistory, id]);
            increaseScore();
            console.log(JSON.stringify(cardHistory));
        }
        setImages(shuffle(images));
    };

    function shuffle(array) {
        // shuffle code from: https://stackoverflow.com/a/2450976
        let currentIndex = array.length;
        let randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex]
            ];
        }

        return array;
    }

    return (
        <div className="main-div">
            <p className={lost ? "score-lost" : "score"}>Score: {score}</p>
            <Cards images={images} cardClicked={cardClicked} />
            <p>Hi-Score: {hiScore}</p>
        </div>
    );
};

export default App;
