import styled from "styled-components";

const DURATION = "0.45s";

function animationInitialState(exiting) {
  const isEntering = !exiting;
  if (isEntering) {
    return `
        img,
        h1,
        button, 
        .select-container {
          opacity: 0;
          visibility: hidden;
        }
      `;
  }
}

function singleAnimationSetup(exiting) {
  const animation = exiting ? "exit" : "entrance";
  const animatedTags = ["img", "h1", ".select-container", "button"];
  exiting && animatedTags.reverse();
  let setUp = "";
  for (let i in animatedTags) {
    setUp += `
    ${animatedTags[i]} {
      animation: 
        ${animation} 
        ${DURATION} 
        0.${2 * i}s 
        ease 
        forwards;
      }
    `;
  }
  return setUp;
}

const InitPageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 24px;

  ${({ exiting }) => animationInitialState(exiting)}
  ${({ exiting }) => singleAnimationSetup(exiting)}
`;

const InitButton = styled.button`
  color: ${({ theme }) => theme.initButton};
  width: min(246px, 100%);
  height: 54px;
  border-radius: 5px;
  background: ${({ theme }) => theme.overBackground};
  font-size: ${({ theme }) => theme.lg};
  border: 1px solid ${({ theme }) => theme.initButton};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: filter ease 0.3s, box-shadow ease 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    box-shadow: none;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  gap: 12px;
`;

export { InitButton, InitPageContainer, Inputs };
