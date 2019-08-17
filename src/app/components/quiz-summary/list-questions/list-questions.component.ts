import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  @Input() inputQuestions: Array<Question>;
  
  count_questions: number = 0;

  questions: Array<{ q_id: number, q_content: string, q_a: string, q_b: string, q_c: string, q_d: string, answer_A: boolean, answer_B: boolean, answer_C: boolean, answer_D: boolean, choose: number }> = [
    { q_id: 1, q_content: 'What is your name ?', q_a: 'John', q_b: 'Henry', q_c: 'Mary', q_d: 'Lisa', answer_A: true, answer_B: false, answer_C: false, answer_D: false, choose: 1 },
    { q_id: 2, q_content: 'What is your age ?', q_a: '18', q_b: '16', q_c: '20', q_d: '23', answer_A: false, answer_B: false, answer_C: false, answer_D: true, choose: 1 },
    { q_id: 3, q_content: 'Where are you from ?', q_a: 'NY', q_b: 'LA', q_c: 'CA', q_d: 'MAM', answer_A: true, answer_B: false, answer_C: false, answer_D: false, choose: 1 },
    { q_id: 4, q_content: 'How many are there your friends ? (Choose three)', q_a: 'Eslsa', q_b: 'Queen', q_c: 'King', q_d: 'Thomas', answer_A: true, answer_B: true, answer_C: false, answer_D: true, choose: 3 },
    { q_id: 5, q_content: 'Two your girls friends ?', q_a: 'Misa', q_b: 'Lisa', q_c: 'yona', q_d: 'Mary', answer_A: true, answer_B: false, answer_C: false, answer_D: true, choose: 2 }
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.inputQuestions.length + " ================");
  }

}
