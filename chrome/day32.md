# day32

- gi: 聚焦输入框（有多个的话，tab切换
- yy: 复制当前网页地址
- p: 将当前粘贴板的内容复制到浏览器地址，跳转
- P: 同理，不过是新建一个标签页，输入粘贴板的地址
- x: 关闭当前标签页，同理chrome自带的 CTRL+ w
- r: 刷新页面
- yv: 类似f, 选择对应位置，进入类似可视化模式，进行选取文字
  - 也可使用o来切换选取方向
  - 使用V 来切换选择的行

## 改键

我们之前习惯使用`H`和`L`来定位到行头和行尾

```
mapKey <H:v> <0>
mapKey <L:v> <$>
```

参见[该链接](https://github.com/gdh1995/vimium-c/wiki/Use-in-another-keyboard-layout#per-mode-mapkey), `v`表示在可视化模式下，即`H:v`表示在可视化模式下，`H`隐射成`0`