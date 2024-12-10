// Stine Julius
// Field input picker drop down - mobile (Fagområde vælger)
/**
 * Viariabler med starter med småt
 * Funktioner starter med stort
 */


// Check if JavaScript is working in console
console.log("The site is working");

/**
 * GLOBAL VARIABLES
 */
const inputOuterHTML = document.getElementById("field-box-outer"); //henter elementet med id'et "" fra HTML koden.
const educationFieldNames = [
    "Business og digital udvikling",
    "Byggeri og teknologi",
    "Ledelse og administration",
    "Pædagogik og undervisning",
    "Sundhed og socialt arbejde"
];


/**
 * EVENT LISTENER | Listens after a click on inputOuterHTML, calls function FoldOutEducationFieldNames (starts)
 */
inputOuterHTML.addEventListener("click", () => {
    FoldOutEducationFieldNames()
})


/**
 * FUNCTION | Function starts when user clicks on inputOuterHTML
 */
function FoldOutEducationFieldNames() {
    // When trying to open the input picker, first we check if the input picker drop down is already open
    if (inputOuterHTML.getElementsByClassName(drop-down-education-fields-list).length > 0) {
        return;
    } // If it's already open, the function stops here. If not, it goes on. 

    // A div element is created
    const educationFieldsContainerHTML = document.createElement("div");

    // The div element gets a class added to it
    educationFieldsContainerHTML.classList.add("drop-down-education-fields-list");


    // For loop through the array 
    for (let i = 0; i < educationFieldNames.length; i++) {

        // fieldName created to get the current item from the array
        const fieldName = educationFieldNames[i];

        // p tag is created
        const fieldNameHTML = document.createElement("p");

        // The current item from array is put into the p tag
        fieldNameHTML.innerHTML = fieldName;



        // A p tag inside the div is listening for a click to start the function
        fieldNameHTML.addEventListener("click", (event) => {
            event.stopPropagation(); //Don't give click event to other eventListeners

            insertFieldName(fieldName)
        })

        // The p tags are inserted in the div, one after each other (appendChild = is inserted in the end efter the last one)
        educationFieldsContainerHTML.appendChild(fieldNameHTML);
    }

    // The div is inserted in inputHTML after the last content
    inputOuterHTML.appendChild(educationFieldsContainerHTML);
}


/**
 * FUNCTION | Function starts when user clicks on fieldNameHTML
 */
