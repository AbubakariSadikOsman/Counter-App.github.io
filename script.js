/* 
const count = document.querySelector(".count");
const add = document.querySelector(".add");
const substract = document.querySelector(".substract");
const resetCount = document.querySelector(".reset");

resetCount.addEventListener("click", ()=> {
    count.textContent = 0;
    count.style.color = "#fff";
});

add.addEventListener("click", () => {
    count.textContent++;
    if (count.textContent > 0)
        count.style.color = "yellow";
});

substract.addEventListener("click", () => {
    count.textContent--;
    if (count.textContent < 0)
        count.style.color = "#ff4500";
});
*/


// Alternatively
const counter = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

function setColor() {
    if (counter.innerHTML < 0)
        counter.style.color = "#ff4500";
    else if (counter.innerHTML > 0)
        counter.style.color = "yellow";
    else 
        counter.style.color = "#fff";
}

buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("add")) {
        counter.innerHTML++;
        setColor();
    }
        
    if (event.target.classList.contains("substract")) {
        counter.innerHTML--;
        setColor();
    }
    if (event.target.classList.contains("reset")) {
        counter.innerHTML = 0;
        setColor();
    }
})