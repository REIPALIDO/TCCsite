var MenuItem = document.querySelectorAll('.itemMenu')

function selectLink(){
    MenuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//expandir menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menuLateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})