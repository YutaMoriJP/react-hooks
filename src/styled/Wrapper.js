import styled from "styled-components";
import Hookwrapper from "../Hooks/styled";

export default styled.article`
  display: flex;
  ${Hookwrapper} & {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
