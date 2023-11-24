let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

/*function sendMail(){
    let parms = {
        name: document.getElementByplaceholder("full name").value,
        number: document.getElementByplaceholder("number").value,
        email: document.getElementByplaceholder("email").value,
        message: document.getElementByplaceholder("message").value,
    }

    emailjs.send("service_ro2kbki","template_92kyu0f",parms).then(alert("Email Sent!"));
}*/