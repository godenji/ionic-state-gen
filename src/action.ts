import {
  NgrxAction,
  EntityActions,
  PatchUpdate,
  QueryParams,
  PaginatedResult
} from 'ionic-state'
import { {Entity} } from '../model/{entity}'
import { {Key} } from '{KeyPath}'

export const LOADING = 'LOADING {ENTITY}S'
export const LOADED = `LOADED {ENTITY}S`
export const LOADING_ONE = 'LOADING ONE {ENTITY}'
export const LOADED_ONE = 'LOADED ONE {ENTITY}'
export const ADD = 'ADD {ENTITY}'
export const ADDED = 'ADDED {ENTITY}'
export const ADD_MANY = 'ADD {ENTITY}S'
export const ADDED_MANY = 'ADDED {ENTITY}S'
export const UPDATE = 'UPDATE {ENTITY}'
export const UPDATED = 'UPDATED {ENTITY}'
export const UPDATE_MANY = 'UPDATE {ENTITY}S'
export const UPDATED_MANY = 'UPDATED {ENTITY}S'
export const DELETE = 'DELETE {ENTITY}'
export const DELETED = 'DELETED {ENTITY}'
export const DELETE_MANY = 'DELETE {ENTITY}S'
export const DELETED_MANY = 'DELETED {ENTITY}S'
export const SELECT = 'SELECT {ENTITY}'
export const FAILED = 'FAILED {ENTITY}'

export class Entity implements EntityActions<{Entity}, {Key}> {
  loading(q?: QueryParams) {
    return new Loading(q)
  }

  loadingOne(id: {Key}) {
    return new LoadingOne(id)
  }

  select(x: {Entity}) {
    return new Select(x)
  }

  create(x: {Entity}) {
    return new Add(x)
  }

  createMany(xs: {Entity}[]) {
    return new AddMany(xs)
  }

  update(x: {Entity}) {
    return new Update(x)
  }

  updateMany(x: PatchUpdate[]) {
    return new UpdateMany(x)
  }

  delete(x: {Entity}) {
    return new Delete(x)
  }

  deleteMany(xs: {Entity}[]) {
    return new DeleteMany(xs)
  }
}

export class Loading extends NgrxAction<QueryParams> {
  readonly type = LOADING
}

export class Loaded extends NgrxAction<PaginatedResult<{Entity}>> {
  readonly type = LOADED
}

export class LoadingOne extends NgrxAction<{Key}> {
  readonly type = LOADING_ONE
}

export class LoadedOne extends NgrxAction<{Entity}> {
  readonly type = LOADED_ONE
}

export class Update extends NgrxAction<{Entity}> {
  readonly type = UPDATE
}

export class Updated extends NgrxAction<{Entity}> {
  readonly type = UPDATED
}

export class UpdateMany extends NgrxAction<PatchUpdate[]> {
  readonly type = UPDATE_MANY
}

export class UpdatedMany extends NgrxAction<PatchUpdate[]> {
  readonly type = UPDATED_MANY
}

export class Delete extends NgrxAction<{Entity}> {
  readonly type = DELETE
}

export class Deleted extends NgrxAction<{Entity}> {
  readonly type = DELETED
}

export class DeleteMany extends NgrxAction<{Entity}[]> {
  readonly type = DELETE_MANY
}

export class DeletedMany extends NgrxAction<{Entity}[]> {
  readonly type = DELETED_MANY
}

export class Add extends NgrxAction<{Entity}> {
  readonly type = ADD
}

export class Added extends NgrxAction<{Entity}> {
  readonly type = ADDED
}

export class AddMany extends NgrxAction<{Entity}[]> {
  readonly type = ADD_MANY
}

export class AddedMany extends NgrxAction<{Entity}[]> {
  readonly type = ADDED_MANY
}

export class Select extends NgrxAction<{Entity}> {
  readonly type = SELECT
}

export class Failed extends NgrxAction<Error> {
  readonly type = FAILED
}

export type Actions =
  | Loading
  | Loaded
  | LoadingOne
  | LoadedOne
  | Update
  | Updated
  | UpdateMany
  | UpdatedMany
  | Delete
  | Deleted
  | DeleteMany
  | DeletedMany
  | Add
  | Added
  | AddMany
  | AddedMany
  | Select
  | Failed
