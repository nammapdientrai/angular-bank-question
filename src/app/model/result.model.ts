export class Result {
    result_id: string;
    a: number;
    b: number;
    c: number;
    e: number;
    f: number;

    constructor(
        result_id: string,
        a: number,
        b: number,
        c: number,
        e: number,
        f: number
    ) {
        this.result_id = result_id;
        this.a = a;
        this.b = b;
        this.c = c;
        this.e = e;
        this.f = f;
    }
}