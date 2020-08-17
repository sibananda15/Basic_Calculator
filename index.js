let inputBox=document.getElementById('inputBox')
let digit=document.querySelectorAll('#digit')
let displayValue="";
for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click',(e)=>{
      let buttonText=e.target.innerText;
        console.log(buttonText)
        if(buttonText=="x"){
            buttonText="*";
            displayValue+=buttonText
            inputBox.value =displayValue
        }else if (buttonText=="C") {
            displayValue=""
            inputBox.value=displayValue;

          } else if (buttonText=="=") {
            
            inputBox.value =eval(displayValue)
          }
          else {
            displayValue+=buttonText
            inputBox.value=displayValue
          }
       
    })
    
    
}