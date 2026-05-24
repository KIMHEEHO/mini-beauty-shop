import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import type { TabValue } from "./types";

interface CategoryTabProps {
  currentTab: TabValue;
  changeTab: (newTab: TabValue) => void;
}
export function CategoryTab({ currentTab, changeTab }: CategoryTabProps) {
  const changeTabs = (event: React.SyntheticEvent, newValue: TabValue) => {
    changeTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={currentTab}
        onChange={changeTabs}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="beauty shop categories"
      >
        <Tab value="lifting" label="리프팅" />
        <Tab value="botox" label="보톡스" />
        <Tab value="filler" label="필러" />
        <Tab value="skin-care" label="스킨케어" />
        <Tab value="skin-booster" label="스킨부스터" />
        <Tab value="diet" label="다이어트" />
      </Tabs>
    </Box>
  );
}
