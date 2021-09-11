import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { {Entity} } from '../../../model/fat/{entity}'
import { ModalShow } from '../../shared/modal-show'
import { {Entity}EditPage } from '../{entity}-edit/{entity}-edit.page'

@Component({
  templateUrl: './{entity}-list.page.html',
  styleUrls: ['./{entity}-list.page.scss']
})
export class {Entity}ListPage extends ModalShow {
  constructor(protected modal: ModalController) {
    super()
  }

  showEdit(x?: {Entity}) {
    this.showModal({Entity}EditPage, { {entityProp}: x })
  }
}

