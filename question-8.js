// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
// Fetch user data from JsonPlaceholder
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(userData => {
    const newUsers = userData.map(user => user.name);
    
    const jsonString = JSON.stringify(newUsers, null, 2);
    console.log(jsonString);
  })
  .catch(error => {
    console.error('Error during fetch:', error);
  });



