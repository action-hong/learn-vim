# day 29

vscode 终端

- ctrl + <code>`<code>: toggle终端
- ctrl + `\`: 终端分屏
- 清空终端：没有设置快捷键，对应输入指令也差不多
- 分屏切换:
  - workbench.action.terminal.focusNextPane: 改键 ctrl + ]
  - workbench.action.terminal.focusPreviousPane: 改键 ctrl + [
- 关闭
  - shift + alt + q
  - workbench.action.terminal.kill
- 新建
  - workbench.action.terminal.new 
  - shift + alt + n
- 新建后，多个终端的切换（注意和分屏的切换不同
  - workbench.action.terminal.focusPrevious: ctrl + shift + [ (原先的ctrl + pageUp 不好按)
  - workbench.action.terminal.focusNext: ctrl + shift + ] 

## 扩展

- 直接在vscode打开终端，对应路径就是当前项目的路径

- workbench.action.terminal.openNativeConsole: ctrl + shift + c

window默认打开的终端是cmd，需要去配置打开的终端。这时候可以直接去查看vscode的源码，搜索workbench.action.terminal.openNativeConsole该指令时根据那个值去打开终端的。

搜索源码，可以发现window是要配置`terminal.external.windowsExec`:

```js
'terminal.external.windowsExec': {
  type: 'string',
  description: nls.localize('terminal.external.windowsExec', "Customizes which terminal to run on Windows."),
  default: terminals.windows,
  scope: ConfigurationScope.APPLICATION
}
```

做如下配置，想要默认使用`git bash`

```json
  "terminal.external.windowsExec": "C:\\Program Files\\Git\\bin\\bash.exe",
```

