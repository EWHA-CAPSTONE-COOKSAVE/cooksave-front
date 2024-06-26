import List from "@components/Ingredients/List/List";
import styled from "styled-components";

import pencil from "@assets/main/pencil.png";
import NavBar from "@components/NavBar/NavBar";
import CreateBtn from "@components/Buttons/CreateBtn";
import UnderLinedBtn from "@components/Buttons/UnderLinedBtn";
import { useNavigate } from "react-router-dom";
import Header from "@components/Header/Header";
import { useEffect, useState } from "react";
import { getIngredients } from "@services/api/ingredients";
import { useRecoilState } from "recoil";
import { myListState } from "@services/store/ingredients";

//식재료 내역을 확안하는 메인페이지
const Main = () => {
  const navigate = useNavigate();
  const [myList, setMyList] = useRecoilState(myListState);
  const [list, setList] = useState();

  useEffect(() => {
    getIngredients()
      .then(res => {
        setMyList(res.data);
        setList(res.data); //로컬스토리지 새로고침 전 업데이트 된 list를 보여주기 위해 list로 상태관리
      })
      .catch(err => console.log("err"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/greeting");
  };

  return (
    <>
      <Header isBack={false} title="나의 식재료 보유 현황" />

      <EditBtn>
        <img src={pencil} onClick={() => navigate("/edit")} />
      </EditBtn>

      <List
        isEditing={false}
        isDeletable={false}
        list={list}
        isIconEditable={false}
      />

      <Footer>
        <UnderLinedBtn text="로그아웃" onClick={handleLogout} />
      </Footer>

      <FloatingBtn>
        <CreateBtn />
      </FloatingBtn>

      <NavBar />
    </>
  );
};

export default Main;

const EditBtn = styled.div`
  display: flex;
  justify-content: end;
  width: 90%; // 아래 리스트 아이템과 같은 너비
  margin: 11.5px auto 15.5px;

  img {
    width: 30px;
    height: 26.4px;
    flex-shrink: 0;
  }
`;

const Footer = styled.div`
  width: 100%;
  margin: 60px 0;
  color: var(--grey2);
`;

const FloatingBtn = styled.div`
  width: 100%;
  max-width: 481px; //position: fixed 로 global style 적용 안됨
  position: fixed;
  bottom: 70px;
  padding: 0 10px 0 0;
  box-sizing: border-box;

  display: flex;
  justify-content: end;
`;
