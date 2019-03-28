# eslint-plugin-fetch-options

Prevent default fetch() behaviours

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-fetch-options`:

```
$ npm install eslint-plugin-fetch-options --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-fetch-options` globally.

## Usage

Add `fetch-options` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "fetch-options"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "fetch-options/no-fetch-credentials": 2
    }
}
```
