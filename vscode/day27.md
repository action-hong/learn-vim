# day27

掌握重构

## vscode

[参考](https://code.visualstudio.com/docs/editor/refactoring)

指令：

- `ctrl` + `shift` + `R`: (只提示重构相关的，可以左手ctrl，右手shift)
- `ctrl` + `.`(除了重构的，还会有修复的提示)

- F2: rename (前面快捷键的有用过了)
- Extract Method(选中代码后，提取生成一个函数声明)
- Extract Variable

## 插件

### Abracadabra (https://github.com/nicoespeon/abracadabra/blob/main/REFACTORINGS.md)

- 同样适用`ctrl` + `.`触发
- 具体功能参见链接
- 该插件提供的重构选项，尾部会有小星星
- 例如inline variable
- 替换字符串为 template string(如果嫌之前的vim-sround麻烦的话)，但是无法从template string变化普通的string

```javascript
const jack = {
  name: 'kkopite',
  age: 18
}
main(jack)

// 光标移动到声明的变量jack上，执行inline variable
// 变成如下
main({
  name: 'kkopite',
  age: 18
})
```

### hocus Pocus
  
创建变量/方法 (有时候先调用了一个不存在的方法，然后再生成对应的定义)

可以吧常用的这两个创建变量和方法的指令映射成快捷键

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<Leader>", "f", "f"],
    "commands": ["hocusPocus.createFunction"]
  },
  {
    "before": ["<Leader>", "v", "v"],
    "commands": ["hocusPocus.createVariable"]
  },
]
```

### javascript booster

与前面的 abracadabra有些许重叠功能

- condition
  - ifelse 与 三元表达式互转
  - ifelse 条件切换
  - ifelse括号 toogle
  - 等等
- string
  - regular string 与 template string切换
- functions
  - 箭头函数与普通函数的切换