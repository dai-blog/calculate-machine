'use strict';
{
  const btn = document.querySelectorAll('li, button');
  const se = document.querySelector('audio');
  const backspace = document.getElementById('backspace');
  const result = document.getElementById('result');
  const numbers = document.querySelectorAll('.number-box li');
  const clear = document.getElementById('clear');
  const options = document.querySelectorAll('.option li');
  const enter = document.getElementById('enter');

  const numberContent = [
    '9','8','7','6','5','4','3','2','1','' ,'0',''
  ];

  const optionContent = [
    '/', '*', '+', '-'
  ];

  // インデックスの用意
  // 数字のインデックス
  let numberIndex;
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      numberIndex = [].slice.call(numbers).indexOf(number);
    });
    });
 
  // 四則演算インデックス
    let optionIndex;
    options.forEach((option) => {
      option.addEventListener("click", () => {
      optionIndex = [].slice.call(options).indexOf(option);
    });
    });
  
  const sound = function () {
    se.load();
    se.play();
  };

  // 数を入力する関数
  const setNumber = function () {
    if (result.textContent.length > 12) {
      result.textContent = '　　　桁数が多すぎます　　';
      return;
    }
    if ( result.textContent === '数字を入力してください' || result.textContent === '0') {
      result.textContent = numberContent[numberIndex];
    }
    else {
      result.textContent = result.textContent + numberContent[numberIndex];
    }
  };

  // オプションの関数
  const setOption = function () {
    if (result.textContent.includes('/') || result.textContent.includes('*')|| result.textContent.includes('+')|| result.textContent.includes('-')|| result.textContent.includes(0)|| result.textContent.includes('数字を入力してください')) {
      return;
    }
    result.textContent = result.textContent + optionContent[optionIndex];
  };


  
// ボタンのクリック音
  btn.forEach(function (button) {
    button.addEventListener('click', sound);
  });
// 数を入力
  numbers.forEach(function (button) {
    button.addEventListener('click', setNumber);
  });
  
// 四則演算を入力
  options.forEach(function (button) {
    button.addEventListener('click', setOption);
  });

// クリア
  clear.addEventListener('click', () => {
    result.textContent = 0;
  });

  enter.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
  });

  
  backspace.addEventListener('click', () => {
    result.textContent = result.textContent.slice(0, -1);
  })

}





// var result = str.slice(0, -1);
// console.log(result);