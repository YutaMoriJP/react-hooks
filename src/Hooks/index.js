import React from "react";
import Wrapper from "./styled";
import Text from "../styled/Text";
import Link from "../styled/Link";
import LinkWrapper from "../styled/LinkWrapper";

import Button from "../styled/Button";
import Block from "../styled/Block";

import useOpen from "../useOpen";
import Article from "../styled/Wrapper";

const Hooks = ({ name, demo, index, explanation, sandbox }) => {
  const { open, onOpen, onClose } = useOpen(false);
  return (
    <Wrapper index={index} open={open ? 1 : 0}>
      <Article>
        <Text bold={1}>
          {name}
          <Button onClick={open ? onClose : onOpen}>{open ? "-" : "+"}</Button>
        </Text>
        <LinkWrapper>
          <Link href={demo} target="_blank" rel="noreferrer">
            Demo
          </Link>
          <Link href={sandbox} target="_blank" rel="noreferrer">
            CodeSandbox
          </Link>
        </LinkWrapper>
      </Article>

      {open && (
        <Block>
          <Text>{explanation}</Text>
        </Block>
      )}
    </Wrapper>
  );
};
export default Hooks;
