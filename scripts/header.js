import {loadHtml} from "./app.js";

const loadHeader = async () => {
    await loadHtml("header","../components/header.html");
  }

  await loadHeader();