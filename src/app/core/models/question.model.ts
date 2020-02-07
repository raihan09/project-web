import { CorrectAnswer } from './correctAnswer.model';
import { Choice } from 'src/app/core/models/choice.model';
export class Question{
    constructor(
        private questionType: any ,
        private questionTitle: any,
        private questionDesc: any,
        private listImg: any,
        private choice: Choice,
        private correctAnswer: CorrectAnswer,
        private activeState: any

        ){}
}