const userDataForm = document.getElementById('userDataForm');
const displayDataButton = document.getElementById('displayDataButton');
const userDataDisplay = document.getElementById('userDataDisplay');

userDataForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  saveUserData(name, age);
});

displayDataButton.addEventListener('click', function() {
  displayUserData();
});

function saveUserData(name, age) {
  localStorage.setItem('userName', name);
  localStorage.setItem('userAge', age);
  alert('User data saved successfully!');
  userDataForm.reset();
}

function displayUserData() {
  const name = localStorage.getItem('userName');
  const age = localStorage.getItem('userAge');
  if (name && age) {
    userDataDisplay.innerHTML = `
      <h2>User Data</h2>
      <table>
        <tr>
          <th>Name</th>
          <td>${name}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>${age}</td>
        </tr>
      </table>`;
  } else {
    userDataDisplay.innerHTML = '<p>No user data found!</p>';
  }
}