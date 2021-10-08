import GlobalStyles from "./styled/GlobalStyle";
import Container from "./styled/Container";
import hooks from "./data/hooks";
import Hook from "./Hooks/index";
import Intro from "./Intro";
import useOpen from "./useOpen";
import { Modal } from "kantan-components";
import { useEffect } from "react";
import { Text, Row } from "kantan-style";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Intro>
          Click on the `+` icon to learn more about the custom React hook. The
          Demo involves an example of what the React hook achieves, and you can
          see the source code by clicking on the CodeSandbox link.
        </Intro>
        {hooks.map((hook, index) => (
          <Hook key={hook.id} index={index + 1} {...hook} />
        ))}
      </Container>
    </>
  );
}