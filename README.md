# rx-vega-parse

The library wraps the vega parse function in an observable.
It is necessary because vega does not handle exceptional cases well enough for reuse.

When given a value that will fail to parse properly, it gives a message to stderr.
While this is fine if you do not care what happens after you give the parser a value,
this does not allow you to make a decision after the parse has been attempted.

Wrapping this behavior in an observable works  to allow you to extend vega's parsing abilities.

## Installation

```
npm install -S rx-vega-parse
```

## API

```
vegaParseSpec : VegaSpec -> Observable Chart
```

## Usage

Let's say you wanted to generate an svg string.

```
import {vegaParseSpec} from 'rx-vega-parse';

vegaParseSpec(someValidSpec)
  .map(chart => chart({renderer: 'svg'}).update().svg())
```

Then you can do whatever you need at that point.
