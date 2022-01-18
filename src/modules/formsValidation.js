'use strict';

const formsValidation = () => {
  //const inputsCalc = document.querySelectorAll('.calc-item');
  const inputName = document.querySelectorAll('input[name="fio"]');
  const inputPhone = document.querySelectorAll('.tel');
  //const inputEmail = document.querySelectorAll('.form-email');
  //const inputNameBottom = document.querySelector('#form2-name');
  //const inputMessageBottom = document.querySelector('#form2-message');
  const customTrim = (val) =>
    val
      .replace(/([ \-()@_.!~*'])(?=[ \-()@_.!~*']*\1)/g, '')
      //.replace(/^[ |\-+]/g, '')
      .replace(/^[ |-]/g, '')
      .replace(/[ |\-+]$/g, '');

  // валидация input-ов калькулятора
  /*
  inputsCalc.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d.]/g, '');
    });
  });
  */
  // валидация ввода имени верхней и нижней формы

  inputName.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^а-яё -]/gi, '');
      val = customTrim(val);
      val = val.toLowerCase();
      val = val.replace(/( |^|-)[ а-яё]/g, (u) => u.toUpperCase());
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-яё -]/gi, '');
    });
  });

  //  валидация ввода почтового адреса
  /*
  inputEmail.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^A-Za-z-@!.*~'_]/g, '');
      val = customTrim(val);
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^A-Za-z-@!.*~'_]/g, '');
    });
  });
*/
  //  валидация ввода номера телефона

  inputPhone.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^0-9()\-+]/, '');
      val = customTrim(val);
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9()\-+]/, '');
    });
  });

  /// валидация ввода сообщения
  /*
  inputMessageBottom.addEventListener('blur', (e) => {
    let val = e.target.value;
    val = val.replace(/[^а-яё -]/gi, '');
    val = customTrim(val);
    e.target.value = val;
  });

  inputMessageBottom.addEventListener('input', () => {
    inputMessageBottom.value = inputMessageBottom.value.replace(/[^а-яё -]/gi, '');
  });
  */
};

export default formsValidation;

/*
const formsValidation = () => {
  const userName = document.querySelectorAll('input[name="fio"]'),
    userPhone = document.querySelectorAll('.tel');

  let afterValidationText = (e) => {
    let char = e.target;
    char.value = char.value.trim().charAt(0).toUpperCase() + char.value.substr(1).toLowerCase();
    //Первая буква каждого слова должна приводиться к верхнему регистру, а все остальные — к нижнему
  };

  userName.forEach((e) => {
    e.addEventListener('input', (e) => {
      let name = e.target;
      name.value = name.value.replace(/[^[а-яА-Я ]*/ //g, '');
//Разрешается только ввод кириллицы в любом регистре и пробела
/*
      if (name.value.length < 2) {
        name.setCustomValidity('В поле Имя должно быть минимум два символа');
      } else {
        name.setCustomValidity('');
      }
      afterValidationText(e);
    });
  });

  userPhone.forEach((e) => {
    e.addEventListener('input', (e) => {
      let phone = e.target;
      phone.value = phone.value.replace(/[^[0-9+]*/ //g, '');
//Разрешается только ввод цифр, знака “+”,круглых скобок и дефис
/*
      if (phone.value.length < 5) {
        phone.setCustomValidity('В поле Телефон должно быть от 5 цифр');
      } else if (phone.value.length > 12) {
        phone.setCustomValidity('В поле Телефон должно быть до 11 цифр');
      } else {
        phone.setCustomValidity('');
      }
    });
  });
};

export default formsValidation;
*/
