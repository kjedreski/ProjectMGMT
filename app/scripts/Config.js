// CONFIG.JS

// PURPOSE:  ALL CRUD OPERATIONS EXISTS HERE 
// PATTERNs: Exporting as an Object of functions
  
// ELECTRON DECLARATIONS
const storage = require('electron-json-storage');
const remote = require('electron').remote;
const app = remote.app;
var path = require("path")
// UTILITIES LIB, ALL NON-DIRECT CRUD FUNCTIONS
var utilities = require( path.resolve( __dirname, '../scripts/utils.js' ) );


//NEEDED 
function debug(debug) {
    app.console.log(debug)
    //alert(document.getElementsByName("TaskName")[0].value )
}

// function loaded on page
function initalizePage() {
    //if you are debugging anything put them here first
  //  var today = new Date();
   // today.setHours(0,0,0,0)
    // read this out to the humans but store date object into JSON object
   // var printDate = today.toString().substring(4,15)
    debug( utilities.buildDate())

    
    //Make comment list invisible for now
    document.getElementById("CommentList").style.visibility = "hidden"
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
     
    var list = document.getElementById("TaskList");
  
    storage.keys(function(error, keys)   {
        if (error) throw error;
        
       for (var key of keys) {
            var option = document.createElement("option");
            option.text = key;
            option.value = key;
            list.add(option);
        }
        
        //now assign the {New} task
        var option = document.createElement("option");
        option.value = ""
        
    });
}
    

function loadComments() {
    var selectedTask = document.getElementById("TaskList").value;
    var list = document.getElementById("CommentList")
    //show comment list
    list.style.visibility = "visible"
    // we need to clear out all options
    utilities.clearList(list);
    
    
      debug("here")
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





