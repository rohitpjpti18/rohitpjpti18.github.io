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