# day15

掌握窗口的管理

## 新建窗口

- `ctrl + w + v`: 创建新窗口，左右
- `ctrl + w + s`: 创建新窗口，上下

## 窗口切换

- `ctrl + w + hjkl`: 方向键切换窗口
- `ctrl + w + w`: 两个窗口之间切换

> 可以切到目录导航里，但是切不会editor了，后面了窗口切换会改

## 窗口关闭

- `ctrl + w + c`： 只能删除当前窗口的当前文件
- `ctrl + w + o`: 保留当前窗口，关闭其他窗口

> 其实这里的删除当前文件跟vscode本身的`ctrl + w`一样，但是这里用了vim了，这个快捷键就没法用了，不像mac有区分ctrl和command

---

vscode 的快捷键

## 新建窗口

- ctrl + \： 左右新建窗口
- ctrl + shift + \: 上下新建窗口（自己定义的快捷键）

## 关闭窗口

- ctrl + w: 关闭窗口
- ctrl + k + w: 关闭当前窗口所有文件(ctrl + k再之前被用来做方向键了，就不用了)

> 由于ctrl+k改建成方向键上，因此可以将改指令的快捷键改成`arrowUp` + `w`，这样同样可以键入`ctrl`+`k`+`w`来关闭

## 窗口切换

配置keybindings.json

```json
  {
    "key": "shift+left",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "h"]
    }
  },
  {
    "key": "shift+right",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "l"]
    }
  },
  {
    "key": "shift+up",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "k"]
    }
  },
  {
    "key": "shift+down",
    "command": "vim.remap",
    "when": "vim.mode == 'Normal'",
    "args": {
      "after": ["<c-w>", "j"]
    }
  }
```

如上将shift+上下左右映射成vim的上下左右窗口切换，两个键比三个键更少，**而且这时候可以从文件menu栏切换editor**