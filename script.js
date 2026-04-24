
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data));

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("users");

    data.forEach(user => {
      const li = document.createElement("li")
      li.textContent = user.name;
      li.textContent=user.email;
      list.appendChild(li);
    });
  });
