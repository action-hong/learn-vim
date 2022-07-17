# day14

## 掌握悬浮显示

- `gh`: 类似鼠标移动到对应的变量上
- `esc`或`ctrl + [`退出悬浮显示

## 大小写切换

### normal mode

- `gU`：大写操作，如`gUiw`将光标所在的单词大写
- `gu`: 小写操作，同理上

### visual mode

- `U`: 框选文字大写
- `u`: 框选文字小写


```js
const user_name = 'kkopite'
```

`~`: 单个字符大小写切换（再normal或visual mode下都可以）

## 注释

- `gc`: 单行注释
- `gC`: 多行注释

> 再normal和visual mode下都可以

```js
const name = 'kkopite'
console.log(`hello ${name}`)
```

光标在第一行，输入`gcl`, 即可注释掉该行

```js
import { ref, watch } from 'vue'
```

光标移动到`watch`上，输入`gCiw`即可只注释`watch`, 如下：

```js
import { ref, /* watch */ } from 'vue'
```

## 问题

### 如何删除引入中的一个变量以及对应逗号，如下：

```diff
- import { ref, watch } from 'vue'
+ import { watch } from 'vue'
```

有类似的函数函数参数的`daa`命令来删除`ref,`吗

> 群里的老哥说了，也可以用`daa`，但是不大行，难道是window的问题？

### 如何快速删除一个函数：

```js
function foo() {
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
  console.log('hello')
}
```

目前的做法的光标移到定义内，`daB`删除{}所有内容，然后再`dd`删除`function foo()`删除定义，有什么更好的快捷键直接删除吗

> 光标到函数名那行，键入`V$%d`即可