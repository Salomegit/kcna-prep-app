import { UserProgress,KCNATopic } from "../types";

const STORAGE_KEYS ={
    USER_PROGRESS: 'kcna_user_progress',
    BOOKMARKED_QUESTIONS: 'kcna_bookmarked_questions',
    QUIZ_HISTORY: 'kcna_quiz_history'

}

const defaultUserProgress: UserProgress = {
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    correctAnswers: 0,
    topicProgress: {
        'kubernetes-fundamentals': { answered: 0, correct: 0 },
        'container-orchestration': { answered: 0, correct: 0 },
        'cloud-native-architecture': { answered: 0, correct: 0 },   
        'cloud-native-observability': { answered: 0, correct: 0 },
        'cloud-native-application-delivery': { answered: 0, correct: 0 },
    },
    bookmarkedQuestions: [],
    lastactivity: new Date(),

    }

    export const getUSerProgress =(): UserProgress => {
        if (typeof window === 'undefined') return defaultUserProgress;
       try{
        const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
        if (stored){
            return {...defaultUserProgress, ...JSON.parse(stored) as UserProgress};
        }

       } catch (error){
        console.error('Error retrieving user progress from localStorage:', error);
       }
         return defaultUserProgress;
    }

    export const saveUserProgress = (progress: UserProgress) => {
        if (typeof window === 'undefined') return;
        try{
            localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify({...progress,lastActivity: new Date()}));
        } catch (error){
            console.error('Error saving user progress to localStorage:', error);
        }};

    export const updateQuestionProgess = (
        topic: KCNATopic,
        isCorrect: boolean  
    ): void => {
        const progress = getUSerProgress();
        progress.totalQuestionsAnswered += 1;
        if (isCorrect){ progress.correctAnswers += 1;
        progress.topicProgress[topic].correct += 1;
    }
    progress.topicProgress[topic].answered += 1 ;

    saveUserProgress(progress);
}

export const toggleBookmark = (questionId:string): void =>{
    const progress = getUSerProgress();
    const bookmarks = progress.bookmarkedQuestions;

    if (bookmarks.includes(questionId)){
        progress.bookmarkedQuestions = bookmarks.filter(id => id !== questionId);
    }
    else{
        progress.bookmarkedQuestions = [...bookmarks, questionId];
    }
    saveUserProgress(progress);
}

export const getBookmarkedQuestions = (): string[] =>{
    const progress = getUSerProgress();
    return progress.bookmarkedQuestions;
}

export const clearAllProgress = (): void =>{
    if (typeof window === 'undefined') return;
    try{
        localStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
        localStorage.removeItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS);
        localStorage.removeItem(STORAGE_KEYS.QUIZ_HISTORY);
    } catch (error){
        console.error('Error clearing user progress from localStorage:', error);
    }
}