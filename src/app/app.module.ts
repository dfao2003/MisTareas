import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ListaTareaComponent } from './pages/lista-tarea/lista-tarea.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from 'src/enviroments/enviroments';
import { FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ViewTareaComponent } from './pages/view-tarea/view-tarea.component';
import { EditarTareaComponent } from './pages/editar-tarea/editar-tarea.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcercadeComponent,
    TareaComponent,
    ListaTareaComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ViewTareaComponent,
    EditarTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: enviroment.firebaseConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
