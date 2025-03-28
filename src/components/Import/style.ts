import styled from "styled-components";

export const LocalReadFileWrapper = styled.div`
  .file-container {
    position: relative;
    .file-box {
      position: relative;
      display: flex;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.65);
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      border: 1px solid transparent;
      border-radius: 4px;
      border-color: #d9d9d9;
      background-color: #fff;
      user-select: none;
      cursor: pointer;
      &:hover {
        color: #1890ff;
        border-color: #1890ff;
      }
      .icon {
        margin-right: 5px;
      }
      .input-file {
        input {
          display: none;
        }
      }
    }
    .file-list {
      display: flex;
      margin-top: 5px;
      width: 100%;
      height: 22px;
      line-height: 22px;
      &:hover {
        background-color: #e6f7ff;
      }
      .icon {
        width: 22px;
      }
      .file-name {
        flex-grow: 1;
      }
      .delete-icon {
        cursor: pointer;
      }
    }
  }
`;
