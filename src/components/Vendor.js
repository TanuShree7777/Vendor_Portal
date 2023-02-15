import React from "react";
import { Form, Field } from "react-final-form";
import { VendorSearchBar } from "./VendorSearchBar";
import { Doughnut } from "react-chartjs-2";
import { VendorStats } from "./VendorStats";
import { VendorTopSkills } from "./VendorTopSkills";
import { VendorLineChart } from "./VendorLineChart";
import { CustomChart} from "./CustomLineChart"

const Vendor = () => {
  return (
    <>
      <VendorSearchBar />
      <VendorStats />
      {/* <VendorLineChart /> */}

     <div style={{display:"flex"
    ,backgroundColor:"aliceblue"}}>
     <VendorTopSkills />
      <CustomChart />
     </div>
    </>
  );
};

export default Vendor;
