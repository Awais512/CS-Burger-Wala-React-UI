import { Route, Routes } from "react-router-dom";
import { Header, Home } from "./components";
import "./styles/app.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
