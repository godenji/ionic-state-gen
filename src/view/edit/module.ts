import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { {Entity}EditPage } from './{entity}-edit.page'
import { {Entity}FormComponent } from '../{entity}-form/{entity}-form.component'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [{Entity}EditPage, {Entity}FormComponent]
})
export class {Entity}EditPageModule {}

