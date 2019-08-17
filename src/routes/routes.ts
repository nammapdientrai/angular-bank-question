import { Routes } from "@angular/router";

import { PageLoginComponent } from 'src/app/pages/page-login/page-login.component';
import { PageHomeComponent } from 'src/app/pages/page-home/page-home.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { PageQuizSummaryComponent } from 'src/app/pages/page-quiz-summary/page-quiz-summary.component';
import { Book01Component } from 'src/app/components/books/book01/book01.component';


export const routesConfig: Routes = [
    { path: 'page-login', component: PageLoginComponent },
    { path: 'page-home', component: PageHomeComponent },
    { path: 'page-quiz-summary', component: PageQuizSummaryComponent },
    {
        path: 'page-books', children: [
            { path: 'book-01', component: Book01Component }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];
