# day24

搞定git, 对vscode的git操作做一些快捷键配置

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<Leader>", "g", "g"],
    "commands": ["workbench.view.scm"],
  },
  {
    "before": ["<Leader>", "g", "c", "l"],
    "commands": ["git.clean"],
  },
  {
    "before": ["<Leader>", "g", "d", "f"],
    "commands": ["git.openChange"],
  },
  {
    "before": ["<Leader>", "g", "s", "a"],
    "commands": ["git.stageAll"],
  },
  {
    "before": ["<Leader>", "g", "c"],
    "commands": ["git.commit"],
  },
  {
    "before": ["<Leader>", "g", "s"],
    "commands": ["git.stage"],
  },
  {
    "before": ["<Leader>", "g", "u"],
    "commands": ["git.unstage"],
  },
]
```



