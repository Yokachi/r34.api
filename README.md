# This module

## r34.api allow you to shearch Rule34 content with a symple systeme and a big API

<br>
<br>

## Import module

<br>

```js
const r34API = require('r34.api')
```

<br>

## Find image
### rule34 function must be start with await ^^

<br>

```js
const r34API = require('r34.api')

async function getPic() {
    let image = await r34API.rule34(['pussy','lesbian'])
    console.log(image)
}

getPic()
```