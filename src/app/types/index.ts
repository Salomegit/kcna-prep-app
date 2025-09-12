export interface Question{
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    topic: KCNATopic;
    difficulty: 'easy' | 'medium' | 'hard';

}

export type KCNATopic = 
 | 'kubernetes-fundamentals'
  | 'container-orchestration'
  | 'cloud-native-architecture'
  | 'cloud-native-observability'
  | 'cloud-native-application-delivery';



export interface QuizState{
    questions: Question[];
    currentQuestionIndex: number;
    answers: (number | null)[];
    score: number;
    isCompleted: boolean;
    startTime: Date;
    endTime?: Date;
}

export interface UserProgress{
    totalQuestionsAnswered: number;
    totalCorrectAnswers: number;
    topicProgress: Record<KCNATopic, { answered: number; correct: number }>;
    bookmarkedQuestions: string[];
    lastactivity: Date;
}

export const TOPIC_LABELS: Record<KCNATopic, string> = {
    'kubernetes-fundamentals': 'Kubernetes Fundamentals',
    'container-orchestration': 'Container Orchestration',
    'cloud-native-architecture': 'Cloud Native Architecture',
    'cloud-native-observability': 'Cloud Native Observability',
    'cloud-native-application-delivery': 'Cloud Native Application Delivery',
};

export const TOPIC_COLORS: Record<KCNATopic, string> = {
    'kubernetes-fundamentals': 'bg-blue-500',
    'container-orchestration': 'bg-purple-500',
    'cloud-native-architecture': 'bg-green-500',
    'cloud-native-observability': 'bg-orange-500',
    'cloud-native-application-delivery': 'bg-pink-500',
};