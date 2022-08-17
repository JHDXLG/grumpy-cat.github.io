### 写在前头

攻略来自[MDN](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

在线的代码操场👇

https://roy-tian.github.io/learning-area/extras/tools/playable-code/



### 一.开始学习html 

----



#### 嵌套元素

你也可以把元素放到其它元素之中——这被称作嵌套

```html
<p>My cat is <strong>very</strong> grumpy.</p>

```



#### 块级元素和内联元素

块级元素会换行，例如<p>

内联元素会在一行内显示，例如<em>

```html
<em>第一</em><em>第二</em><em>第三</em>

<p>第四</p><p>第五</p><p>第六</p>
----
第一第二第三

第四

第五

第六
```



#### 空元素

只有一个标签（无开始标签，结束标签）

例如图片

```html
<img src="https://roy-tian.github.io/learning-area/extras/getting-started-web/beginner-html-site/images/firefox-icon.png">

```



#### 属性

- **一个空格**，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)

- **属性名称**，后面跟着一个等于号。

- **一个属性值**，由一对引号“ ”引起来

  ```html
  例子:
  <p>欲练<a href="https://zh.wikipedia.org/zh-hans/葵花宝典" title="葵花宝典简介" target="_blank">葵花宝典</a>，需引刀自宫</p>
  这里包含三个元素:
  href:声明超链接的 web 地址
  title:为超链接声明额外的信息
  target:指定链接如何呈现出来,target="_blank"将在新标签页中显示
  ```

  **始终记得用引号包围属性**



#### 布尔属性

例如[`disabled`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled) 属性，他们可以标记表单输入使之变为不可用 (变灰色)

```
<!-- 使用 disabled 属性来防止终端用户输入文本到输入框中 -->
<input type="text" disabled>

<!-- 下面这个输入框没有 disabled 属性，所以用户可以向其中输入 -->
<input type="text">

```



#### HTML组成

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>我的测试站点</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>

```

* `<!DOCTYPE html>`: 声明文档类型
* `<html></html>`: `<html>`元素。这个元素包裹了整个完整的页面，是一个根元素。
* `<head></head>`: `<head>`元素。这个元素是一个容器，它包含了所有你想包含在 HTML 页面中但不想在 HTML 页面中显示的内容。
*  `<meta charset="utf-8">` : 这个元素设置文档使用 utf-8 字符集编码，utf-8 字符集包含了人类大部分的文字。
* `<title></title>`: 设置页面标题，出现在浏览器标签上
* `<body></body>`: `<body>`元素。包含了你访问页面时所有显示在页面上的内容，文本，图片，音频，游戏等等。



#### 在HTML中包含特殊字符

我们必须使用字符引用 —— 表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号&开始，以分号 (;) 结束。

```
<p>HTML 中用 <p> 来定义段落元素。</p>

<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>

```

此处👆的  &lt； 表示  <



#### 注释

用特殊的记号<!--  和  -->包括起来

```
<p>我在注释外！</p>

<!-- <p>我在注释内！</p> -->

```



### 二.&lt;head&gt;标签里有什么？Metadata-HTML 中的元数据

----

#### 什么是&lt;head&gt;标签

HTML` <head> `元素与 `<body>`元素不同，它的内容不会在浏览器中显示，它的作用是保存页面的一些[元数据](https://developer.mozilla.org/zh-CN/docs/Glossary/Metadata)。



#### 添加标题

`<title>`是为文档添加标题，而` <h1> `是为了body添加标题，二者不同。

* &lt;h1&gt;元素在页面加载完毕时显示在页面中，通常只出现一次，用来标记页面内容的标题（故事名称、新闻摘要，等等）。
* &lt;title&gt;元素是一项元数据，用于表示整个 HTML 文档的标题（而不是文档内容）。



#### 元数据：&lt;meta&gt;元素

元数据就是描述数据的数据

例如：指定你的文档中字符的编码

```html
<meta charset="utf-8">
```

添加作者和描述

许多 `<meta>` 元素包含了 `name` 和 `content` 属性：

- `name` 指定了 meta 元素的类型；说明该元素包含了什么类型的信息。

- `content` 指定了实际的元数据内容。

  ```html
  <meta name="author" content="Chris Mills">
  <meta name="description" content="The MDN Web Docs Learning Area aims to provide
  complete beginners to the Web with all they need to know to get
  started with developing web sites and applications.">
  ```

  

#### 在HTMl中应用CSS和JavaScript

css使用`<link>`元素,Js使用`<script>`元素

* `<link>`元素经常位于文档的头部。这个 link 元素有 2 个属性，`rel="stylesheet"` 表明这是文档的样式表，而 `href` 包含了样式表文件的路径：

```html
<link rel="stylesheet" href="my-css-file.css">
```

* `<script>`元素放在`<head>`中包含 `src` 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 `defer` 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。

```
备注： <script> 元素看起来像一个空元素，但它并不是，因此需要一个结束标记。您还可以选择将脚本放入 <script>元素中，而不是指向外部脚本文件。
```



#### 为文档设定主语言

通过添加`lang`属性到HTML开始的标签中来实现

```html
<html lang="zh-CN">
```

