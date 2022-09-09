# Prova

```ts
interface Test: {
    QuestionId: number;
    DisciplineType: string;
    QuestionText: string;
    QuestionEnunciation: string;
    AnswerOptions: {
        id: number;
        AnswerText: string;
        isCorrect: boolean;
    }[];
    Font: string;
}[]
```
