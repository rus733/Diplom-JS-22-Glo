'use strict';
const formsValidation = () => {
  const userName = document.querySelectorAll('input[name="fio"]'),
    userPhone = document.querySelectorAll('.tel');

  let afterValidationText = () => {
    let char = event.target;
    char.value = char.value.trim().charAt(0).toUpperCase() + char.value.substr(1).toLowerCase();
    //Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему
  };
  userName.forEach((e) => {
    e.addEventListener('input', () => {
      let name = event.target;
      name.value = name.value.replace(/[^[а-яА-Я]*/g, '');
      //Разрешается только ввод кириллицы в любом регистре и пробела
      if (name.value.length < 2) {
        name.setCustomValidity('В поле Имя должно быть минимум два символа');
      } else {
        name.setCustomValidity('');
      }
      afterValidationText(e);
    });
  });

  userPhone.forEach((e) => {
    e.addEventListener('input', () => {
      let phone = event.target;
      phone.value = phone.value.replace(/[^[0-9+]*/g, '');
      //Разрешается только ввод цифр, знака “+”,круглых скобок и дефис

      if (phone.value.length < 5) {
        phone.setCustomValidity('В поле Телефон должно быть от 5 цифр');
      } else if (phone.value.length > 11) {
        phone.setCustomValidity('В поле Телефон должно быть до 11 цифр');
      } else {
        phone.setCustomValidity('');
      }
    });
  });
};

export default formsValidation;
