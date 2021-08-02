import styled from "styled-components";

export default styled.article`
  && {
    background: #edf2ff;
    margin: 5px auto;
    border-radius: 8px;
    box-shadow: 4px 4px 12px #868e96;
    padding: 20px;
    width: 1200px;
    max-width: 80%;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 5px;
    @media screen and (max-width: 550px) {
      > * {
        margin: 5px;
      }
    }
  }
`;
