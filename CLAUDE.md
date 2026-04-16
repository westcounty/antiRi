# antiRi — AI 助手上下文

## 项目概述

《星火》抗日战争主题文字冒险游戏，纯前端 HTML5 实现。玩家扮演 4 种角色（村民、国军士兵、文化工作者、商人），体验 1937–1945 年抗战全过程，含资源管理、多分支剧情与成就系统。

## 关键命令

```bash
# 无构建步骤，直接在浏览器打开
open index.html
```

## 目录结构

```
antiRi/
├── index.html              # 游戏入口（直接浏览器打开）
├── style.css               # 游戏样式
├── script.js               # 主游戏脚本
├── script_expanded.js      # 扩展剧情脚本
├── script_chapters_enhanced.js  # 强化章节脚本
├── script_progression.js   # 游戏进程脚本
├── script_all_missing.js   # 缺失节点补全
├── script_missing_nodes.js # 节点修复脚本
├── game_design.md          # 游戏设计文档
├── COMMERCIAL_UPGRADE_PLAN.md   # 商业化升级计划
├── README.md               # 项目说明
└── docs/                   # 附加文档
```

## 核心设计

- **技术栈**：纯 HTML5 + CSS3 + JavaScript，无框架依赖
- **存档**：localStorage 保存游戏进度
- **资源系统**：食物、弹药、情报、声望、金钱、药品
- **结局**：多结局（胜利/失败/特殊），8 种成就

## 注意事项

- 游戏内容基于历史事实，旨在正向历史教育
- 多个 `script_*.js` 为迭代版本，主入口为 `script.js`，其余按需加载
- 支持 PC 和移动端，localStorage 在无痕模式下不持久化
