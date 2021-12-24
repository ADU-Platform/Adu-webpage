import { useState } from "react";

//design stuff
import styled from "styled-components";
import { VscCheck, VscClose } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { MoonLoader, SyncLoader } from "react-spinners";

//square-ui
import { Button } from "../../../square-ui/components/Button";
import { Card } from "../../../square-ui/components/Card";
import { Input } from "../../../square-ui/components/Input";
import { NavbarForWorkspace } from "../../../square-ui/components/Navbar";
import { Text } from "../../../square-ui/components/Text";
import { Size } from "../../../square-ui/types/Size";
import {
  BackgroundColor,
  BorderColor,
  ForegroundColor,
} from "../../../square-ui/types/Colors";
import { Bulb } from "../../../square-ui/components/Furniture";

const Frame = styled.div`
  .contents {
    display: flex;
    justify-content: center;
    padding: 20px;

    div {
      gap: 20px;
    }
  }

  .connection {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: relative;
      bottom: 0.5px;
      font-size: 25px;
    }
  }
  .manual {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${BackgroundColor.Light};
    border: 1px solid ${BorderColor.Default};

    padding: 20px;

    border-radius: 4px;
  }
  .tasks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 20px;

    .arrow {
      color: ${ForegroundColor.Dark};
      position: relative;
      left: 2px;
      bottom: 1px;
    }
  }

  .task {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
  }
`;

//workspace -> physicalcomputing -> Register
function Register() {
  const [canConnect, setCanConnect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Frame>
      <NavbarForWorkspace userName={null} />
      <div className="contents">
        <Card size="400px inherit">
          <Text size={Size.lg}>Register your device</Text>
          <div className="manual">
            <Text>💿 Install OS in your device</Text>
            <IoIosArrowDown />
            <Text>🖥️ Power on this</Text>
            <IoIosArrowDown />
            <Text>👍 Do register!</Text>
          </div>
          <div className="tasks">
            <div className="task">
              <Bulb mode="off" />
              <Text>Synchronizing with satellite.</Text>
            </div>
            <IoIosArrowDown className="arrow" />
            <div className="task">
              <Input label="Input" placeholder="device's serial code" />
            </div>
            <IoIosArrowDown className="arrow" />
            <div className="task">
              <Bulb mode="off" />
              <Text>Finding a device.</Text>
            </div>
            <IoIosArrowDown className="arrow" />
            <div className="task">
              <Bulb mode="off" />
              <Text>Registering this device.</Text>
            </div>
          </div>
          <div className="buttons">
            <Button disabled dark>
              Go to editor
            </Button>
            <Button disabled outline>
              Reset this device
            </Button>
          </div>
        </Card>
      </div>
    </Frame>
  );
}

export default Register;
