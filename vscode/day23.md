# day23

发现快捷键使用场景

## 打开、关闭侧边栏

`ctrl` + `b`

- 该快捷键与之前学的vim向上翻页一致，因此可以将该快捷键禁用

```json
"vim.handleKeys": {
  "<C-b>": false,
},
```

该快捷键同时是写`markdown`时，切换bold的快捷键，因此在`markdown`文件下，无法关闭侧边栏(workaround：先ctrl+f，在ctrl+b, 打开搜索后就不focus文件了，此时这个快捷键就能使用了)

当然这个东西就是个取舍问题，如果还是想要vim的翻译功能，能可以去做配置

## live server

- 开启服务：alt+l alt o
- 关闭服务：alt+l alt c

不过我觉得，直接f1, 然后输入指令回车也挺好

## markdown

- 打开侧边栏预览(~~ctrl+k v~~), `alt+k v` (由于ctrl+k已经被映射成向上键，因此原快捷键就没法用了，所以改成这个快捷键)
- 打开预览(ctrl+shift+k)

## show extension

ctrl+shift+x

## reveal file in explorer(打开当前文件在系统资源目录的文件)

- 法1
  - 输入F1, 弹出命令输入框
  - 输入 reveal file in explorer 回车
- 法2
  - 键入`ctrl+;`, focus的侧边的explorer, focus到对应文件
  - 输入`shift + alt + r` 

## copy active file path

- shift + alt + c