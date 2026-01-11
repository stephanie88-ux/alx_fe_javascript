async function fetchUserData() {

    const apiUrl= 'https://jsonplaceholder.typicode.com/users';
    document.getElementById("api-data");
}
        try {
        const response = await fetch(apiURL);

        const user = await response.json(); 
        }
}
  dataContainer.innerHTML = 'Loading user data...';

  const useList = document.createElement('ul');
  user.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.name}`;
    userList.dataContainer.appendChild(userList);
  }

  { catch (error) }
    dataContainer.innerHTML = 'Failed to load user data.';

    document.addEventListener ("DOMContentLoaded", function() {
        fetchUserData();
    });



    