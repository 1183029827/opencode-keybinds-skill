# OpenCode 快捷键增强技能

为OpenCode添加实用的快捷键配置，提升操作效率。

## 功能特性

- 🚀 **快速消息导航**：一键跳转到上一条/下一条回复
- 📍 **快速定位用户消息**：直接跳到最后一条用户发送的消息
- ⌨️ 可自定义快捷键，适配个人使用习惯
- 📦 包含完整的Agent使用指引，其他AI助手可以直接使用

## 安装方法

### 步骤1：安装技能包
使用npm全局安装：
```bash
npm install -g opencode-keybinds-skill
```

### 步骤2：在OpenCode配置中添加技能
打开你的OpenCode配置文件（通常是 opencode.json），添加技能路径：
```json
{
  "skills": ["opencode-keybinds-skill"]
}
```

或者直接手动配置快捷键（无需安装）：
将以下内容添加到你的 `tui.json` 配置文件中：
```json
{
  "keybinds": {
    "messages_previous": "ctrl+up",
    "messages_next": "ctrl+down",
    "messages_last_user": "ctrl+shift+up"
  }
}
```

## 默认快捷键

| 功能 | 快捷键 |
|------|--------|
| 跳转到上一条回复 | Ctrl + 上箭头 |
| 跳转到下一条回复 | Ctrl + 下箭头 |
| 跳转到最后一条用户消息 | Ctrl + Shift + 上箭头 |

## 自定义快捷键

你可以在 `tui.json` 中修改默认快捷键：
```json
{
  "keybinds": {
    "messages_previous": "alt+up",
    "messages_next": "alt+down",
    "messages_last_user": "alt+shift+up"
  }
}
```

## 使用说明

安装后重启 OpenCode 即可生效，无需额外配置。

## Agent使用指引

本技能包含 `instructions.md` 文件，专门指导其他AI助手完成以下工作：
1. 找到用户的OpenCode配置目录
2. 检查并更新tui.json配置
3. 指导用户如何使用新添加的快捷键

当用户询问快捷键相关问题时，其他AI助手可以直接参考本技能的指引完成操作。
