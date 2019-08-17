import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-anwer',
  templateUrl: './table-anwer.component.html',
  styleUrls: ['./table-anwer.component.css']
})
export class TableAnwerComponent implements OnInit {
  count_questions: number = 0;

  questions: Array<{ q_id: number, q_content: string, q_a: string, q_b: string, q_c: string, q_d: string, answer_A: boolean, answer_B: boolean, answer_C: boolean, answer_D: boolean, choose: number }> = [
    { q_id: 1, q_content: 'What is your name ?', q_a: 'John', q_b: 'Henry', q_c: 'Mary', q_d: 'Lisa', answer_A: true, answer_B: false, answer_C: false, answer_D: false, choose: 1 },
    { q_id: 2, q_content: 'What is your age ?', q_a: '18', q_b: '16', q_c: '20', q_d: '23', answer_A: false, answer_B: false, answer_C: false, answer_D: true, choose: 1 },
    { q_id: 3, q_content: 'Where are you from ?', q_a: 'NY', q_b: 'LA', q_c: 'CA', q_d: 'MAM', answer_A: true, answer_B: false, answer_C: false, answer_D: false, choose: 1 },
    { q_id: 4, q_content: 'How many are there your friends ? (Choose three)', q_a: 'Eslsa', q_b: 'Queen', q_c: 'King', q_d: 'Thomas', answer_A: true, answer_B: true, answer_C: false, answer_D: true, choose: 3 },
    { q_id: 5, q_content: 'Two your girls friends ?', q_a: 'Misa', q_b: 'Lisa', q_c: 'yona', q_d: 'Mary', answer_A: true, answer_B: false, answer_C: false, answer_D: true, choose: 2 }
  ];

  answers: Array<{ id: string, answer_A: boolean, answer_B: boolean, answer_C: boolean, answer_D: boolean }> = [
    { id: '01', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    { id: '02', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    { id: '03', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    { id: '04', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    { id: '05', answer_A: false, answer_B: false, answer_C: false, answer_D: false }
    // ,
    // { id: '06', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '07', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '08', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '09', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '10', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '11', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '12', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '13', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '14', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '15', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '16', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '17', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '18', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '19', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
    // { id: '20', answer_A: false, answer_B: false, answer_C: false, answer_D: false },
  ];

  constructor() { }

  ngOnInit() {
  }
  onClickMe(id: string, choose: number) {
    let index = this.answers.findIndex(a => a.id == id);

    switch (choose) {
      case 1:
        this.answers[index].answer_A = !this.answers[index].answer_A
        break

      case 2:
        this.answers[index].answer_B = !this.answers[index].answer_B
        break

      case 3:
        this.answers[index].answer_C = !this.answers[index].answer_C
        break

      case 4:
        this.answers[index].answer_D = !this.answers[index].answer_D
        break
    }
  }

  onClickFinish() {
    this.count_questions = 0;
    let size = this.answers.length;

    for (let i = 0; i < size; i++) {
      let count = 0;

      if (this.answers[i].answer_A == true && this.questions[i].answer_A == true) {
        count++;
      }

      if (this.answers[i].answer_B == true && this.questions[i].answer_B == true) {
        count++;
      }

      if (this.answers[i].answer_C == true && this.questions[i].answer_C == true) {
        count++;
      }

      if (this.answers[i].answer_D == true && this.questions[i].answer_D == true) {
        count++;
      }

      if (count == this.questions[i].choose) {
        this.count_questions++;
      }
    }
  }

  onClickReset() {
    this.answers.forEach(anwer => {
      anwer.answer_A = false;
      anwer.answer_B = false;
      anwer.answer_C = false;
      anwer.answer_D = false;
    });
  }
}
