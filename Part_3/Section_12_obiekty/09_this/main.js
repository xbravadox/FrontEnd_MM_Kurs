const btns = document.querySelectorAll('button');
const prg = document.querySelector('.text')

for (const btn of btns){
    btn.addEventListener('click', function (){
        prg.innerText = this.innerText;
    })
} 
