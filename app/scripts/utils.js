
//clear out drop down lists

module.exports = {
    //clears html option list
    clearList:  function (list){
        for ( var option = list.options.length - 1 ; option >= 0  ; option --) {
            list.remove(option) }
    },
            
    readStoragePath:   function () {
            app.console.log("Path: " + app.getPath('userData'))
    },
    // builds input string        
    buildJson:  function (comment){
        //Put a loop here and iterate through elements and add them to file
        let TaskName = document.getElementsByName("TaskName")[0].value;
        let jsonData = "{ " + "comment1: " + comment + "}";   
        return jsonData
    },
    
    buildDate:  function(){
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth();
        var day = currentDate.getDate();
        return  (month.toString() + "/" + day.toString() + "/" + year.toString() )
        
        
    }
    

}




/*

module.exports.buildJSON =  function BuildJson(comment){
    //Put a loop here and iterate through elements and add them to file
     let TaskName = document.getElementsByName("TaskName")[0].value;
     let jsonData = "{ " + "comment1: " + comment + "}";   
     return jsonData
}
*/
// ********************* //