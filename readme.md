*This repository is a mirror of the [component](http://component.io) module [ramitos/to_px](http://github.com/ramitos/to_px). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-to_px`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
to_px(100) //=> '100px'
to_px(-1) //=> '-1px'
to_px(-1, true) //=> '0px'
to_px('somerandomstring') //=> 'somerandomstring'
to_px(null) //=> '0px'
to_px(undefined) //=> '0px'
to_px(NaN) //=> '0px'
to_px({}) //=> '0px'
```

## license

MIT