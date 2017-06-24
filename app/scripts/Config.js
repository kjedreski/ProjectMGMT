// CONFIG.JS
// PURPOSE:  ALL CRUD OPERATIONS EXISTS HERE 


const storage = require('electron-json-storage');
const remote = require('electron').remote;
const app = remote.app;

// ** UTILITY FUNCTIONS **//
function readStoragePath() {
    app.console.log("Path: " + app.getPath('userData'))
 }
function debug(debug) {
    app.console.log(debug)
    //alert(document.getElementsByName("TaskName")[0].value )
}
function alertTest() {
    alert("test")
}
// ********************* //





/**CRUD FUNCTIONS **/
function BuildJson(comment){
    //Put a loop here and iterate through elements and add them to file
     let TaskName = document.getElementsByName("TaskName")[0].value;
     let jsonData = "{ " + "comment1: " + comment + "}";   
     return jsonData
}

/**Input functions**/
function commentInput(){
    var comment = document.getElementsByName("Comment")[0].value;
    BuildJson(comment)
}
// ********** //



function AddTask() {
    //Put a loop here and iterate through elements and add them to file
    //will want to build JSON Object in seperate function
     let taskName = document.getElementsByName("TaskName")[0].value;
     let jsonData = BuildJson();
    
     storage.set(taskName,jsonData, function(error) {
         if (error) 
             throw error;
     } )
}

function LoadTasks() {
    alert("In LoadTasks()")
    storage.get('Tasks', function(error,data){
        if (error) 
            throw error;
    })
}



//test function, read JSON data
/******EVERYTHING BELOW IN TESTING PHASE **/
function loadKeysTest( ) {
        debug("entered loadKeys")
    var list = document.getElementById("TaskList");

    storage.keys(function(error, keys)   {
        if (error) throw error;
        
       for (var key of keys) {
            var option = document.createElement("option");
            option.text = key;
            list.add(option);
        }
    });
}



function loadCommentsTest() {
 // return the task that has been selected
    storage.get('SLO', function(error,data){
        if (error)
            throw error;
     
    })
}





