# 《星火》商业级优化方案 — 完整版

## 核心设计理念

**"星星之火，可以燎原"**——本游戏的核心体验不是一个英雄的故事，而是**无数普通人汇聚成洪流**的过程。玩家的每一个选择，都在回答一个根本问题：**抗日战争为什么能赢？**

答案藏在三条主线中：
1. **群众路线** — 人民是历史的创造者，脱离群众必败
2. **军事民主** — 官兵平等、集体智慧决定战术
3. **敌后斗争** — 以弱胜强的游击战争艺术

---

## 一、三大核心系统设计

### 1.1 群众路线系统（Mass Line System）

#### 设计哲学
> "从群众中来，到群众中去。"
> 玩家必须通过发动群众、依靠群众来获取战争资源，而非单打独斗。

#### 新增资源：民心值（People's Heart）
```javascript
// 新增核心资源
resources: {
    food: 100,
    ammo: 0,
    intelligence: 0,
    reputation: 0,    // 保留，改名为"组织声望"
    money: 500,
    medicine: 0,
    peopleHeart: 50,  // 🆕 民心值 (0-100)
    massBase: 0       // 🆕 群众基础 (累计值，不可减少)
}
```

#### 民心值机制
| 行为 | 民心值变化 | 触发效果 |
|------|-----------|---------|
| 帮助村民收割/春耕 | +15 | 解锁"村民自发送粮"事件 |
| 公平分配缴获物资 | +10 | 解锁"村民主动报信"情报线 |
| 强征民粮 | -30 | 触发"村民逃散"，食物产出归零 |
| 三大纪律八项注意 | +20 | 全资源小幅回升 |
| 打土豪分田地 | +25 | 解锁"翻身农民参军"补员事件 |
| 冬学运动（教村民识字） | +15 | 解锁"村民自组织"被动加成 |
| 减租减息政策 | +20 | 长期食物产出+50% |

#### 民心值分级效果
```
0-20   【人心涣散】：村民逃避、情报断裂、补给中断
20-40  【将信将疑】：基本合作，但不主动帮助
40-60  【逐渐信任】：村民提供情报、送粮、帮助藏匿伤员
60-80  【鱼水情深】：解锁"人民战争"特殊选项——
        • 地道战（村民自发挖掘地道网络）
        • 麻雀战（村民协助游击队骚扰敌军）
        • 破袭战（村民配合破坏敌军交通线）
80-100 【铜墙铁壁】：解锁终极能力——
        • 全民皆兵（战斗力倍增）
        • 坚壁清野（敌人扫荡自动失败）
        • 百团大战级别的大规模协同作战选项
```

#### 群众会议系统（Village Assembly）
**每隔 3-5 个剧情节点触发一次群众大会**

```javascript
// 群众大会节点示例
"village_assembly_01": {
    chapter: 1,
    type: "assembly",  // 🆕 新节点类型
    emotion: "deliberation",
    text: "游击队决定在村里召开群众大会。王大叔第一个站出来：'我家的粮食被鬼子抢了三次了，" +
          "我要跟着你们干！'但也有人犹豫：'跟了你们，鬼子来报复怎么办？'\n\n" +
          "会议的走向，取决于你怎么回应群众的疑虑。",
    assemblyRules: {
        // 群众大会特殊规则：玩家的选择会被"群众投票"修正
        votingWeight: {
            playerChoice: 0.4,    // 玩家选择权重 40%
            peopleHeart: 0.3,     // 民心值影响 30%
            currentSituation: 0.3 // 当前局势影响 30%
        }
    },
    choices: [
        {
            text: "承诺保护村民安全，组织民兵自卫",
            // 群众反应取决于历史行为
            massReaction: "如果之前帮助过村民 → 群众热烈响应；否则 → 群众将信将疑",
            consequences: {
                peopleHeart: +15,
                unlock: "militia_system"  // 解锁民兵系统
            }
        },
        {
            text: "实话实说：'会有牺牲，但不反抗只会更惨'",
            massReaction: "群众沉默后，老党员带头表态支持",
            consequences: {
                peopleHeart: +10,
                morale: +20,
                unlock: "honest_leader_trait"
            }
        },
        {
            text: "拿出缴获的物资分给群众，用行动说话",
            massReaction: "群众看到实际利益，态度转变",
            consequences: {
                food: -20, money: -30,
                peopleHeart: +25,
                unlock: "action_speaks_trait"
            }
        },
        {
            text: "强调抗日救国的道理，进行思想动员",
            massReaction: "知识分子响应，但普通农民反应冷淡",
            consequences: {
                peopleHeart: +5,
                intelligence: +15,
                flag: "intellectual_approach"
            }
        }
    ]
}
```

