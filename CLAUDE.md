# antiRi — AI 助手上下文

## 项目概述

《星火》抗日战争主题文字冒险游戏，纯前端 HTML5 实现，无框架、无构建工具。玩家扮演 4 种角色（村民王二柱、国军士兵李明、记者张华、商人陈老板），体验 1937–1945 年抗战全过程，含资源管理、多分支剧情、群众路线/军事民主/敌后斗争三大机制与成就系统。

## 关键命令

```bash
# 无构建步骤，直接在浏览器打开
# 方式一（Windows）：直接双击
index.html

# 方式二：Python 简易服务器（避免本地文件访问限制）
python -m http.server 8080
# 访问 http://localhost:8080

# 方式三（VS Code）：安装 Live Server 插件后右键 index.html → Open with Live Server
```

## 代码规范与约定

- 纯原生 JavaScript（ES6+），禁止引入外部框架或库
- `gameState` 是唯一数据源，所有状态变更通过 `updateResources()` / `applyConsequences()` 等函数操作
- 新增剧情节点直接在 `storyNodes` 对象中追加，key 为语义化字符串 ID（如 `chapter1_village_assembly`）
- 标志位（`flags`）以 `snake_case` 命名，布尔值为主
- 选择的 `consequences` 字段支持：`resources`（资源 delta）、`flags`（标志位）、`status`（角色状态 delta）、`unlock`（解锁功能）
- CSS 命名用 kebab-case，优先使用已有样式类（如 `.choice-btn`, `.resource-bar`）

## 目录结构要点

```
antiRi/
├── index.html                      # 游戏入口，DOM 骨架
├── style.css                       # 全局样式
├── script.js                       # 主逻辑（优先阅读此文件）
│   ├── GAME_CONSTANTS              # 常量（消耗率、概率等）
│   ├── gameState                   # 唯一状态对象
│   ├── characters[]                # 4 个角色的基础信息
│   ├── chapters[]                  # 7 个章节元数据
│   ├── storyNodes{}                # 剧情节点字典（序章+第一章）
│   └── 核心函数：loadNode / updateResources / checkAchievements
├── script_expanded.js              # 扩展剧情（可在此追加新节点）
├── script_chapters_enhanced.js     # 强化章节叙事细节
├── script_progression.js           # 章节推进、角色切换逻辑
├── script_all_missing.js           # 补全缺失节点（开发辅助，勿删）
├── script_missing_nodes.js         # 修复孤立节点引用
├── game_design.md                  # 完整游戏设计文档
├── COMMERCIAL_UPGRADE_PLAN.md      # v2.0 商业化重构方案（含架构设计）
└── docs/
    ├── architecture.md             # 技术架构说明
    └── product.md                  # 产品功能与规划
```

## 当前状态与注意事项

- **可运行状态**：直接打开 `index.html` 可完整游玩，核心功能均已实现
- **多 JS 文件问题**：`script_*.js` 是迭代遗留文件，功能存在重叠。新增剧情优先写入 `script_expanded.js`，不要修改 `script.js` 中的已有节点（防止破坏存档兼容性）
- **localStorage key**：存档使用 `antiR_save_${slotId}`，调试时可在浏览器控制台执行 `localStorage.clear()` 清除所有存档
- **民心值范围**：`peopleHeart` 取值 0–100，`massBase` 只增不减（设计约束，勿改）
- **v2.0 重构计划**：`COMMERCIAL_UPGRADE_PLAN.md` 中有完整的模块化重构方案（`src/engine/`, `src/systems/`, `data/chapters/*.json`），实施前请阅读该文档
- **无痕模式**：localStorage 在无痕浏览模式下不持久化，测试存档时请使用普通模式
- **历史内容**：角色背景与剧情基于真实历史事件（野场惨案、淞沪会战、一二·九运动等），修改时保持历史准确性
