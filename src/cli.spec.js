/* global test */
import path from 'path'
import execa from 'execa'
import {t} from 'germs/lib/test-helpers'

const CLI = `node ${path.resolve(__dirname, `../boo.js`)}`

test(`echo butts | boo -e | boo -d => "butts"`, (done) => {
  t.plan(1)
  execa.shell(`${CLI} -e "butts" | ${CLI} -d | ${CLI} -e | ${CLI} -d`).then((x) => {
    t.is(x.stdout, `butts`)
    done()
  })
})
