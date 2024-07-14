const perfil = document.querySelector('.perfil')
const MenuPerfil = document.querySelector('.menuPerfil') 

perfil.onclick = () => {
    MenuPerfil.classList.toggle('ativo')
}