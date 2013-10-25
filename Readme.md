
# load

  Callback when the document is load.

## Installation

    $ component install ianstormtaylor/on-load

## Example
  
```js
var onLoad = require('on-load');

onLoad(function () {
  console.log('load');
});
```

## API

### onLoad(handler)

  Call a `handler` when the document is loaded, calling on next tick if the document is already loaded.

## License

  MIT
