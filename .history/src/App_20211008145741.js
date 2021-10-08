import GlobalStyles from "./styled/GlobalStyle";
import Container from "./styled/Container";
import hooks from "./data/hooks";
import Hook from "./Hooks/index";
import Intro from "./Intro";
import useOpen from "./useOpen";
import { Modal } from "kantan-components";
import { useEffect } from "react";
import { Text, Row } from "kantan-style";

const Message = () => {
  const { open, onOpen, onClose } = useOpen();
  useEffect(() => {
    onOpen();
  }, [onOpen]);
  return (
    <>
      {open ? (
        <Modal handleClose={onClose}>
          <div style={{ background: "white", borderRadius: "10px" }}>
            <Row justify="center" align="center">
              <Text style={{ lineHeight: "25px" }}>
                Thanks for visting this page. The project is currently being
                re-built as a library. The NPM page can be found{" "}
                <a
                  href="https://www.npmjs.com/package/kantan-hooks"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </Text>
            </Row>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Message />
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
