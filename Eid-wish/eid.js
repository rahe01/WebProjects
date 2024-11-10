function sendEidWish() {
    var eidWishes = ["Taqabbalallahu minna wa minkum.",
    "May this Eid bring joy and love to your heart.",
    "Eid Mubarak!"];
    console.log(eidWishes[Math.floor(Math.random() * eidWishes.length)]);
}
sendEidWish();