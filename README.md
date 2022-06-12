# eslint-plugin

Custom rules for ExtJs projects

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-plugin`:

```sh
npm install eslint-plugin-eslint-plugin --save-dev
```

## Usage

Add `@spmeesseman/eslint-plugin` to the plugins section of your `.eslintrc` configuration file:

```json
{
    "plugins": [
        "@spmeesseman/eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@spmeesseman/extjs-array-bracket-newline": 1
    }
}
```

## Supported Rules

* Fill in provided rules here


