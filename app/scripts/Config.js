// CONFIG.JS
// PURPOSE:  ALL CRUD OPERATIONS EXISTS HERE 


const storage = require('electron-json-storage');
const remote = require('electron').remote;
const app = remote.app;

function readStoragePath() {
    app.console.log("Path: " + app.getPath('userData'))
 }

function debug(debug) {
    app.console.log(debug)
}

function AddTask() {
     let TaskName = document.getElementsByName("TaskName")[0].value
     storage.set('Tasks', {taskName: TaskName }, function(error) {
         if (error) 
             throw error;
         alert("success!")
     } )
     alert("After set")
    //alert(document.getElementsByName("TaskName")[0].value )
}

function LoadTasks() {
    alert("In LoadTasks()")
    storage.get('Tasks', function(error,data){
        if (error) 
            throw error;
    })
}
