import { Divider, Stack, Typography } from "@mui/material";
import moment from "moment";
import * as S from "./styles";

const Footer = () => {
  // 올해
  const thisYear: string = moment().format("YYYY");

  return (
    <Stack
      sx={{ mt: "0.8rem", mb: "1rem", color: "#c5c0c0", fontSize: "0.9rem" }}
    >
      <S.TextContainer>
        Github:{" "}
        <a
          href="https://github.com/FriedBob"
          target="blank"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          https://github.com/FriedBob
        </a>
      </S.TextContainer>
      <S.TextContainer>Copyright. {thisYear} FriedBob</S.TextContainer>
      <S.TextContainer>All rights reserved.</S.TextContainer>
    </Stack>
  );
};

export default Footer;
