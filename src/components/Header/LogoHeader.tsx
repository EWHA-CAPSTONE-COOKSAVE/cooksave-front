import styled from "styled-components";

import textLogo from "@assets/common/textLogo.png";
import { FontBold } from "@style/font.style";
import { useNavigate } from "react-router-dom";

type Props = {
  title?: string;
};

const LogoHeader = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <Div>
      <Img src={textLogo} onClick={() => navigate("/")} />

      <div className="title">
        <FontBold size="12px">{title}</FontBold>
      </div>
    </Div>
  );
};

export default LogoHeader;

const Div = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    color: #7d7d7d;
  }
`;

const Img = styled.img`
  width: 118px;
  height: 17.51px;
  flex-shrink: 0;
`;
