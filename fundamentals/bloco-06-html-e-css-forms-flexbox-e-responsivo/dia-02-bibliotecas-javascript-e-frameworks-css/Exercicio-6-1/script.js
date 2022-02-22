const  picker  =  new  Pikaday ( {  
    field : document.getElementById ('dateInput'),
    format: 'DD/MM/yyyy',
    // onSelect : function ( )  { 
    //     console.log(this.getMoment ( ) .format ( 'DD MM YYYY'));
    // }
} ) ;

const validation = new window.JustValidate('#form', {errorFieldCssClass: 'is-invalid',});
validation
  .addField('#input-name', [
    {
        rule: 'required',
        errorMessage: 'Your name is required'
    },

    {
        rule: 'minLength',
        value: 10,
    },

    {
        rule: 'maxLength',
        value: 30,
    },
  ])

  .addField('#input-email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])

  .addField('#floatingTextarea2', [
    {
        rule: 'required',
        errorMessage: 'This Field is required'
    }
  ])

  .addField('#dateInput', [
    {
        rule: 'required',
        errorMessage: 'This Field is required'
    }
  ])
  .addRequiredGroup('#optionsRadios');

const dateInput = document.querySelector('#dateInput');
const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', function(event){
    // event.preventDefault();
    console.log(dateInput.value);
});