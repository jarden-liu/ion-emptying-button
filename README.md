# ion-emptying-button

> This repo is for distribution on `npm` and `bower`.The source for this module is a plugin
of ionic framework for emptying input model and value.

## Language
Read this in other languages: [English](https://github.com/jarden-liu/ion-emptying-button/blob/master/README.md) / [中文](https://github.com/jarden-liu/ion-emptying-button/blob/master/README.zh-cn.md)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Installation

You can install this package either with `npm` or with `bower`.

- npm

```shell
npm install ion-emptying-button
```
Then add `ion-emptying-button` as a dependency for your app:

```javascript
angular.module('myApp', [require('ion-emptying-button')]);
```

```html
<script src="lib/angular-pinyin-translate/dist/angular-pinyin-translate.js"></script>
```
- bower

```shell
bower install ion-emptying-button
```


Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/ion-emptying-button/ion-emptying-button.js"></script>
```

Then add `ion-emptying-button` as a dependency for your app:

```javascript
angular.module('myApp', ['ion-emptying-button']);
```


## Usage
Add an  attr named 'emptying-button' to your input tag, and then it will automatically add the emptying button to the end of input.

```html
<input type="text" ng-model="vm.date.name" emptying-button/>
```
- eb-icon  set the button icon class name, default `ion-ios-close`.
- eb-color  set the button icon color, default `#ABABAB`.
- eb-font-size  set the button icon size.
- eb-right  set the button distance the input right border, default `4px`.
```html
<input type="text" ng-model="vm.date.name" emptying-button eb-color="red" eb-right="4px" eb-font-size="15px" eb-icon="ion-android-close"/>
```



## Demo
demo is coming soon
## License

The MIT License
