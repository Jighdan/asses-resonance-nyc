import Airtable from "airtable";

const data = {
  apiKey: "keyyj61FnLZAvaS7X",
  base: "appzeUDpZOqRjLPaJ",
};

const airtableBase = new Airtable({ apiKey: data.apiKey }).base(data.base);

export default airtableBase;
