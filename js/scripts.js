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
//img.append("src='https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900' alt='This is an image of a Multicolored Tanager bird from birdsoftheworld.org' style='width:50%'")
document.body.append(firsth1, p1, img)
})
