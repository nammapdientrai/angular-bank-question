import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GetService {
    url: string = "http://localhost:9999/api/";

    constructor(private http: HttpClient) { }

    getQuestions() {
        return this.http.get<Question[]>(this.url + 'get/questions');
    }
}
