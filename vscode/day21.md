# day21

掌握搜索

## global search

- `ctrl` + `shift` + `f`: 打开全局搜索侧边栏
  - 按tab键可以定位到搜索结果
  - 搜索结果列表，可以使用jk上下，hl展开收起
  - 搜索结果列表和搜索栏之间可以通过`ctrl` + `up`/`down` 来切换 

> 需要注意如果使用了搜狗输入法，大概率该快捷键无法生效，可以在搜狗输入法中的属性设置->高级->系统功能快捷键->关闭简繁切换即可
> 同理微软自帶的輸入法的繁重切换快固定拿掉，关掉即可(https://jingyan.baidu.com/article/948f5924ddb3aed80ef5f97d.html) (**可以的话，将所有快捷键都关了**)

- `ctrl` + `shift` + `j`: toggle search query

由于之前我们设置了映射，`ctrl` + `j` 实际上是`arrowDown`, 因此直接点击按3个键没有效果，可以设置更改下改快捷键

```json
{
  "key": "shift+down",
  "command": "workbench.action.search.toggleQueryDetails",
  "when": "inSearchEditor || searchViewletFocus"
}
```

还是可以是用`ctrl` + `shift` + `j`来实现 toggle search query

## go to symbol in workspace(全局工作目录下搜索，图标区分变量，函数)

- `ctrl` + `t`(该快捷键在vim里也有用到，可以进行配置，让vscode来使用这个快捷键)
- 通过键入`ctrl` + `p`, 然后键入`#`也能达到同样效果

## go to symbol in file(本文件搜索)

- `ctrl` + `shift` + `o`
- 命令行有个`@`, 加上`:`，会按照类别（函数、变量）排序

## search command

- `ctrl` + `shift` + `p`
- `f1`
- (前面的符号是`>`)

## search file

- `ctrl` + `p`

## switch files

- 之前的vim
- ctrl + tab(tab点击不断切换文件，松开ctrl和tab即跳转到选中的文件)