import landingPage from "./landing_page";
import aboutPage from "./about_page";
import menuPage from "./menu_page";
import "./index.css";

const menuId = "menu";
const menuTabItem = "menu_item";

// module for nav bar
const navigation = (() => {
    const contentDiv = document.getElementById("content");
    const landingTab = document.createElement("div");
    const aboutTab = document.createElement("div");
    const menusTab = document.createElement("div");

    function loadNavBar() {
        // draw html menu
        const body = document.querySelector("body");
        const nav = document.createElement("nav");
        nav.id = menuId;

        landingTab.classList.add(menuTabItem);
        aboutTab.classList.add(menuTabItem);
        menusTab.classList.add(menuTabItem);

        landingTab.innerText = "home.";
        aboutTab.innerText = "about.";
        menusTab.innerText = "menu.";

        nav.append(landingTab, menusTab, aboutTab);
        body.prepend(nav);
    }

    function clearPage() {
        contentDiv.innerHTML = "";
    }

    function loadPage(pageFn) {
        clearPage();
        pageFn();
    }
    function subscribeMenuItems() {
        landingTab.addEventListener("click", () => {
            loadPage(landingPage);
        });

        aboutTab.addEventListener("click", () => {
            loadPage(aboutPage);
        });

        menusTab.addEventListener("click", () => {
            loadPage(menuPage);
        });
    }

    const startup = () => {
        loadNavBar();
        subscribeMenuItems();
        // default to landing page
        landingPage();
    };

    return { startup };
})();

navigation.startup();
