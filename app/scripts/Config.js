// Add tas
const storage = require('electron-json-storage');
const remote = require('electron').remote;
const app = remote.app;


 function AddTask() {
     //alert("in fn")
     //alert("path: " + app.getPath('userData'))
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
        if (error) app.console.log(data);
        //var tasks[]
        
        //document.write()
        alert(JSON.stringify(data.taskName))
        //app.console.log(data)
    })
 
}
