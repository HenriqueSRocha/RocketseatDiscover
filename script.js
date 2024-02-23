function ToggleMode(){
    //Mudar para light mode
    const html = document.documentElement
    html.classList.toggle('light')

    //trocando a imagem do perfil
    const img = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/meuavatar-light.png')
    } else {
        img.setAttribute('src', './assets/meuavatar.png')
    }
}