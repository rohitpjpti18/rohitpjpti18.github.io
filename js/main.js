function sleep(){
    return new Promise(resolve => setTimeout(resolve, 171));
}

let welcome = document.getElementById("typewriter");
let ase = document.getElementById("ase"); 

async function typeWriterEffect(msg, element){
    await sleep();
    for(let i = 0; i<msg.length; i++){
        if(msg[i] == ' '){
            element.innerHTML += ' ';
        }else{
            element.innerHTML += msg[i];
        }
        await sleep();
    }
}

async function load(){
    let msg1 = `I'm Rohit Prajapati.`;
    
    let msg2 = `a software engineer`;

    await typeWriterEffect(msg1, welcome);
    await typeWriterEffect(msg2, ase);
    


}


window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navbar navbar-expand-lg navbar-light bg-light fixed-top animate-top";
        navbar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    } 
    else {
        navbar.className = "navbar navbar-expand-lg navbar-dark fixed-top";
        navbar.style.boxShadow = "";
    }
}