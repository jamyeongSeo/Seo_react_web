import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrap">
      <h1 className="title-wrap">회원가입/로그인 사이트</h1>
      <div>
        <Navi />
      </div>
    </div>
  );
};

const Navi = () => {
  return (
    <ul>
      <li>
        <Link to="/member/join">회원가입</Link>
      </li>
      <li>
        <Link to="/member/lojin">로그인</Link>
      </li>
    </ul>
  );
};

export default Header;
