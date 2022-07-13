# day11

多文件之间的跳转

## 定位

### 标记

- 单文件：m + 小写字母，如mm
- 多文件：m + 大写字母，如mM

### 跳转

- `'` + 标记使用的字母，跳转到之前标记的行
- `\`` + 标记使用的字母，跳转到之前标记的行和列（更精确）

### 使用场景

例如在阅读别人的代码时，看到b方法内调用了a方法，这时候可以先使用`mM`标记，然后去查看a方法的实现，待看完a方法后，点击`'M`即可会到之前的b方法

单个文件的标记用小写，多个文件之前的跳转用大写字母

## jump to definition

- 阅读代码中，想看某个方法的实现，可在光标定位到该方法，键入`gd`即可跳转到该方法的定义上，**变量同理**
- 在定义的方法出，再次进入`gd`，可以查看该方法在所有文件上的引用：
  - 会弹出一个小框，每个文件展开显示该文件所有调用该方法的地方
  - 通过jk，来上下移动
  - h键跳转到文件那个
  - l键可展开，收起该文件的所有调用列表（光标必须在文件名出，以此会配合h键使用）
  - 回车即可跳到对应引用的方法
  - esc退出

## 跳转

任意大于一个单词或跳过当前行导航的移动都是一个跳转，如：

- ' 跳转到之前标记的行
- ` 跳转到之前标记的行列
- gg
- / 向后搜索
- ? 向前搜索
- n 下一个搜索
- N 上一个搜索
- gd
- [ 上一个段落
- ] 下一个段落

不会记录的命令，如：

- 翻页（如\<ctrl> + f）
- shift + j,k

特别的，vim-sneak 只记录一次

以上所有的每次跳转都会记录，然后通过一下两个方法，完成这些记录的跳转

- ctrl + i：往前跳之前的记录
- ctrl + o: 往回条之前的记录

这里比较常用的就是再看某个方法时，跳转到内部的一个方法的实现（gd）,然后看完回来（ctrl+o）;