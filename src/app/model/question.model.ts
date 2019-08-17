import { Answer } from './answer.model';
import { Result } from './result.model';

export class Question {
    question_id: string;
    question_content: string;
    question_type: number;
    question_part: number;
    answer: Answer;
    result: Result;

    constructor(
        question_id: string,
        question_content: string,
        question_type: number,
        question_part: number,
        answer: Answer,
        result: Result,
    ) {
        this.question_id = question_id;
        this.question_content = question_content;
        this.question_type = question_type;
        this.question_part = question_part;
        this.answer = answer;
        this.result = result;
    }
}