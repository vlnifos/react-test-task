import { Question } from "utils/types";

export interface ExamState {
  head: {
    grade: string;
    cource: string;
    subject: string;
    time: string;
  };
  schools: string[];
  questions: Question[];
}

const initialState: ExamState = {
  head: {
    cource: "",
    grade: "",
    subject: "",
    time: "",
  },
  questions: [],
  schools: [],
};
