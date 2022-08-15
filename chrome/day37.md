# day37

debug

- ctrl + b: 打断点 toggle
- shift + ctrl + b: 断点打开/取消 （即toggle右侧断点区域对应的断点, 一直存在的）
- ctrl + `':` step over
- ctrl + `\:` 跳到下一个断点/结束
- ctrl + `;`: step into
- ctrl + f8: 关掉所有断点（有时需要直接看下网页，不想被打断，但是又要保存之前的断点
- ctrl + shift + e: 打印选中的代码（即直接在console上打印，省去自己复制再去打印
- ctrl + shift + o: 跳转到对应搜索的函数（类似vscode的快捷键，不过不会搜索变量，另外其实就是搜索命令加上`@`, 删除后就变成搜索文件了
- ctrl + g: 跳转到对应行 （同理，删除输入框前的`:`, 即变成搜索文件了