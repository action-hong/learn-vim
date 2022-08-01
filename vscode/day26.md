# day26

使用snippets, 复用通用的代码片段，提高效率
 
## 常用的snippets插件

- JavaScript (ES6) code Snippets
- Vue 3 Snippets
- Vue VSCode Snippets

## 常用的

- `clg`: 打印
- `function`: 生成一个函数定义
- `imp`: 导入依赖
- `forof`/`forin`/`foreach`: 遍历

等等

## 自定义片段

`F1` -> Configure User Snippets -> 选择对应哪一类文件增加片段

> 也可以选择针对该项目获取全局的片段

```json
"cssMDN": {
  "prefix": "cssmdn",
  "body": "[`$1`](https://developer.mozilla.org/en-US/docs/Web/CSS/$1)"
},
```

如何由于经常在写文档的时候提到一些css的内容，每次要收到添加链接到mdn就很麻烦，这时候就可以写出这么个片段 [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
