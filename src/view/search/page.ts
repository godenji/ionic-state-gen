import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { {Entity} } from '../../../model/fat/{entity}'

@Component({
  templateUrl: './{entity}-search.page.html',
  styleUrls: ['./{entity}-search.page.scss']
})
export class {Entity}SearchPage {
  constructor(private modal: ModalController) {}

  close(x?: {Entity}) {
    this.modal.dismiss(x)
  }
}
