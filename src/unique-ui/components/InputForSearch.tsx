import { VscSearch } from "react-icons/vsc";
import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  height: 100%;

  font-size: 14px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 10px;

  margin: 0 10px;

  svg {
    font-size: 24px;
  }

  input {
    width: 100%;
    border: 0px solid;
    background-color: transparent;
    outline: none;

    ::placeholder {
      font-style: italic;
    }
  }
`;

function InputForSearch() {
  return (
    <Frame>
      <VscSearch />
      <input placeholder="search for application, tutorials, docs, and more" />
    </Frame>
  );
}

export default InputForSearch;
