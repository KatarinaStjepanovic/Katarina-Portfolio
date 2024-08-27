import {loadHtml} from "./app.js";

const loadFooter = async () => {
    await loadHtml("footer","../components/footer.html");
     
 }

 await loadFooter();