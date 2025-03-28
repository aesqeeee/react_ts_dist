import styled from "styled-components";

export const TabsWrapper = styled.div`
  position: relative;
  height: 40px;
  background-color: var(--vt-c-white);
  .tabs {
    display: inline-block;
    width: calc(100% - 50px);
    padding: 0 15px;
  }
  .dropdown {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: 100%;
    cursor: pointer;
    border-left: 1px solid var(--vt-border-color-light);
    &:hover {
      background-color: #f4f4f5;
    }
  }
`;

export const DropdownWrapper = styled.div``;
