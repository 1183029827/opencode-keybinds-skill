# opencode-keybinds-skill

> OpenCode 快捷键增强技能，一键配置消息跳转、快速导航等实用快捷键

[![npm version](https://img.shields.io/npm/v/opencode-keybinds-skill.svg)](https://www.npmjs.com/package/opencode-keybinds-skill)
[![License](https://img.shields.io/npm/l/opencode-keybinds-skill.svg)](https://github.com/1183029827/opencode-keybinds-skill/blob/main/LICENSE)

## 功能特性

- 🚀 **快速消息导航**：一键跳转到上一条/下一条回复
- 📍 **快速定位用户消息**：直接跳到最后一条用户发送的消息
- ⌨️ 可自定义快捷键，适配个人使用习惯
- 📦 支持npm一键安装，无需手动配置

## 安装

### 前置要求
- OpenCode 版本 >= 1.3.0

### npm 安装（推荐）
```bash
npm install -g opencode-keybinds-skill
```

### 手动安装
1. 克隆仓库
```bash
git clone https://github.com/1183029827/opencode-keybinds-skill.git
```
2. 在 OpenCode 配置中添加技能路径
```json
{
  "skills": ["path/to/opencode-keybinds-skill"]
}
```

## 默认快捷键

| 功能 | 快捷键 |
|------|--------|
| 跳转到上一条回复 | `Ctrl + 上箭头` |
| 跳转到下一条回复 | `Ctrl + 下箭头` |
| 跳转到最后一条用户消息 | `Ctrl + Shift + 上箭头` |

## 自定义配置

在你的 `tui.json` 配置文件中可以自定义快捷键：

```json
{
  "keybinds": {
    "messages_previous": "alt+up", // 自定义为Alt+上箭头
    "messages_next": "alt+down",   // 自定义为Alt+下箭头
    "messages_last_user": "alt+shift+up"
  }
}
```

修改后重启 OpenCode 即可生效。

## 使用说明

1. 安装完成后重启 OpenCode
2. 技能会自动加载并配置快捷键
3. 无需额外操作即可直接使用

## License

MIT
