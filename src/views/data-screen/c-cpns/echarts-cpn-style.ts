import styled from "styled-components";
import { getDataScreenImageUrl } from "@/utils/getFiles";

export const EchartsCpnStyleWrapper = styled.div`
  height: 100%;
  .echart-container {
    position: relative;
    display: flex;
    flex-flow: column;
    height: 100%;
    background: url(${getDataScreenImageUrl(
        "dataScreen/dataScreen-main-lt.png"
      )})
      no-repeat;
    background-size: 100% 100%;
    .title {
      font-family: YouSheBiaoTiHei;
      color: #fff;
      font-size: 18px;
      height: 20px;
      letter-spacing: 1px;
    }
    .title-img {
      height: 17px;
    }
    .echart-content {
      margin-top: 10px;
      height: calc(100% - 25px);
    }
    .right-info {
      position: absolute;
      right: 0;
      right: 10px;
      top: 30px;
    }
  }
`;
