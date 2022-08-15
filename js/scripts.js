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

const img = document.createElement("img");
img.after(p1)
img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
img.setAttribute("width", "50%");

const secondh1 = document.createElement("h1");
secondh1.append("Facts about the Multicolored Tanager");
secondh1.after(img);

const ul = document.createElement("ul");
const firstLi = document.createElement("li");
const secondLi = document.createElement("li");
ul.after(secondh1);
firstLi.append("It is endemic to the mountains of Colombia.");
secondLi.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
ul.append(firstLi);
secondLi.after(firstLi);

const h2 = document.createElement("h2");
h2.append("Source");
h2.after(ul);

const a = document.createElement("a");
a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicolored_tanager");
a.append("Wikipedia");
a.after("h2");

document.body.append(firsth1, p1, img, secondh1, ul, firstLi, secondLi, h2, a)
})
