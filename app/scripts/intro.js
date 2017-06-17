const remote = require('electron').remote
var version = remote.getGlobal('version')

document.write(version)

