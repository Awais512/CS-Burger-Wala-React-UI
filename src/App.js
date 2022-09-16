import { Route, Routes } from "react-router-dom";
import { Header, Home, Footer, Contact } from "./components";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
