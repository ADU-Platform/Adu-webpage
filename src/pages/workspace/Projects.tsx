import { useState } from "react";
import styled from "styled-components";

//back
import { useOrganizations, useProjects, useUser } from "../../back";

//ui
import Description from "../../ui/components/data display/Description";
import Heading from "../../ui/components/data display/Heading";
import Button from "../../ui/components/inputs/Button";
import Container from "../../ui/components/layout/Container";
import Header from "../../ui/components/structure/Header";
import { VscAdd, VscClose } from "react-icons/vsc";
import {
  Button as MenuButton,
  Divider,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";

//interfaces
import { Organization } from "../../back/interfaces";

//styles
import { BackgroundColor, BorderColor } from "../../ui/styles/Colors";

export default function Projects() {
  const user = useUser({
    checkAccount: {
      pastPagePath: "/workspace/projects",
    },
  });
  //the user want to add the project, the below state can be changed.
  const [addProject, setAddProjcet] = useState<boolean>(false);
  const { registerAddProject, registerAddingProject } = useProjects();

  //for organization menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //for organizations
  const { currentIndex, setCurrentIndex, organizations, setOrganizations } =
    useOrganizations();

  return (
    <Frame>
      <Header user={user} />
      <header className="sub-header">
        <Heading fontWeight={700} value="Current Org:" />
        <MenuButton
          id="orgMenu-button"
          aria-controls="org-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          color="primary"
        >
          {organizations[currentIndex]}
        </MenuButton>
        <Menu
          id="org-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "orgMenu-button",
          }}
        >
          {organizations.map((org: Organization, index: number) => {
            if (currentIndex === index) {
              return (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setCurrentIndex(index);
                  }}
                >
                  {org.name} (Current)
                </MenuItem>
              );
            } else {
              return (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setCurrentIndex(index);
                  }}
                >
                  {org.name}
                </MenuItem>
              );
            }
          })}
          <Divider />
          <MenuItem onClick={handleClose}>New Org</MenuItem>
        </Menu>
      </header>
      <div className="container">
        <Container
          className="add-project"
          hidden={addProject}
          onClick={() => setAddProjcet(true)}
        >
          <VscAdd />
          <Description value="New Project" />
        </Container>
        <Container className="adding-project" hidden={!addProject}>
          <div className="header">
            <Button icon={<VscClose />} onClick={() => setAddProjcet(false)} />
          </div>
        </Container>
      </div>
    </Frame>
  );
}
const Frame = styled.div`
  .sub-header {
    height: 50px;
    background-color: ${BackgroundColor.Default};

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 0 20vw;
  }
  .container {
    padding: 20px;
    width: 80vw;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .add-project {
    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    cursor: pointer;

    border-radius: 10px;

    transition: all 0.1s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    svg {
      font-size: 30px;
    }
  }

  .adding-project {
  }
`;
