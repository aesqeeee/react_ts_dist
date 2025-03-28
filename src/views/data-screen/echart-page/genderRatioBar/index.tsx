import React, { memo } from "react";
import EchartsCpn from "../../c-cpns/echarts-cpn";
import GenderRatioBarContent from "./c-cpns/index";
const GenderRatioBar = memo((props: any) => {
  return <EchartsCpn title="男女比例" content={<GenderRatioBarContent />} />;
});

export default GenderRatioBar;
