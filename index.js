function checkTime() {
    const hourInput = document.getElementById("hour");
    const greeting = document.getElementById("greeting");

    const hour = parseInt(hourInput.value, 10);

    if (hour > 17) {
      greeting.textContent = "Добрий вечір";
    } else {
      greeting.textContent = "Доброго дня";
    }
  }

  function greet() {
    const nameInput = document.getElementById("name");
    const greeting = document.getElementById("greeting");

    const name = nameInput.value;

    if (name === "Jonh") {
      greeting.textContent = "Привіт " + name;
    } else {
      greeting.textContent = "Я вас не знаю";
    }
}

function authenticate() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "ivan" && password === "333ssss" ||
      username === "gibs" && password === "666gibs" ||
      username === "0000" && password === "То") {
    message.textContent = "Ласкаво просимо";
  } else {
    message.textContent = "Користувач не знайдений";
  }
}



function findMax() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const number3 = parseFloat(document.getElementById("number3").value);

  let maxNumber;

  if (number1 >= number2 && number1 >= number3) {
    maxNumber = number1;
  } else if (number2 >= number1 && number2 >= number3) {
    maxNumber = number2;
  } else {
    maxNumber = number3;
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = "Максимальне число: " + maxNumber;
}