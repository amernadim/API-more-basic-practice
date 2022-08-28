const loadUser = () =>{
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => displayUsers(data.results))
}

const displayUsers = users => {
  const userConatainer = document.getElementById('user-container');
  for (const user of users){
    const userDiv = document.createElement('div');
    userDiv.classList.add('user')
    userDiv.innerHTML = `
        <h3>User Name : ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Email : ${user.email} </p>
        <p>User Location : ${user.location.city} ${user.location.state} ${user.location.country} ${user.location.postcode} </p>
    `;
    userConatainer.appendChild(userDiv);
    console.log(user.location);
  }
}
loadUser()