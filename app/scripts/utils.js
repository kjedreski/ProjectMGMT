alert("loaded!")
//clear out drop down lists
module.exports.clearList = function clearList(list){
    for ( var option = list.options.length - 1 ; option >= 0  ; option --) {
        list.remove(option)
    }
};

export function square(x) {
    return x * x;
}
// ********************* //