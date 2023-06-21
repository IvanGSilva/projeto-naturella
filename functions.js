function menuShow(){
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-outline.svg"
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close-outline.svg"
    }
}