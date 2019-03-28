# eslint-plugin-fetch

Prevent default fetch() behaviours

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fetch`:

```
$ npm install eslint-plugin-fetch --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fetch` globally.

## Usage

Add `fetch` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fetch"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fetch/no-fetch-credentials": 2
    }
}
```
