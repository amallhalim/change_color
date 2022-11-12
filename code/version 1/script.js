// put you hand in the html element
let main_image = document.querySelector(".content .main_image") 

let container =document.querySelector(".container")




function change_images(x) {
    main_image.src=x
    
}
function change_color(color) {
    container.style.backgroundColor = color;
    main_image.style.bordercolor = color;
    console.log(color);

    
}
