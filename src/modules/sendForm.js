'use strict';

import { unBlockBody } from './helpers';

const sendForm = () => {
  /*
  const sendData = async (data) => {
    const res = await fetch('server.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };
  */

  const sendData = (data) => {
    return fetch('server.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  };
  //https://jsonplaceholder.typicode.com/posts

  const submitForm = (form) => {
    const statusMessage = document.createElement('div');

    const showStatus = (status) => {
      const img = document.createElement('img');
      const statusList = {
        load: {
          message: ' Загрузка...',
          img: './images/message/waiting.gif',
        },
        error: {
          message: ' Что-то пошло не так...',
          img: './images/message/error.png',
        },
        success: {
          message: ' Спасибо. Наш менеджер скоро с вами свяжемся!',
          img: './images/message/success.png',
        },
      };

      statusMessage.textContent = statusList[status].message;
      img.src = statusList[status].img;
      img.height = 35;

      statusMessage.insertBefore(img, statusMessage.firstChild);
    };

    statusMessage.style.cssText = 'font-size: 2rem; color: #000';

    form.addEventListener('submit', (e) => {
      const formElements = form.querySelectorAll('input'),
        formData = new FormData(form),
        formBody = {};
      e.preventDefault();

      showStatus('load');
      form.appendChild(statusMessage);

      formData.forEach((val, key) => {
        formBody[key] = val;
      });

      sendData(formBody)
        .then((data) => {
          showStatus('success');

          formElements.forEach((input) => {
            input.value = '';
            document.querySelectorAll('input[type="submit"]').forEach((btn) => {
              btn.value = 'Отправить';
            });
          });
          form.style.paddingLeft = '10px';
          setTimeout(() => {
            document.querySelector('.modal-callback').style.display = 'none';
            document.querySelector('.modal-overlay').style.display = 'none';
            unBlockBody();
            statusMessage.textContent = '';
          }, 3500);
        })
        .catch((error) => {
          showStatus('error');
        });
    });
  };

  document.querySelectorAll('form').forEach((elem) => submitForm(elem));
};

export default sendForm;
