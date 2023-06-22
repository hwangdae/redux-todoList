import React from 'react'
import uuid from "react-uuid";
import { addTodo } from '../redux/modules/todoList';
import { styled } from "styled-components";
import { useState } from "react";

const Header = styled.header`
  background: #eee;
`;

const FormContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const FormInner = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;
const InputWrap = styled.div`
  display: flex;
  gap: 20px;
`;
const FormInput = styled.input`
  width: 250px;
  padding: 0px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
`;

const FormButton = styled.button`
  padding: 10px 30px;
  border-radius: 7px;
  background: #3a3a3a;
  color: #fff;
  cursor: pointer;
`;

function Input({disPatch}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  return (
    <Header>
        <FormContainer>
          <FormInner
            onSubmit={(event) => {
              event.preventDefault();
              const newTodo = {
                id: uuid(),
                title: title,
                content: content,
                isDone: false,
              };
              disPatch(addTodo(newTodo));
              setTitle("");
              setContent("");
            }}
          >
            <InputWrap>
              <FormInput
                placeholder="제목 입력"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></FormInput>
              <FormInput
                placeholder="내용 입력"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              ></FormInput>
            </InputWrap>
            <FormButton>작성하기</FormButton>
          </FormInner>
        </FormContainer>
      </Header>
  )
}

export default Input