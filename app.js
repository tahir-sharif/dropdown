const input = document.querySelector('.input');
const options = document.querySelector('.options')
input.onclick = () => {
    input.classList.toggle('active')
    options.classList.toggle('active')
}
const inputValue = (value) => {
    document.querySelector('.input input').value = value;
    input.classList.toggle('active')
    options.classList.toggle('active')
    console.log(value.toLowerCase())
}