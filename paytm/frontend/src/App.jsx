import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" elements={<Signup />} />
          {/* <Route path="/signin" elements={<Signin />} />
          <Route path="/dashboard" elements={<Dashboard />} />
          <Route path="/send" elements={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
