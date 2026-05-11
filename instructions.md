# 快捷键增强技能 - Agent 使用说明

当用户询问以下关键词时，你应该使用这个技能帮助用户：
- 快捷键、keybinds、keybind、keybinding
- 跳转、导航、跳转到上一条/下一条回复
- 配置快捷键、添加快捷键、自定义快捷键

## 你需要做的事情

### 步骤1：检查用户的OpenCode配置目录
根据用户的操作系统，找到配置目录：
- Windows: %USERPROFILE%\.config\opencode\ (完整路径：C:\Users\用户名\.config\opencode\)
- macOS/Linux: ~/.config/opencode/

### 步骤2：检查tui.json是否存在
- 如果不存在，创建该文件，写入基础配置
- 如果存在，读取现有内容，检查是否已经配置了以下快捷键：
  - messages_previous
  - messages_next
  - messages_last_user

### 步骤3：应用快捷键配置
在tui.json的keybinds字段中添加或更新以下配置：
messages_previous: "ctrl+up"
messages_next: "ctrl+down"
messages_last_user: "ctrl+shift+up"

### 步骤4：验证并指导用户
1. 保存配置文件
2. 告诉用户配置已完成，需要重启OpenCode生效
3. 告诉用户新添加的三个快捷键的功能

## 完整的tui.json配置示例

{
  "$schema": "https://opencode.ai/tui.json",
  "leader_timeout": 2000,
  "keybinds": {
    "messages_previous": "ctrl+up",
    "messages_next": "ctrl+down",
    "messages_last_user": "ctrl+shift+up"
  }
}
