import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { {Entity}SearchPage } from './{entity}-search.page'
import { {Entity}SearchModule } from '../../shared/module/{entity}-search.module'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, {Entity}SearchModule],
  declarations: [{Entity}SearchPage]
})
export class {Entity}SearchPageModule {}

