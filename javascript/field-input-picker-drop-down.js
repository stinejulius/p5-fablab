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
    if (inputOuterHTML.getElementsByClassName("drop-down-education-fields-list").length > 0) {
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

            InsertFieldName(fieldName)
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
function InsertFieldName(fieldName) {

    // Find class "field-input-text-box" inside of inputOuterHTML, and store it in inputBoxHTML variable
    const inputBoxHTML = inputOuterHTML.getElementsByClassName("field-input-text-box")[0];

    // Find class "field-input-text-box-p" inside of inputBoxHTML, and store in inputTextHTML variable
    const inputTextHTML = inputBoxHTML.getElementsByClassName("field-input-text-box-p")[0];

    // Replace the inner HTML of the variable inputTextHTML with FieldName (p the user clicks on)
    inputTextHTML.innerHTML = fieldName;

    // Adds class to inputBoxHTML -> to style it in CSS
    inputBoxHTML.classList.add("field-name-selected");



    // Remove "active" class from "field-content" elements
    RemoveActiveFromAllFieldContent();

    // Get fieldContentNumber and add "active" class to the correct "field-content" element.
    const fieldContentNumber = getFieldContentNumberFromEducationFieldName(fieldName);
    AddActiveToFieldContent(fieldContentNumber)



    // Calls the function that removes the educationFieldsContainerHTML
    CloseEducationFieldsContainer();
}


/**
 * FUNCTION | Function removes educationFieldsContainerHTML
 */
function CloseEducationFieldsContainer() {

    // Find the class "drop-down-education-fields-list", and store it in the variable EducationFieldsContainerHTML
    const educationFieldsContainersHTML = document.getElementsByClassName("drop-down-education-fields-list")[0];

    // Calls the function
    educationFieldsContainersHTML.remove();
}


/**
 * EVENT LISTENER | Listens for a click on the whole document (html-body)
 */
document.addEventListener("click", function (event) {
    OnDocumentClick(event);
})


/** 
 * FUNCTION | Runs with every click on the document
 */
function OnDocumentClick(event) {
    const EducationFieldsContainersHTML = document.getElementsByClassName("drop-down-education-fields-list")[0];

    // If th educationFieldsContainersHTML is undefined, it means that it will not open
    if (EducationFieldsContainersHTML === undefined) {
        return;
    }

    // If event.target is either the EducationFieldsContainersHTML or the inputOuterHTML, then we don't do anything
    // Event.target is the Element that has been clicked on.
    if (EducationFieldsContainersHTML.contains(event.target) || inputOuterHTML.contains(event.target)) {
        return;
    }

    // Calls the function that removes the EducationFieldsContainersHTML
    CloseEducationFieldsContainer();
}


/** 
 * FUNCTION | Function removes 'active' class from all 'field-content' elements
 */
function RemoveActiveFromAllFieldContent() {

    // Create variable that contains all "field-content" elements (array)
    const fieldContentHTMLs = document.getElementsByClassName("field-content");

    // Loop through all "field-content" elements
    for (let i = 0; i < fieldContentHTMLs.length; i++) {
        const fieldContentHTML = fieldContentHTMLs[i];

        // Remove "active" class from "field-content" element
        fieldContentHTML.classList.remove("active");
    }
}


/** 
 * FUNCTION | Function adds 'active' class to specific 'field-content' element
 */
function AddActiveToFieldContent(fieldContentNumber) {
    const fieldContentHTML = document.getElementById("field-content-" + fieldContentNumber)

    fieldContentHTML.classList.add("active");
}


/** 
 * FUNCTION | Function converts a educationFieldName into a fieldContentNumber
 */
function getFieldContentNumberFromEducationFieldName(educationFieldName) {

    // Loop through all educationFieldNames (array)
    for (let i = 0; i < educationFieldNames.length; i++) {
        const educationFieldNameFromArray = educationFieldNames[i];

        // If the parameter: educationFieldName is the same as the educationFieldNameFromArray
        if (educationFieldName === educationFieldNameFromArray) {
            return i;
        }
    }

    // If we go through all educationFieldNames without finding a match, then default to 0
    return 0;
}