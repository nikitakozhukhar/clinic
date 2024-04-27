export function createPopup() {
  const popup = document.querySelector('.form-popup');
  const cancel = document.querySelector('.cancel');
  const wall = document.querySelector('.wall-effect');
  const btnSubscribe = document.querySelector('.header-btn-subscribe');
  const form = document.querySelector('.form-container');
  const subscribeMobile = document.querySelector('.subscribe');

  cancel.addEventListener('click', () => {
    wall.classList.toggle('open');
    document.body.classList.remove('no-scroll')
  });

  subscribeMobile.addEventListener('click', () => {
    wall.classList.add('open');
    popup.classList.add('open')
  });

  btnSubscribe.addEventListener('click', () => {
    wall.classList.add('open');
    popup.classList.add('open')
    document.body.classList.toggle('no-scroll')
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    console.log(formData);

    fetch('http://localhost:8080/send_email.php', {
      method: 'POST',
      body: formData,
      headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Обрабатываем ответ от сервера
        console.log(data);
        alert(data.message); // Выводим сообщение пользователю
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения');
    });

  })
  
}

createPopup()