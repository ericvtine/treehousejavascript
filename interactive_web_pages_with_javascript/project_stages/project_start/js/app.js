//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTaskHolder = document.getElementById("complete-tasks"); //completed-tasks

//Add a new task.
var addTask = function() {
    console.log("Add task...");
    //When the button is pressed
    //Create a new list item witht he text from #new-task:
        //input checkbox
        //label
        //input (text)
        //button.edit
        //button.delete
        //Each elements, needs modified and appended
}

//Edit an existing taks.
var editTask = function() {
    console.log("Edit task...");
    //When the Edit button is pressed
        //if the class of the parent is .editMode
            //Switch from .editMode
            //label text become the input's value
        //else
            //Switch to .editMode
            //input value becomes the label's text
            
        //Toggle .editMode
}

//Delete an existing task.
var deleteTask = function() {
    console.log("Delete task...");
    //When the Delete button is pressed
        //Remove the parent list item from the ul
    

//Mark a task as complete.
var taskCompleted = function () {
    console.log("Task completed...");
    //When the Checkbox is checked
        //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete.
var taskIncomplete = function () {
    console.log("Task incomplete...");
    //When the checkbox is unchecked
        //Append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function (taskListItem, CheckBoxEventHandler) {
      //select it's children
        //bind editTask to edit button
        //bind deleteTask to delete button
        //bind taskCompleted to checkbox
}

//Set the click handler to the addTask function.
addButton.onclick = addTask;

//Cycle over incompleteTaskHolder ul list items.
for(vari = 0; i < incompleteTaskHolder.children.length; i++) {
        //bind events to list item's children (taskCompleted)
        bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
 
//Cycle over completedTaskHolder ul list items.
for(vari = 0; i < completedTaskHolder.children.length; i++) {
        //bind events to list item's children (taskIncomplete)
        bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);


