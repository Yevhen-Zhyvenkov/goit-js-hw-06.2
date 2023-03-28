const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    const {email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
       return alert('Всі поля повинні бути заповнені !')
        
    };

    const formData = {
        email: email.value,
        password: password.value
    };
    console.log(formData);
    form.reset();
}









