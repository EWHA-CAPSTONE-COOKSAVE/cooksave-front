import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import List from "@components/Ingredients/List/List";
import { myListState } from "@services/store/ingredients";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { TypeIngredient } from "type/ingredients";

const IngredientList = () => {
  const navigate = useNavigate();
  const { name, id } = useParams();
  let param: string;
  if (name) {
    param = name; //직접 입력 레시피
  } else {
    param = String(id); //제공된 레시피
  }
  const myList = useRecoilValue(myListState);
  const [intialList, setInitialList] = useState([]) as any[];
  const [maxAmountList, setMaxAmountList] = useState([]) as any[];

  useEffect(() => {
    //수량을 0으로 초기화
    myList.map((el: TypeIngredient) => {
      setMaxAmountList((prev: any[]) => [...prev, { amount: el.amount }]);
      setInitialList((prev: any[]) => [...prev, { ...el, amount: 0 }]);
    });
  }, []);

  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="사용할 재료와 수량을 선택하세요" />

      <List
        isEditing={true}
        isDeletable={false}
        list={intialList}
        maxAmountList={maxAmountList}
        isIconEditable={false}
      />
      <div className="margin" style={{ height: "90px" }} />

      <div className="bottom">
        <LongBtn
          text="선택 완료"
          onClick={() => navigate(`/recipes/${param}/confirmation`)}
        />
      </div>
    </Div>
  );
};

export default IngredientList;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .bottom {
    width: 100%;
    position: fixed; //하단 고정
    bottom: 0px;
    padding: 30px;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
`;
