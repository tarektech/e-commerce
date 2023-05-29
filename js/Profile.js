
function FirstLast() {
    let person = document.getElementById('person');
    if (!person.focus()) {
      person.style.color = '#f5c61b';
    }
  }
  function email() {
    let email = document.getElementById('email');
    if (!email.focus()) {
      email.style.color = '#f5c61b';
    }
  }
  function call(){
    let call = document.getElementById('call');
    if(!call.focus()){
      call.style.color = '#f5c61b';
    }
  }
  function calendar(){
    let calendar = document.getElementById('calendar');
    if(!calendar.focus()){
      calendar.style.color = '#f5c61b';
    }
  }