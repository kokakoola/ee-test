var hogan = require('hogan.js')
var fs = require('fs')

function readFileAsString(file) {
  return fs.readFileSync(file).toString()
}
function getTemplate(file) {
  var template = ""
  // read file as string
  template = readFileAsString(file)
  return template
}

var compiledTemplate = hogan.compile(getTemplate('myTemplate.txt'))

var context = {
  macroname: 'Sunday',
  howwastheday: 'nice'
}
console.log(compiledTemplate.render(context))
