 function signup() {
//   console.log('iyed')
//     const username = $('#user').val();
//     const password = $('#password').val();
window.location.href = 'hh3.html';  
//     if (localStorage.getItem(username)) {
//       alert('Username already exists. Choose another one.');
//       return;
//     }
  
//     localStorage.setItem(username, JSON.stringify({ username, password }));
//     alert('Signup successful!');
}
  
  function login() {
    const username = $('#user').val();
    const password = $('#password').val();
  
    const userData = localStorage.getItem(username);
  
    if (userData) {
      const storedPassword = JSON.parse(userData).password;
  
      if (password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html';

      } else {
        alert('Incorrect password. Please try again.');
      }
    }
  }
  
 
  
  $(document).ready(function() {
    $('#Sign').click(login);
  
    $('#Log1').click(signup);
  });


  $(document).ready(function() {
  
    $('#Sign').click(function() {
      var loginUsername = $('#user').val();
      var loginPassword = $('#password').val();

      if (loginUsername && loginPassword) {
      
        window.location.href = 'index.html';
      } 
      else {
        alert('Please enter both login username and password.');
      }
        })

  })
  

  $(document).ready(function() {
  
    $('#Log1').click(function() {
      
        window.location.href = 'hh3.html';
    
        })

  })
  


  
    