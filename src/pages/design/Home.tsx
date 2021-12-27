import styled from "styled-components";
import { BackgroundColor, ForegroundColor } from "../../ui/styles/Colors";
export default function Home() {
  return (
    <Frame>
      <span className="title">Components</span>
      <div className="components">
        <div className="item">
          <h1>Inputs</h1>
        </div>
      </div>
    </Frame>
  );
}

const Frame = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .title {
    font-size: 40px;
  }

  .components {
    width: 80vw;

    padding: 20px;

    border-radius: 4px;

    background-color: ${BackgroundColor.Default};
    box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.3);

    display: flex;
  }

  .item {
    width: 200px;
    height: 200px;

    padding: 10px;

    border-radius: 4px;

    border: 1px solid ${ForegroundColor.Dimmest};

    h1 {
      font-size: 30px;
    }
  }
`;
