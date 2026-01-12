// 游戏状态对象
const gameState = {
    currentChapter: 0,
    currentCharacter: 0,
    currentNode: "start",
    time: 193707,
    chapterProgress: 0,
    resources: {
        food: 100,
        ammo: 0,
        intelligence: 0,
        reputation: 0,
        money: 500,
        medicine: 0
    },
    characterStatus: {
        health: 100,
        morale: 70,
        fatigue: 0
    },
    flags: {},
    relationships: {},
    log: ["1937年7月7日，卢沟桥事变爆发"],
    hiddenClues: [],
    // 随机事件相关
    activeEvents: [],
    eventHistory: [],
    // 成就系统
    achievements: [],
    completedAchievements: [],
    // 肉鸽要素
    activeSupports: [],
    supportHistory: [],
    // 完成度追踪
    visitedNodes: ["start"],
    chosenOptions: [],
    endings: [],
    // 多周目数据
    playthroughs: 1,
    totalPlayTime: 0
};

// 角色数据
const characters = [
    {
        id: 0,
        name: "王二柱",
        identity: "普通村民",
        avatar: "images/characters/villager.png",
        background: "河北省完县（今顺平县）野场村农民，家有60岁老母和怀孕的妻子。野场村曾是晋察冀边区的模范村，1938年日军扫荡时制造了野场惨案，王二柱的父亲在那次惨案中遇难。"
    },
    {
        id: 1,
        name: "李明",
        identity: "国军士兵",
        avatar: "images/characters/soldier.png",
        background: "原是上海交通大学机械系学生，1937年8月13日淞沪会战爆发后，目睹日军轰炸上海南站的惨状，毅然投笔从戎，加入第88师524团，成为谢晋元部下的一名战士。"
    },
    {
        id: 2,
        name: "张老师",
        identity: "文化工作者",
        avatar: "images/characters/cultural-worker.png",
        background: "北平师范大学毕业，原是通县女子中学教师。1935年一二·九运动参与者，1937年平津沦陷后，辗转来到延安，后被派往晋绥边区从事文化宣传工作，擅长编写街头剧和墙头诗。"
    },
    {
        id: 3,
        name: "陈老板",
        identity: "商人",
        avatar: "images/characters/merchant.png",
        background: "天津杨柳青人，经营恒源祥绸缎庄。1937年天津沦陷后，利用自己的商业网络为抗日队伍秘密运送药品和电台零件，曾参与1939年为白求恩大夫运送手术器械的行动。"
    }
];

// 章节数据
const chapters = [
    { id: 0, name: "序章：烽火起", timeRange: "1937年7月", description: "战争突然降临，你的命运将何去何从？" },
    { id: 1, name: "第一章：敌后微光", timeRange: "1938-1940年", description: "在敌人的后方，微弱的抵抗之火正在燃烧" },
    { id: 2, name: "第二章：正面坚守", timeRange: "1938-1942年", description: "在战火最激烈的前线，用生命守护国土" },
    { id: 3, name: "第三章：文化抗战", timeRange: "1940-1943年", description: "用文字和声音，唤醒沉睡的民族意识" },
    { id: 4, name: "第四章：经济战线", timeRange: "1941-1944年", description: "在经济战场上，与侵略者展开没有硝烟的战争" },
    { id: 5, name: "第五章：黎明前夜", timeRange: "1944-1945年", description: "胜利的曙光就在前方，坚持就是胜利" },
    { id: 6, name: "终章：胜利之日", timeRange: "1945年8月", description: "漫长的抗争终于迎来最后的胜利" }
];

