import styled from "styled-components";

export const LeftPageWrapper = styled.div`
  height: 100%;
`;
export const RightPageWrapper = styled.div`
  display: flex;
  .left-icon {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
  }
  .right-icon {
    display: flex;
    width: 130px;
    .username {
      margin: 0 20px;
      font-size: 16px;
    }
    .avatar {
      display: flex;
      align-items: center;
      .avatar-logo {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        overflow: hidden;
      }
    }
  }
  /* */
`;
