import Airtable from "airtable";
import {
  constructUserAuthRecord,
  constructUserRecord,
  constructCatalogProductRecord
} from "./airtableRecordConstructor";

const airtableBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_AIRTABLE_BASE_KEY);

// Catalog
export const getAirtableCatalog = async () => {
  const catalog = [];
  await airtableBase("Furniture")
    .select({ view: "Main View" })
    .eachPage((records, fetchNextPage) => {
      catalog.push(...records);
      fetchNextPage();
    });
  return catalog.map(record => constructCatalogProductRecord(record));
};

// Users
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

export const checkUserExistence = async (userEmail) => {
  let userExistence;
  await airtableBase("Users")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      userExistence = records.find(record => record.get("email") === userEmail);
      fetchNextPage();
    });
  return userExistence ? true : false;
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
};

export const createAirtableUser = (userData) => {
  const { firstName, lastName, email, password } = userData;
  airtableBase("Users").create([{
    "fields": {
      "Password": password,
      "First Name": firstName,
      "Last Name": lastName,
      "email": email,
      // Not using usernames in the application, so there's no need to register it.
      "username": "",
    }
  }], (error) => {
    if (error) { console.error(error) };
  });
};
