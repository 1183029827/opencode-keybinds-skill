/**
 * OpenCode 快捷键增强技能
 * 自动配置消息导航快捷键
 */

module.exports = {
  name: 'opencode-keybinds-skill',
  version: '1.0.0',
  description: 'OpenCode快捷键增强技能',
  
  // 技能加载时自动应用配置
  activate: (opencode) => {
    console.log('✅ 快捷键增强技能已加载');
    
    // 合并快捷键配置
    const customKeybinds = {
      messages_previous: 'ctrl+up',
      messages_next: 'ctrl+down',
      messages_last_user: 'ctrl+shift+up'
    };
    
    // 应用到当前配置
    opencode.config.merge('tui.keybinds', customKeybinds);
    
    console.log('📋 已添加快捷键：');
    console.log('   Ctrl+↑ 跳转到上一条回复');
    console.log('   Ctrl+↓ 跳转到下一条回复');
    console.log('   Ctrl+Shift+↑ 跳转到最后一条用户消息');
  },
  
  // 技能卸载时清理配置
  deactivate: (opencode) => {
    console.log('❌ 快捷键增强技能已卸载');
  }
};
