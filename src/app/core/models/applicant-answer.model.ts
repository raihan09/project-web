import { AppAnswer } from './appAnswer.model';
import { PackQuestion } from './packQuestion.model';
import { HeaderAppAnswer } from "./headerAppAnswer.model";

export class ApplicantAnswer{
    constructor(
        private headerAppAnswer: HeaderAppAnswer,
        private packQuestion: PackQuestion ,
        private appAnswer: AppAnswer
        ){}
}