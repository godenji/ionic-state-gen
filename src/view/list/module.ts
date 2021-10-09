import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { {Entity}ListPageRoutingModule } from './{entity}-list-routing.module'
import { {Entity}ListPage } from './{entity}-list.page'
import { {Entity}SearchModule } from '../../shared/module/{entity}-search.module'
import { {Entity}EditPageModule } from '../{entity}-edit/{entity}-edit.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    {Entity}EditPageModule,
    {Entity}SearchModule,
    {Entity}ListPageRoutingModule
  ],
  declarations: [{Entity}ListPage]
})
export class {Entity}ListPageModule {}

