// Natasha Liltorp

console.log("the site is working");

// Henter alle elementer med klassen praktisk-info-box-overskrift (overskrifterne og pilene)
let dropdowns = document.getElementsByClassName("praktisk-info-box-overskrift");

// Opretter en klik funktion. Næste linje finder boksen med indhold, som skal komme frem når man klikker
function onDropdownClick(dropdown) {
    const content = dropdown.nextElementSibling; //nextElementSibling taget næste element i DOM'en (indhold i bokse)
    
    const arrow = dropdown.querySelector(".pil"); //finder pilen
    const isOpen = content.style.display === "block"; // tjekker om dropdown er åben (kigger på displat stil af indhold), hvis display er block er den åben

    document.querySelectorAll(".praktisk-info-box-content").forEach((box) => {
        box.style.display = "none";
    }); //skjuler alle content bokse
    document.querySelectorAll(".pil").forEach((img) => {
        img.classList.remove("rotated");
    }); // fjern 'rotated' klassen fra alle pile (hvilket får dem til at vende tilbage til den oprindelige position)

    // hvis content bokse ikke er åbne, så gør nedenstående at de åbner
    if (!isOpen) {
        content.style.display = "block"; //content bokse bliver synlige
        arrow.classList.add("rotated"); //roterer pilen når den åbner og lukker
    }
}

// hver dropdown får tilføjet en event listener, det "lytter" efter klik
for (let dropdown of dropdowns) {
    //når der bliver klikket på en dropdown, så kør klik funktionen
    dropdown.addEventListener("click", function () {
        onDropdownClick(dropdown); //her kaldes der på funktionen og overføres den klikkede dropdown
    });
}