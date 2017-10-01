const pkg = require(`../package.json`)
const path = require(`path`)
const {bundle} = require(`germs`)

const external = (
  pkg && pkg.dependencies ?
    Object.keys(pkg.dependencies) :
    []
).concat(`fs`)
const local = (x) => path.resolve(__dirname, x)

module.exports = bundle({
  name: pkg.name,
  alias: {
    [`@root`]: local(`..`),
    [`@phantomscript`]: local(`../src`),
    [`@cli`]: local(`../src/cli`),
    [`@constants`]: local(`../src/constants`),
    [`@fn`]: local(`../src/fn`)
  },
  external,
  input: `src/index.js`,
  output: {
    file: `./${pkg.name}.mjs`,
    format: `es`
  }
})