#### 群众路线的失败后果（反面教材）
当玩家忽视群众路线时，触发惩罚性剧情：
- **断粮危机**：没有群众支持，游击队陷入绝境
- **情报真空**：村民不配合，敌军行动完全无法预判
- **内部瓦解**：士兵看不到希望，出现逃兵
- **扫荡失守**：没有群众掩护，日军轻易找到根据地

---

### 1.2 军事民主系统（Military Democracy System）

#### 设计哲学
> "诸葛亮会"——在重大战斗前，从班长到普通战士都有发言权。
> 这不是形式主义，而是集体智慧战胜个人独断的核心机制。

#### 战前民主讨论会（Pre-battle Council）

**每场重要战斗前，触发"诸葛亮会"**

```javascript
// 军事民主会议系统
"battle_council_ambush_01": {
    chapter: 1,
    type: "military_council",  // 🆕 新节点类型
    emotion: "deliberation",
    text: "情报显示，明天有一支日军运输队经过山谷。队长召开战前会议：\n\n" +
          "'同志们，这次伏击怎么打，大家都说说。'\n\n" +
          "老兵赵铁柱说：'两头堵，中间打，经典口袋阵。'\n" +
          "新战士小李说：'不如只打头车，吓跑后面的，这样伤亡小。'\n" +
          "王二柱（你）觉得……",

    // 🆕 军事民主机制：每个方案都有优劣，没有绝对正确答案
    councilProposals: [
        {
            proposer: "赵铁柱（老兵）",
            plan: "口袋阵全歼",
            analysis: {
                advantage: "歼灭敌人有生力量，缴获最大化",
                risk: "兵力分散，万一敌人有增援后果严重",
                requiredResources: { ammo: 40, intelligence: 30 }
            }
        },
        {
            proposer: "小李（新战士）",
            plan: "打头就跑",
            analysis: {
                advantage: "风险最低，伤亡几乎为零",
                risk: "缴获少，敌人以后会加强警戒",
                requiredResources: { ammo: 10, intelligence: 20 }
            }
        }
    ],

    choices: [
        {
            text: "支持赵铁柱的方案：口袋阵全歼",
            councilReaction: "老兵们赞同，新兵有些紧张",
            consequences: {
                // 成功率受情报值和弹药影响
                battleModifier: { difficulty: "hard", reward: "high" },
                nextNode: "battle_ambush_fullscale"
            }
        },
        {
            text: "支持小李的方案：打了就跑",
            councilReaction: "新兵松了口气，老兵觉得不过瘾",
            consequences: {
                battleModifier: { difficulty: "easy", reward: "low" },
                nextNode: "battle_ambush_hitandrun"
            }
        },
        {
            text: "提出折中方案：先打头车，看情况决定是否扩大战果",
            councilReaction: "大家觉得这个方案灵活务实",
            consequences: {
                battleModifier: { difficulty: "medium", reward: "medium" },
                morale: +15,  // 折中方案提升团队凝聚力
                nextNode: "battle_ambush_flexible"
            }
        },
        {
            text: "独断决定：不管别人意见，按自己的来",
            councilReaction: "战士们面面相觑，士气下降",
            consequences: {
                morale: -20,
                peopleHeart: -10,  // 军事独裁损害军民关系
                flag: "autocratic_leader",
                nextNode: "battle_ambush_autocratic"
            }
        }
    ]
}
```

#### 战后复盘会（After Action Review）
每场战斗结束后自动触发：

```javascript
"battle_review_01": {
    type: "battle_review",
    text: "战斗结束了。队长说：'打了胜仗也要总结，同志们说说，" +
          "这次仗有什么经验教训？'\n\n" +
          "赵铁柱：'伏击点选得好，但撤退路线只有一条，太危险了。'\n" +
          "小李：'我发现鬼子的掷弹筒射程比我们预估的远。'\n" +
          "卫生员小王：'以后每个班都要配一个急救包。'",
    reviewEffects: {
        // 复盘带来的永久加成
        tacticalBonus: +5,      // 战术能力永久+5
        intelligenceBonus: +10, // 情报分析能力+10
        moraleBonus: +10        // 团队士气+10
    },
    choices: [
        {
            text: "认真记录每个人的意见，制定改进计划",
            consequences: {
                flag: "good_reviewer",
                permanentBuff: "tactical_improvement_1"
            }
        },
        {
            text: "重点表扬表现突出的战士",
            consequences: {
                morale: +25,
                flag: "encouraging_leader"
            }
        },
        {
            text: "批评犯错的战士，严肃纪律",
            consequences: {
                morale: -10,
                flag: "strict_leader",
                // 短期士气下降但长期战斗力上升
                delayedEffect: { turns: 3, effect: { combatBonus: +10 } }
            }
        }
    ]
}
```

