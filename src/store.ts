import { Store } from '@ngrx/store'
import { EntityStore } from 'ionic-state'
import { AppState } from '../reducer/index'
import { {Entity} } from '../model/{entity}'
import { {Key} } from '{KeyPath}'
import * as state from '../reducer/{entity}'
import * as actions from '../action/{entity}'

export class {Entity}Store extends EntityStore<{Entity}, {Key}> {
  constructor(protected store: Store<AppState>) {
    super(
      new actions.Entity(),
      store.select(x => x.{entity}),
      (x: state.{Entity}State) => state.selector.selectAll(x).map({Entity}.apply)
    )
  }
}
