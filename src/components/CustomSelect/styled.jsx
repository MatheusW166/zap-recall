import styled from "styled-components";

const CustomSelectOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${({ theme }) => theme.overlay};
  transition: opacity ease 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
`;

const CustomSelectContainer = styled.div`
  width: min(246px, 100%);
  svg {
    color: ${({ theme }) => theme.textPrimary};
    position: absolute;
    top: 0;
    right: 12px;
    font-size: 24px;
    height: 100%;
    pointer-events: none;
  }
  position: relative;
`;

const Select = styled.div`
  height: 48px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 12px;
  appearance: none;
  cursor: pointer;
  background: ${({ theme }) => theme.overBackground};
  font-size: ${({ theme }) => theme.md};
  color: ${({ theme }) => theme.textPrimary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  line-height: normal;
`;

const CustomSelectOptions = styled.ul`
  background: ${({ theme }) => theme.overBackground};
  position: fixed;
  width: min(calc(100% - 48px), 500px);
  left: 50%;
  top: 50%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: translate(-50%, -50%)
    ${({ isOpen }) => (isOpen ? "scaleY(1)" : "scaleY(0)")};
  transition: transform ease 0.3s, opacity ease 0.3s;
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CustomSelectOption = styled.li`
  padding: 24px;
  background: ${({ checked, theme }) => checked && theme.backgroundVariant};
  transition: background-color ease 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.backgroundVariant};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #f5f5f5;
  }
`;

export {
  Select,
  CustomSelectContainer,
  CustomSelectOption,
  CustomSelectOptions,
  CustomSelectOverlay,
};
