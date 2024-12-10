// Hent elementer fra HTML-sheet
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content"); // Pop-up indholdet (ikke baggrunden)
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupDate1 = document.getElementById("popup-date-1");
const popupDate2 = document.getElementById("popup-date-2");

// Array med kursusdata
const kurser = [
    {
        id: "innovation-og-idegenerering-box",
        title: "Innovation og idégenerering",
        text: "Lær at skabe og udvikle dine nye idéer. Har du brug for nogen at sparre med når det kommer til idégenerering? Eller mangler du lidt inspiration og vejledning omkring innovation? Med vores kursus i Innovation og idégenerering, får du en masse inspiration fra tidligere projekter og kyndig vejledning i nytænkning.",
        date1: "08/02 - Kl. 10:00-12:30",
        date2: "15/04 - Kl. 13:30-15:30"
    },
    {
        id: "laserskærer-box",
        title: "Laserskærer",
        text: "Lær at lave fede laserskårne projekter! Med vores laserkærer kan du skabe fede designs, alt sammen skåret med laser. På kurset lærer du at designe din fil i Adobe Illustrator, så laserskæreren kan forstå den. Du får kyndig vejledning i både programmet og i selve maskinen, så du fremover kan benytte maskinen på egen hånd. Indlæs dit design og se laseren udføre arbejdet.",
        date1: "10/12 - Kl. 9:00-11:30",
        date2: "17/12 - Kl. 12:15-15:00"
    },
    {
        id: "3dprint-box",
        title: "3D-Printer",
        text: "Har du en 3D-figur du gerne vil have skabt fysisk? På dette kursus lærer du 3D-printens kunst. Har du brug for at skabe din 3D figur i fysisk form? Vi guider dig hele vejen fra idé til færdigt produkt, og vil glæde os til at være med hele vejen. Se dato for kurser herunder",
        date1: "04/01 - Kl. 12:15-15:00",
        date2: "20/02 - Kl. 09:00-11:30"
    }
];


// Funktion til at vise pop-up
function showPopup(title, text, date1, date2) {
    popupTitle.textContent = title;
    popupText.textContent = text;
    popupDate1.textContent = date1;
    popupDate2.textContent = date2;

    popup.style.display = "flex";  // Vis pop-up'en med flex
}

// Loop igennem kurserne og tilføj event listeners
kurser.forEach(function(kursus) {
    document.getElementById(kursus.id).addEventListener("click", function() {
        showPopup(kursus.title, kursus.text, kursus.date1, kursus.date2);
    });
});

// Klik event på pop-up'en for at lukke den (når man klikker på indholdet)
popupContent.addEventListener("click", function (event) {
    event.stopPropagation();  // Stopper eventet fra at blive videreført til pop-up baggrunden
    popup.style.display = "none"; // Luk pop-up'en
});

// Luk pop-up'en ved klik udenfor (på baggrunden)
window.onclick = function (event) {
    if (event.target === popup) {  // Hvis man klikker på baggrunden (udenfor pop-up-indholdet)
        popup.style.display = 'none';  // Skjul pop-up'en
    }
};

