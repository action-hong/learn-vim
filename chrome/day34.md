# day34

- `g0`: 切换到第一个标签
- `g$`: 切换到最后一个标签

改建：

```
map gH firstTab
map gL lastTab
```

可以自行配置，对应的指令查看帮助（点击`?`）即可看到

- `t`: 新建一个标签页，默认的网址可以在配置中配置（新标签页默认网址）
- `yt`: 复制当前标签页打开一个新的
- `X`: 恢复之前使用`x`关闭的标签
- `W`: 新建一个窗口，将当前标签页移动到新的窗口
  - 这里使用前面的`T`, 仍然能搜到不懂窗口的标签也
- `^`: 切换到最近访问的标签页

改建：

```
map g[ visitPreviousTab
```

- `<<`: 当前标签页左移（改变标签位置，两次左箭头）
- `>>`: 右移
- `a-p`: 固定标签页（下次打开浏览器，当前标签页还在，并在最左侧）
  - `alt` + `p`
  - 在使用一次就取消