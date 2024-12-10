// Hent elementer fra DOM
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content"); // Pop-up indholdet (ikke baggrunden)
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupDate1 = document.getElementById("popup-date-1");
const popupDate2 = document.getElementById("popup-date-2");

// Funktion til at vise pop-up
function showPopup(title, text, date1, date2) {
    // Opdater pop-up'ens indhold
    popupTitle.textContent = title;
    popupText.textContent = text;
    popupDate1.textContent = date1;
    popupDate2.textContent = date2;

    // Vis pop-up'en
    popup.style.display = "flex";  // Brug 'flex' for at centrere pop-up'en
}

// Klik event på Innovation og Idégenerering //
document.getElementById("innovation-og-idegenerering-box").addEventListener("click", function () {
    showPopup(
        "Innovation og idégenerering",
        "Lær at skabe og udvikle dine nye idéer. Har du brug for nogen at sparre med når det kommer til idégenerering? Eller mangler du lidt inspiration og vejledning omkring innovation? Med vores kursus i Innovation og idégenerering, får du en masse inspiration fra tidligere projekter og kyndig vejledning i nytænkning.",
        "08/02 - Kl. 10:00-12:30",
        "15/04 - Kl.13:30-15:30"
    );
});

// Klik event på laserskærer boksen
document.getElementById("laserskærer-box").addEventListener("click", function () {
    showPopup(
        "Laserskærer",
        "Lær at lave fede laserskårne projekter! Med vores laserkærer kan du skabe fede designs, alt sammen skåret med laser. På kurset lærer du at designe din fil i Adobe Illustrator, så laserskæreren kan forstå den. Du får kyndig vejledning i både programmet og i selve maskinen, så du fremover kan benytte maskinen på egen hånd. Indlæs dit design og se laseren udføre arbejdet.",
        "10/12 - Kl. 9:00-11:30",
        "17/12 - Kl. 12:15-15:00"
    );
});

// Klik event på 3D-print boksen
document.getElementById("3dprint-box").addEventListener("click", function () {
    showPopup(
        "3D-Printer",
        "Har du en 3D-figur du gerne vil have skabt fysisk? På dette kursus lærer du 3D-printens kunst. Har du brug for at skabe din 3D figur i fysisk form? Vi guider dig hele vejen fra idé til færdigt produkt, og vil glæde os til at være med hele vejen. Se dato for kurser herunder",
        "04/01 - Kl. 12:15-15:00",
        "20/02 - Kl. 09:00-11:30"
    );
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