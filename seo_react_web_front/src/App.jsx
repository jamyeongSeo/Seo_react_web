import { Route, Routes } from "react-router-dom";
import MemberJoin from "./component/member/MemberJoin";
import Header from "./component/common/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="main-wrap">
        <Routes>
          <Route path="/member/join" element={<MemberJoin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
