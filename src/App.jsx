import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" />
        <Route path="/resources" />
        <Route path="/pricing" />
      </Routes>
    </>
  );
}

export default App;