#### 军事民主的核心机制总结
| 机制 | 触发条件 | 玩家角色 | 系统效果 |
|------|---------|---------|---------|
| 诸葛亮会 | 每场大战斗前 | 听取意见 → 做最终决策 | 采纳集体智慧 → 战斗成功率↑ |
| 班务会 | 每 5 个节点 | 倾听战士心声 → 解决问题 | 士气↑、凝聚力↑ |
| 战后复盘 | 每场战斗后 | 总结经验教训 | 永久战术加成 |
| 批评与自我批评 | 特定剧情触发 | 承认错误 or 坚持己见 | 影响团队信任度 |
| 战士委员会 | 章节里程碑 | 士兵民主选举干部 | 影响部队方向 |

**关键设计：军事民主不是"民主投票决定一切"，而是"充分讨论后由指挥员决策"。玩家是最终决策者，但忽视集体意见会有惩罚。**

---

### 1.3 敌后斗争系统（Behind-Enemy-Lines System）

#### 设计哲学
> "敌进我退、敌驻我扰、敌疲我打、敌退我追"——十六字诀
> 玩家必须在极端不利的条件下，运用智慧和群众力量生存并反击。

#### 敌后生存地图系统（Guerrilla Map）

```
新增：简化的区域控制地图（文字 + 示意图）

┌─────────────────────────────────────┐
│           晋察冀边区示意图            │
│                                     │
│  【太行山区】        【平原地带】      │
│   ◉ 游击根据地        ◇ 敌占区       │
│   安全度: ★★★★       危险度: ★★★★   │
│   资源: 山货、药材     资源: 粮食、情报  │
│                                     │
│  【铁路沿线】        【县城周边】      │
│   ◇ 敌重点控制        ◇ 灰色地带     │
│   危险度: ★★★★★      危险度: ★★★    │
│   资源: 武器、弹药     资源: 商品、金钱  │
│                                     │
│  ◉ = 我方控制   ◇ = 敌方控制         │
│  ◐ = 争夺中    ○ = 中立区域          │
└─────────────────────────────────────┘
```

#### 敌后斗争核心玩法

##### A. 反扫荡系统
```javascript
// 日军扫荡事件（核心紧张感来源）
"enemy_sweep_event": {
    type: "sweep",  // 扫荡事件
    trigger: "每章随机触发 1-3 次，频率随章节推进增加",

    // 扫荡强度分级
    sweepLevels: {
        "小规模清乡": {
            enemyForce: 200,
            duration: "3天",
            strategy: "搜索村庄、盘查路人",
            counterMeasures: ["转移", "隐蔽", "坚壁清野"]
        },
        "铁壁合围": {
            enemyForce: 2000,
            duration: "7天",
            strategy: "多路合围、梳篦式搜索",
            counterMeasures: ["化整为零", "地道战", "内线突围"]
        },
        "三光政策": {
            enemyForce: 5000,
            duration: "15天",
            strategy: "烧光杀光抢光，制造无人区",
            counterMeasures: ["分散转移", "群众掩护", "跳出包围圈"]
        }
    }
}

// 反扫荡选择节点
"counter_sweep_01": {
    chapter: 1,
    emotion: "crisis",
    text: "紧急消息！日军出动了一个联队的兵力，对我根据地进行'铁壁合围'式大扫荡！\n\n" +
          "敌人兵分三路，从东、南、北三面压过来，只有西面的太行山区还有缺口。\n" +
          "但那里山路崎岖，带着伤员和群众很难通过。\n\n" +
          "队长紧急召集会议：'同志们，时间不多了，怎么办？'",
    choices: [
        {
            text: "化整为零：把部队拆成小组分散突围",
            requirement: { intelligence: 30 },
            consequences: {
                // 保存有生力量，但暂时失去战斗力
                survival: "high",
                combatLoss: "low",
                civilianLoss: "medium",
                reunionTime: 5  // 5个节点后才能重新集结
            },
            nextNode: "scatter_and_survive"
        },
        {
            text: "依托地道战：让群众进地道，部队在外围游击",
            requirement: { peopleHeart: 60, flag: "tunnel_network_built" },
            consequences: {
                survival: "very_high",
                combatLoss: "very_low",
                civilianLoss: "very_low",
                // 需要之前已经建好地道网络
            },
            nextNode: "tunnel_defense"
        },
        {
            text: "声东击西：派小队佯攻敌后方，主力从缺口撤退",
            requirement: { ammo: 20, intelligence: 40 },
            consequences: {
                survival: "medium",
                combatLoss: "medium",
                heroicSacrifice: true  // 佯攻小队可能牺牲
            },
            nextNode: "diversionary_retreat"
        },
        {
            text: "坚守不退：利用有利地形和日军决战",
            requirement: { ammo: 60, morale: 80 },
            consequences: {
                survival: "low",
                combatLoss: "very_high",
                // 英勇但不明智的选择
                flag: "reckless_commander"
            },
            nextNode: "last_stand"
        }
    ]
}
```

