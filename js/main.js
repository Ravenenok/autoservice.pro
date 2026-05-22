document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);

    const service = params.get('service');

    const serviceSelect =
        document.getElementById('serviceSelect');

    if(service && serviceSelect){

        serviceSelect.value = service;

    }

    const form =
        document.getElementById('bookingForm');

    const popup =
        document.getElementById('successPopup');

    const closePopup =
        document.getElementById('closePopup');

    if(form){

        form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const nameInput =
        form.querySelector('input[type="text"]');

    const phoneInput =
        document.getElementById('phoneInput');

    const name =
        nameInput.value.trim();

    const phone =
        phoneInput.value.trim();

    const nameRegex =
        /^[А-Яа-яA-Za-zЁё\s]+$/;

    if(!nameRegex.test(name)){

        alert('Имя должно содержать только буквы');

        return;

    }

    const phoneRegex =
        /^[0-9+\-\s()]+$/;

    if(!phoneRegex.test(phone)){

        alert('Введите корректный номер телефона');

        return;

    }

    const formData = new FormData(form);

    const response = await fetch(form.action, {

        method: 'POST',
        body: formData

    });

    if(response.ok){

        popup.classList.add('active');

        form.reset();

    } else {

        alert('Ошибка отправки');

    }

});

    }

    if(closePopup){

        closePopup.addEventListener('click', () => {

            popup.classList.remove('active');

        });

    }
const contactsForm =
    document.getElementById('contactsForm');

const contactsPopup =
    document.getElementById('contactsPopup');

const closeContactsPopup =
    document.getElementById('closeContactsPopup');

if(contactsForm){

    contactsForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData =
        new FormData(contactsForm);

    const response = await fetch(
        contactsForm.action,
        {
            method: 'POST',
            body: formData
        }
    );

    if(response.ok){

        contactsPopup.classList.add('active');

        contactsForm.reset();

    } else {

        alert('Ошибка отправки');

    }

});

}

if(closeContactsPopup){

    closeContactsPopup.addEventListener('click', () => {

        contactsPopup.classList.remove('active');

    });

}
const bookingDate = document.getElementById(`bookingDate`);
if(bookingDate) {
	const today = new Date().toISOString().split(`T`)[0];
	bookingDate.min = today;
}
    const burger =
        document.getElementById('burger');

    const nav =
        document.querySelector('.nav');

    if(burger){

        burger.addEventListener('click', () => {

            nav.classList.toggle('active');

        });

    }

    const slides =
        document.querySelectorAll('.slide');

    let currentSlide = 0;

    if(slides.length > 0){

        setInterval(() => {

            slides[currentSlide]
                .classList.remove('active');

            currentSlide++;

            if(currentSlide >= slides.length){

                currentSlide = 0;

            }

            slides[currentSlide]
                .classList.add('active');

        }, 4000);

    }

});
