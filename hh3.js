$(document).ready(function() {
  
    $('#Sign1').click(function() {
      var loginUsername = $('#user').val();
      var loginPassword = $('#password').val();
      var loginconfirm = $('#confirm').val();
      if (loginUsername && loginPassword && loginconfirm && (loginconfirm==loginPassword)) {
        // localStorage.setItem(loginUsername, JSON.stringify({ loginUsername, loginPasswordd }));
        // alert('okkkk Signup successful!');
        window.location.href = 'hhh.html';
      } 
      else {
        alert('Please enter both login username and password.');
      }
        })

  })