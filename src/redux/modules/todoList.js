import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const CHANGE_ISDONE = "CHANGE_ISDONE";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload: payload,
  };
};

export const changeIsDone = (payload) => {
  return {
    type: CHANGE_ISDONE,
    payload: payload,
  };
};

export const initialState = [
  { id: uuid(), title: "리액트", content: "리액트 공부하기", isDone: false },
  { id: uuid(), title: "자바스크립트", content: "자바스크립트 공부하기", isDone: true },
  { id: uuid(), title: "타입스크립트", content: "타입스크립트 공부하기", isDone: false },
  { id: uuid(), title: "파이썬", content: "파이썬 공부하기", isDone: true },
];



const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    case CHANGE_ISDONE:
        return state.map((item)=>{
            if(item.id === action.payload){
                return {...item, isDone:!item.isDone}
            }else{
                return item
            }
        })
    default:
      return state;
  }
};

console.log(initialState)
export default todoList;
