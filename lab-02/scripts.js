let clickCount = 0;

function IncrementClickCount() {
  clickCount ++;
  target.textContent = clickCount;
}
myTrigger.addEventListener('click', IncrementClickCount);
