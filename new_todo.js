const selectUserEl = document.getElementById(`selectUser`);
const selectCategoryEl = document.getElementById(`selectCategory`);
const selectPriorityEl = document.getElementById(`selectPriority`);
const addNewTodoEl = document.getElementById(`addNewTodo`);
const descriptionEl = document.getElementById(`description`);
const deadlineEl = document.getElementById(`deadline`);
//-----------------------------------------------------------------------------

function selectUserdropdown() {
  fetch(`http://localhost:8083/api/users`)
    .then((response) => response.json()) //parsed JSON
    .then((user) => {
      for (i = 0; i < user.length; i++) {
        let optionEl = document.createElement(`option`);
        const userNames = user[i].name;
        optionEl.textContent = userNames;
        optionEl.value = user[i].id;
        selectUserEl.appendChild(optionEl);
      }
    });
}

function selectCategorydropdown() {
  fetch(`http://localhost:8083/api/categories`)
    .then((response) => response.json())
    .then((categories) => {
      for (i = 0; i < categories.length; i++) {
        let option2El = document.createElement(`option`);
        const categoryNames = categories[i].name;
        option2El.textContent = categoryNames;
        option2El.value = categories[i].id;
        selectCategoryEl.appendChild(option2El);
      }
    });
}

addNewTodoEl.addEventListener(`click`, () => {
    const selectedcategory = selectCategoryEl.value;
    const selecteduser = selectUserEl.value;
    const description = descriptionEl.value;
    //const deadline = deadlineEl.value; fix this

    //const selectedPriority = selectPriorityEl.value
    localStorage.setItem("Category", selectedcategory)
    localStorage.setItem("Name", selecteduser)
    localStorage.setItem("Description", description)
    //localStorage.setItem("Deadline", deadline) fix this 
    //localStorage.setItem("Priority",selectPriorityEl.value)
    if(selectPriorityEl.value === "Low") {
        localStorage.setItem("Priority", "Low")
    }
    else if(selectPriorityEl.value === "Medium") {
        localStorage.setItem("Priority", "Medium");
    }
    else if(selectPriorityEl.value === "High") {
        localStorage.setItem("Priority", "High");
    }
    
    

})
//----------------------------------------------------------
selectUserdropdown();
selectCategorydropdown();
