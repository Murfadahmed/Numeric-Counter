let Btn = document.querySelector('.Btn')


let increamentBtn = document.querySelector('.increament')

let resettBtn = document.querySelector('.reset')

let decreamentBtn = document.querySelector('.decreament')

let heading = document.querySelector('#heading')

let Numb = 0;

increamentBtn.addEventListener('click',()=>{
Numb = ++Numb;
heading.textContent = Numb
if(heading.textContent > 0 ){

    heading.style.color = "green";
}

// console.log(Numb)
})
decreamentBtn.addEventListener('click',()=>{
Numb = --Numb;
heading.textContent = Numb
if(heading.textContent < 0 ){

    heading.style.color = "red";
}

// console.log(Numb)
})
resettBtn.addEventListener('click',()=>{
Numb = 0;
heading.textContent = Numb
heading.style.color = "black";
// console.log(Numb)
})