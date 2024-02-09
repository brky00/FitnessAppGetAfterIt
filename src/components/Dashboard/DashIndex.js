import { useEffect, useState } from "react";

import Header from "./Header";
import Table from "./Table";
import { db } from "../firebase-config";

const DashIndex = ({productItems}) => {
 
  return (
    <div className="container">
      <>
        <Header/>
        <Table />
      </>
    </div>
  );
};

export default DashIndex;
