# day18

vim 調用 vscode 的命令

## commands

```js
function name(name) {
  console.log(`hello ${name}`)

  console.log('good')
}
```

例如`vscode`的格式化快捷鍵是：`shift` + `alt` + `f`，對應的`action`為：`editor.action.formatDocument`，則我們可以做如下配置：

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<leader>", "f", "d"],
    "commands": ["editor.action.formatDocument"]
  }
],
```

這樣使用`<leader>` + `f` + `d`也可以格式化了，雖然原先的快捷鍵就挺好用的。

同样的，我们可以配置任意的`vim`快捷键来执行任意的`vscode`命令（不过感觉有点脱裤子发屁？，本身这些指令就可以在 vscode 上配置快捷键？）

## 重命名

```json
{
  "before": ["<leader>", "r", "n"],
  "commands": ["editor.action.rename"]
}
```

## 代码折叠

```json
[
  {
    "before": ["<leader>", "["],
    "commands": [
      {
        "command": "editor.fold"
      }
    ]
  },
  {
    "before": ["<leader>", "]"],
    "commands": [
      {
        "command": "editor.unfold"
      }
    ]
  }
]
```

注意这里面的 commands 里面不是一个字符串，而是一个对象了，两种方式都可以，只不过这里使用字符串的话，无法生效会报错，因为改成对象的形式

### 问题

这里有个问题，函数折叠后，光标时停留在函数名那行上的，此时如果点击`j`，向下，则又展开代码，白折腾了，因此我们希望在折叠后，光标定位到函数的`}`上

```json
{
  "before": ["<leader>", "["],
  "commands": [
    {
      "command": "editor.fold"
    },
    {
      "command": "vim.remap",
      "args": {
        "after": ["$", "%"]
      }
    }
  ]
}
```

执行折叠后，定位到行尾，一般时`{`, 然后键入`%`, 就可以找到函数的`}`, 不过这有个问题，必须`{`符号与函数在同一行，如下的方法就不行了：

```js
function bar(
  name,
  age
) {
  console.log(name);
  console.log(name);
  console.log(name);
  console.log(name);
  console.log(name);
}
```

有什么更通用的方法吗？
