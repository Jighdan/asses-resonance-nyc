import Airtable from "airtable";
import {
  constructUserAuthRecord,
  constructUserRecord,
  constructCatalogProductRecord
} from "./dataConstructors";

const data = {
  apiKey: "keyyj61FnLZAvaS7X",
  base: "appzeUDpZOqRjLPaJ",
};

const airtableBase = new Airtable({ apiKey: data.apiKey }).base(data.base);

export const getAirtableUserAuth = async (email, password) => {
  let userAuth;
  await airtableBase("Users")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      const authRecords = records.map(record => constructUserAuthRecord(record));
      userAuth = authRecords.find(record => record.email === email && record.password === password);
      fetchNextPage();
    });
  return userAuth.id;
};

export const getAirtableUserDataFromId = async (userId) => {
  let userRecord;
  await airtableBase("Users")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      userRecord = records.find(record => record.id === userId);
      fetchNextPage();
    });
    return userRecord ? constructUserRecord(userRecord) : userRecord;
    // .find(userId, async (error, record) => {
    //   if (error) { console.error(error); return };
    //   const userData = await constructUserRecord(record);
    //   return userData;
    // });
  // console.log(userData);
  // return constructUserRecord(userData);
};

export const airtableCatalog = async () => {
  const catalog = []
  await airtableBase("Furniture")
    // Set maxRecords because couldn't find a way to dynamically get all products
    .select({ view: "Main View", maxRecords: 100, fields: ["Name", "Picture", "In Stock", "Unit Cost", "Description", "Vendor", "Designer"] })
    .eachPage((records, fetchNextPage) => {
      catalog.push(...records);
      fetchNextPage();
    });
  return catalog.map(record => constructCatalogProductRecord(record));
};
