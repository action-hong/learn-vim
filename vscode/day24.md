# day24

搞定git, 对vscode的git操作做一些快捷键配置

## 常用功能

```json
"vim.normalModeKeyBindingsNonRecursive": [
  // 显示git control panel
  {
    "before": ["<Leader>", "g", "g"],
    "commands": ["workbench.view.scm"],
  },
  // discard change
  {
    "before": ["<Leader>", "g", "c", "l"],
    "commands": ["git.clean"],
  },
  // diff change
  {
    "before": ["<Leader>", "g", "d", "f"],
    "commands": ["git.openChange"],
  },
  // 提交所有
  {
    "before": ["<Leader>", "g", "s", "a"],
    "commands": ["git.stageAll"],
  },
  // commit
  {
    "before": ["<Leader>", "g", "c"],
    "commands": ["git.commit"],
  },
  // 提交当前文件
  {
    "before": ["<Leader>", "g", "s"],
    "commands": ["git.stage"],
  },
  // 撤销当前问的提交
  {
    "before": ["<Leader>", "g", "u"],
    "commands": ["git.unstage"],
  },
]
```

注意使用`git.commit`时，有时会弹出一个COMMIT_EDITMSG让你编辑，这样过于麻烦了，我们更希望直接弹出一个对话框让我们输入即可：

```json
{
  "git.useEditorAsCommitInput": false
}
```

## 拓展

- [edamagit](https://marketplace.visualstudio.com/items?itemName=kahole.magit) 

