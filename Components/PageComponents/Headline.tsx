import { Box, Divider, Stack, Typography } from "@mui/material";
import * as S from "./styles";
import { intro } from "./HeadlineText";

const Headline = () => {
  return (
    <Stack alignItems="center">
      <S.LineContainer>
        <Typography variant="h1" sx={{ margin: "6rem 0", fontWeight: "700" }}>
          Shin&apos;s Blog
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: `pre-wrap`,
            marginBottom: "6rem",
          }}
        >
          {intro}
        </Typography>
      </S.LineContainer>
      <Divider sx={{ width: "90%" }} />
    </Stack>
  );
};

export default Headline;
