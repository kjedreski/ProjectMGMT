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
//clear out drop down lists
function clearList(list){
    for ( var option = list.options.length - 1 ; option >= 0  ; option --) {
        list.remove(option)
    }
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

function loadKeys( ) {
        debug("entered loadKeys")
    var list = document.getElementById("TaskList");

    storage.keys(function(error, keys)   {
        if (error) throw error;
        
       for (var key of keys) {
            var option = document.createElement("option");
            option.text = key;
            option.value = key;
            list.add(option);
        }
    });
}
    

function loadComments() {
    var selectedTask = document.getElementById("TaskList").value;
    var list = document.getElementById("CommentList")
    
    // we need to clear out all options
    clearList(list)
    
    storage.get(selectedTask, function(error,data){
        if (error)
            throw error;
      
        for (var prop in data) {
            debug(data[prop].comment)
            var option = document.createElement("option");
            option.text = data[prop].comment;
            option.value = prop;
            list.add(option);
            
        } 
    })
}





