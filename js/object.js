var person = {
  name : 'Jazz',
  country : 'UK',
  age : 7,
  newportPupil : true,
  skills : ['Sportsorts', 'cycling', 'drawing']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
print(message);