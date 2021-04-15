import styled from "styled-components";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import { useStateValue } from "./contexts/StateProvider";

function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <AppContainer>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Feed />
            <Widgets />
          </AppBody>
        </>
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100%;
  background-color: #f1f2f5;
`;
const AppBody = styled.div`
  display: flex;
  /* margin-top: 20px; */
`;

export default App;
