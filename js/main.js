function sleep(){
    return new Promise(resolve => setTimeout(resolve, 171));
}

let welcome = document.getElementById("typewriter");

async function load(){
    let msg = 'I am Rohit Prajapati.';
    
    await sleep();
    for(let i = 0; i<msg.length; i++){
        if(msg[i] == ' '){
            welcome.innerHTML += ' ';
        }else{
            welcome.innerHTML += msg[i];
        }
        await sleep();
    }

}


window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "navbar navbar-expand-lg navbar-light bg-light fixed-top animate-top";
        navbar.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    } 
    else {
        navbar.className = "navbar navbar-expand-lg navbar-light fixed-top";
        navbar.style.boxShadow = "";
    }
}