import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const LineContainer = styled(Box)`
  width: 80%;
  text-align: center;
`;

export const _Stack = styled(Stack)`
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export const TextContainer = styled.p`
  margin: 0;
  padding: 0;
`;

export const MenuButton = styled(Button)`
  &:hover {
    background-color: transparent;
  }
`;
