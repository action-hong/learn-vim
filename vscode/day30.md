# day30

vscode 调试部分

- f5: 开始debug
  - 没有效果的话，可能时和其他插件冲突了，个人的电脑时因为装了autojs pro的插件，导致无法使用，disable掉该插件即可
- shift + f5: stop debug
- ctrl + shift + f5: restart debug
- ctrl + shift + 9: toggle 断点（原来为f9
- ctrl + `'`: step over (原来为f10，不好按) (一行一行走，不会进入方法)
- ctrl + shift + `'`: step into (原来为f11，不好按) (会进入方法)
  - 单实际好像 **step over也会进入方法里去**, 搞不懂
- f5: step out (跳到下一个断点)

> 也可以使用前面学到的`vsspacecode`插件，space + ; 然后选择d，即显示所有debug相关的操作