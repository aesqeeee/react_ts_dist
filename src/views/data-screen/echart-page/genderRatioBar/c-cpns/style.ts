import styled from "styled-components";
import { getDataScreenImageUrl } from "@/utils/getFiles";
export const ContentWrapper = styled.div`
  height: 100%;
  padding: 15px 25px;
  box-sizing: border-box;
  .content-top {
    display: flex;
    justify-content: space-between;
    height: 115px;
    .man {
      background-image: url(${getDataScreenImageUrl("dataScreen/man-bg.png")});
    }
    .woman {
      background-image: url(${getDataScreenImageUrl(
        "dataScreen/woman-bg.png"
      )});
    }
    .man,
    .woman {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 110px;
      height: 115px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      img {
        width: 60px;
        height: 60px;
        margin-top: 20px;
      }
      span {
        margin-top: 2px;
        font-size: 13px;
        color: #ffffff;
      }
    }
  }
  .content-echart {
    height: calc(100% - 115px);
  }
`;
