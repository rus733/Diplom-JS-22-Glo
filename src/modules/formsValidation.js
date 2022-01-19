'use strict';

const formsValidation = () => {
  const inputName = document.querySelectorAll('input[name="fio"]');
  const inputPhone = document.querySelectorAll('.tel');
  const customTrim = (val) =>
    val
      .replace(/([ \-()@_.!~*'])(?=[ \-()@_.!~*']*\1)/g, '')
      //.replace(/^[ |\-+]/g, '')
      .replace(/^[ |-]/g, '')
      .replace(/[ |\-+]$/g, '');

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

  //  валидация ввода номера телефона

  inputPhone.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^0-9+]/, '');
      val = customTrim(val);
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9+]/, '');
    });
  });
};

export default formsValidation;
