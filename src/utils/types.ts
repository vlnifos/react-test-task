interface MultipleChoiceQuestion {
  text: string;
  points: number;
  comments: string;
  type: "multiple_choice";
  answers: MultipleChoiceAnswer[] | MatchingAnswer[];
}

interface MatchingQuestion {
  text: string;
  points: number;
  comments: string;
  type: "matching";
  answers: MultipleChoiceAnswer | MatchingAnswer;
}

export type MultipleChoiceAnswer = {
  isCorrectAnswer: boolean;
  text: string;
  imageSrc: string;
};

type PairDetail = {
  text: string;
  imageSrc: string;
};
export type MatchingPairs = {
  id: number;
  question: PairDetail;
  answer: PairDetail;
};

export type MatchingAnswer = {
  pairs: MatchingPairs[];
};

export type Question = MultipleChoiceQuestion | MatchingQuestion;

// TODO: below. Union should depend on type field
// export const a: Question = {
//   text: "awd",
//   points: 1,
//   comments: "awdawd",
//   type: "matching",
//   answers: [],
// };
