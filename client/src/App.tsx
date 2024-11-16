import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const OutletWrapper = styled.main`
  flex: 1;
  background: #f5f5f5;
`;

function App() {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </>
  );
}

export default App;
