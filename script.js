let player = document.querySelector("#player");
let cancel = document.querySelector("#cancel")
let trans = document.querySelector("#trans")

player.addEventListener('click', ()=> {
    trans.classList.remove('hidden')
})

cancel.addEventListener('click', ()=> {
    trans.classList.add('hidden')
})