import styled from "styled-components";

export const HanderWrapper = styled.div`
  .HanderPage {
    display: flex;
    align-items: center;
    color: #fff;
  }
  .demo-logo {
    display: flex;
    width: ${(props) => props.theme.width + "px"};
    height: 64px;
    margin-inline-end: 15px;
  }
  .title {
    font-weight: bold;
    font-size: 22px;
    white-space: nowrap;
  }
  .right-content {
    width: 100%;
  }
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
