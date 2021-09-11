import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination'
import { {Entity}SearchComponent } from '../../{entity}/{entity}-search/{entity}-search.component'

@NgModule({
  imports: [CommonModule, IonicModule, NgxPaginationModule],
  declarations: [{Entity}SearchComponent],
  exports: [{Entity}SearchComponent]
})
export class {Entity}SearchModule {}
