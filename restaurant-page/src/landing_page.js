/**
 *  Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is.
 */

// https://www.pexels.com/photo/photo-of-poach-egg-on-top-of-asparagus-4050981/
import createPage from "./page_creator";
import img from "./images/landing_page/image1.png";

const headline = "a restaurant, food is good.";

// const imgUrl = "./images/landing_page/image1.png";
/* const copyText =
    "<blockquote>This is a good restaurant, I swear.</p>" +
    "I'm not just saying this because there's a gun to my head, pinky promise.</p>" +
    "Please eat here, (help me). Haha, it's not like I'm under threat and lying to you (wink wink, sos)</blockquote>";
    */

const copyText =
    "<blockquote>life needs food.</p></p>" +
    "food needs not life.</p>" +
    "the meaning?</p>" +
    "i do not know lmao.</blockquote>";
const baseId = "landing_page";

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
