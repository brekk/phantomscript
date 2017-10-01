module.exports = {
  resolve: {
    extensions: [`.js`, `.json`],
    modules: [
      `${__dirname}/node_modules`
    ],
    alias: {
      "@root": `${__dirname}`,
      "@phantomscript": `${__dirname}/src`,
      "@cli": `${__dirname}/src/cli`,
      "@constants": `${__dirname}/src/constants`,
      "@fn": `${__dirname}/src/fn`
    }
  }
}
