# day19

操作文件

- 切换文件管理区域 : 改成`ctrl` + `;`
- 切换到编辑区：改成`ctrl` + `'`
- 移动光标：`j`,`k`
- 折叠，展开文件夹: `h`，`l`(类似前面的`gd`命令展示所有用到定义的地方)

## 创建文件/文件夹

添加如下配置：

```json
{
  "key": "a",
  "command": "explorer.newFile",
  "when": "filesExplorerFocus && !inputFocus"
}
{
  "key": "shift+a",
  "command": "explorer.newFolder",
  "when": "filesExplorerFocus && !inputFocus"
}
```
- filesExplorerFocus 表示当前聚焦在文件管理区
- !inputFocus 表示在没有输入的时候，没设置的话，如果你输入的文件名有输入`a`时，就会触发快捷键，出问题

### 在编辑文件时，在当前文件所在目录下创建文件：

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<Leader>", "n", "d"],
    "commands": ["explorer.newFolder"],
  },
  {
    "before": ["<Leader>", "n", "f"],
    "commands": ["explorer.newFile"],
  }
]
```

### 通过插件

- FileUtils

## 重命名

```json
{
  "key": "r",
  "command": "renameFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
}
```

在文件管理器上，键入`r`即可进入重命名

## 删除文件

```json
{
  "key": "d",
  "command": "deleteFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
}
```


在文件管理器上，键入`d`即可删除文件

## 总结

今天学的这些就很方便，在之前对文件操作的时候，需要用鼠标来定位，就不叫麻烦些。