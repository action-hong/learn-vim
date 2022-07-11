# day9

## vim easy-motion

首先添加如下配置：

```json
{
  // 开启easymotion 插件
  "vim.easymotion": true,
  // 将leader键改成空格键
  // 默认是反斜杠键"\"
  "vim.leader": "<Space>",
}
```

使用：

### 单词跳转

- start of word forwards: `<leader><leader>w`, 光标往下，高亮每个单词的首字符，再次键入对应首字符，完成跳转
- start of word backwards:  `<leader><leader>b`, 同理，不过是往上高亮
- end of word forwards:  `<leader><leader>e`, 同理，光标往下，高亮每个单词的最后一个字符
- end of word backwords:  `<leader><leader>ge`, 同理，光标往上，高亮每个单词的最后一个字符

可以看到，w,b,e,ge跟之前学到的单词跳转一样，方便记忆

> 高亮字符可能有多个(如果要跳转的点很多的话)，需要全按完
### 行跳转

- `<leader><leader>j`: 向下高亮每一行，键入每一行的高亮字符即可跳转
- `<leader><leader>k`: 向上高亮每一行，键入每一行的高亮字符即可跳转

### 精确跳转

匹配单词开头，结尾，驼峰，下划线等:
match beginning & ending of word, camelCase, after _, and after #

- `<leader><leader>l`: 向下精确跳转 
- `<leader><leader>h`: 向上精确跳转 
- `<leader><leader><leader>j`: 向上,向下精确跳转(不常用，按得太多了)

j和k 便是上下移动的按键，很方便记忆



## vim-sneak

开启sneak:

```json
{
  "vim.sneak": true,
}
```

- `s` + 两个字符：向下搜索（两个字符更为准确）
  - 继续搜索，点`;`,`,` 类似前面学的`f`搜索
- `S` + 两个字符，同理，不过是向上搜索

### 好处

- 相较于`f`，他是全文件得，而`f`只能再一行搜索
- 相较`/`搜索，可以多减少一个回车键（当然如果有更精确得搜索，还是`/`好用

### 问题

`s`本来是用来删除字符并插入得，因此这里s键就该插件占用了，这里我们可以通过改建来让原来得按键仍有效

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["f"],
    "after": ["s"]
  }
  {
    "bre": ["F"],
    "after": ["S"]
  },
  {
    "before": ["s"],
    "after": ["d", "l"]
  },
  {
    "before": ["S"],
    "after": ["^", "C"]
  }
],  
```

- 将f和F替换成 senak得功能（原来得f就不用了）
- s 映射成 `dl`, 也能表示向右删除一个字符
- S 映射成`^C`, `^`跳到该行首列，`C`删除光标后所有字符并插入，等同与原先的删除改行并插入功能
- 配置使用不递归，否则f会映射到`dl`去 

为了保持一致，可视化模式页进行相应配置:

```json
"vim.visualModeKeyBindingsNonRecursive": [
      {
        "before": ["f"],
        "after": ["s"]
      }
    ]
```

这样一来，可视化模式的f键也是向下搜索两个字符了。

> 这里没映射`S`是因为该插件再可视化模式不支持`S`

同样的，为了能在操作键后也是使用该插件，如`d`, `c`等等：

```json
"vim.operatorPendingModeKeyBindingsNonRecurise": [
  {
    "before": ["f"],
    "after": ["z"]
  },
  {
    "before": ["F"],
    "after": ["Z"]
  },
]
```

这里是因为该插件再`operatorPendingMode`下是z, 因此映射成z和Z