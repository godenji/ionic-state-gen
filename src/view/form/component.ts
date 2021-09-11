import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { {Entity} as FlatModel } from '../../../model/{entity}'
import { {Entity} } from '../../../model/fat/{entity}'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ModalController } from '@ionic/angular'

@Component({
  selector: '{entity}-form',
  templateUrl: './{entity}-form.component.html',
  styleUrls: ['./{entity}-form.component.scss']
})
export class {Entity}FormComponent implements OnInit {
  @Input()
  {entityProp}: {Entity}

  @Output()
  saved: EventEmitter<FlatModel> = new EventEmitter()

  form: FormGroup

  constructor(private fb: FormBuilder, protected modal: ModalController) {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {}

  save() {
    this.saved
      .emit
      //{id: this.{entityProp}?.id}
      ()
  }
}

