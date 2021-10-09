import { {Entity} } from '../model/{entity}'
import { {Key} } from '{KeyPath}'
import { selector, {Entity}State } from '../reducer/{entity}'
import { Selector } from 'ionic-state'

const o = new Selector<{Entity}, {Key}, {Entity}State>('{entityProp}', selector)

export const select{Entity}ById = o.byId
export const paginated = o.paginated

