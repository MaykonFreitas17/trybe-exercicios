const inputs = document.querySelectorAll('.input')
const btnSubmit = document.querySelector('#btnSubmit');
const btnClean = document.querySelector('#btnClean');

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
});

btnClean.addEventListener('click', function(){
    for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].innerText = '';
    }
});
