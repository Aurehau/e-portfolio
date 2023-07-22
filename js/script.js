const prpo = document.querySelector('.apropos');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 40){
        document.querySelector("main>div:nth-child(2)").classList.add("scroll");
        document.querySelector(".photo").classList.add("grandephoto");
        document.querySelector("h3").classList.add("visible");
        document.querySelector(".texte").classList.add("txtvisible");
        document.querySelector("h2").classList.add("invisible");
        document.querySelector("h1").classList.add("invisible");
    }
    else{
        document.querySelector("main>div:nth-child(2)").classList.remove("scroll");
        document.querySelector(".photo").classList.remove("grandephoto");
        document.querySelector("h3").classList.remove("visible");
        document.querySelector(".texte").classList.remove("txtvisible");
        document.querySelector("h2").classList.remove("invisible");
        document.querySelector("h1").classList.remove("invisible");
    }
});

window.addEventListener('scroll', () =>{
    if ((window.scrollY > 40)&&(window.innerWidth <= 800)){
        let text = document.querySelector(".texte").innerHTML;
        document.querySelector(".texteresponsive").innerHTML = text;
        document.querySelector(".texteresponsive").classList.add("txtvisibleresponsive");
    }
    else{
        document.querySelector(".texteresponsive").classList.remove("txtvisibleresponsive");
    }
});

window.addEventListener('scroll', () =>{
    if ((window.scrollY > 10)&&(window.innerWidth > 600)){
        document.querySelector("header").classList.add("scrollhead");
        document.querySelector("main").classList.add("enhaut");
        document.querySelector("header>a:nth-child(2)").classList.add("décale");
        document.querySelector("header>a:nth-child(3)").classList.add("décale");
        document.querySelector("header>a:nth-child(4)").classList.add("décale");
        document.querySelector(".retour").classList.add("retourpetit");
    }
    else{
        document.querySelector("header").classList.remove("scrollhead");
        document.querySelector("main").classList.remove("enhaut");
        document.querySelector("header>a:nth-child(2)").classList.remove("décale");
        document.querySelector("header>a:nth-child(3)").classList.remove("décale");
        document.querySelector("header>a:nth-child(4)").classList.remove("décale");
        document.querySelector(".retour").classList.remove("retourpetit");
    }
});
