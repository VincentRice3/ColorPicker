const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];;

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hex = "#"
    hex = getHexColor(hex);
    document.body.style.transitionDuration = "500ms";
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
});

const getHexColor = (hex) =>{
    for(i= 0; i<6; i++)
    {
        hex += hexValues[getRandomNumber()];
    }
    console.log(hex);
    return hex;
}

const getRandomNumber = () =>{
    return Math.floor(Math.random() * hexValues.length);
}