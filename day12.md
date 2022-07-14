# day12

处理包裹字符的符号(vim-sround)

## 改变已有的符号

`cs` + 原有的符号 + 希望改成的符号

(change sround)

```js
const name = 'kkopite'
const msg = "hello ${name}"
```

如上，我希望把msg定义的字符串的`"`改成\`，

仅需执行 **cs"\`**

## 添加符号

给一个单词添加符号

`ys` + 范围(如单词`iw`) + 添加的符号

```js
const name = kkopite
```

如上要给kkopite添加双引号，只需`ysiw'`

## 删除符号

`ds` + 符号

```js
const name = 'kkopite'
```

如上我要删除kkopite的单引号，只需`ds'`

## 可视化模式下添加符号

在normal模式下，不好知道符号的范围时，使用它

`S` + 符号

```
hello hello
hello
hel
```

使用可视化模式，框选相应的范围后，输入`S` + 相加的符号即可

---

```js
const name = 1 + 2 * 3
```


前三种命令在编辑代码的时候非常管用，例如字符串需要从双引号编程单引号或反引号等等，为了部分运算的优先级，加上括号等