import Login from "@pages/Auth/Login";
import SignUp from "@pages/Auth/SignUp";
import ChatRoom from "@pages/Chat/ChatRoom";
import AICreate from "@pages/Create/AICreate";
import SelfCreate from "@pages/Create/SelfCreate";
import Greeting from "@pages/Greeting";
import Editing from "@pages/Main/Editing";
import Main from "@pages/Main/Main";
import Confirmation from "@pages/Recipe/Confirmation";
import Detail from "@pages/Recipe/Detail";
import IngredientList from "@pages/Recipe/IngredientList";
import Recipes from "@pages/Recipe/Recipes";
import SavedRecipes from "@pages/Recipe/SavedRecipes";
import Annual from "@pages/Statistics/Annual";
import Monthly from "@pages/Statistics/Monthly";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "@router/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* 시작페이지 */}
      <Route path="greeting" element={<Greeting />} />

      {/* Auth 관련 페이지 */}
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<SignUp />} />

      <Route element={<PrivateRoute />}>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/edit" element={<Editing />} />

        {/* 식재료 등록 페이지 */}
        <Route path="/create/self" element={<SelfCreate />} />
        <Route path="/create/ocr" element={<AICreate isOCR={true} />} />
        <Route
          path="/create/object-detection"
          element={<AICreate isOCR={false} />}
        />

        {/* 레시피 관련 페이지 */}
        <Route path="/recipes" element={<Recipes />} />
        <Route
          path="/recipes/new/:name/ingredients"
          element={<IngredientList />}
        />
        <Route
          path="/recipes/new/:name/confirmation"
          element={<Confirmation isHistory={false} />}
        />
        <Route path="/recipes/:id" element={<Detail />} />
        <Route path="/recipes/:id/ingredients" element={<IngredientList />} />
        <Route
          path="/recipes/:id/confirmation"
          element={<Confirmation isHistory={false} />}
        />
        <Route path="/recipes/save" element={<SavedRecipes />} />

        {/* 통계 관련 페이지 */}
        <Route path="/statistics/:date" element={<Monthly />} />
        <Route
          path="/history/:historyId"
          element={<Confirmation isHistory={true} />}
        />
        <Route path="/statistics" element={<Annual />} />

        <Route path="/chat" element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}

export default App;
