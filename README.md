# eslint-plugin-no-fetch-default

Prevent default fetch() calls

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-fetch-default`:

```
$ npm install eslint-plugin-no-fetch-default --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-fetch-default` globally.

## Usage

Add `no-fetch-default` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-fetch-default"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-fetch-default/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





