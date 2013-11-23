# to_px

## install

```bash
component install ramitos/to_px
```

## api

```js
var to_px = require('to_px')

to_px('100px') //=> '100px'
to_px('1em') //=> '1em'
to_px('somerandomstring') //=> 'somerandomstring'
to_px(null) //=> '0px'
to_px(undefined) //=> '0px'
to_px(NaN) //=> '0px'
to_px({}) //=> '0px'
```

## license

MIT