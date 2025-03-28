import styled from "styled-components";
import { getDataScreenImageUrl } from "@/utils/getFiles";

export const DataScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  .power-view {
    width: 100%;
    height: 100%;
    background: url(${getDataScreenImageUrl("dataScreen/dataScreen_bg.png")});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 100% 100%;
    background-size: cover;
    .dataScreen-content {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 999;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: all 0.3s;
      transform-origin: left top;
      .dataScreen-hander {
        color: #fff;
        height: 38px;
        display: flex;
        .left,
        .right {
          position: relative;
          height: 100%;
          width: 567px;
          background: url(${getDataScreenImageUrl(
              "dataScreen/dataScreen-header-left-right-bg.png"
            )})
            no-repeat;
          background-size: 100% 100%;
        }
        .center {
          position: relative;
          flex: 1;
          .hander-title-text {
            display: flex;
            height: 82px;
            justify-content: center;
            align-items: center;
            font-family: YouSheBiaoTiHei;
            font-size: 32px;
            color: #05e8fe;
            letter-spacing: 4px;
            background: url(${getDataScreenImageUrl(
                "dataScreen/dataScreen-header-center-bg.png"
              )})
              no-repeat;
            background-size: 100% 100%;
          }
          .hander-warning {
            margin-top: -2px;
            height: 44px;
            width: 100%;
            text-align: center;
            line-height: 44px;
            font-family: YouSheBiaoTiHei;
            background: url(${getDataScreenImageUrl(
                "dataScreen/dataScreen-header-warn-bg.png"
              )})
              no-repeat;
            background-size: 622px 100%;
            background-position: center;
          }
        }
        .hander-btn {
          position: absolute;
          width: 136px;
          height: 42px;
          text-align: center;
          line-height: 42px;
          font-size: 18px;
          font-weight: 400;
          font-family: YouSheBiaoTiHei;
          color: #29fcff;
          cursor: pointer;
        }

        .header-homePage {
          right: 0;
          background: url(${getDataScreenImageUrl(
              "dataScreen/dataScreen-header-btn-bg-l.png"
            )})
            no-repeat;
          background-size: 100% 100%;
        }
        .header-report {
          left: 0;
          background: url(${getDataScreenImageUrl(
              "dataScreen/dataScreen-header-btn-bg-r.png"
            )})
            no-repeat;
          background-size: 100% 100%;
        }
        .header-time {
          position: absolute;
          top: 0;
          right: 14px;
          font-family: YouSheBiaoTiHei;
          font-size: 17px;
          width: 310px;
          font-weight: 400;
          line-height: 38px;
          color: #05e8fe;
        }
      }
    }
    .dataScreen-main {
      display: flex;
      height: 100%;
      padding: 12px 42px 20px;
      box-sizing: border-box;
      .main-left,
      .main-right {
        display: flex;
        flex-direction: column;
        width: 394px;
        box-sizing: content-box;
        .main-left-box {
          flex: 1;
          margin-top: 20px;
        }
      }
      .main-left {
      }
      .main-center {
        flex: 1;
        padding-top: 85px;
        .main-center-map {
          height: 60%;
        }
        .main-center-info {
          height: 40%;
        }
      }
      .main-right {
      }
    }
  }
`;
