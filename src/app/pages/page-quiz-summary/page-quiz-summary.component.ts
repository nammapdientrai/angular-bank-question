import { Component, OnInit, Input } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

import { Question } from 'src/app/model/question.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-quiz-summary',
  templateUrl: './page-quiz-summary.component.html',
  styleUrls: ['./page-quiz-summary.component.css']
})
export class PageQuizSummaryComponent implements OnInit {
  questions: Array<Question> = new Array<Question>();

  constructor(private getService: GetService) { }

  ngOnInit() {
    this.getService.getQuestions().subscribe(
      questions => {
        questions.forEach(
          q => {
            this.pushQuestions(q)
          }
        )
      }
    );
  }

  pushQuestions(q: Question) {
    this.questions.push(q);
  }
}
