import styled from "styled-components";

import icon1 from "@assets/ingredients/icon1.png";
import deletebtn from "@assets/main/deletebtn.png";
import { FontBold, FontMedium, FontRegular } from "@style/font.style";
import IconList from "./IconList";
import { useState } from "react";

type Props = {
  isEditing: boolean;
  isDeletable?: boolean;
};

const Item = ({ isEditing, isDeletable }: Props) => {
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
          <div className="name">
            <FontMedium size="16px">청정원 깐 마늘 200g 1팩</FontMedium>
          </div>
          <div className="price">
            <FontMedium size="13px">2000원</FontMedium>
          </div>
          <div className="date">
            <FontRegular size="10px">등록일 : 2023.11.03 </FontRegular>
          </div>
        </Detail>
      </div>

      <CountWrapper>
        {isEditing && (
          <FontRegular size="20px" className="minus">
            -
          </FontRegular>
        )}
        <Count>
          <FontBold size="12px">1</FontBold>
        </Count>
        {isEditing && <FontRegular size="20px">+</FontRegular>}
      </CountWrapper>

      {isEditing && isDeletable && <DeleteBtn src={deletebtn} />}

      {/* 리스트에서 아이콘 선택 */}
      {isEditing && isOpenList && (
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

export default Item;

const Div = styled.div`
  position: relative;
  width: 90%;
  box-sizing: border-box;
  height: 81px;
  border-radius: 6px;
  background: var(--grey1);
  box-sizing: border-box;
  padding: 13px 9px 13px 13px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .left-container {
    display: flex;
    gap: 15px;
  }

  .icon {
    width: 50px;
  }

  .icon-list {
    position: absolute;
    left: 70px;
    z-index: 1;
  }
`;

const Detail = styled.div`
  height: 57px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  .price,
  .date {
    color: var(--grey2);
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

const DeleteBtn = styled.img`
  width: 18px;
  height: 18px;
  filter: drop-shadow(1px 2px 5.9px rgba(0, 0, 0, 0.15));

  position: absolute;
  top: -7px;
  right: 6px;
`;
