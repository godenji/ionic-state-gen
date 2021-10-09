import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { {Entity} as FlatModel } from '../../../model/{entity}'
import { {Entity} } from '../../../model/fat/{entity}'
import { FormBuilder, FormGroup } from '@angular/forms'
import { FormModal } from '../../shared/form-modal'
import { ModalController } from '@ionic/angular'

@Component({
  selector: '{entity}-form',
  templateUrl: './{entity}-form.component.html',
  styleUrls: ['./{entity}-form.component.scss']
})
export class {Entity}FormComponent extends FormModal implements OnInit {
  @Input()
  {entityProp}: {Entity}

  @Output()
  saved: EventEmitter<FlatModel> = new EventEmitter()

  form: FormGroup

  constructor(private fb: FormBuilder, protected modal: ModalController) {
    super(modal)
  }

  ngOnInit() {
    if (this.{entityProp}?.id) {
      
    }
    this.initForm()
  }

  initForm() {

    this.form = this.fb.group({})
  }

  save() {
    this.saved
      .emit
      //{id: this.{entityProp}?.id}
      ()
  }
}
