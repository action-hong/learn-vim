# 第一天

## insert/normal 模式

- normal 模式：
  - 无法进行编辑
  - 光标比较粗
  - 可以进行各种快捷键，如下面的上下左右快捷键(jkhl)
  - 切换到insert模式：
    - `i`: insert模式，在当前光标前输入
    - `a`：insert模式，在当前光标后输入
- insert 模式：
  - 用于输入字符
  - 切换到normal模式：
    - Esc: 退出normal模式
    - Ctrl+[ : 退出normal模式``


## 上下左右移动

- 需要再normal模式下
- j：up
- k: down
- h: left
- l: right

## 终端下vim如何退出

- normal模式下 + `:wq` 代表保存退出
- normal模式下 + `:q!` 强制退出，不保存

## 注意事项

- 输入模式下，中文打完必须里面切换回英文，否则切换回normal模式下，快捷键无效。

```js
const aaallla = 1111
const name = 'kkopite'

```