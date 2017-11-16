import test from 'ava'
import UUID from '../src/index'

const reg = /^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/

test('uuid reg test', (t) => {
  t.regex(UUID.generate, reg)
})
