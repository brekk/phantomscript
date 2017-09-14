import commander from 'commander'
// import pkg from '@root/package.json'

export const cmd = () => (
  commander.description(`convert javascript to zero-width characters and vice-versa`)
    .option(`-e, --encode`, `convert to phantomscript`)
    .option(`-d, --decode`, `convert from phantomscript (-e flag takes precedence)`)
    .option(`-o, --output [file]`, `write to file`)
    .option(`--stdin`, `read from stdin`)
    .parse(process.argv)
)
