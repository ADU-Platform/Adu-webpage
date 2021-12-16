import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import ButtonForToggle from "../components/ButtonForToggle";

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export type Item = {
  icon?: React.ReactElement;
  innerText?: string;
};

interface Props {
  items: Item[];
  gap?: string;
  fontSize?: string;
  onChange?: Function;
}
function Navigation(p: Props) {
  const [index, setIndex] = useState(0);
  const NavigationContext = createContext(index);

  useEffect(() => {
    if (p.onChange) p.onChange(index);
  }, [index]);
  return (
    <Frame style={p}>
      <NavigationContext.Provider value={index}>
        {p.items.map((item, itemIndex) => (
          <ButtonForToggle
            {...item}
            key={itemIndex}
            fontSize={p.fontSize || "20px"}
            handleClick={() => setIndex(itemIndex)}
            toggle={itemIndex === useContext(NavigationContext)}
            canClick={!(itemIndex === useContext(NavigationContext))}
          />
        ))}
      </NavigationContext.Provider>
    </Frame>
  );
}
export default Navigation;
