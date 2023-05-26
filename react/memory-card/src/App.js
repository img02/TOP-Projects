import "./App.css";
import { useState } from "react";
import Card from "./components/card";

const App = () => {
    const [score, setScore] = useState(0);
    const [cardHistory, setCardHistory] = useState([]);
    const images = (() => {
        // call cat api - from own file
        // which returns array of cat image data

        const ex1 = { src: "link1", id: "id1", altText: "alt1" };
        const ex2 = { src: "link2", id: "id2", altText: "alt2" };
        const ex3 = { src: "link3", id: "id3", altText: "alt3" };
        const ex4 = { src: "link4", id: "id4", altText: "alt4" };
        const ex5 = { src: "link5", id: "id5", altText: "alt5" };
        const ex6 = { src: "link6", id: "id6", altText: "alt6" };
        const ex7 = { src: "link7", id: "id7", altText: "alt7" };
        const ex8 = { src: "link8", id: "id8", altText: "alt8" };
        return [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8];
    })();

    const increaseScore = () => {
        setScore(score + 1);
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
        resetScore();
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
    };

    return (
        <div>
            <p>Score: {score}</p>
            <Card images={images} cardClicked={cardClicked} />
        </div>
    );
};

export default App;
