'use strict';
{
  // 定数
  // ボタン
  const btn = document.querySelectorAll('li, button');
  const numbers = document.querySelectorAll('.number-box li');
  const enter = document.getElementById('enter');
  const options = document.querySelectorAll('.option li');
  const clear = document.getElementById('clear');
  const backspace = document.getElementById('backspace');
  // ディスプレイ
  const result = document.getElementById('result');
  // クリック音
  const se = document.querySelector('audio');
  // 数字の配列
  const numberContent = [
    '9','8','7','6','5','4','3','2','1','' ,'0',''
  ];
  // 四則演算の配列
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
  
  // 関数
  // クリック音の関数
  const sound = function () {
    se.currentTime = 0.05;
    se.play();
  };

  // 数を入力する関数
  const setNumber = function () {
    if (result.textContent.length > 12) {
      result.textContent = '--桁数が多すぎます。--';
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
    if (result.textContent.includes('/') || result.textContent.includes('*')|| result.textContent.includes('+')|| result.textContent.includes('-')|| result.textContent.includes('数字を入力してください')) {
      return;
    }
    result.textContent = result.textContent + optionContent[optionIndex];
  };


  
// イベント
// ボタンのクリック音
  btn.forEach(function (button) {
    if (window.matchMedia('(min-width: 767px)').matches) {
      button.addEventListener('click', sound);
    }
  });
// 数を入力
  numbers.forEach(function (button) {
    button.addEventListener('click', setNumber);
  });
  
// 四則演算を入力
  options.forEach(function (button) {
    button.addEventListener('click', setOption);
  });

// クリアボタン
  clear.addEventListener('click', () => {
    result.textContent = '0';
  });

// イコールボタン
  enter.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
  });
  
// バックスペース
  backspace.addEventListener('click', () => {
    result.textContent = result.textContent.slice(0, -1);
  })
}
