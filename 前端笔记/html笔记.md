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

* `<link>`元素经常位于文档的头部。这个 link 元素有 2 个属性，`rel="stylesheet"` (relationship)表明这是文档的样式表，而 `href` 包含了样式表文件的路径：

```html
<link rel="stylesheet" href="my-css-file.css">
```

* `<script>`元素放在`<head>`中包含 `src` 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 `defer` 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。

```
备注： <script> 元素看起来像一个空元素，但它并不是，因此需要一个结束标记。您还可以选择将脚本放入 <script>元素中，而不是指向外部脚本文件。
```



#### 为文档设定主语言

通过添加`lang`(language)属性到HTML开始的标签中来实现

```html
<html lang="zh-CN">
```



### 三.HTMl文本基础

----

#### 标题和段落

* 段落是通过 `<p>`元素标签进行定义

  ``` html
  <p>我是一个段落。</p>
  ```

* 标题是通过`<h1>`定义

  ``` html
  <h1>我是一个标题</h1>
  ```

标题一共有6个等级h1-h6



#### 列表

所谓有序和无序是指内容前面是数字还是·

##### 无序列表

``` html
<ul>
  <li>豆浆</li>
  <li>油条</li>
  <li>豆汁</li>
  <li>焦圈</li>
</ul>
```

输出：

* 豆浆
* 油条
* 豆汁
* 焦圈

##### 有序列表

``` html
<ol>
  <li>沿着路走到头</li>
  <li>右转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>
```

输出：

1. 沿着路走到头
2. 右转
3. 继续走 300 米，学校就在你的右手边

##### 嵌套列表

``` html
<ol>
    <li>第一项</li>
    <li>第二项
        <ul>
        	<li>嵌套的第一个元素</li>
            <li>嵌套的第二个元素</li>
        </ul>
    </li>
</ol>
```

输出:

1. 第一项
2. 第二项
   * 嵌套的第一个元素
   * 嵌套的第二个元素



#### 重点强调

加粗:`<strong>`

斜体:`<em>`

上面两个是表达语义上的加粗和斜体,比如描述一个人的性命,口音上的表达。



下面三种仅影响表象而且没有语义，被称为表象元素。

`<b>`用来传达传统上用 **粗体** 表达的意义：关键字，产品名称，引导句……

`<i>`用来传达传统上用 *斜体* 表达的意义：外国文字，分类名称，技术术语，一种思想……

`<u>`用来传达传统上用 <u>下划线</u> 表达的意义：超链接，专有名词，拼写错误……



### 四.建立超链接

----

#### 什么是超链接

超链接使我门能够将我们的文档链接到任何其他文档或其他资源，另一个网址（URL）

#### 连接的解析

通过将文本（或其它内容，见[块级链接](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#块级链接)) 包裹在`<a>`元素内，并给它一个 [`href`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-href) 属性（也称为**超文本引用**或**目标**，它将包含一个网址）来创建一个基本链接。

<p>我创建了一个指向
<a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a>的超链接。
</p>

##### 使用title属性添加支持信息

你可能要添加到你的链接的另一个属性是 `title`，它包含关于链接的补充信息，例如页面包含什么样的信息或需要注意的事情。

```html
<p>我创建了一个指向<a href="https://www.mozilla.org/en-US/"
   title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">Mozilla 主页</a
   >的超链接。
</p>
```

##### 块级连接

你可以将一些内容转换为链接，甚至是[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)。例如你想要将一个图像转换为链接，你只需把引用了图像文件的`<img>`元素放到`<a>`标签内。

``` html
<a href="https://www.mozilla.org/zh-CN/">
  <img src="mozilla-image.png" alt="链接至 Mozilla 主页的 Mozilla 标志">
</a>
```

#### 统一资源定位符(URL)与路径(Path)快速入门

统一资源定位符（英文：**U**niform **R**esource **L**ocator，简写：URL）是一个定义了在网络上的位置的一个文本字符串。例如 Mozilla 的中文主页定位在 `https://www.mozilla.org/zh-CN/`.

* **指向当前目录** ：如果 `index.html`（目录顶层的 `index.html`）想要包含一个超链接指向 `contacts.html`，你**只需要指定想要链接的文件名**

* **指向子目录**：先进入子目录，再指明想要链接到的文件  **/子目录名/目标文件**

* **指向上级目录**：如果你想在 `projects/index.html` 中包含一个指向 `pdfs/project-brief.pdf` 的超链接，你必须**先返回上级目录**，然后**再回到 `pdf` 目录**。**“返回上一个目录级”使用两个英文点号表示（`..`）**，所以你应该使用的 URL 是 `../pdfs/project-brief.pdf`：

     

##### 文档片段

  超链接除了可以链接到文档外，也可以链接到 HTML 文档的特定部分（被称为**文档片段**）。要做到这一点，你必须首先给要链接到的元素分配一个 [`id`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#attr-id) 属性。例如，如果你想链接到一个特定的标题，可以这样做：

  ```html
  <h2 id="Mailing_address">邮寄地址</h2>
  ```

  然后链接到那个特定的 `id`，你可以在 URL 的结尾使用一个井号指向它，例如：

  ```html
  <p>要提供意见和建议，请将信件邮寄至<a href="contacts.html#Mailing_address">我们的地址</a>。</p>
  ```

  你甚至可以在同一份文档下，通过链接文档片段，来链接到同一份文档的另一部分：

  ```html
  <p>本页面底部可以找到<a href="#Mailing_address">公司邮寄地址</a>。</p>
  ```

##### 绝对URl和相对URL

* **绝对URL**：指向由其在 Web 上的绝对位置定义的位置，包括[协议](https://developer.mozilla.org/zh-CN/docs/Glossary/Protocol)和[域名](https://developer.mozilla.org/zh-CN/docs/Glossary/Domain_name)。

* **相对URL**：指向与你链接的文件相关的位置，例如刚刚举的例子

#### 编写链接元素时可以遵循的最佳实践

**好的**链接文本：[下载 Firefox](https://www.mozilla.org/firefox/)

**不好的**链接文本：[点击这里](https://www.mozilla.org/firefox/)下载 Firefox

当链接到一个需要下载的资源（如 PDF 或 Word 文档）或流媒体（如视频或音频）或有另一个潜在的意想不到的效果（打开一个弹出窗口，或加载 Flash 电影），你应该添加明确的措辞，以减少混乱。

```html
<p><a href="https://www.example.com/large-report.pdf">
  下载销售报告（PDF, 10MB）
</a></p>

<p><a href="https://www.example.com/video-stream/" target="_blank">
  观看视频（将在新标签页中播放，HD 画质）
</a></p>

<p><a href="https://www.example.com/car-game">
  进入汽车游戏（需要 Flash 插件）
</a></p>
```

##### 在下载连接时使用download属性

当你链接到要下载的资源而不是在浏览器中打开时，**你可以使用 download 属性来提供一个默认的保存文件名**。

```html
<a href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN"
   download="firefox-latest-64bit-installer.exe">
  下载最新的 Firefox 中文版 - Windows（64位）
</a>
```

#### 电子邮件连接

当点击一个链接或按钮时，打开一个新的电子邮件发送信息而不是连接到一个资源或页面，使用`<a>`元素和 `mailto`:URL 。

```html
<a href="mailto:nowhere@mozilla.org">向 nowhere 发邮件</a>
```

<a href="mailto:nowhere@mozilla.org">向 nowhere 发邮件</a>