import { Box } from "@mui/material";
import { CssTextField } from "@/components/Custom";
import Card from "@/components/Card";

// component
const Financial: React.FC = () => {
  return (
    <Box className="flex flex-col gap-6">
      <Card
        title="Bank Information"
        data={[
          {
            name: "personalEmail",
            title: "Personal Email",
            component: CssTextField,
          },
          {
            name: "iBan",
            title: "IBan",
            component: CssTextField,
          },
        ]}
      />
    </Box>
  );
};

export default Financial;
