import styled from "styled-components";

export const ViewContainer = styled.div`
  outline: 1px solid white;
  display: flex;
  flex-direction: column;
  height: 100%;

  .view__header {
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    h2 {
      color: rgba(255, 255, 255, 0.8);
      font-size: 34px;
      font-weight: 500;
    }
  }

  .view__content {
    outline: 2px solid orange;
    height: calc(100% - 100px);
  }
`