##### B. 地道战系统
```javascript
// 地道建设（需要群众配合）
tunnelSystem: {
    buildRequirements: {
        peopleHeart: 50,    // 需要民心 50+
        food: 30,           // 消耗食物（建设期间的口粮）
        time: 3,            // 需要 3 个节点的时间
        flag: "village_cooperation"
    },

    tunnelLevels: {
        level1: {
            name: "基础地道",
            capacity: 50,    // 可容纳50人
            features: ["藏人", "藏粮"],
            description: "简单的地下藏身洞，只能临时躲避"
        },
        level2: {
            name: "战斗地道",
            capacity: 200,
            features: ["藏人", "藏粮", "射击孔", "陷阱"],
            requirement: { massBase: 30 },
            description: "可以一边藏身一边战斗，设有射击孔和陷阱"
        },
        level3: {
            name: "地道网络",
            capacity: 500,
            features: ["藏人", "藏粮", "射击孔", "陷阱", "村庄互联", "防毒气", "防水淹"],
            requirement: { massBase: 60, peopleHeart: 80 },
            description: "村与村之间地道相连，可防毒气和水淹，堪称地下长城"
        }
    }
}
```

##### C. 敌后情报网
```javascript
// 情报网络系统
intelligenceNetwork: {
    agents: [
        {
            name: "翠花嫂",
            cover: "给日军炮楼送菜的村妇",
            intelType: "军事部署",
            reliability: 0.85,
            risk: 0.3,
            requirement: { peopleHeart: 40 }
        },
        {
            name: "刘掌柜",
            cover: "镇上杂货铺老板",
            intelType: "经济情报",
            reliability: 0.7,
            risk: 0.2,
            requirement: { money: 100 }
        },
        {
            name: "伪军张排长",
            cover: "被策反的伪军军官",
            intelType: "军事行动",
            reliability: 0.6,
            risk: 0.5,
            requirement: { intelligence: 50, flag: "turned_puppet_soldier" }
        }
    ],

    // 情报准确度受民心值影响
    accuracyFormula: "baseReliability * (1 + peopleHeart/200)"
}
```

##### D. 麻雀战 / 地雷战 / 破袭战
```javascript
// 游击战术选择系统
guerrillaTactics: {
    "麻雀战": {
        description: "三五个人为一组，打了就跑，像麻雀一样灵活",
        requirement: { ammo: 5, intelligence: 20 },
        effect: "低风险骚扰敌人，消耗敌军弹药和精力",
        reward: { reputation: +10, ammo: +5, enemyMorale: -10 },
        unlockCondition: "chapter1_start"
    },
    "地雷战": {
        description: "自制地雷封锁道路，让鬼子寸步难行",
        requirement: { ammo: 15, intelligence: 30, flag: "learned_explosives" },
        effect: "控制区域交通，迫使敌人改变行军路线",
        reward: { ammo: +20, intelligence: +15, reputation: +15 },
        unlockCondition: { massBase: 20 }
    },
    "破袭战": {
        description: "夜间破坏铁路、公路、电话线，瘫痪敌人交通通讯",
        requirement: { ammo: 10, intelligence: 40, peopleHeart: 50 },
        effect: "切断敌人后勤补给线，为正面战场减压",
        reward: { reputation: +25, intelligence: +20 },
        unlockCondition: { massBase: 40, flag: "village_cooperation" }
    },
    "围困据点": {
        description: "切断孤立据点的水源和粮食供给，逼迫敌人撤退",
        requirement: { peopleHeart: 70, food: 50 },
        effect: "不战而屈人之兵，解放一个据点",
        reward: { ammo: +40, food: +30, reputation: +40, medicine: +20 },
        unlockCondition: { massBase: 60 }
    }
}
```

---

## 二、章节重构：融入三大核心主题

### 序章：烽火起（1937年7月）— 保持现有，增加觉醒线索
- 增加"听八路军宣传员讲抗日道理"的选项
- 增加"目睹日军暴行后群众觉醒"的场景
- **新增觉醒节点**：亲眼看到野场惨案，从普通农民变为抗日者

### 第一章：敌后微光（1938-1940）— 大幅扩充，核心章节

