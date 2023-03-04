import styled from "styled-components";

function animationInitialState(exiting) {
  const isEntering = !exiting;
  if (isEntering) {
    return `
        img,
        h1,
        button {
          opacity: 0;
          visibility: hidden;
        }
      `;
  }
}

function singleAnimationSetup(exiting) {
  const animation = exiting ? "exiting" : "entrance";
  const animatedTags = ["img", "h1", "button"];
  exiting && animatedTags.reverse();
  let setUp = "";
  for (let i in animatedTags) {
    setUp += `
    ${animatedTags[i]} {
      animation: ${animation} 0.8s 
        0.${2 * i}s ease forwards;
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

  @keyframes entrance {
    from {
      opacity: 0;
      transform: translateX(-150px);
      visibility: hidden;
    }
    to {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
  }

  @keyframes exiting {
    from {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
    to {
      opacity: 0;
      transform: translateX(150px);
      visibility: hidden;
    }
  }
`;

const InitButton = styled.button`
  background: ${({ theme }) => theme.overBackground};
  color: ${({ theme }) => theme.initButton};
  font-size: ${({ theme }) => theme.lg};
  width: min(246px, 100%);
  height: 54px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.initButton};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-top: 16px;
  cursor: pointer;
  transition: filter ease 0.3s, box-shadow ease 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    box-shadow: none;
  }
`;

export { InitButton, InitPageContainer };
