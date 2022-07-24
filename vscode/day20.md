# day20

多窗口操作（多个项目）

## 打开新的vscode窗口

- win: `shift` + `ctrl` + `n`
- mac: `shift` + `command` + `n`

这里需要特别注意，新建窗口的时候，会出现一个空的文件给你编辑，此时会处于`vim`模式，导致`ctrl`+ `r`无法使用来选择工作区，你应该检查下配置文件，是否时该配置:

```json
{
  "workbench.startupEditor": "none"
}
```

## 选择工作区

- `ctrl` + `r`

## 多个窗口切换

- mac: `command` + <code>`<code>
- win: Easy Windows Switcher

## 关闭vscode窗口

- mac: `shift` + `command` + `w` 
- mac: `shift` + `ctrl` + `w` 