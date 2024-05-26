import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { MainServiceService } from './services/main-service.service';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ApiModule, BASE_PATH } from 'elasticemail-angular';
import { HttpClientModule } from '@angular/common/http';

// const config = {
//   apiKey: "AIzaSyCpALxydPCsA4EXBWAkini0flkt1_4D8nU",
//     authDomain: "shreyasambreportfoliofirbseapp.firebaseapp.com",
//     projectId: "shreyasambreportfoliofirbseapp",
//     storageBucket: "shreyasambreportfoliofirbseapp.appspot.com",
//     messagingSenderId: "485676699494",
//     appId: "1:485676699494:web:76a996c03c10d6357142a7",
//     measurementId: "G-5PX06KD7L3"
// };

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(config),
    AngularFirestoreModule,

    ApiModule,
    HttpClientModule,
  ],
  providers: [MainServiceService, {provide: BASE_PATH, useValue: 'http://127.0.0.1:8080'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
