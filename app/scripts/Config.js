// Add tas
const storage = require('electron-json-storage');
const remote = require('electron').remote;
const app = remote.app;


 function AddTask() {
     alert("in fn")
     //alert("path: " + app.getPath('userData'))
     let TaskName = document.getElementsByName("TaskName")[0].value
     storage.set('Tasks', {taskName: TaskName }, function(error) {
         if (error) throw error;
     } )
    //alert(document.getElementsByName("TaskName")[0].value )
}


function LoadTasks() {
    
storage.getAll(function(error, data) {
  if (error) throw error;
  alert(data["taskName"].value)
  console.log(data);
})
    
}
