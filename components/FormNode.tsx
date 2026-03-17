import { Card, CardContent, Typography, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { FormNodeHandle } from "./FormNodeHandle";

interface IProps {
  data: {name: string}
}

export function FormNode({ data }: IProps) {
  return (
    <Card
      sx={{
        width: 220,
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
        padding: 1
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          backgroundColor: "#036661",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: 2
        }}
      >
        <DescriptionIcon sx={{ color: "white" }} />
      </Box>

      <CardContent sx={{ p: 0 }}>
        <Typography variant="caption">Form</Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          {data.name}
        </Typography>
      </CardContent>

      <FormNodeHandle type="target" position="left"/>
      <FormNodeHandle type="source" position="right"/>
    </Card>
  );
}