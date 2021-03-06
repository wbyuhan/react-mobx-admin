
const modulesFiles = require.context('./modules', true, /.ts$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {   
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const context:any = {}

Object.keys(modules).forEach(item => {
  context[item] = new modules[item]()
})



export default context





