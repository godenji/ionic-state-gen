import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { DaoRepository } from '../dao/dao-repository'
import { ResponseHandler } from 'ionic-state'
import { catchError, flatMap, map } from 'rxjs/operators'
import * as actions from '../action/{entity}'

@Injectable({ providedIn: 'root' })
export class {Entity}Effect extends ResponseHandler {
  constructor(private actions$: Actions, private repo: DaoRepository) {
    super(err => new actions.Failed(err))
  }

  @Effect()
  load = this.actions$.pipe(
    ofType<actions.Loading>(actions.LOADING),
    flatMap(x =>
      this.repo.{entityProp}.findAll(x.payload).pipe(
        map(x => new actions.Loaded(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  loadOne = this.actions$.pipe(
    ofType<actions.LoadingOne>(actions.LOADING_ONE),
    flatMap(x =>
      this.repo.{entityProp}.findById(x.payload).pipe(
        map(x => new actions.LoadedOne(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  add = this.actions$.pipe(
    ofType<actions.Add>(actions.ADD),
    flatMap(x =>
      this.repo.{entityProp}.create(x.payload).pipe(
        map(x => new actions.Added(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  addMany = this.actions$.pipe(
    ofType<actions.AddMany>(actions.ADD_MANY),
    flatMap(x =>
      this.repo.{entityProp}.createMany(x.payload).pipe(
        map(x => new actions.AddedMany(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  update = this.actions$.pipe(
    ofType<actions.Update>(actions.UPDATE),
    flatMap(x =>
      this.repo.{entityProp}.update(x.payload).pipe(
        map(x => new actions.Updated(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  updateMany = this.actions$.pipe(
    ofType<actions.UpdateMany>(actions.UPDATE_MANY),
    flatMap(x =>
      this.repo.{entityProp}.updateMany(x.payload).pipe(
        map(x => new actions.UpdatedMany(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  delete = this.actions$.pipe(
    ofType<actions.Delete>(actions.DELETE),
    flatMap(x =>
      this.repo.{entityProp}.delete(x.payload).pipe(
        map(x => new actions.Deleted(x.body)),
        catchError(this.errorHandler)
      )
    )
  )

  @Effect()
  deleteMany = this.actions$.pipe(
    ofType<actions.DeleteMany>(actions.DELETE_MANY),
    flatMap(x =>
      this.repo.{entityProp}.deleteMany(x.payload).pipe(
        map(x => new actions.DeletedMany(x.body)),
        catchError(this.errorHandler)
      )
    )
  )
}
