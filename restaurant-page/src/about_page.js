/**
 *  About Page
 */

// https://www.pexels.com/photo/egg-and-vegetable-dish-2067473/
import img from "./images/about_us/image1.png";

const headline = "Who are we? Why are we? What are we? Where are we?";
const copyText =
    "<blockquote>Food. What is it?</br>" +
    "<i>Nourishment.</i></p>" +
    "What is nourishment?</br>" +
    "<i>Nuture of the soul</i>.</p>" +
    "What is nuture, but a warm hug from a mother.</br>" +
    "<i>Buy our food so your mother will love you.</blockquote></i>";
const baseId = "about_page";

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
    image.width = 550;
    image.height = 800;

    const text = document.createElement("div");
    text.innerHTML = copyText;
    text.classList.add("main_text");
    text.id = `${baseId}_text`;

    div.append(heading, image, text);
}
