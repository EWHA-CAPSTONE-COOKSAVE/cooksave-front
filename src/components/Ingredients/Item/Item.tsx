import styled from "styled-components";
import deletebtn from "@assets/main/deletebtn.png";
import { FontBold, FontMedium, FontRegular } from "@style/font.style";
import { IconList, icons } from "./IconList";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { newListState } from "@services/store/ingredients";

type Props = {
  isIconEditable: boolean;
  isEditing: boolean;
  isDeletable: boolean;
  item: any;
  index: any;
  initialList: any[];
  maxAmount?: number | undefined;
};

const Item = ({
  isIconEditable,
  isEditing,
  isDeletable,
  item,
  index,
  initialList,
  maxAmount,
}: Props) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [newList, setNewList] = useRecoilState(newListState);

  useEffect(() => {
    //첫 렌더링 시 초기화
    setNewList(initialList);
  }, []);

  const { name, price, date, ingredientId } = item;

  const deleteNewItem = () => {
    let arr = [...newList];

    setNewList(arr.filter(item => item.ingredientId !== ingredientId));
  };

  const handlePlus = () => {
    if (item.amount === maxAmount) return;

    let arr = [...newList];

    setNewList(
      arr.map(item =>
        item.ingredientId === ingredientId
          ? { ...item, amount: item.amount + 0.25 }
          : item,
      ),
    );
  };

  const handleMinus = () => {
    if (isDeletable && item.amount === 0.25) {
      return;
    } else if (!isDeletable && item.amount === 0) {
      return;
    }

    let arr = [...newList];

    setNewList(
      arr.map(item =>
        item.ingredientId === ingredientId
          ? { ...item, amount: item.amount - 0.25 }
          : item,
      ),
    );
  };

  return (
    <Div>
      <div className="left-container">
        <img
          className="icon"
          src={icons[item.iconId - 1]}
          onClick={() => {
            isIconEditable && setIsOpenList(!isOpenList);
          }}
        />

        <Detail>
          <div className="name">
            <FontMedium size="16px">{name}</FontMedium>
          </div>
          <div className="price">
            <FontMedium size="13px">{price}</FontMedium>
          </div>
          {item.date && (
            <div className="date">
              <FontRegular size="10px">등록일 :{date} </FontRegular>
            </div>
          )}
        </Detail>
      </div>

      <CountWrapper>
        {isEditing && (
          <div onClick={handleMinus}>
            <FontRegular size="20px" className="minus">
              -
            </FontRegular>
          </div>
        )}
        <Count>
          <FontBold size="12px">{item.amount}</FontBold>
        </Count>
        {isEditing && (
          <div className="plus" onClick={handlePlus}>
            <FontRegular size="20px">+</FontRegular>
          </div>
        )}
      </CountWrapper>

      {isDeletable && <DeleteBtn src={deletebtn} onClick={deleteNewItem} />}

      {/* 리스트에서 아이콘 선택 */}
      {isIconEditable && isOpenList && (
        <div className="icon-list">
          <IconList
            setIsOpenList={setIsOpenList}
            ingredientId={item.ingredientId}
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
