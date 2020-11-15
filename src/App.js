import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Catalog from "./components/Catalog";

const airtableData = {
  apiKey: "keyyj61FnLZAvaS7X",
  base: "appzeUDpZOqRjLPaJ",
};

const base = new Airtable({ apiKey: airtableData.apiKey }).base(airtableData.base);

function App() {
  const [catalog, setCatalog] = useState([]);

  const constructProduct = (record) => {
    return {
      name: record.get("Name"),
      picture: record.get("Picture"),
      description: record.get("Description"),
      vendor: record.get("vendor"),
      unitCost: record.get("Unit Cost"),
      inStock: record.get("In Stock"),
      size: record.get("Size (WxLxH)"),
      materials: record.get("Materials and Finishes")
    }
  };

  useEffect(() => {
    base("Furniture")
      .select({ view: "Main View", fields: ["Name", "Picture", "In Stock", "Unit Cost", "Description", "Vendor", "Designer"] })
      .eachPage((records, fetchNextPage) => {
        setCatalog(records.map(record => constructProduct(record)))
        fetchNextPage();
      })
  }, []);

  return (
    <div>
      <Catalog catalog={ catalog } />
    </div>
  );
}

export default App;
