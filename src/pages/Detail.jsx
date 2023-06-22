import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import todoList from "../redux/modules/todoList";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const DetailBox = styled.div`
  width: 500px;
  padding: 10px 20px;
  border: solid 1px #111;
`;

const DetailId = styled.p`
  border-bottom: solid 1px black;
  padding-bottom: 20px;
`;

const DetailTitle = styled.h2`
  margin-top: 35px;
`;
const DetailContent = styled.h3``;

const DetailButton = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  float: right;
  cursor: pointer;
`;

function Detail() {
  const navigate = useNavigate();
  const params = useParams();

  const todos = useSelector((state) => {
    return state.todoList;
  });
 
  const foundData = todos.find((item) => {
    console.log(item.id)
    console.log(params.id)
    console.log('`````````````````````````')

    return item.id === params.id;
  });

  console.log(foundData)

  return (
    <DetailContainer>
      <DetailBox>
        <DetailId>ID : {foundData.id}</DetailId>
        <DetailTitle>{foundData.title}</DetailTitle>
        <DetailContent>{foundData.content}</DetailContent>
        <DetailButton onClick={()=>{
          navigate('/')
        }}>홈으로 가기</DetailButton>
      </DetailBox>
    </DetailContainer>
  );
}

export default Detail;
