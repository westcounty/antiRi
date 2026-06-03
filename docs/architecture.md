# 技术架构 — 《星火》

## 整体架构

《星火》是一款纯前端单页应用（SPA）文字冒险游戏，无后端服务、无构建工具、无框架依赖。游戏逻辑完全运行于浏览器端，以 `index.html` 作为唯一入口，通过 `<script>` 标签按需加载多个 JS 文件，状态持久化依赖 `localStorage`。

架构模式：**数据驱动的事件循环**——游戏状态（`gameState`）是唯一的数据源，剧情节点（`storyNodes`）以 JS 对象字典描述，玩家每次选择触发状态更新并重新渲染 UI。

```
浏览器
  └── index.html（入口）
        ├── style.css（全局样式）
        └── script*.js（游戏逻辑，按序加载）
              ├── gameState（单例状态对象）
              ├── storyNodes（剧情节点字典）
              └── DOM 操作（直接操作 getElementById 等）
```

## 核心模块

| 模块 / 文件 | 职责 |
|------------|------|
| `script.js` | 主游戏逻辑：常量定义、`gameState` 初始化、角色与章节数据、剧情节点（序章+第一章）、资源更新、成就判断、存档读写、UI 渲染 |
| `script_expanded.js` | 扩展剧情内容，补充更多分支节点 |
| `script_chapters_enhanced.js` | 强化版章节剧情，提升叙事深度与历史细节 |
| `script_progression.js` | 游戏进程控制：章节推进、角色切换、时间线推进 |
| `script_all_missing.js` | 批量补全缺失剧情节点（开发辅助） |
| `script_missing_nodes.js` | 修复孤立节点引用，保证节点跳转完整性 |
| `style.css` | 游戏全局样式，PC / 移动端自适应布局 |
| `index.html` | 游戏 DOM 骨架：标题栏、角色信息面板、资源面板、剧情文本区、选择按钮区、日志面板 |

## 数据模型

### gameState（核心状态）

```javascript
const gameState = {
    currentChapter: 0,          // 当前章节 (0-6)
    currentNode: "start",       // 当前剧情节点 ID
    time: 193707,               // 游戏内时间 YYYYMM
    resources: {
        food, ammo, intelligence, reputation,
        money, medicine,
        peopleHeart,            // 民心值 (0-100)
        massBase                // 群众基础（累计，不可减）
    },
    characterStatus: { health, morale, fatigue },
    flags: {},                  // 剧情标志位，记录已发生事件
    achievements: [],           // 成就列表
    activeSupports: [],         // 当前激活的肉鸽支持
    visitedNodes: [],           // 完成度追踪
    tunnelLevel: 0,             // 地道等级 (0-3)
    guerrillaTactics: [],       // 已解锁游击战术
    councilDecisions: [],       // 军事民主决策记录
    tacticalBonus: 0            // 战术加成（战后复盘积累）
};
```

### storyNode（剧情节点）

```javascript
"nodeId": {
    chapter: 0,             // 所属章节
    emotion: "shock",       // 情绪标签，影响 UI 氛围
    text: "...",            // 叙事文本
    background: "...",      // 历史背景注释
    choices: [
        {
            text: "...",
            consequences: {
                resources: { food: -10, reputation: +5 },
                flags: { flag_key: true },
                status: { morale: +10 }
            },
            nextNode: "nodeId2",
            requirement: { ammo: 20 }  // 可选前置条件
        }
    ]
}
```

## 核心系统

| 系统 | 实现方式 | 关键逻辑 |
|------|---------|---------|
| 资源管理 | `updateResources(change)` | 每次选择后应用 delta，下限为 0，超限触发警告 |
| 剧情推进 | `loadNode(nodeId)` | 渲染文本、生成选择按钮、记录访问历史 |
| 成就系统 | `checkAchievements()` | 每次状态变更后全量检查，满足条件即解锁 |
| 随机事件 | `triggerRandomEvent()` | 章节推进时按概率（20%）插入随机剧情 |
| 肉鸽支持 | `applySupport(type)` | 多周目或章节里程碑时解锁资源/战术加成 |
| 存档系统 | `localStorage` | key: `antiR_save_${slotId}`，支持多存档槽位，含版本迁移 |
| 完成度统计 | `visitedNodes` 集合 | 记录所有访问过的节点，计算总完成度百分比 |
| 民心值系统 | 资源字段 `peopleHeart` | 影响情报准确度、游击战术解锁、扫荡应对选项 |

## 章节与角色映射

| 章节 | 时间线 | 主视角角色 | 战场类型 |
|------|--------|----------|---------|
| 序章：烽火起 | 1937年7月 | 王二柱（村民） | 敌后 |
| 第一章：敌后微光 | 1938-1940 | 王二柱（游击队员） | 敌后 |
| 第二章：正面坚守 | 1938-1942 | 李明（国军士兵） | 正面 |
| 第三章：文化抗战 | 1940-1943 | 张华（记者） | 大后方 |
| 第四章：经济战线 | 1941-1944 | 王二柱（村长） | 沦陷区 |
| 第五章：黎明前夜 | 1944-1945 | 王二柱（抗战老兵） | 全国 |
| 终章：胜利之日 | 1945年8月 | 王二柱（胜利者） | 北平 |

## 结局判断逻辑

```javascript
// 胜利条件：time >= 194508（1945年8月）
// 结局分级由 reputation（声望）决定：
//   > 80 → 完美结局
//   > 50 → 好结局
//   默认 → 普通结局
// 失败条件：health <= 0（死亡）/ food <= 0（饿死）
```

## 依赖

| 依赖 | 用途 |
|------|------|
| 浏览器原生 API | DOM 操作、`localStorage` 存档、`Date`/`Math.random` |
| 无第三方库 | 游戏不依赖任何外部框架或库 |

## 部署方式

本项目为纯静态文件，无需服务器。直接在浏览器中打开 `index.html` 即可运行。如需在线访问，上传至任意静态托管服务（itch.io、GitHub Pages 等）即可。服务器信息参见 `D:\work\INFRA.md`。

## 已知技术债务

- 多个 `script_*.js` 为迭代版本，存在功能重叠，待统一合并到模块化结构
- 商业化升级计划（`COMMERCIAL_UPGRADE_PLAN.md`）中规划了 `src/` 模块化重构方案，尚未实施
- 剧情数据混入 JS 逻辑，计划迁移至 JSON 数据文件（`data/chapters/*.json`）
- 无自动化测试覆盖
