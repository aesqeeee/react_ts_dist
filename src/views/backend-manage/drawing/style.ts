import styled from "styled-components";

export const DrawingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .pictrueIcon {
    padding-bottom: 5px;
    border-bottom: 1px solid #0505050f;
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      li {
        margin: 0 5px;
        height: 20px;
        list-style-type: none;
        cursor: pointer;
      }
      line-height.active {
        background-color: #ccc;
      }
    }
  }
  .canvas {
    width: 100%;
    height: 100%;
  }
  .menus {
    position: absolute;
    padding: 4px;
    visibility: hidden;
    text-align: center;
    left: 0;
    top: 0;
    z-index: -100;
    background-color: #fff;
    box-shadow:
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    div {
      /* margin: 10px; */
      padding: 5px 12px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
        border-radius: 5px;
      }
      .menuItem {
        margin-left: 10px;
      }
    }
  }
`;
