# day3

## vim的操作符

操作+动词，动词可以理解为一个范围

- d: 删除
- c: 删除并进入插入模式
- y: 复制

例如结合之前学习的，l是向右移动一位，那么`d`+`l`表示删除当前光标，`d`+`L`表示删除当前光标到该行结尾

这里可以有不同种的组合

```js
function getFoo() {
  return 'hello world'
}
```

## 移动

- w: 光标移动到下一个单词的第一位
- e: 光标移动到下一个单词的最后一位
- b: 光标移动到上一个单词的第一位
- ge: 光标移动到上一个单词的最后一位

这里就可以做很多操作了，例如快速修改一个函数名，光标放在函数名首，然后按下`ce`, 即删除函数名，同时进入插入模式

此外还可以结合复制粘贴，复制从行首到当前光标如：`yH`

需要不断地练习，形成肌肉记忆!

> 需要注意的一点，逗号、句号之类的符号也会认为是一个单词，因此上述的四个移动也会移动到逗号，句号之类的上去

要想移动整个字符串，可以使用大写的`W`,`E`,`B`,如下：

```
your's homework
```

使用`w`的号，会一次跳到，`y`,`'`,`s`, `h`, 而使用`W`，则会以此跳到`y`, `h`, 同理`E`, `B`