**主线A：群众路线觉醒**
```
加入游击队 → 队长教导"不拿群众一针一线"
  → 帮助村民春耕 → 民心↑ → 村民主动报告鬼子行踪
  → 减租减息运动 → 地主反对？ → 统一战线抉择
  → 冬学运动（教农民识字）→ 培养基层干部
  → 群众大会：讨论是否破坏日军铁路 → 村民献计
```

**主线B：军事民主初体验**
```
第一次伏击战 → 队长开"诸葛亮会"听取意见
  → 采纳新兵建议 vs 独断专行 → 战斗结果差异
  → 战后复盘 → 总结经验 → 永久战术加成
  → 班务会：战士反映伙食差 → 你怎么解决？
  → 民主选举班长 → 被选上/落选的影响
```

**主线C：敌后生存**
```
日军第一次扫荡 → 化整为零 vs 地道隐蔽 vs 正面抵抗
  → 坚壁清野：动员群众转移粮食 → 成功/失败
  → 建立情报网：策反翠花嫂、联络刘掌柜
  → 麻雀战骚扰日军运输线
  → 地雷战封锁交通要道
```

### 第二章：正面坚守（1938-1942）— 增加正面与敌后呼应

**新增：正面战场也需要群众支持**
- 百姓支前（送弹药、抬伤员、修工事）
- 军民共建防御阵地
- 伤兵收治靠群众掩护

**新增：基层军事民主**
- 连队开会讨论防御方案
- 老兵传授新兵经验（战后复盘机制）
- 士兵委员会处理内部矛盾

### 第三章：文化抗战（1940-1943）— 群众路线的文化维度

**新增：文化服务群众**
```
到农村演出 → 群众看不懂话剧？
  → 改编成地方戏曲、秧歌剧 → 群众热烈欢迎
  → "白毛女"式创作：从群众生活中取材
  → 墙报、传单用大白话写 → 识字率低也能传播
  → 教群众唱抗日歌曲 → 歌声成为精神武器
```

**新增：知识分子与群众结合**
```
张老师初到农村：
  → 讲课用书面语 → 农民听不懂 → 挫折
  → 深入生活：和农民同吃同住同劳动
  → 用农民语言重新编写教材
  → 培养出村里第一批识字的妇女
  → 这些妇女后来成为抗日骨干
```

### 第四章：经济战线（1941-1944）— 自力更生的群众运动

**新增：大生产运动**
```
根据地经济封锁严重 → 军民一起开荒种地
  → 南泥湾式开发 → 军队自给自足
  → 发展合作社 → 群众经济互助
  → 纺线织布 → 解决穿衣问题
  → 边区贸易 → 打破敌人经济封锁
```

**新增：经济战争中的群众智慧**
```
日军发行伪钞扰乱经济 → 群众自发抵制
  → 以物换物的地下交易网络
  → 陈老板利用商业网络走私药品
  → 群众掩护下的秘密交通线
```

### 第五章：黎明前夜（1944-1945）— 三大主题汇合

**大反攻准备：群众路线 + 军事民主 + 敌后斗争的最高形态**
```
局部反攻战役 → 全民动员
  → 民兵配合正规军作战
  → 军事民主讨论反攻方案
  → 群众主动提供情报、担架、粮食
  → 策反大量伪军
  → 解放县城的群众欢庆
```

### 终章：胜利之日（1945年8月）— 回顾与升华

**根据玩家整局表现生成个性化的胜利总结：**
```javascript
// 结局评价系统
endingEvaluation: {
    massLineScore: calculateMassLineScore(),    // 群众路线得分
    democracyScore: calculateDemocracyScore(),  // 军事民主得分
    guerrillaScore: calculateGuerrillaScore(),  // 敌后斗争得分

    // 综合评价
    overallGrade: {
        "S": "人民英雄——你深刻理解了'人民是历史的创造者'",
        "A": "优秀指挥员——你善于依靠群众、发扬民主",
        "B": "合格战士——你完成了抗战任务，但还有提升空间",
        "C": "独行侠——你虽然英勇，但忽视了群众的力量",
        "D": "脱离群众——历史证明，脱离群众的路线走不通"
    },

    // 对比展示：有群众基础 vs 没有群众基础的路线差异
    comparisonDisplay: true
}
```

---

## 三、角色系统重构

### 现有 4 角色 → 扩展为 6 角色

