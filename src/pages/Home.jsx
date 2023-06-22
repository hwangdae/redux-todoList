import { useDispatch } from "react-redux";
import Input from "../components/Input";
import TodoList from "../components/TodoList";

function Home() {
  const disPatch = useDispatch();

  return (
    <>
      <Input disPatch={disPatch} />
      <TodoList disPatch={disPatch} isDone={false} />
      <TodoList disPatch={disPatch} isDone={true} />
    </>
  );
}

export default Home;