// 完整剧情节点系统 - 大幅扩充版
const storyNodes = {
    // ==================== 序章：烽火起 ====================
    "start": {
        chapter: 0,
        emotion: "shock",
        text: "1937年7月7日深夜，卢沟桥传来密集的枪声。你从睡梦中惊醒，听到了远处隐约的炮火声。作为河北省完县野场村的农民，你从未想过战争会离你如此之近。去年冬天，刚从东北逃荒来的王大叔还跟你说过日军在沈阳的暴行——鬼子进了村，先杀男人，再抢粮食，最后烧房子，没想到如今战火就烧到了家门口。\n\n你的妻子秀兰抱着还未满月的孩子惊恐地看着你，母亲在隔壁房间咳嗽着呼唤你的名字。村口的狗吠声此起彼伏，平时最沉稳的老村长家已经亮起了灯。远处的天空被炮火映得通红，你知道，这一夜，注定无眠。\n\n你想起了上个月在县城赶庙会时，看到国民党军队在张贴招募告示，还有几个穿灰布军装的人在偷偷散发《八一宣言》传单——停止内战，一致抗日。",
        background: "七七事变爆发，日军全面侵华开始",
        choices: [
            {
                text: "立即召集村民商议对策",
                consequences: { resources: { reputation: +10 }, flags: { took_initiative: true, leader_emerged: true }, status: { morale: +10, fatigue: +10 } },
                nextNode: "chapter0_village_council"
            },
            {
                text: "先保护家人，带他们去地窖躲藏",
                consequences: { resources: { food: -5 }, flags: { protected_family: true }, status: { morale: +5 } },
                nextNode: "chapter0_protect_family"
            },
            {
                text: "独自去村口打探消息",
                consequences: { resources: { intelligence: +15 }, flags: { went_to_village_entrance: true }, status: { morale: -5, fatigue: +15 } },
                nextNode: "chapter0_scout_village"
            },
            {
                text: "收拾值钱物品，准备逃离村庄",
                consequences: { resources: { money: -20, food: -10 }, flags: { prepared_to_flee: true }, status: { morale: -10 } },
                nextNode: "chapter0_prepare_escape"
            },
            {
                text: "去邻居家提醒他们",
                consequences: { resources: { reputation: +15 }, flags: { warned_neighbors: true }, status: { morale: +15, fatigue: +20 } },
                nextNode: "chapter0_warn_neighbors"
            }
        ]
    },

    // 序章分支1：召集村民商议
    "chapter0_village_council": {
        chapter: 0,
        emotion: "tension",
        text: "你召集了村里的主要成员。老村长摇着头说日军一直对这片土地虎视眈眈，年轻人们则义愤填膺地要求保卫村庄。村里有几条猎枪和土炮，但弹药有限。村东头的李大叔曾经当过兵，他说我们应该先派人去县城打探消息。",
        background: "村民们聚集在一起，讨论应对之策",
        choices: [
            {
                text: "组织年轻人去县城打探消息",
                consequences: { resources: { intelligence: +25, ammo: +5 }, flags: { sent_scouts: true }, status: { morale: +20, fatigue: +15 } },
                nextNode: "chapter0_send_scouts"
            },
            {
                text: "组织村民加固村口防御工事",
                consequences: { resources: { food: -15 }, flags: { fortified_village: true }, status: { morale: +15, fatigue: +25 } },
                nextNode: "chapter0_fortify_defense"
            },
            {
                text: "派人去附近的军营求援",
                consequences: { resources: { intelligence: +20 }, flags: { sent_for_reinforcement: true }, status: { morale: +25, fatigue: +20 } },
                nextNode: "chapter0_seek_reinforcement"
            },
            {
                text: "建议村民暂时撤离到山里",
                consequences: { resources: { food: -30, money: -30 }, flags: { suggested_escape: true }, status: { morale: -5 } },
                nextNode: "chapter0_suggest_escape"
            },
            {
                text: "独自去县城找国民政府报告情况",
                consequences: { resources: { money: -20 }, flags: { went_to_government: true }, status: { morale: +10, fatigue: +30 } },
                nextNode: "chapter0_go_to_government"
            }
        ]
    },

    // 序章分支2：保护家人
    "chapter0_protect_family": {
        chapter: 0,
        emotion: "despair",
        text: "你带着家人躲进了地窖。地窖里阴暗潮湿，妻子抱着孩子瑟瑟发抖，母亲不停地咳嗽。你安慰着他们，但心里却无比焦急。地窖里只有几天的干粮，如果日军来了……你不敢往下想。",
        background: "地窖中，家人紧紧相依",
        choices: [
            {
                text: "安顿好家人后，悄悄出去打探情况",
                consequences: { resources: { intelligence: +20 }, flags: { left_family_temporarily: true }, status: { morale: -10, fatigue: +20 } },
                nextNode: "chapter0_scout_from_dungeon"
            },
            {
                text: "守在地窖口，保护家人安全",
                consequences: { resources: { food: -10 }, flags: { guarded_family: true }, status: { morale: +5, fatigue: +30 } },
                nextNode: "chapter0_guard_dungeon"
            },
            {
                text: "教妻子防身术，准备应急",
                consequences: { resources: { intelligence: +15 }, flags: { taught_self_defense: true }, status: { morale: +15 } },
                nextNode: "chapter0_teach_self_defense"
            },
            {
                text: "安排一条紧急逃跑路线",
                consequences: { resources: { intelligence: +20 }, flags: { prepared_escape_route: true }, status: { morale: +10 } },
                nextNode: "chapter0_prepare_escape_route"
            },
            {
                text: "给家人讲述历史故事，稳定情绪",
                consequences: { resources: { reputation: +5 }, flags: { calmed_family: true }, status: { morale: +20, fatigue: +10 } },
                nextNode: "chapter0_calm_family"
            }
        ]
    },

    // 序章分支3：去村口打探
    "chapter0_scout_village": {
        chapter: 0,
        emotion: "fear",
        text: "你悄悄来到村口，借着月光看到远处有火光移动。那是日军的火把！他们正在向村庄方向移动。你能听到马蹄声和日语的喊话声。你心跳加速，必须赶紧做出决定。",
        background: "村口外，日军正在接近",
        choices: [
            {
                text: "立即回村报警",
                consequences: { resources: { intelligence: +25 }, flags: { gave_early_warning: true }, status: { morale: +15, fatigue: +15 } },
                nextNode: "chapter0_raise_alarm"
            },
            {
                text: "再靠近一些观察敌军人数",
                consequences: { resources: { intelligence: +35, ammo: +5 }, flags: { observed_enemy: true }, status: { morale: -15, fatigue: +25 } },
                nextNode: "chapter0_observe_enemy"
            },
            {
                text: "设置简易陷阱延缓敌军",
                consequences: { resources: { intelligence: +20 }, flags: { set_traps: true }, status: { morale: +20, fatigue: +30 } },
                nextNode: "chapter0_set_traps"
            },
            {
                text: "去找游击队报信",
                consequences: { resources: { intelligence: +30, reputation: +15 }, flags: { informed_guerrilla: true }, status: { morale: +25, fatigue: +35 } },
                nextNode: "chapter0_inform_guerrilla"
            },
            {
                text: "悄悄跟在他们后面，看他们去哪",
                consequences: { resources: { intelligence: +40 }, flags: { followed_enemy: true }, status: { morale: -20, fatigue: +40 } },
                nextNode: "chapter0_follow_enemy"
            }
        ]
    },

    // 序章分支4：收拾物品准备逃离
    "chapter0_prepare_escape": {
        chapter: 0,
        emotion: "confusion",
        text: "你开始收拾家里值钱的东西。妻子问你为什么要离开故土，你无言以对。家里还有年迈的母亲，她说她不想离开。在收拾的过程中，你发现了一张父亲留下的旧地图，上面标记着一条通往山区的秘密小路。",
        background: "家中，面临着艰难的选择",
        choices: [
            {
                text: "带上母亲，沿着地图的小路撤离",
                consequences: { resources: { money: +50, food: +10 }, flags: { took_elderly: true, found_secret_path: true }, status: { morale: +10, fatigue: +20 } },
                nextNode: "chapter0_escape_with_elderly"
            },
            {
                text: "让妻子和母亲先走，自己留下来观察",
                consequences: { resources: { reputation: +20 }, flags: { stayed_behind: true }, status: { morale: +15, fatigue: +10 } },
                nextNode: "chapter0_stay_behind"
            },
            {
                text: "把地图分享给其他村民",
                consequences: { resources: { reputation: +30 }, flags: { shared_map: true }, status: { morale: +25 } },
                nextNode: "chapter0_share_map"
            },
            {
                text: "去村里富裕人家提醒他们",
                consequences: { resources: { money: +30, reputation: +15 }, flags: { warned_rich: true }, status: { morale: +20, fatigue: +15 } },
                nextNode: "chapter0_warn_rich"
            },
            {
                text: "收藏好地图，独自去探路",
                consequences: { resources: { intelligence: +25 }, flags: { explored_alone: true }, status: { morale: +5, fatigue: +30 } },
                nextNode: "chapter0_explore_alone"
            }
        ]
    },

    // 序章分支5：提醒邻居
    "chapter0_warn_neighbors": {
        chapter: 0,
        emotion: "urgency",
        text: "你挨家挨户敲门通知。邻居们有的感激，有的则责怪你小题大做。年轻的猎户老赵说他愿意帮你，村里的大力士老周也加入了你的行列。你们组成了一支临时的巡逻队。",
        background: "村庄中，邻里互助",
        choices: [
            {
                text: "组织巡逻队加强警戒",
                consequences: { resources: { reputation: +25, intelligence: +15 }, flags: { organized_patrol: true }, status: { morale: +30, fatigue: +25 } },
                nextNode: "chapter0_organize_patrol"
            },
            {
                text: "让巡逻队分头通知更多人",
                consequences: { resources: { reputation: +30 }, flags: { spread_warning: true }, status: { morale: +20, fatigue: +20 } },
                nextNode: "chapter0_spread_warning"
            },
            {
                text: "安排老弱妇孺先转移到安全地点",
                consequences: { resources: { reputation: +20 }, flags: { arranged_escape: true }, status: { morale: +25, fatigue: +15 } },
                nextNode: "chapter0_arrange_escape"
            },
            {
                text: "收集村里的武器准备防御",
                consequences: { resources: { ammo: +15, intelligence: +10 }, flags: { collected_weapons: true }, status: { morale: +15, fatigue: +20 } },
                nextNode: "chapter0_collect_weapons"
            },
            {
                text: "派人去联系其他村庄联合防御",
                consequences: { resources: { intelligence: +25, reputation: +20 }, flags: { contacted_other_villages: true }, status: { morale: +30, fatigue: +30 } },
                nextNode: "chapter0_contact_villages"
            }
        ]
    },

    // ==================== 第一章：敌后微光 ====================
    "chapter1_start": {
        chapter: 1,
        emotion: "determination",
        text: "1938年初，你正式加入了一支抗日游击队。在华北的敌占区，你们昼伏夜出，破坏日军的后勤补给线，收集情报，保护百姓。游击队的条件极其艰苦，但每个人都充满斗志。你的队长是一个参加过北伐的老兵，他教会了你很多战斗技巧。",
        background: "游击队根据地，开始新的战斗生活",
        choices: [
            {
                text: "认真学习战斗技巧",
                consequences: { resources: { ammo: +20, intelligence: +20 }, flags: { learned_combat: true }, status: { morale: +25, fatigue: +15 } },
                nextNode: "chapter1_learn_combat"
            },
            {
                text: "主动承担侦察任务",
                consequences: { resources: { intelligence: +35, reputation: +15 }, flags: { took_scout_mission: true }, status: { morale: +20, fatigue: +25 } },
                nextNode: "chapter1_scout_mission"
            },
            {
                text: "帮助村民干农活，融入群众",
                consequences: { resources: { food: +30, reputation: +25 }, flags: { helped_villagers: true }, status: { morale: +30, fatigue: +10 } },
                nextNode: "chapter1_help_villagers"
            },
            {
                text: "学习制作简易爆炸物",
                consequences: { resources: { ammo: +25, intelligence: +20 }, flags: { learned_explosives: true }, status: { morale: +15, fatigue: +20 } },
                nextNode: "chapter1_learn_explosives"
            },
            {
                text: "建立与村民的情报网络",
                consequences: { resources: { intelligence: +40, reputation: +20 }, flags: { built_intel_network: true }, status: { morale: +25, fatigue: +20 } },
                nextNode: "chapter1_build_network"
            }
        ]
    },

    "chapter1_learn_combat": {
        chapter: 1,
        emotion: "focus",
        text: "老队长教你如何隐蔽接近敌人、如何利用地形、如何在劣势下取胜。他说：'游击战的核心是敌进我退、敌退我追、敌驻我扰、敌疲我打。'你还学习了如何使用缴获的日军武器。",
        background: "训练场上，学习游击战术",
        choices: [
            {
                text: "练习射击直到百发百中",
                consequences: { resources: { ammo: +30 }, flags: { practiced_shooting: true }, status: { morale: +30, fatigue: +30 } },
                nextNode: "chapter1_practice_shooting"
            },
            {
                text: "学习夜间战斗技巧",
                consequences: { resources: { intelligence: +30 }, flags: { learned_night_combat: true }, status: { morale: +25, fatigue: +25 } },
                nextNode: "chapter1_night_combat"
            },
            {
                text: "学习急救包扎技术",
                consequences: { resources: { medicine: +15, intelligence: +20 }, flags: { learned_first_aid: true }, status: { morale: +20 } },
                nextNode: "chapter1_first_aid"
            },
            {
                text: "研究日军装备特点",
                consequences: { resources: { intelligence: +35 }, flags: { studied_enemy_gear: true }, status: { morale: +15, fatigue: +20 } },
                nextNode: "chapter1_study_enemy"
            },
            {
                text: "练习潜伏和伪装",
                consequences: { resources: { intelligence: +30 }, flags: { learned_stealth: true }, status: { morale: +20, fatigue: +25 } },
                nextNode: "chapter1_stealth_training"
            }
        ]
    },

    "chapter1_scout_mission": {
        chapter: 1,
        emotion: "tension",
        text: "你被派去侦察附近日军据点的情况。据点里大约有50名日军，配备迫击炮和轻重机枪。他们正在修建一条公路，用于运输物资。你需要在不暴露的情况下摸清他们的作息规律和换岗时间。",
        background: "日军据点外，悄悄观察",
        choices: [
            {
                text: "连续观察三天三夜",
                consequences: { resources: { intelligence: +50, reputation: +25 }, flags: { thorough_scout: true }, status: { morale: +20, fatigue: +40 } },
                nextNode: "chapter1_thorough_scout"
            },
            {
                text: "伪装成劳工混入工地",
                consequences: { resources: { intelligence: +40, money: +30 }, flags: { infiltrated_work: true }, status: { morale: +15, fatigue: +30 } },
                nextNode: "chapter1_infiltrate"
            },
            {
                text: "抓一个落单的日军哨兵审讯",
                consequences: { resources: { intelligence: +45, ammo: +10 }, flags: { captured_prisoner: true }, status: { morale: +25, fatigue: +25 } },
                nextNode: "chapter1_capture_prisoner"
            },
            {
                text: "用电台向总部汇报",
                consequences: { resources: { intelligence: +35, reputation: +20 }, flags: { radio_report: true }, status: { morale: +30, fatigue: +15 } },
                nextNode: "chapter1_radio_report"
            },
            {
                text: "绘制详细的据点地图",
                consequences: { resources: { intelligence: +55, reputation: +30 }, flags: { drew_map: true }, status: { morale: +25, fatigue: +35 } },
                nextNode: "chapter1_draw_map"
            }
        ]
    },

    "chapter1_help_villagers": {
        chapter: 1,
        emotion: "warmth",
        text: "白天帮村民干活，晚上教他们一些基本的防身技能。村民们把你当成自己人，有什么消息都会第一时间告诉你。你还帮助村里的孩子们识字，虽然你学历不高，但你教会了他们写'中国'两个字。",
        background: "村庄中，与村民建立深厚感情",
        choices: [
            {
                text: "教成年人识字读书",
                consequences: { resources: { reputation: +35, intelligence: +20 }, flags: { taught_adults: true }, status: { morale: +35, fatigue: +15 } },
                nextNode: "chapter1_teach_adults"
            },
            {
                text: "组织村民进行自卫训练",
                consequences: { resources: { reputation: +30, ammo: +15 }, flags: { organized_village_defense: true }, status: { morale: +30, fatigue: +20 } },
                nextNode: "chapter1_organize_village_defense"
            },
            {
                text: "帮助村民藏匿粮食",
                consequences: { resources: { food: +40, reputation: +25 }, flags: { hid_grain: true }, status: { morale: +25, fatigue: +20 } },
                nextNode: "chapter1_hide_grain"
            },
            {
                text: "建立地下情报传递网",
                consequences: { resources: { intelligence: +45, reputation: +30 }, flags: { built_secret_network: true }, status: { morale: +30, fatigue: +25 } },
                nextNode: "chapter1_secret_network"
            },
            {
                text: "帮助村民修复被毁的房屋",
                consequences: { resources: { reputation: +25 }, flags: { rebuilt_houses: true }, status: { morale: +35, fatigue: +30 } },
                nextNode: "chapter1_rebuild_houses"
            }
        ]
    },

    "chapter1_learn_explosives": {
        chapter: 1,
        emotion: "caution",
        text: "队伍里的爆破专家教你如何制作土炸弹。他说这需要极大的耐心和精确度，稍有不慎就会伤到自己。你还学习了如何埋设地雷、如何炸毁桥梁和铁路。",
        background: "爆破训练，学习危险技能",
        choices: [
            {
                text: "练习炸毁日军铁路",
                consequences: { resources: { intelligence: +40, reputation: +35 }, flags: { blew_up_railroad: true }, status: { morale: +40, fatigue: +30 } },
                nextNode: "chapter1_blow_railroad"
            },
            {
                text: "学习埋设地雷",
                consequences: { resources: { ammo: +30, intelligence: +30 }, flags: { learned_landmines: true }, status: { morale: +25, fatigue: +25 } },
                nextNode: "chapter1_landmines"
            },
            {
                text: "研究炸桥技术",
                consequences: { resources: { intelligence: +35, reputation: +30 }, flags: { learned_bridge_bombing: true }, status: { morale: +30, fatigue: +25 } },
                nextNode: "chapter1_bridge_bombing"
            },
            {
                text: "制作定向地雷",
                consequences: { resources: { ammo: +35, intelligence: +35 }, flags: { made_directional_mines: true }, status: { morale: +25, fatigue: +30 } },
                nextNode: "chapter1_directional_mines"
            },
            {
                text: "培训其他队员使用爆破",
                consequences: { resources: { reputation: +40, intelligence: +25 }, flags: { trained_others: true }, status: { morale: +35, fatigue: +20 } },
                nextNode: "chapter1_train_explosives"
            }
        ]
    },

    "chapter1_build_network": {
        chapter: 1,
        emotion: "strategy",
        text: "你开始在各村建立情报网络。每个村都有一个联络员，他们通过约定的方式传递消息。这个网络就像一张大网，覆盖了整个敌占区。任何日军的动向都能第一时间传到游击队耳中。",
        background: "情报网络逐渐成型",
        choices: [
            {
                text: "发展可靠的联络员",
                consequences: { resources: { intelligence: +45, reputation: +30 }, flags: { recruited_agents: true }, status: { morale: +35, fatigue: +20 } },
                nextNode: "chapter1_recruit_agents"
            },
            {
                text: "建立秘密电台",
                consequences: { resources: { intelligence: +50, reputation: +35 }, flags: { established_radio: true }, status: { morale: +30, fatigue: +30 } },
                nextNode: "chapter1_establish_radio"
            },
            {
                text: "在日军内部发展眼线",
                consequences: { resources: { intelligence: +60, reputation: +40 }, flags: { developed_spies: true }, status: { morale: +25, fatigue: +25 } },
                nextNode: "chapter1_develop_spies"
            },
            {
                text: "建立备用联络点",
                consequences: { resources: { intelligence: +40, reputation: +25 }, flags: { set_backup_points: true }, status: { morale: +30, fatigue: +15 } },
                nextNode: "chapter1_backup_points"
            },
            {
                text: "培训情报传递密码",
                consequences: { resources: { intelligence: +45 }, flags: { trained_codes: true }, status: { morale: +25, fatigue: +20 } },
                nextNode: "chapter1_train_codes"
            }
        ]
    },

    // ==================== 第二章：正面坚守 ====================
    "chapter2_start": {
        chapter: 2,
        emotion: "heroism",
        text: "1938年10月，你所在的第88师524团接到了坚守上海四行仓库的命令。作为李明，你曾经是上海交通大学的学生，如今却穿着一身满是硝烟味的军装，和400多名战友一起，要在日军的重重包围中坚守这座孤立的建筑。\n\n四行仓库的墙壁上已经布满了弹孔，日军的飞机大炮日夜不停地轰炸。你想起了团长谢晋元说的话：\"我们的任务是坚守四行仓库，向全世界显示中国人民抗战到底的决心！\" 昨夜，有个14岁的女孩叫杨惠敏，冒着枪林弹雨给你们送来了一面国旗——那面在仓库楼顶飘扬的国旗，成为了全上海人民的希望。\n\n今天早上，日军又发起了新一轮进攻。你看着身边年轻的战友，有的还不满18岁，他们的眼神里没有恐惧，只有坚定。你们的弹药已经不多了，但没有人后退。因为你们知道，身后就是租界，就是成千上万的中国百姓在看着你们。",
        background: "四行仓库保卫战，孤军奋战",
        choices: [
            {
                text: "坚守阵地，与阵地共存亡",
                consequences: { resources: { ammo: +40, reputation: +40 }, flags: { held_position: true }, status: { morale: +45, health: -25, fatigue: +35 } },
                nextNode: "chapter2_hold_position"
            },
            {
                text: "主动出击，炸毁日军炮兵阵地",
                consequences: { resources: { ammo: +50, intelligence: +30 }, flags: { destroyed_artillery: true }, status: { morale: +50, health: -30, fatigue: +40 } },
                nextNode: "chapter2_destroy_artillery"
            },
            {
                text: "组织敢死队夜袭日军",
                consequences: { resources: { ammo: +60, reputation: +50 }, flags: { night_raid: true }, status: { morale: +55, health: -35, fatigue: +45 } },
                nextNode: "chapter2_night_raid"
            },
            {
                text: "救助伤员，稳定军心",
                consequences: { resources: { medicine: +25, reputation: +35 }, flags: { helped_wounded: true }, status: { morale: +40, fatigue: +25 } },
                nextNode: "chapter2_help_wounded"
            },
            {
                text: "利用地形进行反击",
                consequences: { resources: { intelligence: +45, ammo: +30 }, flags: { counterattack: true }, status: { morale: +45, health: -20, fatigue: +35 } },
                nextNode: "chapter2_counterattack"
            }
        ]
    },

    "chapter2_hold_position": {
        chapter: 2,
        emotion: "desperation",
        text: "日军的进攻一波接一波。你和战友们用血肉之躯抵挡着敌人的炮火。弹药快耗尽了，援军还没有来。你能听到日军在阵地前的喊话，要你们投降。",
        background: "阵地前，战斗进入最艰难时刻",
        choices: [
            {
                text: "誓死不做俘虏，与日军同归于尽",
                consequences: { resources: { ammo: +30 }, flags: { last_stand: true }, status: { morale: +60, health: -40, fatigue: +40 } },
                nextNode: "chapter2_last_stand"
            },
            {
                text: "组织剩余战友突围",
                consequences: { resources: { intelligence: +35, reputation: +30 }, flags: { breakthrough: true }, status: { morale: +35, health: -20, fatigue: +45 } },
                nextNode: "chapter2_breakthrough"
            },
            {
                text: "等待援军，坚持到底",
                consequences: { resources: { reputation: +45 }, flags: { waited_reinforcement: true }, status: { morale: +50, health: -30, fatigue: +50 } },
                nextNode: "chapter2_wait_reinforcement"
            },
            {
                text: "用刺刀进行白刃战",
                consequences: { resources: { ammo: +20, reputation: +50 }, flags: { bayonet_charge: true }, status: { morale: +55, health: -35, fatigue: +45 } },
                nextNode: "chapter2_bayonet"
            },
            {
                text: "摧毁装备后撤退",
                consequences: { resources: { intelligence: +25 }, flags: { destroyed_equipment: true }, status: { morale: +25, fatigue: +30 } },
                nextNode: "chapter2_retreat_with_dignity"
            }
        ]
    },

    "chapter2_destroy_artillery": {
        chapter: 2,
        emotion: "courage",
        text: "日军的炮火给守军造成了巨大伤亡。你注意到炮兵阵地在东南方的一个高地上。如果能摧毁它，前线的压力会大大减少。你带领一个小组开始了危险的渗透。",
        background: "夜幕下，向日军炮兵阵地渗透",
        choices: [
            {
                text: "趁夜色接近，用炸药包摧毁",
                consequences: { resources: { ammo: +45, intelligence: +40 }, flags: { destroyed_artillery_success: true }, status: { morale: +60, health: -25, fatigue: +40 } },
                nextNode: "chapter2_artillery_success"
            },
            {
                text: "用缴获的迫击炮还击",
                consequences: { resources: { ammo: +50, reputation: +45 }, flags: { counter_bombarded: true }, status: { morale: +55, health: -20, fatigue: +35 } },
                nextNode: "chapter2_counter_bombard"
            },
            {
                text: "引导我军炮火打击",
                consequences: { resources: { intelligence: +50, reputation: +50 }, flags: { guided_fire: true }, status: { morale: +50, fatigue: +25 } },
                nextNode: "chapter2_guide_fire"
            },
            {
                text: "俘虏日军炮兵获取情报",
                consequences: { resources: { intelligence: +55, reputation: +40 }, flags: { captured_artillery_crew: true }, status: { morale: +45, fatigue: +30 } },
                nextNode: "chapter2_capture_crew"
            },
            {
                text: "拍摄炮兵阵地照片送交总部",
                consequences: { resources: { intelligence: +60, reputation: +55 }, flags: { took_photos: true }, status: { morale: +40, fatigue: +25 } },
                nextNode: "chapter2_take_photos"
            }
        ]
    },

    "chapter2_night_raid": {
        chapter: 2,
        emotion: "fury",
        text: "你写下了遗书，带领20名敢死队员摸向日军营地。月光下，你们的影子如同幽灵。你们的目标是日军的弹药库和指挥所。这是生死存亡的一战。",
        background: "敢死队整装待发",
        choices: [
            {
                text: "直扑日军弹药库",
                consequences: { resources: { ammo: +60, reputation: +60 }, flags: { attacked_ammo_depot: true }, status: { morale: +65, health: -30, fatigue: +50 } },
                nextNode: "chapter2_ammo_depot"
            },
            {
                text: "袭击日军指挥所",
                consequences: { resources: { intelligence: +55, reputation: +55 }, flags: { attacked_command: true }, status: { morale: +60, health: -35, fatigue: +45 } },
                nextNode: "chapter2_attack_command"
            },
            {
                text: "放火焚烧日军营房",
                consequences: { resources: { reputation: +50, intelligence: +35 }, flags: { set_fire: true }, status: { morale: +55, health: -25, fatigue: +40 } },
                nextNode: "chapter2_set_fire"
            },
            {
                text: "解救被俘的中国士兵",
                consequences: { resources: { reputation: +65, medicine: +20 }, flags: { rescued_prisoners: true }, status: { morale: +70, health: -30, fatigue: +45 } },
                nextNode: "chapter2_rescue_prisoners"
            },
            {
                text: "抓一个日军军官回来审问",
                consequences: { resources: { intelligence: +60, reputation: +60 }, flags: { captured_officer: true }, status: { morale: +60, health: -25, fatigue: +40 } },
                nextNode: "chapter2_capture_officer"
            }
        ]
    },

    "chapter2_help_wounded": {
        chapter: 2,
        emotion: "compassion",
        text: "战场上的伤员越来越多。医护兵忙不过来，你主动留下来帮忙。你学会了简单的包扎和止血。很多战士在临死前还在问阵地的情况。",
        background: "临时救护所，抢救伤员",
        choices: [
            {
                text: "冒着枪林弹雨抢救伤员",
                consequences: { resources: { medicine: +40, reputation: +50 }, flags: { rescued_wounded: true }, status: { morale: +55, health: -20, fatigue: +40 } },
                nextNode: "chapter2_rescue_wounded"
            },
            {
                text: "组织担架队转移重伤员",
                consequences: { resources: { reputation: +45, medicine: +25 }, flags: { organized_stretchers: true }, status: { morale: +50, fatigue: +35 } },
                nextNode: "chapter2_stretcher_team"
            },
            {
                text: "用自己的血输给重伤员",
                consequences: { resources: { reputation: +60, health: -15 }, flags: { donated_blood: true }, status: { morale: +65, health: -20, fatigue: +25 } },
                nextNode: "chapter2_donate_blood"
            },
            {
                text: "记录牺牲战友的名字",
                consequences: { resources: { intelligence: +25, reputation: +35 }, flags: { recorded_names: true }, status: { morale: +40, fatigue: +15 } },
                nextNode: "chapter2_record_names"
            },
            {
                text: "给轻伤员包扎后送回前线",
                consequences: { resources: { medicine: +30, reputation: +40 }, flags: { returned_fighters: true }, status: { morale: +45, fatigue: +30 } },
                nextNode: "chapter2_return_fighters"
            }
        ]
    },

    "chapter2_counterattack": {
        chapter: 2,
        emotion: "strategy",
        text: "你发现日军进攻的规律，他们每天早晨会进行一次大规模炮击，然后步兵冲锋。如果能利用这个间隙进行反击，就能打乱他们的节奏。你把这个想法报告给了连长。",
        background: "研究战术，准备反击",
        choices: [
            {
                text: "组织反冲锋打乱日军",
                consequences: { resources: { ammo: +45, reputation: +50 }, flags: { counter_charge: true }, status: { morale: +55, health: -25, fatigue: +40 } },
                nextNode: "chapter2_counter_charge"
            },
            {
                text: "设置埋伏消灭日军冲锋部队",
                consequences: { resources: { ammo: +50, intelligence: +45 }, flags: { set_ambush: true }, status: { morale: +50, health: -20, fatigue: +35 } },
                nextNode: "chapter2_set_ambush"
            },
            {
                text: "利用烟雾弹掩护反击",
                consequences: { resources: { ammo: +40, intelligence: +40 }, flags: { smoke_cover: true }, status: { morale: +45, fatigue: +30 } },
                nextNode: "chapter2_smoke_cover"
            },
            {
                text: "等待日军疲惫后进行全面反击",
                consequences: { resources: { reputation: +55, intelligence: +35 }, flags: { waited_fatigue: true }, status: { morale: +50, health: -15, fatigue: +35 } },
                nextNode: "chapter2_wait_fatigue"
            },
            {
                text: "与友军配合夹击日军",
                consequences: { resources: { intelligence: +50, reputation: +60 }, flags: { coordinated_attack: true }, status: { morale: +60, health: -25, fatigue: +40 } },
                nextNode: "chapter2_coordinated_attack"
            }
        ]
    },

    // ==================== 第三章：文化抗战 ====================
    "chapter3_start": {
        chapter: 3,
        emotion: "inspiration",
        text: "1940年1月，你跟随西北战地服务团来到了晋绥边区的兴县。作为张老师，你曾经是北平师范大学的教师，如今却穿着粗布军装，背着一个装满文稿的背包，要在这片战火纷飞的土地上开展文化抗战。\n\n前几天，你刚听了冼星海和光未然创作的《黄河大合唱》——那激昂的旋律让你热血沸腾。你想起了去年在延安见到的丁玲，她对你说：\"我们的笔就是我们的枪，我们的作品就是我们的子弹！\"\n\n今天早上，边区文协的同志告诉你，附近的几个村子里，很多农民连自己的名字都不会写，更不懂得为什么要抗战。你决定用自己的知识和才华，唤醒这些沉睡的心灵。你知道，这场战争不仅是军事上的较量，更是民族精神的对抗。",
        background: "晋绥边区农村，文化宣传深入人心",
        choices: [
            {
                text: "创办抗日刊物《战地通讯》",
                consequences: { resources: { reputation: +40, intelligence: +35 }, flags: { started_publication: true }, status: { morale: +45, fatigue: +25 } },
                nextNode: "chapter3_start_publication"
            },
            {
                text: "组织街头剧《放下你的鞭子》巡演",
                consequences: { resources: { reputation: +50, intelligence: +30 }, flags: { organized_speeches: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter3_organize_speeches"
            },
            {
                text: "创作秧歌戏《兄妹开荒》",
                consequences: { resources: { reputation: +55, intelligence: +35 }, flags: { created_art: true }, status: { morale: +55, fatigue: +25 } },
                nextNode: "chapter3_create_art"
            },
            {
                text: "创办冬学，教农民识字明理",
                consequences: { resources: { reputation: +45, intelligence: +40 }, flags: { started_night_school: true }, status: { morale: +50, fatigue: +20 } },
                nextNode: "chapter3_night_school"
            },
            {
                text: "组织'一元献机'募捐活动",
                consequences: { resources: { money: +60, reputation: +50 }, flags: { organized_donations: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter3_organize_donations"
            }
        ]
    },

    "chapter3_start_publication": {
        chapter: 3,
        emotion: "dedication",
        text: "你创办了一份名为《民族呼声》的抗日刊物。纸张和印刷设备都很稀缺，但你没有放弃。你四处搜集材料，克服重重困难。第一期出版后，在大后方引起了巨大反响。",
        background: "简陋的印刷厂，刊物诞生",
        choices: [
            {
                text: "增加刊物发行量",
                consequences: { resources: { money: +40, reputation: +45 }, flags: { increased_circulation: true }, status: { morale: +45, fatigue: +25 } },
                nextNode: "chapter3_increase_circulation"
            },
            {
                text: "深入敌占区采访",
                consequences: { resources: { intelligence: +50, reputation: +50 }, flags: { interviewed_enemy_area: true }, status: { morale: +40, fatigue: +35 } },
                nextNode: "chapter3_enemy_interview"
            },
            {
                text: "揭露日军暴行",
                consequences: { resources: { reputation: +60, intelligence: +40 }, flags: { exposed_atrocities: true }, status: { morale: +55, fatigue: +20 } },
                nextNode: "chapter3_expose_atrocities"
            },
            {
                text: "连载抗战英雄故事",
                consequences: { resources: { reputation: +55, intelligence: +30 }, flags: { hero_stories: true }, status: { morale: +60, fatigue: +15 } },
                nextNode: "chapter3_hero_stories"
            },
            {
                text: "培训青年记者",
                consequences: { resources: { reputation: +50, intelligence: +35 }, flags: { trained_journalists: true }, status: { morale: +45, fatigue: +20 } },
                nextNode: "chapter3_train_journalists"
            }
        ]
    },

    "chapter3_organize_speeches": {
        chapter: 3,
        emotion: "passion",
        text: "你和你的演讲团走遍了大后方的大街小巷。你的演讲慷慨激昂，听众们常常热泪盈眶。你还邀请了各界知名人士加入，产生了巨大的社会影响。",
        background: "广场上，万人空巷的演讲",
        choices: [
            {
                text: "邀请名人加入演讲",
                consequences: { resources: { reputation: +60, intelligence: +30 }, flags: { invited_celebrities: true }, status: { morale: +55, fatigue: +25 } },
                nextNode: "chapter3_invite_celebrities"
            },
            {
                text: "深入工厂学校演讲",
                consequences: { resources: { reputation: +55, intelligence: +35 }, flags: { spoke_in_schools: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter3_school_speeches"
            },
            {
                text: "组织示威游行",
                consequences: { resources: { reputation: +65, intelligence: +40 }, flags: { organized_protest: true }, status: { morale: +60, fatigue: +35 } },
                nextNode: "chapter3_protest_march"
            },
            {
                text: "用方言进行宣传",
                consequences: { resources: { reputation: +50, intelligence: +25 }, flags: { dialect_propaganda: true }, status: { morale: +45, fatigue: +20 } },
                nextNode: "chapter3_dialect_speeches"
            },
            {
                text: "跨国界宣传争取国际支持",
                consequences: { resources: { intelligence: +55, reputation: +60 }, flags: { international_propaganda: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter3_international_speeches"
            }
        ]
    },

    "chapter3_create_art": {
        chapter: 3,
        emotion: "creativity",
        text: "你开始创作抗日歌曲和戏剧。你的第一首歌《保卫黄河》在大后方广为传唱。你还创作了多部话剧，揭露日军的暴行，歌颂抗日英雄。艺术成为了战斗的武器。",
        background: "舞台上，艺术的力量",
        choices: [
            {
                text: "创作更多抗日歌曲",
                consequences: { resources: { reputation: +60, intelligence: +35 }, flags: { more_songs: true }, status: { morale: +60, fatigue: +25 } },
                nextNode: "chapter3_more_songs"
            },
            {
                text: "排演抗战话剧",
                consequences: { resources: { reputation: +55, intelligence: +40 }, flags: { staged_plays: true }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter3_staged_plays"
            },
            {
                text: "组织慰劳演出",
                consequences: { resources: { reputation: +65, morale: +30 }, flags: { comfort_performances: true }, status: { morale: +65, fatigue: +35 } },
                nextNode: "chapter3_comfort_performances"
            },
            {
                text: "培训文艺人才",
                consequences: { resources: { reputation: +50, intelligence: +30 }, flags: { trained_artists: true }, status: { morale: +50, fatigue: +20 } },
                nextNode: "chapter3_train_artists"
            },
            {
                text: "制作抗日宣传画",
                consequences: { resources: { reputation: +55, intelligence: +35 }, flags: { made_posters: true }, status: { morale: +55, fatigue: +25 } },
                nextNode: "chapter3_made_posters"
            }
        ]
    },

    "chapter3_night_school": {
        chapter: 3,
        emotion: "hope",
        text: "你创办的夜校吸引了众多民众。他们白天劳作，晚上来学习。你不仅教他们识字，更重要的是教他们国家、民族和抗战的道理。很多学员后来都走上了抗战前线。",
        background: "夜校中，知识的灯火",
        choices: [
            {
                text: "扩大夜校规模",
                consequences: { resources: { reputation: +55, intelligence: +40 }, flags: { expanded_school: true }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter3_expand_school"
            },
            {
                text: "增设抗战课程",
                consequences: { resources: { reputation: +60, intelligence: +35 }, flags: { added_courses: true }, status: { morale: +60, fatigue: +25 } },
                nextNode: "chapter3_added_courses"
            },
            {
                text: "培养青年教师",
                consequences: { resources: { reputation: +50, intelligence: +45 }, flags: { trained_teachers: true }, status: { morale: +50, fatigue: +25 } },
                nextNode: "chapter3_trained_teachers"
            },
            {
                text: "编写通俗教材",
                consequences: { resources: { intelligence: +50, reputation: +45 }, flags: { wrote_textbooks: true }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter3_wrote_textbooks"
            },
            {
                text: "建立分校网络",
                consequences: { resources: { reputation: +65, intelligence: +50 }, flags: { built_school_network: true }, status: { morale: +60, fatigue: +35 } },
                nextNode: "chapter3_school_network"
            }
        ]
    },

    "chapter3_organize_donations": {
        chapter: 3,
        emotion: "solidarity",
        text: "你发起的募捐活动得到了各界响应。工人们捐出工资，学生们捐出零花钱，侨胞们从海外寄来物资。这些物资被源源不断地送往抗日前线。",
        background: "募捐现场，爱国热情高涨",
        choices: [
            {
                text: "组织大规模募捐活动",
                consequences: { resources: { money: +80, reputation: +60 }, flags: { large_donation: true }, status: { morale: +65, fatigue: +35 } },
                nextNode: "chapter3_large_donation"
            },
            {
                text: "联系海外侨胞",
                resources: { money: +100, reputation: +65 },
                flags: { contacted_overseas: true },
                status: { morale: +60, fatigue: +30 },
                nextNode: "chapter3_overseas_chinese"
            },
            {
                text: "组织义卖活动",
                resources: { money: +60, reputation: +55 },
                flags: { organized_bazaar: true },
                status: { morale: +55, fatigue: +25 },
                nextNode: "chapter3_bazaar"
            },
            {
                text: "动员妇女做军鞋军衣",
                resources: { food: +40, reputation: +50 },
                flags: { women_support: true },
                status: { morale: +60, fatigue: +20 },
                nextNode: "chapter3_women_support"
            },
            {
                text: "建立完善的运输网络",
                resources: { intelligence: +45, reputation: +55 },
                flags: { built_transport: true },
                status: { morale: +55, fatigue: +30 },
                nextNode: "chapter3_transport_network"
            }
        ]
    },

    // ==================== 第四章：经济战线 ====================
    "chapter4_start": {
        chapter: 4,
        emotion: "ingenuity",
        text: "1941年，你作为晋察冀边区完县野场村的村长，面临着前所未有的经济困难。日军的频繁扫荡和经济封锁，使得根据地的物资极度匮乏，粮食、布料、药品都成了稀缺品。\n\n上个月，区里召开了经济工作会议，号召各地开展大生产运动，自力更生解决经济问题。你想起了边区政府提出的发展经济，保障供给的方针，决定带领村民们一起想办法渡过难关。\n\n今天早上，村里的老会计告诉你，仓库里的粮食只够维持一个月了，冬天的棉衣还没有着落，还有几个伤员急需药品。你知道，靠外面的援助已经不现实了，必须发动群众，自己动手解决问题。\n\n你想起了八路军359旅在南泥湾开荒的事迹，他们把荒无人烟的南泥湾变成了陕北的好江南。你相信，只要大家齐心协力，野场村也一定能够渡过难关。",
        background: "敌后根据地，大生产运动",
        choices: [
            {
                text: "组织村民开垦荒地种粮食",
                consequences: { resources: { food: +60, reputation: +40 }, flags: { started_farming: true, economic_success: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "组织妇女纺纱织布做冬装",
                consequences: { resources: { reputation: +45 }, flags: { started_weaving: true, economic_success: true }, status: { morale: +55, fatigue: +35 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "建立村办合作社互通有无",
                consequences: { resources: { money: +40, reputation: +40 }, flags: { started_cooperative: true, economic_success: true }, status: { morale: +45, fatigue: +25 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "发动村民采集草药做药品",
                consequences: { resources: { medicine: +30, reputation: +50 }, flags: { started_herbalism: true, economic_success: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "组织民兵保护运输队",
                consequences: { resources: { intelligence: +55, reputation: +50 }, flags: { protected_transport: true, economic_success: true }, status: { morale: +55, fatigue: +25 } },
                nextNode: "transition_chapter5"
            }
        ]
    },

    // 第四章：经济战线 - 敌后根据地经济建设节点
    "chapter4_start_farming": {
        chapter: 4,
        emotion: "hope",
        text: "你带领村民们开始开垦荒地。野场村周围有不少闲置的山坡地，虽然土质贫瘠，但大家的热情很高。八路军的王指导员还带来了一些优质种子和农具，教大家科学种田。\n\n每天天不亮，村民们就扛着锄头、背着水壶下地了。老人们负责播种，年轻人负责翻地，孩子们负责浇水。你看着这热火朝天的景象，心里充满了希望。\n\n半个月后，第一批种子发芽了。当你看到嫩绿的幼苗从土里钻出来时，激动得流下了眼泪。这是希望的种子，是胜利的种子！",
        background: "开荒种地，希望的田野",
        choices: [
            {
                text: "扩大种植面积",
                consequences: { resources: { food: +50, reputation: +35 }, flags: { expanded_farming: true }, status: { morale: +45, fatigue: +30 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "组织互助组提高效率",
                consequences: { resources: { food: +45, reputation: +40 }, flags: { started_mutual_aid: true }, status: { morale: +50, fatigue: +25 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "兴修水利保证灌溉",
                consequences: { resources: { food: +55, reputation: +45 }, flags: { built_irrigation: true }, status: { morale: +55, fatigue: +35 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "种植经济作物增加收入",
                consequences: { resources: { money: +60, reputation: +40 }, flags: { planted_cash_crops: true }, status: { morale: +45, fatigue: +20 } },
                nextNode: "transition_chapter5"
            },
            {
                text: "组织村民学习科学种田",
                consequences: { resources: { intelligence: +40, reputation: +35 }, flags: { learned_scientific_farming: true }, status: { morale: +40, fatigue: +15 } },
                nextNode: "transition_chapter5"
            }
        ]
    },

    "chapter4_establish_routes": {
        chapter: 4,
        emotion: "danger",
        text: "你开始建立从沦陷区到根据地的秘密运输线。这条路线要穿过日军的封锁线，每一个关卡都是一道鬼门关。你必须万分小心。",
        background: "秘密运输线上，生死一线",
        choices: [
            {
                text: "利用废弃地道运输",
                consequences: { resources: { intelligence: +55, food: +50 }, flags: { used_tunnels: true }, status: { morale: +55, fatigue: +35 } },
                nextNode: "chapter4_used_tunnels"
            },
            {
                text: "利用商队作掩护",
                consequences: { resources: { money: +50, intelligence: +45 }, flags: { used_caravans: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter4_used_caravans"
            },
            {
                text: "夜间秘密运输",
                consequences: { resources: { intelligence: +50, reputation: +40 }, flags: { night_transport: true }, status: { morale: +45, fatigue: +40 } },
                nextNode: "chapter4_night_transport"
            },
            {
                text: "收买伪军睁一只眼",
                consequences: { resources: { money: -40, intelligence: +45 }, flags: { bribed_traitor_army: true }, status: { morale: +40, fatigue: +25 } },
                nextNode: "chapter4_bribed_traitor_army"
            },
            {
                text: "建立备用路线",
                consequences: { resources: { intelligence: +60, reputation: +50 }, flags: { backup_routes: true }, status: { morale: +55, fatigue: +35 } },
                nextNode: "chapter4_backup_routes"
            }
        ]
    },

    "chapter4_underground_bank": {
        chapter: 4,
        emotion: "tension",
        text: "你建立了地下钱庄，为抗日组织提供资金支持。日元在沦陷区流通，但根据地里只认法币。你成为了两个世界之间的资金桥梁。",
        background: "地下钱庄，秘密的金融网络",
        choices: [
            {
                text: "兑换黄金运往根据地",
                consequences: { resources: { money: +100, reputation: +55 }, flags: { gold_exchange: true }, status: { morale: +60, fatigue: +35 } },
                nextNode: "chapter4_gold_exchange"
            },
            {
                text: "吸收存款付给高息",
                consequences: { resources: { money: +120, reputation: +45 }, flags: { high_interest_deposits: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter4_high_interest"
            },
            {
                text: "为地下工作者提供账户",
                consequences: { resources: { intelligence: +60, reputation: +50 }, flags: { secret_accounts: true }, status: { morale: +55, fatigue: +25 } },
                nextNode: "chapter4_secret_accounts"
            },
            {
                text: "阻止日军掠夺民间财富",
                consequences: { resources: { reputation: +65, intelligence: +40 }, flags: { blocked_plunder: true }, status: { morale: +60, fatigue: +30 } },
                nextNode: "chapter4_blocked_plunder"
            },
            {
                text: "培训金融人才",
                consequences: { resources: { reputation: +50, intelligence: +45 }, flags: { trained_financial: true }, status: { morale: +50, fatigue: +20 } },
                nextNode: "chapter4_trained_financial"
            }
        ]
    },

    "chapter4_forged_documents": {
        chapter: 4,
        emotion: "skill",
        text: "你开始伪造日军的物资调配证、运输通行证等文件。这需要极高的技巧和极大的勇气。一旦被发现，就是死罪。",
        background: "秘密工作室中，伪造文件",
        choices: [
            {
                text: "伪造日军通行证",
                consequences: { resources: { intelligence: +60, reputation: +55 }, flags: { forged_passes: true }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter4_forged_passes"
            },
            {
                text: "伪造日军军事地图",
                consequences: { resources: { intelligence: +65, reputation: +60 }, flags: { forged_maps: true }, status: { morale: +60, fatigue: +35 } },
                nextNode: "chapter4_forged_maps"
            },
            {
                text: "伪造日元债券",
                consequences: { resources: { money: +80, intelligence: +50 }, flags: { forged_bonds: true }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter4_forged_bonds"
            },
            {
                text: "培训伪造技术人员",
                consequences: { resources: { reputation: +55, intelligence: +45 }, flags: { trained_forgers: true }, status: { morale: +50, fatigue: +25 } },
                nextNode: "chapter4_trained_forgers"
            },
            {
                text: "建立伪造材料的供应链",
                consequences: { resources: { intelligence: +55, money: +40 }, flags: { forged_supply_chain: true }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter4_forged_supply_chain"
            }
        ]
    },

    "chapter4_boycott_japanese": {
        chapter: 4,
        emotion: "unity",
        text: "你开始暗中组织商人抵制日货。这是一场没有硝烟的战争，每一个拒绝使用日货的商人都是抗日的勇士。",
        background: "商界中，爱国抵制",
        choices: [
            {
                text: "建立爱国商人联盟",
                consequences: { resources: { reputation: +65, intelligence: +45 }, flags: { merchant_union: true }, status: { morale: +65, fatigue: +30 } },
                nextNode: "chapter4_merchant_union"
            },
            {
                text: "囤积日货使其腐烂",
                consequences: { resources: { reputation: +55, intelligence: +35 }, flags: { spoiled_japanese_goods: true }, status: { morale: +60, fatigue: +25 } },
                nextNode: "chapter4_spoiled_goods"
            },
            {
                text: "秘密破坏日货运输",
                consequences: { resources: { intelligence: +50, reputation: +50 }, flags: { sabotaged_transport: true }, status: { morale: +55, fatigue: +35 } },
                nextNode: "chapter4_sabotaged_transport"
            },
            {
                text: "鼓励使用国货",
                consequences: { resources: { reputation: +60, money: +40 }, flags: { promoted_domestic: true }, status: { morale: +60, fatigue: +20 } },
                nextNode: "chapter4_promoted_domestic"
            },
            {
                text: "揭露亲日商人的罪行",
                consequences: { resources: { reputation: +55, intelligence: +40 }, flags: { exposed_collaborators: true }, status: { morale: +50, fatigue: +25 } },
                nextNode: "chapter4_exposed_collaborators"
            }
        ]
    },

    // ==================== 第五章：黎明前夜 ====================
    "chapter5_start": {
        chapter: 5,
        emotion: "hope",
        text: "1944年6月，你所在的晋察冀军区接到了总部的指示：盟军已经在诺曼底登陆，太平洋战场上美军正在逼近日本本土，抗战的胜利已经近在眼前。作为王二柱，你现在已经是一名经验丰富的游击队长，手下有三十多名队员。\n\n上个月，你刚带领队伍破坏了日军的'正太铁路'运输线，缴获了一批武器弹药。前几天，你又从地下党那里得到消息：美军的B-29轰炸机已经开始轰炸日本本土，苏联也在准备出兵东北。\n\n但你深知最后的战斗将会更加残酷。日军为了做最后的挣扎，在华北地区推行了'三光政策'，还组建了'治安军'和'皇协军'进行扫荡。你的队伍中已经有五名队员牺牲，其中包括你的堂弟柱子。\n\n今天早上，你接到了新的任务：配合主力部队进行反攻，收复县城。你看着队员们疲惫但坚定的脸，知道是时候为最后的胜利拼尽全力了。",
        background: "1944年，盟军反攻，胜利在望",
        choices: [
            {
                text: "加强夜战训练准备反攻",
                consequences: { resources: { ammo: +60, intelligence: +50 }, flags: { training_for_counter: true }, status: { morale: +70, fatigue: +35 } },
                nextNode: "chapter5_training_for_counter"
            },
            {
                text: "深入县城收集日军布防情报",
                consequences: { resources: { intelligence: +70, reputation: +55 }, flags: { deep_intel: true }, status: { morale: +65, fatigue: +40 } },
                nextNode: "chapter5_deep_intel"
            },
            {
                text: "组织群众准备担架队和运输队",
                consequences: { resources: { food: +60, reputation: +60 }, flags: { organized_masses: true }, status: { morale: +70, fatigue: +30 } },
                nextNode: "chapter5_organized_masses"
            },
            {
                text: "讲述美军轰炸日本的消息鼓舞士气",
                consequences: { resources: { morale: +80, reputation: +65 }, flags: { boosted_morale: true }, status: { morale: +80, fatigue: +25 } },
                nextNode: "chapter5_boosted_morale"
            },
            {
                text: "制定'围点打援'作战计划",
                consequences: { resources: { intelligence: +75, reputation: +60 }, flags: { detailed_plan: true }, status: { morale: +70, fatigue: +35 } },
                nextNode: "chapter5_detailed_plan"
            }
        ]
    },

    // ==================== 终章：胜利之日 ====================
    "chapter6_victory": {
        chapter: 6,
        emotion: "joy",
        text: "1945年8月15日中午12点，你正在收音机旁收听广播。当听到日本天皇裕仁用那熟悉而又陌生的'玉音放送'宣布无条件投降时，你手中的茶杯'啪'地一声掉在了地上。\n\n八年了！从1937年7月7日卢沟桥的枪声，到今天日本投降，中国人民经历了艰苦卓绝的全民族抗战。你想起了野场惨案中遇难的父亲，想起了四行仓库中牺牲的战友，想起了在上海弄堂里一起并肩作战的地下党同志，想起了那些为了抗战胜利而献出生命的无数先烈。\n\n院子里突然传来了欢呼声。你走出屋门，看到全村的男女老少都聚集在一起，有的挥舞着国旗，有的敲着锣鼓，有的甚至放起了鞭炮。孩子们在人群中奔跑着，喊着：'胜利了！胜利了！'\n\n老村长手里拿着一张泛黄的照片——那是他在淞沪会战中牺牲的儿子，他激动地说：'胜利是咱们中国人民用八年的血和汗换来的！苏联红军出兵东北，给了小鬼子最后一击，咱们八路军、新四军、民兵们在敌后坚持抗战，才是胜利的根本！'\n\n你深有感触地点点头。是啊，八年抗战，中国人民付出了巨大牺牲，伤亡3500万人，财产损失6000亿美元。但正是这种不屈不挠的民族精神，这种全民族的团结抗战，才最终迎来了胜利的曙光。",
        background: "1945年8月15日，胜利的时刻",
        choices: [
            {
                text: "回忆八年抗战的点点滴滴",
                consequences: { resources: { reputation: +100 }, status: { morale: +100 } },
                nextNode: "chapter6_reflection"
            },
            {
                text: "与区小队的战友们一起庆祝",
                consequences: { resources: { reputation: +90 }, status: { morale: +100, health: +20 } },
                nextNode: "chapter6_celebration_guerrilla"
            },
            {
                text: "向牺牲的民兵战友致敬",
                consequences: { resources: { reputation: +95 }, status: { morale: +95, fatigue: -30 } },
                nextNode: "chapter6_tribute_militia"
            },
            {
                text: "开始组织乡亲们重建家园",
                consequences: { resources: { money: +100, reputation: +85 }, status: { morale: +90, fatigue: -20 } },
                nextNode: "chapter6_rebuild_village"
            },
            {
                text: "帮助寻找失散的亲人",
                consequences: { resources: { reputation: +100, intelligence: +50 }, status: { morale: +95, fatigue: +30 } },
                nextNode: "chapter6_reunion"
            }
        ]
    },

    "chapter6_reflection": {
        chapter: 6,
        emotion: "reflection",
        text: "你静静地坐在那里，回忆着这八年的点点滴滴。从一个普通的农民/士兵/教师/商人，成长为一名坚定的抗日战士。你见证了太多生死离别，也见证了中华民族不屈的脊梁。这场战争让你明白，只要团结一心，任何强大的敌人都可以被战胜。",
        background: "胜利后，深深的思考",
        choices: [
            {
                text: "记录下这段历史",
                consequences: { resources: { intelligence: +80, reputation: +100 }, flags: { recorded_history: true }, status: { morale: +90 } },
                nextNode: "chapter6_record_history"
            },
            {
                text: "将经验传授给年轻人",
                consequences: { resources: { reputation: +95 }, flags: { passed_experience: true }, status: { morale: +85 } },
                nextNode: "chapter6_pass_experience"
            },
            {
                text: "回到家乡重建家园",
                consequences: { resources: { money: +80, reputation: +90 }, status: { morale: +90, fatigue: -40 } },
                nextNode: "chapter6_return_home"
            },
            {
                text: "继续为国家建设出力",
                consequences: { resources: { reputation: +100, intelligence: +60 }, status: { morale: +95 } },
                nextNode: "chapter6_continue_serving"
            },
            {
                text: "和平来之不易，珍惜当下",
                consequences: { resources: { reputation: +85 }, status: { morale: +100, fatigue: -50 } },
                nextNode: "chapter6_cherish_peace"
            }
        ]
    },

    // ==================== 特殊节点和过渡节点 ====================
    "transition_chapter1": {
        chapter: 1,
        emotion: "transition",
        text: "1938年初，你正式加入了抗日游击队。在敌后战场上，你将开始一段新的征程。队长说：'我们虽然人少，但我们有人民的支持。'",
        background: "加入游击队，开始敌后抗战",
        choices: [
            { text: "准备好战斗", consequences: { status: { morale: +20, fatigue: +10 } }, nextNode: "chapter1_start" }
        ]
    },

    "transition_chapter2": {
        chapter: 2,
        emotion: "transition",
        text: "1938年10月，你成为国军的一员。前线的战火正在等待着你。保卫国土，责无旁贷！",
        background: "入伍从军，正面战场",
        choices: [
            { text: "誓死保卫祖国", consequences: { status: { morale: +25 } }, nextNode: "chapter2_start" }
        ]
    },

    "transition_chapter3": {
        chapter: 3,
        emotion: "transition",
        text: "1940年，你来到重庆。笔和嘴也是武器，文化抗战同样重要。",
        background: "文化抗战，大后方",
        choices: [
            { text: "用笔杆子抗战", consequences: { status: { morale: +20 } }, nextNode: "chapter3_start" }
        ]
    },

    "transition_chapter4": {
        chapter: 4,
        emotion: "transition",
        text: "1941年，你返回沦陷区。经济战线上，同样需要进行艰苦的战斗。",
        background: "经济战线，敌后经商",
        choices: [
            { text: "在经济领域抗战", consequences: { status: { morale: +20 } }, nextNode: "chapter4_start" }
        ]
    },

    "transition_chapter5": {
        chapter: 5,
        emotion: "transition",
        text: "1944年，胜利的曙光已经可见。但这黎明前的黑暗，依然需要我们坚强面对。",
        background: "黎明前夜，准备反攻",
        choices: [
            { text: "准备最后的战斗", consequences: { status: { morale: +25 } }, nextNode: "chapter5_start" }
        ]
    },

    "transition_chapter6": {
        chapter: 6,
        emotion: "transition",
        text: "1945年8月，胜利终于到来。八年的浴血奋战，换来了今天的和平。",
        background: "胜利时刻",
        choices: [
            { text: "见证历史性时刻", consequences: { status: { morale: +50 } }, nextNode: "chapter6_victory" }
        ]
    },

    // 通用失败节点
    "game_over_health": {
        chapter: -1,
        emotion: "sad",
        text: "你在战斗中负伤过重，昏迷不醒。当再次醒来时，战争已经结束。你虽然活了下来，但错过了亲眼见证胜利的时刻。你的战友们替你看到了那一天，并将胜利的喜讯带给了你。",
        background: "医院中，战争结束",
        choices: [
            { text: "了解战争的结局", consequences: {}, nextNode: "show_ending_health" }
        ]
    },

    "game_over_morale": {
        chapter: -1,
        emotion: "despair",
        text: "连续的挫折让你失去了继续战斗的勇气。你选择了离开队伍，独自生活。虽然活了下来，但你心中充满了遗憾。每当想起那些还在坚持战斗的战友，你就感到无比愧疚。",
        background: "偏僻的乡村，孤独的生活",
        choices: [
            { text: "回顾自己的人生", consequences: {}, nextNode: "show_ending_morale" }
        ]
    },

    "game_over_food": {
        chapter: -1,
        emotion: "sad",
        text: "在物资极度匮乏的日子里，你没能熬过饥饿的折磨。你的牺牲反映了那个年代无数普通人的命运。战争不仅夺去了战士的生命，也夺去了无数平民的生命。",
        background: "饥饿中倒下",
        choices: [
            { text: "了解后来的事", consequences: {}, nextNode: "show_ending_food" }
        ]
    },

    // 胜利结局节点
    "show_ending": {
        chapter: 6,
        emotion: "victory",
        icon: "🏆",
        text: "经过八年的艰苦抗战，中国人民终于取得了胜利！\n\n你从一个普通人成长为坚定的抗日战士，亲身经历了这场伟大的民族解放战争。\n\n你见证了：\n- 人民战争的伟大力量\n- 统一战线的团结一致\n- 正面战场的浴血奋战\n- 敌后战场的艰苦坚持\n- 文化抗战的深远影响\n- 经济战线的特殊贡献\n\n这场战争教会了你：\n1. 团结就是力量，只有全民族团结一心，才能战胜强大的敌人\n2. 正义终将战胜邪恶，侵略者必将被人民战争的汪洋大海淹没\n3. 人民的智慧是无穷的，在最艰难的时刻，总能找到生存和战斗的方法\n4. 文化和精神的力量不可小觑，它是民族复兴的灵魂\n5. 胜利来之不易，需要无数人的牺牲和奉献\n\n你为自己是中华民族的一员而骄傲，为这场伟大的胜利贡献了自己的力量而自豪。\n\n历史将永远铭记这一刻，铭记所有为民族解放而奋斗的英雄们！",
        background: "胜利的喜悦",
        choices: [
            { text: "重新开始游戏", consequences: {}, nextNode: "restart" },
            { text: "查看详细统计", consequences: {}, nextNode: "show_stats" }
        ]
    },

    "show_ending_health": {
        chapter: 6,
        emotion: "mixed",
        icon: "❤️",
        text: "虽然你因伤错过了最后的战斗，但你的贡献不会被遗忘。\n\n当战友们带着胜利的消息来看望你时，你流下了激动的泪水。你知道，这场胜利属于每一个为抗战付出努力的人，包括你。\n\n伤愈后，你继续为国家的建设贡献力量。虽然身体不如从前，但你的心永远与祖国同在。",
        background: "康复后的新生活",
        choices: [
            { text: "重新开始游戏", consequences: {}, nextNode: "restart" }
        ]
    },

    "show_ending_morale": {
        chapter: 6,
        emotion: "reflection",
        icon: "💪",
        text: "你虽然离开了队伍，但你的心始终关注着抗战的发展。当你听到胜利的消息时，你既高兴又遗憾。高兴的是民族终于获得了解放，遗憾的是自己没有坚持到最后。\n\n不过，你很快就振作起来。你开始用自己的方式继续为社会做贡献，弥补过去的遗憾。你明白，只要心中有爱国有心，任何时候开始都不晚。",
        background: "重新振作",
        choices: [
            { text: "重新开始游戏", consequences: {}, nextNode: "restart" }
        ]
    },

    "show_ending_food": {
        chapter: 6,
        emotion: "memorial",
        icon: "🕊️",
        text: "你的牺牲是那个时代的悲剧，也是无数普通人苦难的缩影。\n\n你的名字被刻在了抗战纪念碑上。虽然你没有亲眼看到胜利，但正是有你这样的牺牲者，才换来了后人的和平生活。\n\n你的家人为你骄傲，你的同胞永远不会忘记你。",
        background: "纪念碑前",
        choices: [
            { text: "重新开始游戏", consequences: {}, nextNode: "restart" }
        ]
    },

    // 新增结局节点 - 区小队庆祝
    "chapter6_celebration_guerrilla": {
        chapter: 6,
        emotion: "joy",
        icon: "🎉",
        text: "你和区小队的战友们围坐在一起，分享着胜利的喜悦。老班长拿出了珍藏已久的红薯酒，一边喝一边说：'咱们区小队这几年跟着主力部队，炸铁路、拔据点、除汉奸，没给八路军丢脸！'\n\n战士小王抢着说：'要不是乡亲们给咱们送情报、藏伤员、送粮食，咱们也坚持不到今天。胜利是咱们军民团结一心换来的！'\n\n大家纷纷点头。你看着这些熟悉的面孔，有的是从村里一起出来的农民，有的是后来加入的青年学生，有的甚至是从日伪军中反正过来的士兵。但现在，你们只有一个身份——中国人民的抗日战士。",
        background: "区小队的胜利狂欢",
        choices: [
            {
                text: "重新开始游戏",
                consequences: {},
                nextNode: "restart"
            },
            {
                text: "查看详细统计",
                consequences: {},
                nextNode: "show_stats"
            }
        ]
    },

    // 新增结局节点 - 民兵致敬
    "chapter6_tribute_militia": {
        chapter: 6,
        emotion: "respect",
        icon: "🫡",
        text: "你默默地站在村头的烈士墓前，向那些为了抗战胜利而牺牲的民兵战友们致敬。墓碑上刻着他们的名字：柱子、狗蛋、二牛、桂花...这些都是你从小一起长大的伙伴。\n\n你想起了1942年的反'扫荡'，柱子为了掩护乡亲们转移，一个人吸引了日军的火力；想起了1943年的破袭战，狗蛋用土制地雷炸毁了日军的卡车；想起了1944年的攻城战，二牛第一个爬上了城墙...\n\n这些普通的农民，没有受过正规的军事训练，没有先进的武器装备，但他们为了保卫家园，为了民族的尊严，义无反顾地献出了自己的生命。他们是真正的英雄！",
        background: "向民兵先烈致敬",
        choices: [
            {
                text: "重新开始游戏",
                consequences: {},
                nextNode: "restart"
            },
            {
                text: "查看详细统计",
                consequences: {},
                nextNode: "show_stats"
            }
        ]
    },

    // 新增结局节点 - 重建家园
    "chapter6_rebuild_village": {
        chapter: 6,
        emotion: "hope",
        icon: "🌱",
        text: "胜利来之不易，和平更需要珍惜。你开始组织乡亲们重建家园。战争摧毁了你们的房屋和农田，但没有摧毁你们的意志。\n\n老村长带头，大家一起清理废墟、重建房屋、开垦荒地。区里的工作队也来了，给你们送来了种子、农具和技术指导。你想起了抗战时期的'减租减息'、'大生产运动'，正是这些政策让根据地的老百姓能够坚持下来。\n\n看着热火朝天的重建场景，你相信，只要大家齐心协力，一定能够建设一个更加美好的家园。",
        background: "重建家园的热潮",
        choices: [
            {
                text: "重新开始游戏",
                consequences: {},
                nextNode: "restart"
            },
            {
                text: "查看详细统计",
                consequences: {},
                nextNode: "show_stats"
            }
        ]
    },

    "show_stats": {
        chapter: 6,
        emotion: "pride",
        text: "",
        background: "统计数据",
        choices: [
            { text: "重新开始游戏", consequences: {}, nextNode: "restart" }
        ],
        isStatsNode: true
    },

    "restart": {
        chapter: 6,
        emotion: "restart",
        text: "感谢你游玩《星火》。这款游戏旨在让你体验抗日战争的艰难历程，感受中华民族不屈的精神。希望你在游戏中有所收获，也希望你能将这份历史记忆传递给更多人。",
        background: "感谢",
        choices: [
            { text: "重新开始", consequences: {}, nextNode: "do_restart" }
        ]
    },

    "do_restart": {
        chapter: 6,
        emotion: "restarting",
        text: "",
        choices: [],
        isRestart: true
    }
};

// ==================== 随机事件系统 ====================
// 随机事件定义
const randomEvents = {
    "supply_drop": {
        id: "supply_drop",
        name: "补给空投",
        description: "盟军飞机在附近投下了补给箱",
        minChapter: 2,
        maxChapter: 5,
        probability: 0.15,
        requiredFlags: [],
        excludedFlags: [],
        effects: {
            resources: { food: 30, ammo: 20, medicine: 10 },
            status: { morale: 15 }
        },
        duration: 1,
        choices: [
            {
                text: "立即前往领取",
                consequences: { resources: { food: 30, ammo: 20, medicine: 10 }, status: { morale: 15, fatigue: 10 } },
                nextNode: "event_supply_claimed"
            },
            {
                text: "观察后再行动",
                consequences: { resources: { intelligence: 10 }, status: { fatigue: 5 } },
                nextNode: "event_supply_delayed"
            },
            {
                text: "通知其他队伍",
                consequences: { resources: { reputation: 20 }, status: { morale: 20 } },
                nextNode: "event_supply_shared"
            }
        ]
    },
    "civilian_support": {
        id: "civilian_support",
        name: "民众支援",
        description: "附近村庄的民众送来食物和物资",
        minChapter: 1,
        maxChapter: 6,
        probability: 0.2,
        requiredFlags: [],
        excludedFlags: [],
        effects: {
            resources: { food: 25, money: 100, reputation: 10 },
            status: { morale: 20 }
        },
        duration: 1,
        choices: [
            {
                text: "热情接受并感谢",
                consequences: { resources: { food: 25, money: 100, reputation: 15 }, status: { morale: 20 } },
                nextNode: "event_civilian_thanked"
            },
            {
                text: "只接受部分物资",
                consequences: { resources: { food: 15, reputation: 20 }, status: { morale: 15 } },
                nextNode: "event_civilian_respected"
            },
            {
                text: "记录捐赠名单",
                consequences: { resources: { reputation: 25, intelligence: 10 }, status: { morale: 10 } },
                nextNode: "event_civilian_recorded"
            }
        ]
    },
    "intel_leak": {
        id: "intel_leak",
        name: "情报泄露",
        description: "我方情报可能被日军截获",
        minChapter: 2,
        maxChapter: 5,
        probability: 0.1,
        requiredFlags: [],
        excludedFlags: [],
        effects: {
            resources: { intelligence: -15, reputation: -10 },
            status: { morale: -15, fatigue: 10 }
        },
        duration: 1,
        choices: [
            {
                text: "立即转移阵地",
                consequences: { resources: { food: -10, ammo: -5 }, status: { fatigue: 20 } },
                nextNode: "event_evacuate"
            },
            {
                text: "彻查内奸",
                consequences: { resources: { intelligence: 20, reputation: -5 }, status: { fatigue: 15 } },
                nextNode: "event_investigate_spy"
            },
            {
                text: "发送虚假情报迷惑敌人",
                consequences: { resources: { intelligence: 15, morale: 10 }, status: { fatigue: 10 } },
                nextNode: "event_disinformation"
            }
        ]
    },
    "medic_arrival": {
        id: "medic_arrival",
        name: "军医支援",
        description: "一位经验丰富的军医加入了队伍",
        minChapter: 1,
        maxChapter: 5,
        probability: 0.12,
        requiredFlags: [],
        excludedFlags: [],
        effects: {
            resources: { medicine: 25 },
            status: { health: 20, morale: 15 }
        },
        duration: 3,
        choices: [
            {
                text: "请求军医培训医护人员",
                consequences: { resources: { medicine: 25, intelligence: 15 }, status: { morale: 20 } },
                nextNode: "event_medic_training"
            },
            {
                text: "请军医治疗伤员",
                consequences: { resources: { medicine: 30 }, status: { health: 30, morale: 15 } },
                nextNode: "event_medic_treat"
            },
            {
                text: "护送军医到其他据点",
                consequences: { resources: { reputation: 25, intelligence: 10 }, status: { fatigue: 15 } },
                nextNode: "event_medic_escort"
            }
        ]
    },
    "weapon_supplier": {
        id: "weapon_supplier",
        name: "武器商人",
        description: "一位神秘商人带来了一批武器",
        minChapter: 1,
        maxChapter: 5,
        probability: 0.1,
        requiredFlags: [],
        excludedFlags: [],
        effects: {
            resources: { ammo: 30 }
        },
        duration: 1,
        choices: [
            {
                text: "购买武器弹药",
                consequences: { resources: { ammo: 30, money: -150 }, status: { morale: 15 } },
                nextNode: "event_weapon_purchase"
            },
            {
                text: "询问武器来源",
                consequences: { resources: { intelligence: 20 }, status: { fatigue: 5 } },
                nextNode: "event_weapon_inquire"
            },
            {
                text: "拒绝交易并报告",
                consequences: { resources: { reputation: 15, intelligence: 10 }, status: { morale: 10 } },
                nextNode: "event_weapon_reject"
            }
        ]
    }
};

// 随机事件触发点定义
const eventTriggers = [
    {
        type: "choice",
        probability: 0.3
    },
    {
        type: "chapter_change",
        probability: 0.5
    },
    {
        type: "time_advance",
        probability: 0.2
    }
];

// 检查并触发随机事件
function checkRandomEvent(triggerType) {
    // 检查是否已有活跃事件
    if (gameState.activeEvents.length > 0) return;
    
    // 获取对应触发类型的概率
    const trigger = eventTriggers.find(t => t.type === triggerType);
    if (!trigger) return;
    
    // 随机决定是否触发事件
    if (Math.random() > trigger.probability) return;
    
    // 获取可用事件列表
    const availableEvents = Object.values(randomEvents).filter(event => {
        // 检查章节限制
        if (event.minChapter > gameState.currentChapter || event.maxChapter < gameState.currentChapter) {
            return false;
        }
        
        // 检查必需标志
        if (event.requiredFlags.length > 0 && !event.requiredFlags.every(flag => gameState.flags[flag])) {
            return false;
        }
        
        // 检查排除标志
        if (event.excludedFlags.length > 0 && event.excludedFlags.some(flag => gameState.flags[flag])) {
            return false;
        }
        
        return true;
    });
    
    if (availableEvents.length === 0) return;
    
    // 随机选择一个事件
    const selectedEvent = availableEvents[Math.floor(Math.random() * availableEvents.length)];
    
    // 最终概率检查
    if (Math.random() > selectedEvent.probability) return;
    
    // 触发事件
    triggerEvent(selectedEvent);
}

// 触发随机事件
function triggerEvent(event) {
    // 添加到活跃事件列表
    gameState.activeEvents.push({
        eventId: event.id,
        startTime: gameState.time,
        duration: event.duration,
        remainingDuration: event.duration,
        effects: event.effects
    });
    
    // 添加到事件历史
    gameState.eventHistory.push({
        eventId: event.id,
        triggeredAt: gameState.time,
        status: "active"
    });
    
    // 将当前节点切换到事件节点
    const eventNode = {
        id: `event_${event.id}`,
        chapter: gameState.currentChapter,
        emotion: "surprise",
        text: `${event.name}\n${event.description}`,
        background: "突发事件",
        choices: event.choices,
        isEvent: true
    };
    
    // 临时添加事件节点到storyNodes
    storyNodes[eventNode.id] = eventNode;
    
    // 切换到事件节点
    gameState.currentNode = eventNode.id;
    
    // 显示事件
    showCurrentNode();
    
    // 保存游戏状态
    saveGameState();
}

// 处理事件选择
function handleEventChoice(choice) {
    // 应用选择后果
    applyConsequences(choice.consequences);
    
    // 更新游戏日志
    addToLog(choice.text);
    
    // 移除活跃事件
    gameState.activeEvents = gameState.activeEvents.filter(event => 
        event.eventId !== storyNodes[gameState.currentNode].eventId
    );
    
    // 更新事件历史
    const eventHistoryItem = gameState.eventHistory.find(item => 
        item.eventId === storyNodes[gameState.currentNode].eventId && item.status === "active"
    );
    if (eventHistoryItem) {
        eventHistoryItem.status = "completed";
        eventHistoryItem.completedAt = gameState.time;
    }
    
    // 推进到下一个节点
    gameState.currentNode = choice.nextNode;
    
    // 保存游戏状态
    saveGameState();
    
    // 显示下一个节点
    showCurrentNode();
    
    // 更新UI
    updateUI();
}

// 每日事件更新
function updateDailyEvents() {
    // 更新活跃事件持续时间
    gameState.activeEvents.forEach(event => {
        event.remainingDuration--;
        
        // 检查事件是否结束
        if (event.remainingDuration <= 0) {
            // 移除事件
            const index = gameState.activeEvents.indexOf(event);
            if (index > -1) {
                gameState.activeEvents.splice(index, 1);
            }
            
            // 更新事件历史
            const historyItem = gameState.eventHistory.find(item => 
                item.eventId === event.eventId && item.status === "active"
            );
            if (historyItem) {
                historyItem.status = "expired";
                historyItem.endedAt = gameState.time;
            }
        }
    });
    
    // 保存游戏状态
    saveGameState();
}

// ==================== 成就系统 ====================
// 成就定义
const achievements = {
    "first_victory": {
        id: "first_victory",
        name: "初战告捷",
        description: "完成第一次战斗胜利",
        category: "gameplay",
        difficulty: "easy",
        icon: "🏆",
        condition: (state) => state.resources.reputation >= 50
    },
    "people_leader": {
        id: "people_leader",
        name: "民众领袖",
        description: "获得较高声望",
        category: "reputation",
        difficulty: "medium",
        icon: "👥",
        condition: (state) => state.resources.reputation >= 200
    },
    "intel_master": {
        id: "intel_master",
        name: "情报大师",
        description: "收集大量情报",
        category: "resources",
        difficulty: "medium",
        icon: "📋",
        condition: (state) => state.resources.intelligence >= 150
    },
    "survivor": {
        id: "survivor",
        name: "战争幸存者",
        description: "生命值低于20但存活",
        category: "survival",
        difficulty: "hard",
        icon: "❤️",
        condition: (state) => state.characterStatus.health <= 20 && state.characterStatus.health > 0
    },
    "multi_character": {
        id: "multi_character",
        name: "多面手",
        description: "体验所有角色",
        category: "exploration",
        difficulty: "hard",
        icon: "🎭",
        condition: (state) => Object.keys(state.flags).filter(flag => flag.startsWith("played_character_"))?.length >= 4
    },
    "all_endings": {
        id: "all_endings",
        name: "结局收集者",
        description: "解锁所有结局",
        category: "completion",
        difficulty: "expert",
        icon: "📖",
        condition: (state) => state.endings.length >= 3
    },
    "event_collector": {
        id: "event_collector",
        name: "事件亲历者",
        description: "经历所有类型的随机事件",
        category: "exploration",
        difficulty: "medium",
        icon: "🎲",
        condition: (state) => {
            const uniqueEvents = new Set(state.eventHistory.map(e => e.eventId));
            return uniqueEvents.size >= Object.keys(randomEvents).length;
        }
    },
    "supporter": {
        id: "supporter",
        name: "支持者",
        description: "获得多种支持",
        category: "support",
        difficulty: "medium",
        icon: "🤝",
        condition: (state) => state.supportHistory.length >= 5
    }
};

// 检查成就
function checkAchievements() {
    Object.values(achievements).forEach(achievement => {
        // 跳过已完成的成就
        if (gameState.completedAchievements.includes(achievement.id)) return;
        
        // 检查成就条件
        if (achievement.condition(gameState)) {
            // 解锁成就
            gameState.completedAchievements.push(achievement.id);
            
            // 添加到成就列表
            gameState.achievements.push({
                id: achievement.id,
                unlockedAt: gameState.time,
                name: achievement.name,
                description: achievement.description,
                category: achievement.category,
                difficulty: achievement.difficulty,
                icon: achievement.icon
            });
            
            // 添加到游戏日志
            addToLog(`${achievement.icon} 成就解锁：${achievement.name} - ${achievement.description}`);
            
            // 保存游戏状态
            saveGameState();
        }
    });
}

// ==================== 肉鸽支持系统 ====================
// 支持类型定义
const supportTypes = {
    "medical_support": {
        id: "medical_support",
        name: "医疗支持",
        description: "提高治疗效果",
        duration: 3,
        effects: {
            resources: { medicine: 5 },
            status: { health: 5 }
        },
        category: "medical"
    },
    "weapon_support": {
        id: "weapon_support",
        name: "武器支援",
        description: "提高战斗效率",
        duration: 3,
        effects: {
            resources: { ammo: 8 },
            status: { morale: 5 }
        },
        category: "combat"
    },
    "intelligence_support": {
        id: "intelligence_support",
        name: "情报支持",
        description: "提高情报收集效率",
        duration: 3,
        effects: {
            resources: { intelligence: 10 },
            status: { morale: 5 }
        },
        category: "intel"
    },
    "logistics_support": {
        id: "logistics_support",
        name: "后勤支持",
        description: "提高资源获取效率",
        duration: 3,
        effects: {
            resources: { food: 10, money: 15 },
            status: { fatigue: -5 }
        },
        category: "logistics"
    },
    "morale_support": {
        id: "morale_support",
        name: "士气支持",
        description: "提高队伍士气",
        duration: 3,
        effects: {
            status: { morale: 10, fatigue: -8 }
        },
        category: "morale"
    }
};

// 随机获得支持
function gainRandomSupport() {
    // 随机选择1-3种支持类型
    const availableSupports = Object.values(supportTypes);
    const numSupports = Math.floor(Math.random() * 3) + 1;
    const selectedSupports = [];
    
    // 随机选择支持类型（不重复）
    while (selectedSupports.length < numSupports && availableSupports.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSupports.length);
        selectedSupports.push(availableSupports[randomIndex]);
        availableSupports.splice(randomIndex, 1);
    }
    
    // 记录支持到历史（不要自动跳转）
    selectedSupports.forEach(support => {
        gameState.supportHistory.push({
            supportId: support.id,
            name: support.name,
            description: support.description,
            gainedAt: gameState.time,
            status: "active"
        });
        
        // 应用支持效果
        if (support.effects.resources) {
            for (const [resource, amount] of Object.entries(support.effects.resources)) {
                if (gameState.resources[resource] !== undefined) {
                    gameState.resources[resource] += amount;
                }
            }
        }
        
        if (support.effects.status) {
            for (const [status, amount] of Object.entries(support.effects.status)) {
                if (gameState.characterStatus[status] !== undefined) {
                    gameState.characterStatus[status] += amount;
                    gameState.characterStatus[status] = Math.max(0, Math.min(100, gameState.characterStatus[status]));
                }
            }
        }
    });
    
    addToLog(`获得支持：${selectedSupports.map(s => s.name).join('、')}`);
}

// 处理支持选择
function handleSupportChoice(choice) {
    const support = supportTypes[choice.supportId];
    if (!support) return;
    
    // 添加到活跃支持
    gameState.activeSupports.push({
        supportId: support.id,
        startTime: gameState.time,
        duration: support.duration,
        remainingDuration: support.duration,
        effects: support.effects,
        name: support.name,
        description: support.description
    });
    
    // 添加到支持历史
    gameState.supportHistory.push({
        supportId: support.id,
        gainedAt: gameState.time,
        name: support.name,
        category: support.category
    });
    
    // 添加到游戏日志
    addToLog(`获得支持：${support.name} - ${support.description}`);
    
    // 推进到下一个节点
    gameState.currentNode = choice.nextNode;
    
    // 保存游戏状态
    saveGameState();
    
    // 显示下一个节点
    showCurrentNode();
    
    // 更新UI
    updateUI();
}

// 每日支持更新
function updateDailySupports() {
    // 更新活跃支持持续时间
    gameState.activeSupports.forEach(support => {
        support.remainingDuration--;
        
        // 应用每日效果
        if (support.effects.resources) {
            for (const [resource, amount] of Object.entries(support.effects.resources)) {
                if (gameState.resources[resource] !== undefined) {
                    gameState.resources[resource] += amount;
                }
            }
        }
        
        if (support.effects.status) {
            for (const [status, amount] of Object.entries(support.effects.status)) {
                if (gameState.characterStatus[status] !== undefined) {
                    gameState.characterStatus[status] += amount;
                    gameState.characterStatus[status] = Math.max(0, Math.min(100, gameState.characterStatus[status]));
                }
            }
        }
        
        // 检查支持是否结束
        if (support.remainingDuration <= 0) {
            // 移除支持
            const index = gameState.activeSupports.indexOf(support);
            if (index > -1) {
                gameState.activeSupports.splice(index, 1);
            }
        }
    });
    
    // 保存游戏状态
    saveGameState();
}

// ==================== 完成度系统 ====================
// 计算完成度
function calculateCompletion() {
    const totalNodes = Object.keys(storyNodes).filter(node => 
        !node.startsWith("event_") && !node.startsWith("support_")
    ).length;
    
    const visitedNodes = gameState.visitedNodes.length;
    const nodeCompletion = (visitedNodes / totalNodes) * 100;
    
    const totalAchievements = Object.keys(achievements).length;
    const completedAchievements = gameState.completedAchievements.length;
    const achievementCompletion = (completedAchievements / totalAchievements) * 100;
    
    const totalEvents = Object.keys(randomEvents).length;
    const experiencedEvents = new Set(gameState.eventHistory.map(e => e.eventId)).size;
    const eventCompletion = (experiencedEvents / totalEvents) * 100;
    
    const totalSupports = Object.keys(supportTypes).length;
    const gainedSupports = new Set(gameState.supportHistory.map(s => s.supportId)).size;
    const supportCompletion = (gainedSupports / totalSupports) * 100;
    
    const totalEndings = 3; // 假设总共有3个结局
    const seenEndings = gameState.endings.length;
    const endingCompletion = (seenEndings / totalEndings) * 100;
    
    const overallCompletion = Math.round((nodeCompletion + achievementCompletion + eventCompletion + supportCompletion + endingCompletion) / 5);
    
    return {
        overall: overallCompletion,
        nodes: Math.round(nodeCompletion),
        achievements: Math.round(achievementCompletion),
        events: Math.round(eventCompletion),
        supports: Math.round(supportCompletion),
        endings: Math.round(endingCompletion)
    };
}

// 显示完成度
function showCompletion() {
    const completion = calculateCompletion();
    
    const completionNode = {
        id: "completion_view",
        chapter: gameState.currentChapter,
        emotion: "pride",
        icon: "🏆",
        text: `游戏完成度\n\n总完成度：${completion.overall}%\n\n📖 剧情节点：${completion.nodes}% (${gameState.visitedNodes.length}/${Object.keys(storyNodes).filter(node => !node.startsWith("event_") && !node.startsWith("support_")).length})\n🏆 成就系统：${completion.achievements}% (${gameState.completedAchievements.length}/${Object.keys(achievements).length})\n🎲 随机事件：${completion.events}% (${new Set(gameState.eventHistory.map(e => e.eventId)).size}/${Object.keys(randomEvents).length})\n🤝 支持类型：${completion.supports}% (${new Set(gameState.supportHistory.map(s => s.supportId)).size}/${Object.keys(supportTypes).length})\n🎊 游戏结局：${completion.endings}% (${gameState.endings.length}/3)`,
        background: "完成度统计",
        choices: [
            {
                text: "返回游戏",
                consequences: {},
                nextNode: gameState.currentNode
            }
        ],
        isCompletion: true
    };
    
    // 临时添加完成度节点到storyNodes
    storyNodes[completionNode.id] = completionNode;
    
    // 切换到完成度节点
    gameState.currentNode = completionNode.id;
    
    // 显示完成度
    showCurrentNode();
    
    // 保存游戏状态
    saveGameState();
}

// 重置游戏状态为初始状态
function resetGameState() {
    gameState.currentChapter = 0;
    gameState.currentCharacter = 0;
    gameState.currentNode = "start";
    gameState.time = 193707;
    gameState.chapterProgress = 0;
    gameState.resources = {
        food: 100,
        ammo: 0,
        intelligence: 0,
        reputation: 0,
        money: 500,
        medicine: 0
    };
    gameState.characterStatus = {
        health: 100,
        morale: 70,
        fatigue: 0
    };
    gameState.flags = {};
    gameState.relationships = {};
    gameState.log = ["1937年7月7日，卢沟桥事变爆发"];
    gameState.hiddenClues = [];
    gameState.activeEvents = [];
    gameState.eventHistory = [];
    gameState.achievements = [];
    gameState.completedAchievements = [];
    gameState.activeSupports = [];
    gameState.supportHistory = [];
    gameState.visitedNodes = ["start"];
    gameState.chosenOptions = [];
    gameState.endings = [];
    gameState.playthroughs = 1;
    gameState.totalPlayTime = 0;
    gameState.eventListenersBound = false;
}

// 初始化游戏
function initGame() {
    console.log('initGame被调用');
    
    // 合并所有故事节点
    if (typeof mergeAllStoryNodes === 'function') {
        console.log('合并故事节点...');
        mergeAllStoryNodes();
        console.log('故事节点数量:', Object.keys(storyNodes).length);
    } else {
        console.error('mergeAllStoryNodes函数不可用');
    }
    
    // 尝试加载保存的状态，如果没有保存的状态，则重置为初始状态
    const savedState = localStorage.getItem('antiR_gameState');
    if (!savedState) {
        console.log('没有保存的状态，重置游戏');
        // 重置游戏状态为初始状态
        resetGameState();
    }
    loadGameState();
    updateUI();
    
    // 只在第一次时绑定事件监听器
    if (!gameState.eventListenersBound) {
        bindEventListeners();
        gameState.eventListenersBound = true;
        console.log('事件监听器已绑定');
    }
    
    showCurrentNode();
    console.log('initGame完成');
    console.log('当前节点:', gameState.currentNode);
    console.log('当前节点文本:', storyNodes[gameState.currentNode]?.text?.substring(0, 50) + '...');
}

// 移除事件监听器（防止重复绑定）
function unbindEventListeners() {
    // 移除保存按钮的监听器
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
    }
    
    // 移除加载按钮的监听器
    const loadBtn = document.getElementById('load-btn');
    if (loadBtn) {
        const newLoadBtn = loadBtn.cloneNode(true);
        loadBtn.parentNode.replaceChild(newLoadBtn, loadBtn);
    }
    
    // 移除设置按钮的监听器
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
        const newSettingsBtn = settingsBtn.cloneNode(true);
        settingsBtn.parentNode.replaceChild(newSettingsBtn, settingsBtn);
    }
    
    // 移除日志按钮的监听器
    const logBtn = document.getElementById('log-btn');
    if (logBtn) {
        const newLogBtn = logBtn.cloneNode(true);
        logBtn.parentNode.replaceChild(newLogBtn, logBtn);
    }
    
    // 移除完成度按钮的监听器
    const completionBtn = document.getElementById('completion-btn');
    if (completionBtn) {
        const newCompletionBtn = completionBtn.cloneNode(true);
        completionBtn.parentNode.replaceChild(newCompletionBtn, completionBtn);
    }
}

// 更新UI
function updateUI() {
    document.getElementById('current-time').textContent = formatTime(gameState.time);
    document.getElementById('current-chapter').textContent = chapters[gameState.currentChapter]?.name || "游戏结束";
    
    const currentChar = characters[gameState.currentCharacter];
    if (currentChar) {
        document.getElementById('character-name').textContent = currentChar.name;
        document.getElementById('character-identity').textContent = currentChar.identity;
        document.getElementById('avatar-img').src = currentChar.avatar;
    }
    
    updateStatusBars();
    updateResourcesUI();
    updateChapterProgress();
}

// 格式化时间
function formatTime(time) {
    if (time < 100) return "战争开始前";
    const year = Math.floor(time / 100);
    const month = time % 100;
    return `${year}年${month}月`;
}

// 更新状态条
function updateStatusBars() {
    const { health, morale, fatigue } = gameState.characterStatus;
    
    const healthBar = document.getElementById('health-bar');
    const moraleBar = document.getElementById('morale-bar');
    const fatigueBar = document.getElementById('fatigue-bar');
    
    if (healthBar) {
        healthBar.style.width = `${Math.max(0, health)}%`;
        document.getElementById('health-text').textContent = `${Math.max(0, health)}/100`;
    }
    if (moraleBar) {
        moraleBar.style.width = `${Math.max(0, morale)}%`;
        document.getElementById('morale-text').textContent = `${Math.max(0, morale)}/100`;
    }
    if (fatigueBar) {
        fatigueBar.style.width = `${Math.min(100, fatigue)}%`;
        document.getElementById('fatigue-text').textContent = `${Math.min(100, fatigue)}/100`;
    }
}

// 更新资源UI
function updateResourcesUI() {
    const { food, ammo, intelligence, reputation, money, medicine } = gameState.resources;
    
    const elements = {
        'food-value': food,
        'ammo-value': ammo,
        'intelligence-value': intelligence,
        'reputation-value': reputation,
        'money-value': money,
        'medicine-value': medicine || 0
    };
    
    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) el.textContent = Math.max(0, value);
    }
}

// 更新章节进度
function updateChapterProgress() {
    const progressBar = document.getElementById('chapter-progress');
    if (progressBar) {
        const progress = (gameState.chapterProgress / 10) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

// 生成统计文本
function generateStatsText() {
    const { reputation, intelligence, money } = gameState.resources;
    const foodUsed = 500 - gameState.resources.food;
    const enemiesDefeated = Math.floor(gameState.chapterProgress * 15);
    
    let performance = "";
    if (reputation >= 200) {
        performance = "你是一位伟大的抗日英雄";
    } else if (reputation >= 100) {
        performance = "你是一位坚定的抗日战士";
    } else if (reputation >= 50) {
        performance = "你为抗战做出了自己的贡献";
    } else {
        performance = "你坚持到了最后，但贡献有限";
    }
    
    return `游戏统计：

游戏时间：1937年7月 - 1945年8月（8年）
最终章节：终章
获得声望：${reputation}
收集情报：${intelligence}
消耗食物：${foodUsed}
消灭日军：${enemiesDefeated}

你的表现：
${performance}

无论结果如何，你都亲身体验了这段波澜壮阔的历史。`;
}

// 显示当前剧情节点
function showCurrentNode() {
    console.log('=== showCurrentNode开始 ===');
    console.log('gameState.currentNode:', gameState.currentNode);
    
    const node = storyNodes[gameState.currentNode];
    
    console.log('storyNodes数量:', Object.keys(storyNodes).length);
    console.log('node:', node);
    
    if (!node) {
        console.error('节点不存在！显示胜利结局');
        showEnding('victory');
        return;
    }
    
    if (node.isRestart) {
        restartGame();
        return;
    }
    
    // 更新章节
    if (node.chapter >= 0 && node.chapter !== gameState.currentChapter) {
        gameState.currentChapter = node.chapter;
        addToLog(`进入${chapters[node.chapter].name}`);
    }
    
    // 更新剧情文本
    const textEl = document.getElementById('current-text');
    if (textEl) {
        let displayText = node.text;
        
        // 处理统计节点 - 动态生成统计信息
        if (node.isStatsNode) {
            displayText = generateStatsText();
        }
        
        // 为结局节点添加图标
        if (node.icon) {
            displayText = `${node.icon} ${displayText}`;
        }
        
        textEl.textContent = displayText;
        textEl.style.animation = 'none';
        textEl.offsetHeight;
        textEl.style.animation = 'fadeIn 0.5s ease-in';
    }
    
    // 更新背景（如果有）
    const backgroundEl = document.getElementById('scene-background');
    if (backgroundEl && node.background) {
        backgroundEl.textContent = node.background;
    }
    
    // 更新选择按钮
    console.log('=== 更新选择按钮 ===');
    const choicesContainer = document.getElementById('choices-container');
    console.log('choicesContainer:', choicesContainer);
    
    if (!choicesContainer) {
        console.error('choices-container元素不存在!');
        return;
    }
    
    console.log('清空选项容器...');
    choicesContainer.innerHTML = '';
    
    console.log('当前节点:', gameState.currentNode);
    console.log('节点对象:', node);
    console.log('节点choices:', node.choices);
    console.log('choices数量:', node.choices?.length);
    
    if (node.choices && node.choices.length > 0) {
        console.log('开始生成选项按钮...');
        node.choices.forEach((choice, index) => {
            console.log(`生成选项 ${index}: ${choice.text}`);
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.dataset.choice = index;
            // 不在这里绑定事件，使用全局事件委托
            choicesContainer.appendChild(button);
            console.log(`选项 ${index} 已添加到DOM`);
        });
        console.log(`总共添加了 ${node.choices.length} 个选项`);
    } else {
        console.log('节点没有choices或choices为空，这是正常的结束节点');
    }
    
    console.log('=== showCurrentNode完成 ===');
}

// 处理玩家选择
function handleChoice(event) {
    console.log('handleChoice被调用');
    console.log('event.target:', event.target);
    console.log('choiceIndex:', event.target.dataset.choice);
    
    const choiceIndex = parseInt(event.target.dataset.choice);
    const currentNode = storyNodes[gameState.currentNode];
    
    console.log('currentNode:', gameState.currentNode);
    console.log('currentNode存在:', !!currentNode);
    console.log('choices存在:', !!currentNode?.choices);
    
    if (!currentNode) {
        console.error('currentNode不存在!');
        return;
    }
    
    if (!currentNode.choices || !currentNode.choices[choiceIndex]) {
        console.error('choice不存在! choiceIndex:', choiceIndex);
        return;
    }
    
    const choice = currentNode.choices[choiceIndex];
    console.log('choice:', choice.text);
    
    // 记录访问的节点
    if (!gameState.visitedNodes.includes(gameState.currentNode)) {
        gameState.visitedNodes.push(gameState.currentNode);
    }
    
    // 记录选择
    gameState.chosenOptions.push({
        nodeId: gameState.currentNode,
        choiceIndex: choiceIndex,
        choiceText: choice.text,
        time: gameState.time
    });
    
    console.log('准备应用后果...');
    console.log('nextNode:', choice.nextNode);
    
    // 处理特殊节点类型
    if (currentNode.isEvent) {
        // 处理事件选择
        handleEventChoice(choice);
        return;
    }
    
    if (currentNode.isSupportChoice) {
        // 处理支持选择
        handleSupportChoice(choice);
        return;
    }
    
    // 应用选择后果
    applyConsequences(choice.consequences);
    
    // 更新游戏日志
    addToLog(choice.text);
    
    // 检查角色状态
    checkCharacterStatus();
    
    // 检查游戏结局
    const ending = checkEnding();
    if (ending) {
        showEnding(ending);
        return;
    }
    
    // 推进章节进度
    gameState.chapterProgress++;
    
    // 推进时间（每个选择推进1-3个月）
    const timeAdvance = Math.floor(Math.random() * 3) + 1;
    advanceTime(timeAdvance);
    
    // 更新每日事件和支持
    updateDailyEvents();
    updateDailySupports();
    
    // 检查随机事件
    checkRandomEvent("choice");
    
    // 检查成就
    checkAchievements();
    
    // 检查是否需要切换章节
    checkChapterTransition();
    
    // 有20%概率获得随机支持（不要自动跳转，只是记录）
    if (Math.random() < 0.2) {
        console.log('触发随机支持');
        gainRandomSupport();
        // 不要在这里返回，继续执行
    }
    
    // 推进到下一个节点
    gameState.currentNode = choice.nextNode;
    console.log('已设置当前节点为:', gameState.currentNode);
    
    // 保存游戏状态
    console.log('保存游戏状态...');
    saveGameState();
    console.log('游戏状态已保存');
    
    // 显示下一个节点
    console.log('显示当前节点...');
    showCurrentNode();
    console.log('当前节点已显示');
    
    // 更新UI
    console.log('更新UI...');
    updateUI();
    console.log('UI更新完成');
}

// 应用选择后果
function applyConsequences(consequences) {
    if (!consequences) return;
    
    // 更新资源
    if (consequences.resources) {
        for (const [resource, amount] of Object.entries(consequences.resources)) {
            if (gameState.resources[resource] !== undefined) {
                gameState.resources[resource] += amount;
                gameState.resources[resource] = Math.max(0, gameState.resources[resource]);
            }
        }
    }
    
    // 更新角色状态
    if (consequences.status) {
        for (const [status, amount] of Object.entries(consequences.status)) {
            if (gameState.characterStatus[status] !== undefined) {
                gameState.characterStatus[status] += amount;
                gameState.characterStatus[status] = Math.max(-100, Math.min(200, gameState.characterStatus[status]));
            }
        }
    }
    
    // 更新剧情标志
    if (consequences.flags) {
        Object.assign(gameState.flags, consequences.flags);
    }
    
    // 推进时间（每个选择推进1-3个月）
    const timeAdvance = Math.floor(Math.random() * 3) + 1;
    advanceTime(timeAdvance);
}

// 推进时间
function advanceTime(months) {
    let year = Math.floor(gameState.time / 100);
    let month = gameState.time % 100;
    
    month += months;
    while (month > 12) {
        month -= 12;
        year += 1;
    }
    
    gameState.time = year * 100 + month;
    
    // 日常资源消耗
    dailyConsumption();
}

// 日常资源消耗
function dailyConsumption() {
    // 直接更新资源，避免无限循环
    gameState.resources.food = Math.max(0, gameState.resources.food - 3);
    gameState.characterStatus.fatigue = Math.min(100, gameState.characterStatus.fatigue + 5);
}

// 检查角色状态
function checkCharacterStatus() {
    const { health, fatigue, morale } = gameState.characterStatus;
    
    // 检查生命值
    if (health <= 0) {
        gameState.currentNode = "game_over_health";
        return;
    }
    
    // 检查士气
    if (morale <= 0) {
        gameState.currentNode = "game_over_morale";
        return;
    }
    
    // 检查食物
    if (gameState.resources.food <= 0) {
        gameState.characterStatus.health -= 10;
        if (gameState.characterStatus.health <= 0) {
            gameState.currentNode = "game_over_health";
            return;
        }
    }
    
    // 疲劳度过高影响状态
    if (fatigue >= 100) {
        gameState.characterStatus.health -= 10;
        gameState.characterStatus.morale -= 10;
    } else if (fatigue >= 80) {
        gameState.characterStatus.health -= 5;
        gameState.characterStatus.morale -= 5;
    }
}

// 检查章节切换
function checkChapterTransition() {
    const transitions = {
        0: "transition_chapter1",
        1: "transition_chapter2",
        2: "transition_chapter3",
        3: "transition_chapter4",
        4: "transition_chapter5",
        5: "transition_chapter6"
    };
    
    // 检查是否需要自动切换章节
    const shouldTransition = [
        gameState.flags.joined_guerrilla,
        gameState.flags.joined_army,
        gameState.flags.joined_cultural_work,
        gameState.flags.joined_smuggling
    ].filter(Boolean).length >= 1;
    
    if (shouldTransition && gameState.chapterProgress >= 3 && transitions[gameState.currentChapter]) {
        // 延迟切换，让玩家先看到当前节点的结果
        setTimeout(() => {
            if (gameState.currentNode === transitions[gameState.currentChapter]) {
                // 已经在过渡节点，不需要处理
                // 章节切换时检查随机事件
                checkRandomEvent("chapter_change");
                
                // 检查成就
                checkAchievements();
                
                // 有15%概率获得随机支持
                if (Math.random() < 0.15) {
                    gainRandomSupport();
                }
            }
        }, 100);
    }
}

// 检查游戏结局
function checkEnding() {
    const { time, characterStatus, resources } = gameState;
    
    // 抗战胜利
    if (time >= 194508) {
        return 'victory';
    }
    
    // 角色死亡
    if (characterStatus.health <= 0) {
        return 'death';
    }
    
    // 士气崩溃
    if (characterStatus.morale <= 0) {
        return 'despair';
    }
    
    return null;
}

// 显示结局
function showEnding(endingType = 'victory') {
    let endingHTML = `<div id="game-over">`;
    
    let endingText = '';
    let title = '';
    let icon = '';
    
    switch(endingType) {
        case 'victory':
            icon = '🏆';
            title = '抗战胜利！';
            endingText = '经过八年的艰苦抗战，中国人民终于取得了胜利！你为抗战的胜利做出了自己的贡献，历史会记住你的付出。';
            break;
        case 'death':
            icon = '🕊️';
            title = '英勇牺牲';
            endingText = '你为了抗战事业献出了自己的生命。虽然你没有亲眼看到胜利的那一天，但你的牺牲不会白费。';
            break;
        case 'despair':
            icon = '💔';
            title = '失去希望';
            endingText = '战争的残酷让你失去了继续奋斗的勇气。但请记住，坚持就是胜利。';
            break;
    }
    
    endingHTML += `<h2>${icon} ${title}</h2>
            <p>${endingText}</p>
            <p style="margin-top: 20px; font-size: 0.9em; color: #aaa;">
                声望：${gameState.resources.reputation}<br>
                情报：${gameState.resources.intelligence}<br>
                金钱：${gameState.resources.money}<br>
                食物：${gameState.resources.food}<br>
                药品：${gameState.resources.medicine}
            </p>
            <button id="restart-btn">重新开始</button>
        </div>`;
    
    document.body.innerHTML += endingHTML;
    
    document.getElementById('restart-btn').addEventListener('click', restartGame);
}

// 重新开始游戏
function restartGame() {
    Object.assign(gameState, {
        currentChapter: 0,
        currentCharacter: 0,
        currentNode: "start",
        time: 193707,
        chapterProgress: 0,
        resources: {
            food: 100,
            ammo: 0,
            intelligence: 0,
            reputation: 0,
            money: 500,
            medicine: 0
        },
        characterStatus: {
            health: 100,
            morale: 70,
            fatigue: 0
        },
        flags: {},
        relationships: {},
        log: ["1937年7月7日，卢沟桥事变爆发"],
        hiddenClues: []
    });
    
    const gameOver = document.getElementById('game-over');
    if (gameOver) {
        gameOver.remove();
    }
    
    // 恢复原始页面结构
    location.reload();
}

// 添加到游戏日志
function addToLog(event) {
    const currentTime = formatTime(gameState.time);
    gameState.log.push(`${currentTime} - ${event}`);
    
    if (gameState.log.length > 100) {
        gameState.log.shift();
    }
    
    // 实时更新日志显示
    updateLogDisplay();
}

// 绑定事件监听器
function bindEventListeners() {
    // 设置按钮
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            document.getElementById('settings-modal').style.display = 'block';
        });
    }
    
    // 日志按钮
    const logBtn = document.getElementById('log-btn');
    if (logBtn) {
        logBtn.addEventListener('click', () => {
            updateLogDisplay();
            document.getElementById('log-modal').style.display = 'block';
        });
    }
    
    // 保存按钮
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveGameState);
    }
    
    // 加载按钮
    const loadBtn = document.getElementById('load-btn');
    if (loadBtn) {
        loadBtn.addEventListener('click', loadGameState);
    }
    
    // 完成度按钮
    const completionBtn = document.getElementById('completion-btn');
    if (completionBtn) {
        completionBtn.addEventListener('click', showCompletion);
    }
    
    // 关闭模态框
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// 更新日志显示
function updateLogDisplay() {
    const logContent = document.getElementById('log-content');
    if (!logContent) return;
    
    logContent.innerHTML = '';
    
    gameState.log.slice(-50).forEach(logEntry => {
        const p = document.createElement('p');
        p.textContent = logEntry;
        logContent.appendChild(p);
    });
    
    logContent.scrollTop = logContent.scrollHeight;
}

// 保存游戏状态
function saveGameState() {
    try {
        localStorage.setItem('antiR_gameState', JSON.stringify(gameState));
        showNotification('游戏已保存！');
    } catch (e) {
        console.error('保存失败:', e);
        showNotification('保存失败，请检查浏览器设置');
    }
}

// 加载游戏状态
function loadGameState() {
    try {
        const savedState = localStorage.getItem('antiR_gameState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            Object.assign(gameState, parsedState);
            showNotification('游戏已加载！');
        }
    } catch (e) {
        console.error('加载失败:', e);
    }
}

// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #4caf50;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: fadeIn 0.3s ease-in;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 切换角色
function switchCharacter(characterId) {
    if (characterId >= 0 && characterId < characters.length) {
        gameState.currentCharacter = characterId;
        addToLog(`切换角色为${characters[characterId].name}`);
        updateUI();
        
        const panel = document.getElementById('character-panel');
        if (panel) {
            panel.classList.add('character-transition');
            setTimeout(() => panel.classList.remove('character-transition'), 500);
        }
    }
}

// 推进章节
function advanceChapter() {
    if (gameState.currentChapter < chapters.length - 1) {
        gameState.currentChapter++;
        gameState.chapterProgress = 0;
        addToLog(`进入${chapters[gameState.currentChapter].name}`);
        updateUI();
        
        const main = document.getElementById('game-main');
        if (main) {
            main.classList.add('chapter-transition');
            setTimeout(() => main.classList.remove('chapter-transition'), 800);
        }
    }
}

// 暴露关键函数到全局作用域（供HTML onclick使用）
window.resetGameState = resetGameState;
window.initGame = initGame;
window.handleChoice = handleChoice;
window.saveGameState = saveGameState;
window.loadGameState = loadGameState;
window.unbindEventListeners = unbindEventListeners;