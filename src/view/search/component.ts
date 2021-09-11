import { Component, Input } from '@angular/core'
import { QueryParams } from 'ionic-state'
import { {Entity} } from '../../../model/fat/{entity}'
import { paginated } from '../../../selector/{entity}'
import { StoreRepository } from '../../../store/store-repository'
import { Searchable } from '../../shared/searchable'

@Component({
  selector: '{entity}-search',
  templateUrl: './{entity}-search.component.html',
  styleUrls: ['./{entity}-search.component.scss']
})
export class {Entity}SearchComponent extends Searchable<{Entity}> {
  @Input()
  forSelect = false

  constructor(private store: StoreRepository) {
    super()
    this.paginated$ = this.store.select(paginated)
  }

  apiQuery = (q: QueryParams) => this.store.{entityProp}.load(q)
  searchFn = (x: {Entity}, search: string) =>
    [x].some(x =>
      x.toString().toLowerCase().includes(search.toLowerCase())
    )
}

