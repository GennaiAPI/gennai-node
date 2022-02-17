
![Gennai Node](./gennainode-logo.svg)

# Gennai Node

Gennai Node is a **modular** library created to facilitate retrieving data from the [Gennai API](https://github.com/GennaiAPI/gennai-api) in a NodeJS enviroment utilizing **promises**.

## Installation

With npm:
```js
npm install gennai-node
```
Or using yarn:
```js
yarn add gennai-node
```

## Usage

Gennai Node is fully modularized, which means you can import only what you need, like so:

```js
import { getDigimons } from 'gennai-node';

async () => {
  const digimonList = await getDigimons();
}
```

Or, for some reason, you can import everything in at once:

```js
import * as Gennai from 'gennai-node';

async () => {
  const digimonList = await Gennai.getDigimons();
}
```

It's recommended to use only what you need, for better performance.

## Examples

### Get by ID

```js
import { getDigimonById } from 'gennai-node';

const agumon = await getDigimonById(1);
const gabumon = await getDigimonById(2);
```

### Get by name

```js
import { getDigimonByName } from 'gennai-node';

const patamon = await getDigimonByName('patamon');
const gatomon = await getDigimonByName('gatomon');
```

### Get all

```js
import { getDigimons } from 'gennai-node';

const digimonList = await getDigimons();
```

With filters: 

```js
import { getDigimons } from 'gennai-node';

const digimonList = await getDigimons({
  offset: 1,
  limit: 3,
  order: 'desc',
  orderBy: 'name'
});
```

## Endpoints

For a full list of endpoints and structures check the official [API documentation](https://gennai-api.vercel.app/).