# ray-scrappie

## Usage:

```bash
npm install ray-scrappie
```

- Scrappie is a web-scrapping npm package, that provides the functionality to scape a website of data.

## Supported DOM element types supported include:

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

## Resource

A function:

```bash
Loader
```

is exposed.

### parameters:

- These function takes 3 parameters:

  1): The link for the website you want to collect data from. For example:

```javascript
 https://example.com
```

2): The type of elementt you want to collect data from. For example:

```bash
 "h1", "h2", "h3", "h4", "img", "a", "p", "li"
```

3): The file name you wish to store your data into. For example:

```bash
"headings", "paragraphs", "my heading", "links", "image-links"
```

## NOTE:

- All 3 parameters must be strings.
- After instaling the package, make a folder called "data in your project directly to store the newly collected data" otherwise It will be automatically generated for you.

### Example:

```javascript
Loader("https://example.com", "h3", "subheadings");
```

- The above code will collect all text in the h3 tags, make folder in your home directory called "data" and write to it a json file containing all your data.

### Workd of advise:

- With great power comes great responsibility, please makes sure to use this package responsibly to avoid your IP address being blocked. You
