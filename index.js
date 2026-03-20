const alert = document.getElementsByClassName("alert")

function change(value) {
  alert.classList.remove("d-none")
  alert.textContent = `You get rigth to ${value} questions`
  if (value < 3) {
    return; 
  } else if (value < 7) {
    alert.classList.add("alert-warning");
  } else if (value <= 10) {
    alert.classList.add("alert-success");
  } 

}