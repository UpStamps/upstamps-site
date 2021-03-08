import React, { useEffect, useState } from "react";
//Styles
import styled from "styled-components";

const CONSTANTS = {
  DELETING_SPEED: 300,
  TYPING_SPEED: 430,
};

interface Props {
  className?: string;
  messages: string[];
  heading: string;
}

interface State {
  text: string;
  message: string;
  isDeleting: boolean;
  loopNum: number;
  typingSpeed: number;
}

function TypeWriter({ messages, heading, className }: Props) {
  const [state, setState] = useState<State>({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer: any = "";
    const handleType = () => {
      setState((prevState) => ({
        ...prevState,
        text: getCurrentText(prevState),
        typingSpeed: getTypingSpeed(prevState),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          isDeleting: true,
        }));
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState((prevState) => ({
        ...prevState,
        isDeleting: false,
        loopNum: prevState.loopNum + 1,
        message: getMessage(prevState, messages),
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState: State) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState: State, data: string[]) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState: any) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
    <h1 className={`${className} display-3 mb-4`}>
      {heading}&nbsp;
      <span>{state.text}</span>
      <span id="cursor" />
    </h1>
  );
}

export default styled(TypeWriter)`
  #cursor {
    border-left: 0.1em solid #f9bc60;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
