# day28

使用 [VSpaceCode](https://vspacecode.github.io/docs/default-keybindings)

该插件将一些常用的功能归纳在一起，默认的开启快捷键是空格键，而由于之前我们的一些组合指令都以空格键为开头，因此需要做一些配置：

```json
// setting.json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>", ";"],
    "commands": ["vspacecode.space"]
  },
]

// keybindings.json
[
  {
    "key": "space",
    "command": "vspacecode.space",
    "when": "activeEditorGroupEmpty && focusedView == '' && !whichkeyActive && !inputFocus"
  },
  // Trigger vspacecode when sidebar is in focus
  {
    "key": "space",
    "command": "vspacecode.space",
    "when": "sideBarFocus && !inputFocus && !whichkeyActive"
  }
]
```

## 修改原有的配置

[参考](https://vspacecode.github.io/docs/menu-customization)

### add/replace

```json
// setting.json
{
  "vspacecode.bindingOverrides": [
    {
      // 修改g 下面的s命令
      // 如果原有的配置没有s，就是新增
      "keys": "g.s",
      "name": "Go to line",
      "type": "command",
      "command":"workbench.action.gotoLine",
    }
  ]
}
```

修改g下的menu

```json
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g",
      "name": "Go...",
      "type": "bindings",
      "bindings": [
        {
          "key": "s",
          "name": "Go to",
          "type": "command",
          "command": "workbench.action.gotoLine",
        }
      ]
    }
  ]
}
```

删除某条命令

```json
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g.s",
      "position": -1,
    }
  ]
}
```