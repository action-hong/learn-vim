# day25

了解`lazygit`

- `q`: 推出lazygit
- `h`/`l`: 左侧功能区切换，也可用1~5按键切换
- `j`/`k`: 功能区内单挑记录焦点切换
- `[`/`]`: 功能区内多个标签之间的切换，如commit里的提交以及reflog页面
- `?`: 所有功能的按键提示、说明

## 常用

- add: 第二功能区，聚焦对应文件，使用`space`切换该文件的stage状态
- commit: 第二功能区，点击`c`, 弹出输入框，输入后点击回车，进行提交
- reset: 在提交功能区，选择对应的某个提交，键入`g`, 弹出reset --soft/--mixed/--hard，选择后键入回车提交
- pull: 在任意位置，点击`p`进行代码拉取
- push: 在任意位置，点击`p`进行代码推送
- discard: 在第二功能区，选择对应文件，点击`d`会弹出提示，是否撤销该文件的所有更改。键入`D`，撤销当前所有文件的修改
- branch: 在第三功能区(Local Branch), 键入`n`即可基于当前分支创建新分支，键入`d`即可删除聚焦的分支。