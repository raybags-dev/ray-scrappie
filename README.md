# ray-scrappie

## Usage:

-Initiate your project with 'npm' package manager

```bash
npm init --yes
```
👇🏽

```bash
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "collect data",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "collect": node index.js
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

- install package 👇🏽
```bash
npm install ray-scrapper
```

- make an index.js file or your prefered name and require the package as indicated below:

```javascript
const Loarder = require("ray-scrapper"); // require the package

Loarder("website-link", "element-name", "file-name"); // use package
```
- example

```javascript
const Loader = require("ray-scrapper");

let link = "https://en.wikipedia.org/wiki/Horror_film";

Loader(link, "h1", "header-history-data");
Loader(link, "h2", "sub-headers-history-data");
Loader(link, "p", "horor-history-data");
Loader(link, "a", "links-history-data");
```

- Then run:
```bash
npm run collect
```

- You should be able to see your data in the folder. Any errors will be logged. 

- Scrappie is a web-scrapping npm package, that provides the functionality to scape data from any website of as long as the data contained therein is publicly available.

## Supported DOM element types for now include:

```bash
h1
```

```bash
h2
```

```bash
h3
```

```bash
h4
```

```bash
img
```

```bash
a
```

```bash
p
```

### parameters:

- This function takes 3 parameters:

  1): The link for the website you want to collect data from (required). For example:

```javascript
 https://example.com
```

2): The type of element you want to collect data from (required). For example:

```bash
 "h1", "h2", "h3", "h4", "img", "a", "p", "li"
```

3): The file name you wish to store your data into (optional). For example:

```bash
"headings", "paragraphs", "my heading", "links", "image-links"
```

## NOTE:

- All 3 parameters must be strings.
- After instaling the package, make a folder called "data" in your root directly to store the newly collected data
- If you do not make the folder "data" to store the collected data, it will automatically be generated in the root folder
- If the name of the file to store collected data is not provided, a generic name will be assigned automatically to the newly created file. ie. "842855342.json"
- Do not append the ".json" extention to the file name for storing data as the extention assignment is automated.

### Example:

```javascript
Loader("https://example.com", "h3", "headers") // for h3 (<h3></h3>) element;
```
```javascript
Loader("https://example.com", "p", "paragraphs"); // for 'p' (<p></p>) element
```
```javascript
Loader("https://example.com", "a", "page_links"); // for 'a' (<a />) element
```

### Word of advise:

- With great power comes great responsibility, makes sure to use this package responsibly to avoid your IP address getting blocked.

- Now go collect your data !!!
