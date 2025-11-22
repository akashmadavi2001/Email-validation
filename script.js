let input = document.querySelector('.container input');
let img = document.querySelector('.container img');

input.addEventListener('keyup', () => {
    
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/;

    if (input.value === '') {
        img.src = "email.png";
        img.classList.remove("active");
    }
    else if (input.value.match(pattern)) {
        img.src = "checkmark.png";
    }
    else {
        img.src = "message.png";
        img.classList.add("active");
    }
});

