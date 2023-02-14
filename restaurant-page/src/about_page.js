/**
 *  About Page
 */

// https://www.pexels.com/photo/egg-and-vegetable-dish-2067473/
import createPage from "./page_creator";
import img from "./images/about_us/image1.png";

const headline = "who are we? why are we? what are we? where are we?";
const copyText =
    "<blockquote>food. what is it?</br>" +
    "<i>nourishment.</i></p>" +
    "what is nourishment?</br>" +
    "<i>nuture of the soul</i>.</p>" +
    "what is nuture, but a warm hug from a mother to a child.</br>" +
    "<i>let our food hug you. or -uh -uhm -uh, your stomach?</blockquote></i>";
const baseId = "about_page";

export default function loadPage() {
    createPage(
        headline,
        `${baseId}_heading`,
        img,
        `${baseId}_id`,
        copyText,
        `${baseId}_text`
    );
}
