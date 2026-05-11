# OpenCode 快捷键增强技能

为OpenCode添加实用的快捷键配置，提升操作效率。

## 功能特性

- 🚀 **快速消息导航**：一键跳转到上一条/下一条回复
- 📍 **快速定位用户消息**：直接跳到最后一条用户发送的消息
- ⌨️ 可自定义快捷键，适配个人使用习惯

## 安装方法

### 方式一：npm 安装（推荐）
```bash
npm install -g opencode-keybinds-skill
```

### 方式二：手动配置
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
| 跳转到上一条回复 | `Ctrl + 上箭头` |
| 跳转到下一条回复 | `Ctrl + 下箭头` |
| 跳转到最后一条用户消息 | `Ctrl + Shift + 上箭头` |

## 自定义快捷键

你可以在 `tui.json` 中修改默认快捷键：
```json
{
  "keybinds": {
    "messages_previous": "alt+up", // 自定义为Alt+上箭头
    "messages_next": "alt+down",   // 自定义为Alt+下箭头
    "messages_last_user": "alt+shift+up"
  }
}
```

## 使用说明

安装后重启 OpenCode 即可生效，无需额外配置。
