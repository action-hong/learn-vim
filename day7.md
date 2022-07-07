# day7

在文件中移动更快

## 滚动

- ctrl+f: 向下滚动一屏
- ctrl+b: 向上滚动一屏
- ctrl+d: 向下滚动半屏
- ctrl+u: 向上滚动半屏
- ctrl+e: 向下滚动一行
- ctrl+y: 向上滚动一行

一般用到前两个即可，因为快

另外做一个配置:

```json
"vim.normalModeKeyBindings": [
  {
    "before": ["J"],
    "after": ["5", "j"]
  },
  {
    "before": ["K"],
    "after": ["5", "k"]
  }
],
"vim.visualModeKeyBindings": [
  {
    "before": ["J"],
    "after": ["5", "j"]
  },
  {
    "before": ["K"],
    "after": ["5", "k"]
  }
]
```

将`J`和`K`映射成向下移动5行和向上移动5行，结合原来的jk, 很容易就记住了

## 其他

- zz: 当前行置于屏幕中央
- zt: 当前行置于屏幕顶部
- zb: 当前行置于屏幕底部
- gg: 跳到文件首行
- G: 跳到文件尾行
- 跳到指定行：
  - 行数+gg
  - 行数+G

两种都可以，例如要跳到文件的20行，键入`20gg`或`20G`即可

今天的内容比较简单，多加练习，形成肌肉记忆即可~