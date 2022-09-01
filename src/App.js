import Header from "./newTodo/Header";
import TodoItem from "./newTodo/TodoItem";
import Footer from "./newTodo/Footer";
import styled from "styled-components";
import Button from './CSS/Button';

const AppBlock = styled.p`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  background-color:white;
`;

function App() {

  return (

    <div>
      <Header />
      <TodoItem />
      <AppBlock>
        <Button>      <Footer />
        </Button>
      </AppBlock>
    </div>
  );
}

export default App;
