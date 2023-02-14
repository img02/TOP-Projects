export default function createPage(
    headline,
    headlineId,
    imgSrc,
    imgId,
    copyText,
    copyTextId
) {
    const div = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = headline;
    heading.classList.add("heading");
    heading.id = headlineId;

    const imageAndTextDiv = document.createElement("div");
    imageAndTextDiv.id = "image_text";

    const image = new Image();
    image.src = imgSrc;
    image.classList.add("main_image");
    image.id = imgId;

    const textDiv = document.createElement("div");
    const text = document.createElement("div");
    text.innerHTML = copyText;
    text.classList.add("main_text");
    textDiv.classList.add("main_text_div");
    text.id = copyTextId;

    textDiv.append(text);

    imageAndTextDiv.append(image, textDiv);

    div.append(heading, imageAndTextDiv);
}
