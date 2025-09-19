import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const MemberJoin = () => {
  const [member, setMember] = useState({
    memberId: "",
    memberPw: "",
    memberName: "",
    memberPhone: "",
  });
  const inputDat = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newMember = { ...member, [name]: value };
    console.log(newMember);
    setMember(newMember);
  };
  const joinMember = () => {
    Swal.fire({
      text: "회원 가입 곧 해줄게 기달려봐봐",
      icon: "info",
    });
  };

  const [idCheck, setIdCheck] = useState(0);
  const checkId = () => {
    //정규표현식->정규표현시 맞으면 1
    const idReg = /^[a-zA-Z0-9]{6,12}$/;
    if (idReg.test(member.memberId)) {
    } else {
      setIdCheck(1);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          joinMember();
        }}
      >
        <ul className="input-wrap">
          <li>
            <div>
              <label htmlFor="memberId">아이디</label>
            </div>
            <div>
              <input
                type="text"
                name="memberId"
                id="memberId"
                value={member.memberId}
                onChange={inputDat}
                onBlur={checkId}
              />
            </div>
            <p>
              {idCheck === 1 &&
                "아이디는 대/소문자, 숫자 포함 6~12자리 입니다."}
            </p>
          </li>

          <li>
            <div>
              <label htmlFor="memberPw">비밀번호</label>
            </div>
            <div>
              <input
                type="password"
                name="memberPw"
                id="memberPw"
                value={member.memberPw}
                onChange={inputDat}
              />
            </div>
          </li>

          <li>
            <div>
              <label htmlFor="memberPwRe">비밀번호 확인</label>
            </div>
            <div>
              <input type="password" name="memberPwRe" id="memberPwRe" />
            </div>
          </li>

          <li>
            <div>
              <label htmlFor="memberName">이름</label>
            </div>
            <div>
              <input
                type="text"
                name="memberName"
                id="memberName"
                value={member.memberName}
                onChange={inputDat}
              />
            </div>
          </li>

          <li>
            <div>
              <label htmlFor="memberPhone">전화번호</label>
            </div>
            <div>
              <input
                type="text"
                name="memberPhone"
                id="memberPhone"
                value={member.memberPhone}
                onChange={inputDat}
              />
            </div>
          </li>
        </ul>

        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};
export default MemberJoin;