| 角色 | 身份 | 代表主题 | 新增视角 |
|------|------|---------|---------|
| 王二柱 | 农民→游击队员→村长 | 群众路线 | 从被动受害者到主动组织群众 |
| 李明 | 国军士兵 | 正面战场 | 增加与群众互动的叙事 |
| 张老师 | 文化工作者 | 文化抗战 | 与群众结合的知识分子改造 |
| 陈老板 | 商人 | 经济战线 | 群众掩护下的秘密经济战 |
| 🆕 赵铁柱 | 老红军→连长 | 军事民主 | 从长征到抗战，军事民主的践行者 |
| 🆕 翠花嫂 | 村妇→地下交通员 | 敌后斗争 | 女性视角的群众抗战 |

### 翠花嫂角色线（新增核心角色）

**设计意图：以女性平民视角展现"群众就是铜墙铁壁"**

```
翠花嫂的故事线：
  丈夫被日军杀害 → 独自抚养两个孩子
  → 给八路军藏伤员 → 差点被发现
  → 被发展为地下交通员 → 利用送菜身份收集情报
  → 组织村里妇女做军鞋、缝补衣物
  → 在反扫荡中掩护群众进地道
  → 丈夫生前的战友认出她 → 催人泪下的重逢
  → 最终成为妇救会主任，组织全村妇女支前
```

---

## 四、技术架构重构

### 4.1 代码结构重组

```
antiRi/
├── index.html                  # 入口
├── style.css                   # 样式
├── src/
│   ├── engine/
│   │   ├── GameEngine.js       # 核心引擎
│   │   ├── StateManager.js     # 状态管理
│   │   ├── EventBus.js         # 事件总线
│   │   └── SaveSystem.js       # 存档系统（多槽位）
│   ├── systems/
│   │   ├── MassLineSystem.js   # 🆕 群众路线系统
│   │   ├── MilitaryDemocracy.js# 🆕 军事民主系统
│   │   ├── GuerrillaSystem.js  # 🆕 敌后斗争系统
│   │   ├── ResourceSystem.js   # 资源管理
│   │   ├── CombatSystem.js     # 🆕 战斗系统
│   │   ├── AchievementSystem.js# 成就系统
│   │   └── RandomEventSystem.js# 随机事件
│   ├── ui/
│   │   ├── UIManager.js        # UI 控制器
│   │   ├── StoryRenderer.js    # 剧情渲染
│   │   ├── MapRenderer.js      # 🆕 地图渲染
│   │   ├── CouncilUI.js        # 🆕 会议界面
│   │   └── AudioManager.js     # 🆕 音频管理
│   └── data/
│       ├── chapters/
│       │   ├── chapter0.json   # 各章节剧情数据
│       │   ├── chapter1.json
│       │   ├── chapter2.json
│       │   ├── chapter3.json
│       │   ├── chapter4.json
│       │   ├── chapter5.json
│       │   └── chapter6.json
│       ├── characters.json     # 角色数据
│       ├── events.json         # 随机事件
│       ├── achievements.json   # 成就数据
│       ├── assemblies.json     # 🆕 群众大会数据
│       ├── councils.json       # 🆕 军事会议数据
│       └── tactics.json        # 🆕 战术数据
├── assets/
│   ├── images/
│   │   ├── characters/         # 角色立绘
│   │   ├── scenes/             # 场景CG
│   │   ├── maps/               # 地图素材
│   │   └── ui/                 # UI素材
│   ├── audio/
│   │   ├── bgm/                # 背景音乐
│   │   ├── sfx/                # 音效
│   │   └── ambient/            # 环境音
│   └── fonts/                  # 字体
└── tools/
    ├── storyEditor.html        # 🆕 可视化剧情编辑器
    └── balanceTool.html        # 🆕 数值平衡工具
```

### 4.2 数据驱动架构

**剧情数据从 JS 迁移到 JSON：**

```json
// data/chapters/chapter1.json 示例
{
    "chapter1_village_assembly_spring": {
        "chapter": 1,
        "type": "assembly",
        "emotion": "hope",
        "text": "春耕时节到了。游击队决定帮助村民耕种...",
        "background": "春天的田野",
        "tags": ["群众路线", "生产"],
        "requirements": {
            "minPeopleHeart": 30
        },
        "choices": [
            {
                "text": "军民一起下田干活",
                "consequences": {
                    "resources": { "food": 40, "peopleHeart": 20 },
                    "status": { "morale": 20, "fatigue": 30 }
                },
                "nextNode": "chapter1_spring_farming"
            }
        ]
    }
}
```

### 4.3 存档系统升级

