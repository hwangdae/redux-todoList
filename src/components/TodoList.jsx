import React from "react";
import { styled } from "styled-components";
import { delTodo, changeIsDone } from "../redux/modules/todoList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ListContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const ListStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 0px 20px;
  margin: 15px 0px;
`;

const ListButtonWrap = styled.div`
  display: flex;
  gap: 6px;
`;

const MainDetailButton = styled.button`
  padding: 12px 18px;
  border-radius: 5px;
  background: #3f3f3f;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const DelButton = styled.button`
  padding: 12px 24px;
  border-radius: 5px;
  background: #bd4b4b;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ChangeButton = styled.button`
  padding: 12px 24px;
  border-radius: 5px;
  background: #40775c;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function TodoList({ disPatch, isDone }) {
  const navigate = useNavigate();

  const todos = useSelector((state) => {
    return state.todoList;
  });

  return (
    <ListContainer>
      <h1>{isDone ? "Done..." : "Work..."}</h1>
      {todos
        .filter((item) => {
          return item.isDone === isDone;
        })
        .map((todo) => {
          return (
            <ListStyle key={todo.id}>
              <div>
                <h2>{todo.title}</h2>
                <h3>{todo.content}</h3>
              </div>
              <ListButtonWrap>
                <MainDetailButton
                  onClick={() => {
                    navigate(`/Detail/${todo.id}`);
                  }}
                >
                  상세보기
                </MainDetailButton>
                <DelButton
                  onClick={() => {
                    disPatch(delTodo(todo.id));
                  }}
                >
                  삭제
                </DelButton>
                <ChangeButton
                  onClick={() => {
                    disPatch(changeIsDone(todo.id));
                  }}
                >
                  {isDone ? "취소" : "완료"}
                </ChangeButton>
              </ListButtonWrap>
            </ListStyle>
          );
        })}
    </ListContainer>
  );
}

export default TodoList;
