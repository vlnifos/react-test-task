interface MultipleChoiceQuestion {
  id: number
  text: string
  points: number
  comments: string
  images: string[]
  type: "multiple_choice"
  answers: MultipleChoiceAnswer[]
}

interface MatchingQuestion {
  id: number
  text: string
  points: number
  comments: string
  images: string[]
  type: "matching"
  answers: MatchingPairs[]
}

export type MultipleChoiceAnswer = {
  id: number
  isCorrectAnswer: boolean
  text: string
  images: string[]
}

type PairDetail = {
  text: string
  images: string[]
}
export type MatchingPairs = {
  id: number
  question: PairDetail
  answer: PairDetail
}

export type Question = MultipleChoiceQuestion | MatchingQuestion
