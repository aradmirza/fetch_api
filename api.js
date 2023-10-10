
const display = document.getElementById('display');


document.getElementById('btn').addEventListener('click', function() {

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.text())
  .then(data => {
    display.innerText = data;
  })

})