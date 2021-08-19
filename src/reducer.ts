import { createEntityAdapter, EntityAdapter } from '@ngrx/entity'
import { EntityReducer, EntitySelector, EntityState, defaultState } from 'ionic-state'
import { {Entity} } from '../model/{entity}'
import { {Key} } from '{KeyPath}'
import * as actions from '../action/{entity}'

export interface {Entity}State extends EntityState<{Entity}, {Key}> {}

export const adapter: EntityAdapter<{Entity}> = createEntityAdapter<{Entity}>({
  selectId: ({entityProp}: {Entity}) => `${{entityProp}.id}`,
  sortComparer: false
})

export const selector = new EntitySelector(adapter).selectors()

const initialState: {Entity}State = adapter.getInitialState(defaultState)

export function {entityProp}Reducer(state = initialState, action: actions.Actions) {
  const reducer = new EntityReducer(adapter, state, (x: {Entity}) => x)
  switch (action.type) {
    case actions.LOADING:
    case actions.LOADING_ONE: {
      return reducer.loading()
    }

    case actions.LOADED: {
      return reducer.loaded(action.payload)
    }

    case actions.LOADED_ONE: {
      return reducer.loadedOne(action.payload)
    }

    case actions.ADD:
    case actions.ADD_MANY: {
      return reducer.add()
    }

    case actions.ADDED: {
      return reducer.added(action.payload)
    }

    case actions.ADDED_MANY: {
      return reducer.addedMany(action.payload)
    }

    case actions.UPDATE:
    case actions.UPDATE_MANY: {
      return reducer.update()
    }

    case actions.UPDATED: {
      return reducer.updated(action.payload)
    }

    case actions.UPDATED_MANY: {
      return reducer.updatedMany(action.payload)
    }

    case actions.DELETE:
    case actions.DELETE_MANY: {
      return reducer.delete()
    }

    case actions.DELETED: {
      return reducer.deleted(action.payload)
    }

    case actions.DELETED_MANY: {
      return reducer.deletedMany(action.payload)
    }

    case actions.SELECT: {
      return reducer.selected(action.payload)
    }

    case actions.FAILED: {
      return reducer.failed(action.payload)
    }

    default:
      return state
  }
}
