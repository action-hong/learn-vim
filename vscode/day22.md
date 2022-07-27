# day22

## 智能提示

- show code actions: command + `.` (window下似乎每看到)
- trigger parameter hints(函数参数的提示): shift + ctrl + space
- trigger suggestion(提示)： ctrl + i 

## 移动

- 移动行：alt + upArrow/downArrow (因为有了改键，所以 alt + ctrl + j/k 也能做到同样效果)
- 增加行(类似vim的o,O，但是不会进入insert模式)
  - ctrl + enter: 在下面增加一行
  - ctrl + shift + enter: 在下面增加一行

## 删除

- 删除光标前的单词
  - deleteWordPartLeft(ctrl + alt + delete): 删除光标前的一个单词（例如光标移到Left后，只会删除Left
  - deleteWordLeft(ctrl + alt + x): 删除光标签的整个word(例如，删除deleteWordLeft这个单词) 

## 其他

- f8: 跳转到错误位置(基于整个工作区)
  - shift+f8 跳回上一个错误位置
- ctrl + f2: 选中所有的当前单词（对比 gb，不需要一个个选中）