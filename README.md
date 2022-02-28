# ray-scrappie

## Usage:

```bash
npm install ray-scrapper
```

- make an index.js file or your prefered name and require the package as indicated below:

```javascript
const Loarder = require("ray-scrappie");

Loarder("website-link", "element-name", "file-name");
```

- Scrappie is a web-scrapping npm package, that provides the functionality to scape a website of data any data you wish to collect.

## Supported DOM element types include:

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

  1): The link for the website you want to collect data from. For example:

```javascript
 https://example.com
```

2): The type of element you want to collect data from. For example:

```bash
 "h1", "h2", "h3", "h4", "img", "a", "p", "li"
```

3): The file name you wish to store your data into. For example:

```bash
"headings", "paragraphs", "my heading", "links", "image-links"
```

## NOTE:

- All 3 parameters must be strings.
- After instaling the package, make a folder called "data in your project directly to store the newly collected data"
- If you do not make the folder "data" to store the collected data, it will automatically be generated in the root folder
- Do not append the ".json" extention to the file storing data as this is automated.

### Usecase example:

```javascript
Loader("https://example.com", "h3", "sub_headings");
```

- The above code will collect all text in the h3 tags, make a folder in your root directory called "data" (if not found) and write to it a json file containing all your data.

### Word of advise:

- With great power comes great responsibility, please makes sure to use this package responsibly to avoid your IP address being blocked.

- Now go collect your data !!!
