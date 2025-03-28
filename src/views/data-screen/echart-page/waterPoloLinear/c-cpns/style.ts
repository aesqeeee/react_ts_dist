import styled from "styled-components";
import { getDataScreenImageUrl } from "@/utils/getFiles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: content-box;
  height: 100%;
  .content-top {
    height: 50px;
    padding: 15px 10px 0 10px;
    display: flex;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: MetroDF;
      font-size: 32px;
      color: #66ffff;
      background: url(${getDataScreenImageUrl("dataScreen/total.png")})
        no-repeat;
      background-size: 100% 100%;
    }
  }
  .content {
    flex-grow: 1;
  }
`;
