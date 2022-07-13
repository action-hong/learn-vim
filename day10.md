# day10

认识数字&&点的威力

## 数字

### 语法

- 数字 + operator + 动作（范围）：如`2dw`: 删除两个单词
- operator + 数字 + 动作（范围）：如`d2w`：删除两个单词

### 好处

保存连贯撤销记录，如上删除两个单词，在撤销(u)，会一次回复两个单词（而如果dw，dw两次，就需要撤销两次才回到原来的状态

### 坏处

需要数一次要删除几个单词等等(因此如果不能一眼看出来的场景，就尽量不要用了)

## 点

### 重复上一次的修改

- 做了更新
  - 增加
  - 删除
  - 修改
- 离开插入模式之前的全部案件操作都记录

```js
function foo() {
  console.log('hello world my friend')
}
```

- 如上光标放在`hello`上，键入`diw`删除单词`hello`, 然后键入`.`, 将不断删除接下来的几个单词
- 进入insert mode, 使用`<backspace>`删除两个字符，然后回到normal mode，键入`.`, 将删除两个字符

### 删除一个单词

- bde: 配合`.`的话，重复执行的是`de`，无法重复单词的删除操作
- dbx: 同样，重复执行的是`x`, 也无法重复单词的操作
- diw: 配合`.`可以重复单词的删除操作

> 判断一个操作的得分，不光要看按键次数，也要看能否与`.`配合起来

### 核心：一键移动，一键操作

- 给每行尾部加上分号：`A` + 分号，退回normal mode，后续直接使用`.`即可重复该操作
  - A进入插入模式，加分号，退出insert mode, 此时即保存前面两个操作
- 查找手动替换：
  - 需要替换文件中某些`hello`字符改成`bye`
  - 1. 键入搜索：`/hello`
  - 2. 使用n/N 查找要替换的地方
  - 3. ciw + 键入`bye`
  - 4. 回到normal模式(此时，保存ciw+bye操作)
  - 5. n/N 寻找其他要替换的地方
  - 6. 使用`.`重复第三步

### 能够重复不用次数

- 无脑一个个删除，不需要思考或数要删除几个（用上面的数字看起来按键次数少，但如果需要思考或数要重复几次反而带来心智负担）