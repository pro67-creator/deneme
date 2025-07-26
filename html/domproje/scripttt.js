
let display = document.getElementById("display");

function append(value) {
 
  if (value === '.') {
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes('.')) return;
    if (lastPart === '') display.value += '0';
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value.replace(/%/g, '/100')); // yüzdeyi destekler
    display.value = result;
  } catch {
    display.value = "Hata!";
  }
}


document.addEventListener("keydown", function (e) {
  const allowedKeys = "0123456789+-*/.%";
  if (allowedKeys.includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});