interface MultipleChoiceQuestion {
  id: number
  text: string
  points: number
  comments: string
  type: "multiple_choice"
  images: string[]
  answers: MultipleChoiceAnswer[]
}

interface MatchingQuestion {
  id: number
  text: string
  points: number
  comments: string
  type: "matching"
  images: string[]
  pairs: MatchingPairs[]
}

export type MultipleChoiceAnswer = {
  id: number
  isCorrectAnswer: boolean
  text: string
  images: string[]
}

type PairDetail = {
  id: number
  text: string
  images: string[]
}
export type MatchingPairs = {
  id: number
  question: PairDetail
  answer: PairDetail
}

export type Question = MultipleChoiceQuestion | MatchingQuestion
