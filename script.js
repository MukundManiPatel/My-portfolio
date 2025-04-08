let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(itom of button){
    item.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screen.value += buttonText;
            

        }
        else if (buttonText == 'c'){
            screen.value += "";
        }
        else if (buttonText == '='){

        }
    })
}