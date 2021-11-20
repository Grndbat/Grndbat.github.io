const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click' , function(){
    if(navMenu.classList.contains('d-none')){
        navMenu.classList.add('d-flex')
        navMenu.classList.remove('d-none')
    }else{
        navMenu.classList.remove('d-flex')
        navMenu.classList.add('d-none')
    }
})

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim,{
    //loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString('Moi c\'est Louis-Alexandre Thieux')
.pauseFor(300)
.typeString('<strong>, Dev Full-Stack</strong>')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: midnightblue"> Oracle</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #ea39ff"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910"> JavaScript</span> !')
.start()

function onestla(project1, project2){
    let elabout = document.getElementById(project1);
    let eltexteabout = document.getElementById(project2);
    console.log(elabout);
    console.log(eltexteabout);

    elabout.addEventListener("mouseover", function( event ) {
        eltexteabout.style.opacity= "75%";
        elabout.style.opacity = "80%";
    });

    elabout.addEventListener("mouseleave", function( event ) {
        eltexteabout.style.opacity= "0%";
        elabout.style.opacity = "100%";
    });

}

function ramener(project1){
    let element = document.getElementById(project1);
    
}

onestla("about", "texteabout");