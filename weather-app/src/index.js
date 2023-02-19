import display from "./view";
import "./style.css";

/*  weather API module
    create module that is used to take in location name, returns (error, data)?
    or just returns data -- which may be null, and if null. show error msg under input box stating what is a valid input.

    functions to process json data, return current temp, hourly, weekly, averages, etc.. Whatever else the api request may return.    
*/

/* view module
    have input box -- validation, lets user input custom location

    draw default html elements -> show weekly temp as default -> 7 divs (same class) in another flex div?
*/

display.startup();
