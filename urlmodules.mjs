import {URL} from "url";


const myURL = new URL("https://example.org");
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh'; 
myURL.port = '8000'

console.log("heythere",myURL)
console.log("heythere",myURL.href)

