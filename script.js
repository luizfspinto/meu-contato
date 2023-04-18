function toggleMode() {
  const html = document.documentElement
  //Maneira simplificada de trocar a cor do tema
  html.classList.toggle("light")

  /*
  2° maneira de fazer
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light") 
  }
  */
}

const dialog = document.getElementById('dialog');
const text = document.getElementById('text');
const jsbutton = document.getElementById('jsbutton');
const modal = document.getElementById('modal');
const reset = document.getElementById('reset');

modal.addEventListener('click', (event) => {
  dialog.showModal();
  text.textContent = '';
});

jsbutton.addEventListener('click', (event) => {
  dialog.close();
  text.innerHTML += '"JS close" closed the dialog.<br/>';
});


dialog.addEventListener('cancel', (event) => {
  text.innerHTML += 'cance event happened<br/>';
});

dialog.addEventListener('close', (event) => {
});


