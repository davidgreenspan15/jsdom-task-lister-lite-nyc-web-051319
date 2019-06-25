document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
  const listContainer = document.querySelector('#list')
  const resultsArray = []
  let i = 0


  form.addEventListener('submit', event => {
    event.preventDefault()
    ++i
    i = i
    const input = document.querySelector("#new-task-description").value
    const li = document.createElement("li")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    const colorValue = form[1].value

    deleteButton.dataset.id = "delete"
    editButton.dataset.id = "edit"
    console.log(colorValue)
    li.innerText = input
    li.style.color = colorValue
    li.id = i

    deleteButton.innerText = "X"
    editButton.innerText = "Edit"
    li.appendChild(deleteButton)
    li.appendChild(editButton)
    taskList.appendChild(li)

    if (colorValue === "red"){
      li.dataset.id = 1
    }
    if (colorValue === "yellow"){
      li.dataset.id = 2
    }
    if (colorValue === "green"){
      li.dataset.id = 3
    }
    resultsArray.push(li)



  })// end of form listener


  taskList.addEventListener('click', event => {

    if (event.target.dataset.id === "delete"){
      event.target.parentElement.remove()
    }
    if (event.target.dataset.id === "edit"){
      const editForm = document.createElement("form")
      const editInput = document.createElement("input")
      const editSubmit = document.createElement("input")

      editSubmit.innerText = "submit"
      editSubmit.type = "submit"
      editSubmit.dataset.id = "edit"
      editForm.dataset.id = "editForm"

      editForm.appendChild(editInput)
      editForm.appendChild(editSubmit)
      listContainer.appendChild(editForm)


      editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newInput = editForm[0].value
        const editLi = document.querySelector(`#${i}`)
        console.log(editLi)


        // debugger

      })
    }


  })// end of task listener


listContainer.addEventListener('click', event => {
  if (event.target.id === "asc"){
    console.log("clicked asc")

    resultsArray.sort(function(a,b){
    return  a.dataset.id - b.dataset.id
  })
  taskList.innerText = ""
  resultsArray.forEach(li => {
    taskList.appendChild(li)
  })
}// end of asc if
  if (event.target.id === "dec"){
    console.log("clicked dec")

    resultsArray.sort(function(a,b){
    return  b.dataset.id - a.dataset.id
  })

  taskList.innerText = ""
  resultsArray.forEach(li => {
    taskList.appendChild(li)
  })

}// end of desc if


    // if (event.target.dataset.id === "edit"){
    //   editForm.addEventListener("submit", event => {
    //     event.preventDefault()
    //     console.log("editting")
    //   })



    // }//end of edit


})// end of listContainer listener





}); // end of dom listener
