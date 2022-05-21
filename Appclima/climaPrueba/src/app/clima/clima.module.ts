import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerclimaComponent } from './pages/verclima/verclima.component';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VerclimaComponent
    
  ],
  imports: [
    CommonModule,

    FormsModule
  ],
  exports:[
   VerclimaComponent
  ],
})
export class ClimaModule { }
