//empty the text box when clicked
document.getElementById('contact-email').addEventListener('click',function(){
  this.value="";
});

//show success message
function successful(){

  document.getElementById('contact-form-container').innerHTML += 'Form submitted sucessfully';
}
//when submit button is clicked, it checks if values are provided for email and password
document.getElementById('contact-submit').addEventListener('click',function(e){

  var email = document.getElementById('contact-email').value;
  var password = document.getElementById('contact-password').value;
  console.log(email, password);
  if (email === "" || password === "" ){
    //Alert can be avoided. Instead, styled modal with bootstrap or some plugin can be used.
    alert("Please check if you have provided email, password");

  } else if (email !== null && password != null && tiger.checked == true) {
    successful();
  }

});



//form fields are assigned to variables
var tiger = document.getElementById('contact-animals-tiger');

//listening to tiger checkbox if selected to show the type of tiger text box
if (tiger.addEventListener('change', function(){

  if (tiger.checked == true){
      document.getElementById('tigerTypeContainer').innerHTML = `<label for="contact-animals-tigerType"
      class="contact__label contact__label--tigerType" >Tiger type: </label>
      <input id="contact-animals-tigerType" class="contact__input contact__input--tigerType"
      type="text" name="tigerType">`;

    } else {
      document.getElementById('tigerTypeContainer').innerHTML = '';
    }

}));
