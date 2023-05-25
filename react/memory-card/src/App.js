import "./App.css";
import { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={increaseCount}>Click me!</button>
        </div>
    );
};

export default App;