```javascript
// 多存档 + 自动存档 + 版本迁移
const SaveSystem = {
    MAX_SLOTS: 5,
    AUTO_SAVE_INTERVAL: 3,  // 每3个节点自动存档

    save(slotId) {
        const saveData = {
            version: "2.0.0",
            timestamp: Date.now(),
            chapter: gameState.currentChapter,
            node: gameState.currentNode,
            preview: {
                chapterName: chapters[gameState.currentChapter].name,
                characterName: getCurrentCharacter().name,
                timePeriod: formatTime(gameState.time),
                peopleHeart: gameState.resources.peopleHeart,
                playTime: gameState.totalPlayTime
            },
            state: deepClone(gameState),
            checksum: calculateChecksum(gameState)
        };
        localStorage.setItem(`antiR_save_${slotId}`, JSON.stringify(saveData));
    },

    // 版本迁移
    migrate(saveData) {
        if (saveData.version === "1.0.0") {
            // 旧版存档迁移：添加新字段
            saveData.state.resources.peopleHeart = 50;
            saveData.state.resources.massBase = 0;
            saveData.version = "2.0.0";
        }
        return saveData;
    }
};
```

---

## 五、UI/UX 表现层升级

### 5.1 新增界面元素

```
┌─── 《星火》 ─── 1939年3月 ─── 第一章：敌后微光 ───┐
│                                                   │
│  [王二柱·游击队员]   ┊  食 120  弹 45  情 60     │
│  ❤ ████████░░ 80    ┊  声 35   金 200  药 15     │
│  ⚡ ██████░░░░ 60    ┊  ♥ 民心 ████████░░ 72     │
│  💤 ████░░░░░░ 40    ┊  📊 群众基础: 45           │
│                                                   │
│  ┌──── 【简易地图】 ────┐                          │
│  │ ◉ 根据地  ◇ 敌据点  │  (可折叠)                │
│  │ ◐ 争夺中  → 行军路线 │                          │
│  └──────────────────────┘                          │
│                                                   │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓   │
│  ┃  队长召开"诸葛亮会"：                         ┃   │
│  ┃  "同志们，明天的伏击战怎么打？大家说说看。"    ┃   │
│  ┃                                              ┃   │
│  ┃  💬 赵铁柱："我建议两头堵..."                 ┃   │
│  ┃  💬 小李："不如打了就跑..."                   ┃   │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛   │
│                                                   │
│  ┌─ 你的决定 ──────────────────────────────────┐   │
│  │ [1] 支持口袋阵全歼 (需要: 弹药40+)          │   │
│  │ [2] 支持打了就跑   (低风险)                  │   │
│  │ [3] 提出折中方案   (士气+15)                 │   │
│  │ [4] 独断专行       ⚠ 士气-20                │   │
│  └─────────────────────────────────────────────┘   │
│                                                   │
│  [保存] [读取] [设置] [日志] [战术] [完成度]       │
└────────────────────────────────────────────────────┘
```

### 5.2 新增 UI 组件

| 组件 | 用途 | 触发条件 |
|------|------|---------|
| 群众大会面板 | 展示群众意见和投票 | assembly 类型节点 |
| 诸葛亮会面板 | 展示战士方案和分析 | military_council 节点 |
| 战后复盘面板 | 展示经验教训总结 | battle_review 节点 |
| 简易地图 | 展示区域控制状态 | 敌后章节常驻 |
| 民心值仪表盘 | 实时显示民心变化 | 常驻资源栏 |
| 情报网络图 | 展示已发展的线人 | 情报面板 |
| 战术选择轮盘 | 选择游击战术 | 战斗前 |
| 资源交换面板 | 资源间的兑换 | 经济章节 |

### 5.3 视听资源清单

#### 必备 BGM（6首）
| 曲目 | 场景 | 情绪 | 参考风格 |
|------|------|------|---------|
| 《烽火》 | 战斗/扫荡 | 紧张激烈 | 管弦乐+军鼓 |
| 《微光》 | 根据地日常 | 温暖希望 | 笛子+二胡 |
| 《铁壁》 | 反扫荡/危机 | 压抑紧迫 | 低音弦乐+打击乐 |
| 《春耕》 | 大生产/群众生活 | 明朗欢快 | 唢呐+锣鼓 |
| 《黎明》 | 胜利前夕/反攻 | 壮阔激昂 | 交响乐+合唱 |
| 《星火》 | 主题曲/结局 | 庄严感动 | 钢琴+弦乐渐强 |

#### 必备音效（12个）
选择点击、资源变化（增/减）、成就解锁、章节转换、战斗开始、
战斗胜利、扫荡警报、群众欢呼、会议召开、紧急通知、
地道入口、胜利钟声

#### 场景背景图（14张）
序章：卢沟桥/华北农村
第一章：太行山根据地/游击队营地/地道内部/村庄大会
第二章：正面战场战壕/武汉城墙
第三章：延安窑洞/露天舞台
第四章：边区集市/纺线织布
第五章：反攻前线/民兵队伍
终章：天安门/胜利欢庆

