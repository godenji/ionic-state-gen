import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { {Entity} as FlatModel } from '../../../model/{entity}'
import { {Entity} } from '../../../model/fat/{entity}'
import { StoreRepository } from '../../../store/store-repository'
import { AlertShow } from '../../shared/alert-util'

@Component({
  templateUrl: './{entity}-edit.page.html',
  styleUrls: ['./{entity}-edit.page.scss']
})
export class {Entity}EditPage implements OnInit {
  {entityProp}: {Entity}

  constructor(
    private modal2: ModalController,
    private store: StoreRepository,
    private alert: AlertShow
  ) {}

  ngOnInit() {
    if (!this.{entityProp}) this.{entityProp} = {} as {Entity}
  }

  close() {
    this.modal2.getTop().then(x => x.dismiss())
  }

  save(x: FlatModel) {
    this.{entityProp}?.id ? this.store.{entityProp}.update(x) : this.store.{entityProp}.create(x)
    this.store.{entityProp}.onResult(
      _ => this.close(),
      e => this.alert.error(e)
    )
  }
}

