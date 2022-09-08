# day6

## 文本对象

文本是结构化，可快速选择, **当成范围就行**


## 语法

- operator + (内部、外部) + 文本对象
- 可视化模式 + （内部、外部） + 文本对象

## 内部，外部

- 内部：i
- 外部：a

### 内部
> 举个例子：

```js
function setName(_name, age) {
  console.log(`hello ${name}`)
}
```

在上诉代码中，光标放在函数参数的括号内，键入`di(`

- d: 删除操作
- i: 内部
- (: 文本对象

则代码会变成如下：

```diff
- function setName(_name, age) {
+ function setName() {
  console.log(`hello ${name}`)
}
```

则可以将指定的文本对象()内的东西都删除掉。

操作符也可使使用之前讲过的 y:复制，c: 删除插入，v: 可视化模式选中相应的文本

### 外部

还是上诉的例子，我们使用外部，键入`da(`

代码则变成如下：

```diff
- function setName(_name, age) {
+ function setName {
  console.log(`hello ${name}`)
}
```

```
{{ text }}
```


**显然，外部即连同文本对象括号也一起处理进去**

## 文本对象

- w: 一个单词 (如键入`diw` 即可删除光标所在的单词)
  - viw: 选中单词
  - vaw:
    - 单词后面有空格，则连同这个空格选中
    - 没有空格，则连同单词前面的空格选中
    - 当然更常用的还是 viw
- (或): 一对括号内的内容
- b: 一对()内的内容 -- b更容易点击到
- \[或\]: 一对\[\]
- {或}: 一对{} -- 处理函数内容
- B: 一对块{}
- <或>: 一对<>
- t: xml标签
  - `<div>hello world</div>`, 光标在标签里面，使用dit即可删除标签内的内容
- \`: 一对\`
- ': 一对'
- ": 一对"
- s: 一个句子
- p: 一个段落

### 句子

以`.`,`!`,`?`结尾的为一个句子，如下：

this is a sentence.
this is a sentence?
this is a sentence!

键入`vis`均可选中三个句子中的一个，可尝试删去句号在看效果

### 段落

以空行间隔开来为一个段落

- vip 选中一个段落
- vap 选中一个段落，同时还选中段落下一面的一个空行

## vim-textobj-arguments

用来处理函数内的参数

- ia: 范围为一个参数，不包含分割符
- aa: 外部，范围为一个参数，包含分隔符

例如：

```ts
function foo(name: string, age: number) {
  // todo
}
```

光标移动到`age: number`, 键入`via`, 即可选中`age: number`, 而键入`vaa`, 则选中`, age: number`

同理可以使用 d, y, c等等，更方便与对函数参数的修改

### 常用指令：

- cia: 修改一个参数
- daa: 删除一个参数
- ...

## vim-textobj-entire

- ae: 整个文件的范围
- ie：当前文件的所有内容，但不包括前后的空格

例如：

- dae: 删除整个文件内容
- vae: 选中整个文件内容