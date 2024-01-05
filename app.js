let hexColordisplay = document.getElementById("hexColorCode");
let button = document.getElementById("btn");

button.addEventListener("click",()=>{
let acceptHex = changeColor();

hexColordisplay.innerHTML = acceptHex;
document.body.style.backgroundColor = acceptHex;

})


function changeColor () {

    
        // Generate a random number and convert it to a hexadecimal string
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
      
        // Ensure the string has 6 characters by adding leading zeros if necessary
        const hexColor = "000000".slice(0, 6 - randomColor.length) + randomColor;
      
        // Return the generated hex color code
       return  '#' + hexColor;
      }
      

      
      
      
      

