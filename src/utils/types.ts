interface MultipleChoiceQuestion {
  text: string
  points: number
  comments: string
  type: "multiple_choice"
  answers: MultipleChoiceAnswer[]
}

interface MatchingQuestion {
  text: string
  points: number
  comments: string
  type: "matching"
  pairs: MatchingPairs[]
}

export type MultipleChoiceAnswer = {
  isCorrectAnswer: boolean
  text: string
  imageSrc: string
}

type PairDetail = {
  text: string
  imageSrc: string
}
export type MatchingPairs = {
  id: number
  question: PairDetail
  answer: PairDetail
}

export type Question = MultipleChoiceQuestion | MatchingQuestion
