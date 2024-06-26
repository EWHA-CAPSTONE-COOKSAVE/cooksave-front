import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Header from "@components/Header/Header";
import NavBar from "@components/NavBar/NavBar";
import RecipeInput from "@components/Recipe/RecipeInput";
import RecipeList from "@components/Recipe/RecipeList";
import { getRecipes } from "@services/api/recipes";
import { FontMedium } from "@style/font.style";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeRecipe } from "type/recipe";

const Recipes = () => {
  const [list, setList] = useState<TypeRecipe[]>();
  const requestList = () => {
    getRecipes()
      .then(res => {
        setList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestList();
  }, []);

  return (
    <Div>
      <ChatbotBtn />
      <Header isBack={false} title="당신을 위한 추천 레시피" />

      <div className="text">
        <FontMedium size="16px">내 마음대로 만들기</FontMedium>
        <FontMedium size="12px" className="gray">
          자유롭게 재료를 선택하고 기록해보세요.
        </FontMedium>
      </div>

      <RecipeInput />

      <div className="text">
        <FontMedium size="16px">추천 레시피</FontMedium>
      </div>

      <div className="margin">
        {list && <RecipeList list={list} isHistory={false} />}
      </div>

      <NavBar />
    </Div>
  );
};

export default Recipes;

const Div = styled.div`
  .margin {
    margin-bottom: 60px;
  }

  .text {
    width: 90%;
    margin: 16.5px auto 13px;
    gap: 3px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .gray {
    color: var(--grey2);
  }
`;
