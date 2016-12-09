# ion-emptying-button

这是一个基于ionic框架的输入框清空按钮，用于清空输入框的模型和值。这个依赖包发布在 `npm` 和 `bower`。

## 语言
其他与语言版本: [English](https://github.com/jarden-liu/ion-emptying-button/blob/master/README.md) / [中文](https://github.com/jarden-liu/ion-emptying-button/blob/master/README.zh-cn.md)

## 示例
![示例](https://raw.githubusercontent.com/jarden-liu/ion-emptying-button/master/img/demo-zhcn.gif)

## 目录
- [安装](#安装)
- [用法](#用法)
- [示例](#示例)
- [许可证](#许可证)



## 安装
你可以使用`npm`和`bower`安装这个包。

- npm

```shell
npm install ion-emptying-button
```
然后把 `ion-emptying-button` 当做一个依赖加到你的应用里面:

```javascript
angular.module('myApp', [require('ion-emptying-button')]);
```

- bower

```shell
bower install ion-emptying-button
```


加一个 `<script>`标签到你的 `index.html`:

```html
<script src="/bower_components/ion-emptying-button/ion-emptying-button.js"></script>
```

然后把 `ion-emptying-button` 当做一个依赖加到你的应用里面:

```javascript
angular.module('myApp', ['ion-emptying-button']);
```


## 用法
把 'emptying-button' 属性加入到你的input标签里面，然后就会自动添加一个自动删除的按钮到你的输入框里面。

```html
<input type="text" ng-model="vm.date.name" emptying-button/>
```
- eb-icon          设置按钮的样式class名字, 默认是 `ion-ios-close`.
- eb-color         设置按钮图标的颜色, 默认是 `#ABABAB`.
- eb-font-size     设置按钮的大小.
- eb-right         设置按钮距离输入框右边的距离, 默认是 `4px`.

```html
<input type="text" ng-model="vm.date.name" emptying-button eb-color="red" eb-right="4px" eb-font-size="15px" eb-icon="ion-android-close"/>
```


## 许可证
The MIT License
