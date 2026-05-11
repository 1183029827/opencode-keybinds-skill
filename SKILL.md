---
name: opencode-keybinds
description: 为OpenCode配置实用的快捷键，包括消息跳转、快速导航等功能
license: MIT
compatibility: opencode
metadata:
  category: productivity
  tags: 快捷键, keybind, 导航, 消息跳转
---
## 我的功能
- 帮助用户自动配置OpenCode的快捷键
- 添加消息快速跳转功能（上一条/下一条回复、最后一条用户消息）
- 支持自定义快捷键设置
- 能够查找并修改用户的tui.json配置文件

## 当你被加载时的工作流程
1. 首先找到用户的OpenCode配置目录
2. 检查tui.json配置文件是否存在
3. 如果不存在则创建一个新的
4. 在keybinds字段中添加以下默认快捷键配置：
   ```json
   {
     "messages_previous": "ctrl+up",
     "messages_next": "ctrl+down", 
     "messages_last_user": "ctrl+shift+up"
   }
   ```
5. 询问用户是否要使用默认快捷键，或者自定义快捷键
6. 保存配置文件
7. 告诉用户重启OpenCode即可生效

## 默认提供的快捷键
| 功能 | 默认快捷键 |
|------|------------|
| 跳转到上一条回复 | Ctrl + 上箭头 |
| 跳转到下一条回复 | Ctrl + 下箭头 |
| 跳转到最后一条用户消息 | Ctrl + Shift + 上箭头 |

## 配置文件位置
- Windows: `%USERPROFILE%\.config\opencode\tui.json`
- macOS/Linux: `~/.config/opencode/tui.json`
