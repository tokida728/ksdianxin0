let currentNumber = 0;
const maxNumber = 30;

const waitTimeDisplay = document.getElementById('waitTime');
const ticketDisplay = document.getElementById('ticketNumber');
const issueButton = document.getElementById('issueButton');

function getTimePerPerson(number) {
  if (number >= 1 && number <= 7) {
    return 5;
  } else if (number >= 8 && number <= 15) {
    return 10;
  } else if (number >= 16 && number <= 23) {
    return 15;
  } else {
    return 20;
  }
}

issueButton.onclick = function () {
  if (currentNumber < maxNumber) {
    currentNumber++;
    const waitTime = getTimePerPerson(currentNumber);

    waitTimeDisplay.textContent = `現在の待ち時間: ${waitTime}分`;
    ticketDisplay.textContent = `あなたの整理券番号: ${currentNumber}`;
  } else {
    ticketDisplay.textContent = "整理券の上限に達しました";
    issueButton.disabled = true;
  }
};