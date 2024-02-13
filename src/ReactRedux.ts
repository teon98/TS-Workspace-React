import { createStore } from 'redux';
type MoodData = {
  moodTemp: number;
  date: Date;
}

/* 리덕스로 관리할 상태 정의 */
type CounterState = {
  moods: MoodData[];
}

const initialState: CounterState = {
  moods: [
    { moodTemp: 0, date: new Date('2024-02-03') },
    { moodTemp: 50, date: new Date('2024-02-04') },
    { moodTemp: 30, date: new Date('2024-02-05') },
    { moodTemp: 70, date: new Date('2024-02-06') },
  ],
}

/* 액션 타입 정의 */
export const ADD_MOOD = 'ADD_MOOD' as const;

/* 액션 생성함수 정의 */
export const addMood = (moodTemp: number, date: Date) => ({ type: ADD_MOOD, payload: { moodTemp, date } });

type CounterAction = ReturnType<typeof addMood>;

/* 리듀서 생성 */
function reducer(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case ADD_MOOD:
      return {
        moods: [
          ...state.moods,
          {
            moodTemp: action.payload.moodTemp,
            date: action.payload.date
          }
        ]
      }
    default:
      return state;
  }
}

export default reducer;