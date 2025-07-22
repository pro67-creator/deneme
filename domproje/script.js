
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const passwordEl = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const messageEl = document.getElementById('message');

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const syms = "!@#$%^&*()_+[]{}<>?/|";

function generatePassword() {
  const length = parseInt(lengthEl.value);
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  let charset = "";
  if (hasUpper) charset += upper;
  if (hasLower) charset += lower;
  if (hasNumber) charset += nums;
  if (hasSymbol) charset += syms;

  if (length < 4) {
    alert("Şifre uzunluğu en az 4 olmalıdır.");
    return;
  }

  if (!charset) {
    alert("En az bir karakter türü seçmelisiniz.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordEl.value = password;
  messageEl.textContent = "";
}

function copyPassword() {
  const password = passwordEl.value;
  if (!password) {
    messageEl.textContent = "Kopyalanacak bir şifre yok.";
    return;
  }

  navigator.clipboard.writeText(password).then(() => {
    messageEl.textContent = "Şifre kopyalandı!";
  });
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);