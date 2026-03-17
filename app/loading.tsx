import { Skeleton, Box, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={1}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} animation="wave" width={400} height={38} />
        ))}
      </Stack>
    </Box>
  );
};

export default Loading;