---

## 六、数值平衡设计

### 6.1 资源经济模型

```
               ┌──────────┐
       ┌───────│  民心值   │───────┐
       │       └──────────┘       │
       ▼                          ▼
  情报准确度↑              食物产出↑
  群众自发报信            村民送粮送药
       │                          │
       ▼                          ▼
  战斗胜率↑               生存保障↑
       │                          │
       ▼                          ▼
  缴获物资↑    ◄────────►  士气↑
       │                          │
       └──────────┐  ┌────────────┘
                  ▼  ▼
            ┌──────────┐
            │ 群众基础↑ │
            └──────────┘
                  │
                  ▼
           解锁高级战术
         （地道战/破袭战）
                  │
                  ▼
           更大规模胜利
                  │
                  ▼
             民心值↑↑
          （正向飞轮）
```

### 6.2 难度曲线

| 章节 | 难度 | 资源压力 | 扫荡频率 | 民心目标 |
|------|------|---------|---------|---------|
| 序章 | ★☆☆☆☆ | 宽裕 | 0 | - |
| 第一章 | ★★☆☆☆ | 偏松 | 低（教学） | 40+ |
| 第二章 | ★★★☆☆ | 中等 | - | - |
| 第三章 | ★★★☆☆ | 中等 | 中 | 50+ |
| 第四章 | ★★★★☆ | 紧张 | 高 | 60+ |
| 第五章 | ★★★★★ | 极限 | 很高 | 70+ |
| 终章 | ★★☆☆☆ | 宽裕 | 0 | - |

---

## 七、商业化与分发

### 7.1 MVP 聚焦策略

**不要全面铺开，先做一个 Vertical Slice：**

```
MVP 范围：
  序章（完整）→ 第一章（完整，含三大系统）→ 简化结局

  核心验证：
  ✓ 群众路线系统是否有趣？
  ✓ 军事民主系统是否有深度？
  ✓ 敌后斗争系统是否有紧张感？
  ✓ 三个系统是否形成有机整体？

  预期游玩时长：45-60 分钟
```

### 7.2 发行渠道
- **Web端**：itch.io / 独立游戏网站
- **微信小程序**：最佳传播渠道（适合短平快文字游戏）
- **Steam**：作为 Visual Novel 品类
- **教育渠道**：爱国主义教育基地、中小学历史课辅助

### 7.3 社交传播
- 结局生成"抗战报告卡"（可分享图片）
- "你的群众路线得分超过了 XX% 的玩家"
- 剧情回溯树对比分享

---

## 八、实施路线图

```
Phase 0 — 架构重构（2周）
├── 代码模块化拆分
├── 剧情数据 JSON 化
├── 多存档系统
└── 基础 UI 框架升级

Phase 1 — 三大系统实现（4周）
├── Week 1-2: 群众路线系统 + 民心值机制
├── Week 2-3: 军事民主系统 + 诸葛亮会
├── Week 3-4: 敌后斗争系统 + 游击战术
└── 系统联调测试

Phase 2 — 内容填充（4周）
├── 序章+第一章完整剧情（MVP）
├── 群众大会节点 × 8
├── 军事会议节点 × 6
├── 反扫荡剧情 × 4
├── 翠花嫂角色线
└── 剧情分支测试

Phase 3 — 视听体验（3周）
├── AI 辅助生成立绘+场景图
├── BGM 制作/采购
├── 音效集成
├── 文字演出效果
└── 转场动画

Phase 4 — 打磨发布（2周）
├── 数值平衡调整
├── 完整通关测试（每条路线）
├── 新手引导
├── 结局评价系统
└── 社交分享功能

总计约 15 周（~4 个月）
```

---

## 九、核心设计原则（贯穿始终）

1. **玩家必须亲身体验"脱离群众就会失败"** —— 不是说教，是通过游戏机制让玩家自己得出结论
2. **军事民主不是形式，是实打实的战斗力加成** —— 采纳集体意见 = 更高胜率
3. **敌后斗争的核心不是武力，是智慧和人心** —— 民心值决定游击战术的天花板
4. **每个系统都有正反面教材** —— 走群众路线 vs 脱离群众，军事民主 vs 独断专行，对比产生说服力
5. **历史锚点增强真实感** —— 每个关键节点对应真实历史事件，战后展示历史背景
6. **失败也有叙事价值** —— 资源归零不是 Game Over，而是触发困境剧情，让玩家在绝境中感受群众力量

---

*本文档版本：v2.0*
*设计日期：2026年3月19日*
*核心主题：群众路线 × 军事民主 × 敌后斗争*
