/**
 *  Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is.
 */

// https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/
import img from "./images/landing_page/image1.png";

const headline = "A wonderful restaurant, food is good! (no refunds tho)";

// const imgUrl = "./images/landing_page/image1.png";
const copyText =
    "This is a good restaurant, I swear. I'm not just saying this because there's a gun to my head, pinky promise. Please eat here, (help me). Haha, it's not like I'm under threat and lying to you (wink wink, sos)";
const baseId = "landing_page";

export default function loadPage() {
    const div = document.querySelector("#content");
    // const div = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = headline;
    heading.classList.add("heading");
    heading.id = `${baseId}_heading`;

    const image = new Image();
    image.src = img;
    image.classList.add("main_image");
    image.id = `${baseId}_id`;

    // Temp sizing
    image.width = 800;
    image.height = 450;

    const text = document.createElement("div");
    text.textContent = copyText;
    text.classList.add("main_text");
    text.id = `${baseId}_text`;

    div.append(heading, image, text);
}
