import exe from 'commander'
// import pkg from '@root/package.json'

export const cli = () => (
  exe.description(`convert javascript to zero-width characters and vice-versa`)
    .option(`-e, --encode`, `convert to phantomscript`)
    .option(`-d, --decode`, `convert from phantomscript (-e flag takes precedence)`)
    .option(`-o, --output`, `write to file`)
    .parse(process.argv)
)
