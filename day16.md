# day16

如何删除函数

## 任务点

`%`: 匹配括号或大括号，例如光标在`(`，点击`%`或就匹配到`)`

可以配合`v`类似做选中

```js
function foo(name) {
  console.log('hello ' + name)
} 
```

[`vim-indent-object`](https://github.com/VSCodeVim/Vim#vim-indent-object)

基于缩进的的文本范围

- `<operator>ii`: 缩进的部分

```python
def foo(name):
  print(name)
  print(name)
  print(name)
  if (name == 'hello')
    print(name)
```

如上在函数体内，输入`vii`, 会选中该block体内的所有内容，{}, (), [], 


- `<operator>ai`: 缩进的部分, 加上缩进的上一行，如函数声明，if语句等, 但是对于js来说，它无法选中最下面的一个`}`符号
- `<operator>aI`: this indentation level, the line above, and the line after (think if statments in C/C++/Java/etc)
```js
function foo(name) {
  console.log('hello ' + name)
  if (name === 'kkopite')
    console.log('amazing')
} 
```

> 但是有个问题，如果光标不在block里，而是在如函数声明上，就不起作用了

## 实现

- `dal`: 基于段落，不行，如果函数内有空格，就不行
- `daI`: 基于上面学到的`vim-indent-object`, 但是在函数声明上执行就不行
  - 大写的I不爽，这里可以把`ai`映射成`aI`, 因为对我们来说只操作函数体内的代码时，可以使用`iB`(因为我们主要都是写js)

在visual mode和operatorPending mode配置如下：

```json
{
  "before": ["a", "i"],
  "after": ["a", "I"]
}
```

- `V$%d`:
  - `V`: 选中改行
  - `$`: 光标到该行尾部(对应`{`)
  - `%`: 匹配`}`
  - `d`: 删除

四个按键过于繁琐，可以进行配置简化下:

```json
"vim.normalModeKeyBindings": [
  {
    "before": ["<Leader>", "d", "f"],
    "after": ["V", "$", "%", "d"]
  }
],
```

这样就只需要三个键就行了(不过一开始的光标必须在函数声明上)

但如果是下面这种方式：

```js
function foo(
  name,
  age,
  address,
) {
  console.log(`hello ${name}`)
  console.log(`hello ${name}`)
  console.log(`hello ${name}`)
  console.log(`hello ${name}`)
}
```

`V$%`只能选中到函数参数的`)`上，因此需要再去匹配`{`,即`V$%$%d`, 也可以做如下的映射:

```json
{
  "before": ["<Leader>", "d", "d", "f"],
  "after": ["V", "$", "%", "$", "%", "d"]
}
```