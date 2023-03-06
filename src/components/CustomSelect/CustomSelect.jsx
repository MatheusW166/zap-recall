import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  Select,
  CustomSelectContainer,
  CustomSelectOption,
  CustomSelectOptions,
  CustomSelectOverlay,
} from "./styled";

export default function CustomSelect({ setItem, options, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedOption, setCheckedOption] = useState();
  const selectOptionsRef = useRef(null);

  function handleClickOutside(event) {
    const clickInside = selectOptionsRef.current.contains(event.target);
    if (!clickInside) setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, []);

  function onOptionClick(item) {
    if (item === checkedOption) setIsOpen(false);
    setCheckedOption(item);
    if (setItem) setItem(item.value);
    setTimeout(() => setIsOpen(false), 100);
  }

  return (
    <>
      <CustomSelectContainer className="select-container">
        <IoIosArrowDown />
        <Select onClick={() => setIsOpen(true)}>
          <p>{checkedOption?.text || children}</p>
        </Select>
      </CustomSelectContainer>
      <CustomSelectOverlay isOpen={isOpen}>
        <CustomSelectOptions ref={selectOptionsRef} isOpen={isOpen}>
          {options.map((item) => (
            <CustomSelectOption
              key={item.value}
              checked={item === checkedOption}
              onClick={() => onOptionClick(item)}>
              {item.text}
            </CustomSelectOption>
          ))}
        </CustomSelectOptions>
      </CustomSelectOverlay>
    </>
  );
}
