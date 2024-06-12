import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Table from "./Table";
import { useSelector } from "react-redux";
const Home = () => {
  const { allData } = useSelector((state) => state.collection);
  const [getData, setData] = useState([]);

  useEffect(() => {
    if (allData) {
      setData(allData);
    }
  }, [allData]);

  return (
    <Layout>
      <div>This is Home Component</div>
      <Table data={getData} data1={"data 1"} />
    </Layout>
  );
};

export default Home;
