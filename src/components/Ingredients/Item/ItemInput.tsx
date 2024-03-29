import icon1 from "@assets/ingredients/icon1.png";
import styled from "styled-components";
import IconList from "./IconList";
import { FontBold, FontRegular } from "@style/font.style";
import { useState } from "react";

const ItemInput = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  return (
    <Div>
      <div className="left-container">
        <img
          className="icon"
          src={icon1}
          onClick={() => {
            setIsOpenList(!isOpenList);
          }}
        />
        <Detail>
          <input className="name" placeholder="재료명을 입력하세요" />

          <input className="price" placeholder="가격을 입력하세요" />
        </Detail>
      </div>

      <CountWrapper>
        <FontRegular size="20px" className="minus">
          -
        </FontRegular>
        <Count>
          <FontBold size="12px">1</FontBold>
        </Count>
        <FontRegular size="20px">+</FontRegular>
      </CountWrapper>

      {/* 리스트에서 아이콘 선택 */}
      {isOpenList && (
        <div className="icon-list">
          <IconList
            onClick={() => {
              setIsOpenList(!isOpenList);
            }}
          />
        </div>
      )}
    </Div>
  );
};

export default ItemInput;

const Div = styled.div`
  position: relative;
  width: 90%;
  height: 81px;
  border-radius: 6px;
  background: var(--grey1);
  box-sizing: border-box;
  padding: 13px 9px 13px 13px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 50px;
  }

  .icon-list {
    position: absolute;
    top: 10px;
    left: 70px;
    z-index: 1;
  }

  .left-container {
    display: flex;
    gap: 15px;
  }
`;

const Detail = styled.div`
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  input {
    border: none;
    outline: none;
    background-color: var(--grey1);
  }

  .price {
    width: 90%;
    color: var(--grey2);

    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .name {
    width: 90%;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Count = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: #fff;

  line-height: 27px;
`;

const CountWrapper = styled.div`
  width: 58px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  .minus {
    margin-bottom: 5px;
  }
`;
