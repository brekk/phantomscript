const germs = require(`germs`)
const pkg = require(`./package.json`)

module.exports = germs.build(pkg.name, {
  readme: {
    script: `documentation readme -s "API" src/*.js src/*/*.js`,
    description: `regenerate the readme`
  }
})
