import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GuiHtmlComponent } from './components/gui-html/gui-html.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GuiLoginComponent } from './components/gui-login/gui-login.component';

import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

import { routesConfig } from 'src/routes/routes';
import { PageQuizSummaryComponent } from './pages/page-quiz-summary/page-quiz-summary.component';
import { PageBooksComponent } from './pages/page-books/page-books.component';
import { HomeComponent } from './components/home/home.component';
import { Book01Component } from './components/books/book01/book01.component';
import { HeaderComponent } from './components/header/header.component';
import { TableAnwerComponent } from './components/quiz-summary/table-anwer/table-anwer.component';
import { ListQuestionsComponent } from './components/quiz-summary/list-questions/list-questions.component';
import { ResultComponent } from './components/quiz-summary/result/result.component';
import { GetService } from './services/get.service';

@NgModule({
  declarations: [
    AppComponent,
    GuiHtmlComponent,
    GuiLoginComponent,
    PageLoginComponent,
    PageNotFoundComponent,
    PageHomeComponent,
    PageQuizSummaryComponent,
    PageBooksComponent,
    HomeComponent,
    Book01Component,
    HeaderComponent,
    TableAnwerComponent,
    ListQuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    RouterModule.forRoot(routesConfig),
    HttpClientModule
  ],
  providers: [
    GetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
