window.addEventListener("load", function () {

const removeH1 = document.querySelector("h1");
removeH1.remove();

const firsth1 = document.createElement("h1");
const body = document.querySelector("body");
firsth1.after(body);
firsth1.append("Webpage Recreation Practice");

const p1 = document.createElement("p");
p1.after(firsth1);
p1.append("The HTML of this webpage was created with JavaScript.");
document.body.append(firsth1, p1)
})