const display=document.getElementsById("display")
const plusButton = document.getElementsById("plus-button")

plusButton.onclick = function(){
  count += 1
  display.textContent = count
}