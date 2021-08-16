const Input = document.querySelectorAll("input");
const Block = document.querySelector(".Block");
const ChangeColorBtn = document.querySelector(".ChangeColorBtn")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

ChangeColorBtn.addEventListener('click', () => {
    Block.style.background = getRandomColor();
})  

Input.forEach(Element => {
    Element.addEventListener('input', (e) => {
        if(isNaN(Number(e.target.value))){
            console.log("Not Number")
        }
        else{
            Element.classList[0] == "InputWidth" ? 
                Block.style.width = e.target.value + "px":
                Block.style.height = e.target.value + "px"

        }
    })
})


