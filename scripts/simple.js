const colors = ["red", "blue", "green", "yellow"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    console.log(randomNumber);
    color.textContent = colors[randomNumber];
});

const getRandomNumber = () =>{
    return Math.floor(Math.random() * colors.length);
}