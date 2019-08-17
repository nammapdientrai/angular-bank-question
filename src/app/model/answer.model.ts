export class Answer {
    answer_id: string;
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string;
    answer_f: string;

    constructor(
        answer_id: string,
        answer_a: string,
        answer_b: string,
        answer_c: string,
        answer_d: string,
        answer_e: string,
        answer_f: string,
    ) {
        this.answer_id = answer_id;
        this.answer_a = answer_a;
        this.answer_b = answer_b;
        this.answer_c = answer_c;
        this.answer_d = answer_d;
        this.answer_e = answer_e;
        this.answer_f = answer_f;
    }
}