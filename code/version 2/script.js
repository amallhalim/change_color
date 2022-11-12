let img =document.querySelectorAll("img")
let big_img =document.querySelector(".big_img img ")
let body =document.querySelector("body")

console.log(img)
console.log(big_img)
function change_img(source) {
    big_img.src = source;
    console.log(source)

}

function changcolor(color) {
    body.style.backgroundColor=color;
    console.log(color)
}