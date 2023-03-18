import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SubFirstComponent } from './first-component/sub-first/sub-first.component';
import { FooterPsComponent } from './footer-ps/footer-ps.component';
import { SubmoduleModule } from './submodule/submodule.module';
import { SubSecondComponent } from './first-component/sub-second/sub-second.component';
import { SubThirdComponent } from './first-component/sub-third/sub-third.component';
import { Submodule2Module } from './submodule2/submodule2.module';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { InputOutputComponent } from './fifth-component/input-output/input-output.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { InputOutputPracticesModule } from './input-output-practices/input-output-practices.module';
import { CiclesComponent } from './cicles/cicles.component';
import { VishComponent } from './angular-vish/vish/vish.component';
import { ClassFiveComponent } from './angular-vish/class-five/class-five.component';
import { ClassFifteenComponent } from './angular-vish/class-fifteen/class-fifteen.component';
import { ClassSeventeenComponent } from './angular-vish/class-seventeen/class-seventeen.component';
import { PeopleService } from './angular-vish/class-fifteen/people.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SubFirstComponent,
    FooterPsComponent,
    SubSecondComponent,
    SubThirdComponent,
    FifthComponentComponent,
    InputOutputComponent,
    SixthComponentComponent,
    CiclesComponent,
    VishComponent,
    ClassFiveComponent,
    ClassFifteenComponent,
    ClassSeventeenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmoduleModule,
    Submodule2Module,
    FormsModule,
    InputOutputPracticesModule,
    HttpClientModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
