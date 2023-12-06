const tableEl = document.getElementById(`usersTable`);
const searchUserEl = document.getElementById(`searchUser`);
const toNewTodoBtnEl = document.getElementById(`toNewTodo`);
const categoryStore = localStorage.getItem("Category")
const nameStore = localStorage.getItem("Name")
const priorityStore = localStorage.getItem("Priority")
//---------------------------------------------------------

toNewTodoBtnEl.addEventListener(`click`, () => {
  window.location.href = "new_todo.html";
})

function searchUserdropdown() {
  fetch(`http://localhost:8083/api/users`)
    .then((response) => response.json()) //parsed JSON
    .then((user) => {
      for (i = 0; i < user.length; i++) {
        let optionEl = document.createElement(`option`);
        const userNames = user[i].name;
        optionEl.textContent = userNames;
        optionEl.value = user[i].id;
        searchUserEl.appendChild(optionEl);
      }
    });
}

searchUserEl.addEventListener(`change`, () => {
  let selectedUser = searchUserEl.value;
  const url = `http://localhost:8083/api/todos/byuser/${selectedUser}`;
  const tbodyEl = tableEl.querySelector(`tbody`);
  tbodyEl.innerHTML = ``
  fetch(url)
    .then((response) => response.json())
    .then((todos) => {
      //console.log(todos)
      todos.forEach((todo) => {
       
        let row = tbodyEl.insertRow();
        let categorycell = row.insertCell();
        categorycell.textContent = todo.category

        let descriptioncell = row.insertCell();
        descriptioncell.textContent = todo.description

        let deadlinecell = row.insertCell();
        deadlinecell.textContent = todo.deadline

        let prioritycell = row.insertCell();
        prioritycell.textContent = todo.priority
      });
    });
});
//----------------------------------------------------------------------
searchUserdropdown();
