function greet() {
    var name = document.getElementById('nameInput').value;
    var greetingMessage = document.getElementById('greetingMessage');
  
    if (name.trim() === '') {
      greetingMessage.textContent = 'Please enter your name.';
    } else {
      greetingMessage.textContent = 'Hello, ' + name + '! Welcome to Simple UI Web App.';
    }
  }
  