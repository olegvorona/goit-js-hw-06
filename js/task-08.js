const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onloginForm);

function onloginForm(event) { 
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" ||
        event.currentTarget.elements.password.value === "")
    {return alert ('Аll fields must be filled')
    } else {
        const valueObj = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
            
        };
        console.log(valueObj);
    };
    
    event.currentTarget.reset();
}
