import { Route, Routes } from "react-router-dom";
import { Header, Home, Footer } from "./components";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Founder.scss";
import "./styles/menu.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
