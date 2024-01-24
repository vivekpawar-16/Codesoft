let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == 'ans'){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'clear'){
      string = ""
      document.querySelector('input').value = string;
    }

    else if(e.target.innerHTML === 'del'){

        string = string.slice(0, -1); // Remove the last character
        document.querySelector('input').value = string;

    }

    else if (e.target.innerHTML === 'log') {
        // Calculate the base 10 logarithm
        string = Math.log10(parseFloat(string)).toString();
        document.querySelector('input').value = string;
      }


      else if (e.target.innerHTML === '√') {
        // Calculate the square root
        string = Math.sqrt(parseFloat(string)).toString();
        document.querySelector('input').value = string;
      }      

    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
