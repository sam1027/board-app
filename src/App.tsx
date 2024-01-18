import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import View from "./pages/View";
import Write from "./pages/Write";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 50px;
`;

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/view/:contentId" element={<View />}></Route>
          <Route path="/write/:contentId" element={<Write />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>  
    </AppDiv>
  );
}

export default App;
