import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { HomeModule } from './home/home.module';
import { ErroModule } from './core/erro/erro.module';
import { ErrosInterceptor } from './core/erro/erros.interceptor';


@NgModule({
    declarations: [
        AppComponent, 
    ],
    providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AutenticacaoInterceptor,
        multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrosInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        HomeModule,
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        ErroModule
        //BuscaModule // LazyLoad
    ]
})
export class AppModule { }
