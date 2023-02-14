import createPage from "./page_creator";
import img from "./images/menu_page/image1.png";
// https://www.pexels.com/photo/shrimp-with-green-herbs-3338499/

const headline = "menu.";
const copyText =
    "<blockquote>look inward.</p></br></br>" +
    "what you desire, is.</p></br></br>" +
    "what is, you desire.</blockquote>";
const baseId = "menu_page";

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
