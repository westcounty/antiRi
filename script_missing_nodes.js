// Missing nodes patch file - fixes all undefined nextNode references

const missingNodes = {
    // ==================== Chapter 0 (序章) Missing Nodes ====================
    "chapter0_send_scouts": {
        chapter: 0,
        text: "你派出几个年轻人去县城打探消息。他们带回了令人担忧的消息：日军已经占领了北平，正在向周边地区推进。",
        choices: [
            { text: "组织村民撤离", consequences: { resources: { reputation: +20 }, status: { morale: +15 } }, nextNode: "chapter1_start" },
            { text: "加强村庄防御", consequences: { resources: { ammo: +10 }, status: { morale: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_fortify_defense": {
        chapter: 0,
        text: "你组织村民加固村口的防御工事。虽然简陋，但总比没有强。村民们干劲十足，大家都知道这是为了保护家园。",
        choices: [
            { text: "继续加强防御", consequences: { resources: { reputation: +25 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "派人去联系游击队", consequences: { resources: { intelligence: +20 }, status: { morale: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_seek_reinforcement": {
        chapter: 0,
        text: "你派人去附近的军营求援，但得到的消息是军队正在向后方撤退。你意识到只能依靠自己了。",
        choices: [
            { text: "组织村民自卫", consequences: { resources: { reputation: +30, ammo: +5 }, status: { morale: +15 } }, nextNode: "chapter1_start" },
            { text: "带领村民撤离", consequences: { resources: { food: -20 }, status: { morale: +10 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_suggest_escape": {
        chapter: 0,
        text: "你建议村民暂时撤离到山里。虽然有些人不愿意离开家园，但大多数人还是听从了你的建议。",
        choices: [
            { text: "带领村民进山", consequences: { resources: { food: -30 }, status: { morale: +20 } }, nextNode: "chapter1_start" },
            { text: "留下来守护村庄", consequences: { resources: { reputation: +35 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_go_to_government": {
        chapter: 0,
        text: "你独自去县城找国民政府报告情况，但县政府已经撤离了。在街上，你遇到了一些正在组织抵抗的爱国青年。",
        choices: [
            { text: "加入他们的队伍", consequences: { resources: { reputation: +20, intelligence: +15 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "返回村庄组织抵抗", consequences: { resources: { reputation: +25 }, status: { morale: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_scout_from_dungeon": {
        chapter: 0,
        text: "你悄悄离开地窖去打探情况。村子里一片寂静，远处能看到火光。日军似乎还没有到达这里。",
        choices: [
            { text: "返回告诉家人情况", consequences: { resources: { intelligence: +15 }, status: { morale: +10 } }, nextNode: "chapter1_start" },
            { text: "去邻居家查看", consequences: { resources: { reputation: +15 }, status: { morale: +15 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_guard_dungeon": {
        chapter: 0,
        text: "你守在地窖口，保护家人安全。漫长的夜晚终于过去，天亮后枪声渐渐远去。",
        choices: [
            { text: "带家人离开地窖", consequences: { resources: { food: -10 }, status: { morale: +20 } }, nextNode: "chapter1_start" },
            { text: "继续等待确认安全", consequences: { status: { morale: +15, fatigue: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_teach_self_defense": {
        chapter: 0,
        text: "你教妻子一些简单的防身术，并告诉她遇到危险时该怎么办。她虽然害怕，但还是认真地学习。",
        choices: [
            { text: "一起制定逃跑计划", consequences: { resources: { intelligence: +20 }, status: { morale: +20 } }, nextNode: "chapter1_start" },
            { text: "去寻找更多帮助", consequences: { resources: { reputation: +15 }, status: { morale: +15 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_prepare_escape_route": {
        chapter: 0,
        text: "你仔细研究了周围的地形，规划了几条逃跑路线。这些准备也许能在关键时刻救命。",
        choices: [
            { text: "告诉家人这些路线", consequences: { resources: { intelligence: +25 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "把路线分享给邻居", consequences: { resources: { reputation: +30 }, status: { morale: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_calm_family": {
        chapter: 0,
        text: "你给家人讲述历史上中国人民抵抗外敌的故事，大家的情绪逐渐稳定下来。母亲说：'二柱，我们相信你。'",
        choices: [
            { text: "带领家人度过难关", consequences: { resources: { reputation: +20 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "开始做撤离准备", consequences: { resources: { food: -10 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_raise_alarm": {
        chapter: 0,
        text: "你立即回村报警，敲响了村里的大钟。村民们纷纷从睡梦中惊醒，开始收拾东西准备撤离。",
        choices: [
            { text: "组织有序撤离", consequences: { resources: { reputation: +35, intelligence: +20 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "组织青壮年抵抗", consequences: { resources: { ammo: +10, reputation: +30 }, status: { morale: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_observe_enemy": {
        chapter: 0,
        text: "你冒险靠近观察，发现日军大约有一个小队，装备精良。他们正在搜查沿途的村庄，所到之处烟火四起。",
        choices: [
            { text: "迅速返回报告", consequences: { resources: { intelligence: +40 }, status: { morale: +15 } }, nextNode: "chapter1_start" },
            { text: "尝试绕到他们后方", consequences: { resources: { intelligence: +50 }, status: { morale: +10, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_set_traps": {
        chapter: 0,
        text: "你利用农具和绳索设置了一些简易陷阱。虽然不能造成多大伤害，但至少能延缓敌人的推进。",
        choices: [
            { text: "返回村里报告", consequences: { resources: { intelligence: +25, reputation: +20 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "继续设置更多陷阱", consequences: { resources: { intelligence: +30 }, status: { morale: +20, fatigue: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_inform_guerrilla": {
        chapter: 0,
        text: "你找到了附近的游击队联络点，把日军的动向告诉了他们。游击队员说会通知上级，并让你回去组织村民准备配合。",
        choices: [
            { text: "返回组织村民", consequences: { resources: { intelligence: +35, reputation: +30 }, status: { morale: +35 } }, nextNode: "chapter1_start" },
            { text: "请求加入游击队", consequences: { resources: { reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_follow_enemy": {
        chapter: 0,
        text: "你小心翼翼地跟在日军后面，记录下他们的人数、装备和行进路线。这些情报将非常有价值。",
        choices: [
            { text: "把情报带回村里", consequences: { resources: { intelligence: +50, reputation: +25 }, status: { morale: +20 } }, nextNode: "chapter1_start" },
            { text: "找游击队汇报", consequences: { resources: { intelligence: +45, reputation: +35 }, status: { morale: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_escape_with_elderly": {
        chapter: 0,
        text: "你搀扶着母亲，带着妻子和孩子，沿着地图上标记的小路向山区撤离。一路上遇到了其他逃难的村民。",
        choices: [
            { text: "带领大家一起走", consequences: { resources: { reputation: +35 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "分散行动更安全", consequences: { resources: { intelligence: +20 }, status: { morale: +15 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_stay_behind": {
        chapter: 0,
        text: "你让妻子和母亲先走，自己留下来观察情况。村子里已经空了大半，只有几个年轻人愿意留下来守护家园。",
        choices: [
            { text: "和他们一起坚守", consequences: { resources: { reputation: +40, ammo: +5 }, status: { morale: +35 } }, nextNode: "chapter1_start" },
            { text: "组织撤离后再走", consequences: { resources: { reputation: +30 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_share_map": {
        chapter: 0,
        text: "你把父亲留下的地图分享给其他村民。大家都很感激，这条秘密小路可能会救很多人的命。",
        choices: [
            { text: "带领大家撤离", consequences: { resources: { reputation: +40 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "让他们先走，自己殿后", consequences: { resources: { reputation: +45 }, status: { morale: +35, fatigue: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_warn_rich": {
        chapter: 0,
        text: "你去提醒村里的富户，他们感激你的好意，并拿出一些钱财和粮食来帮助村民撤离。",
        choices: [
            { text: "组织统一撤离", consequences: { resources: { money: +50, food: +30, reputation: +30 }, status: { morale: +25 } }, nextNode: "chapter1_start" },
            { text: "帮助他们转移财产", consequences: { resources: { money: +70 }, status: { morale: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_explore_alone": {
        chapter: 0,
        text: "你独自沿着地图上的小路探索，发现这条路通往山里的一个隐蔽山谷，是个很好的藏身之处。",
        choices: [
            { text: "回去带领村民来这里", consequences: { resources: { intelligence: +35, reputation: +30 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "先把家人带来", consequences: { resources: { intelligence: +25 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_organize_patrol": {
        chapter: 0,
        text: "你组织起一支巡逻队，整夜在村子周围警戒。虽然大家都很疲惫，但没有人抱怨。",
        choices: [
            { text: "制定轮班制度", consequences: { resources: { reputation: +35, intelligence: +20 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "加强重点区域防守", consequences: { resources: { reputation: +30, ammo: +5 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_spread_warning": {
        chapter: 0,
        text: "巡逻队分头去通知更多的人。很快，附近几个村子都知道了日军来袭的消息，大家开始互相帮助准备撤离。",
        choices: [
            { text: "联合各村组织防御", consequences: { resources: { reputation: +45, intelligence: +25 }, status: { morale: +35 } }, nextNode: "chapter1_start" },
            { text: "协调统一撤离", consequences: { resources: { reputation: +40 }, status: { morale: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_arrange_escape": {
        chapter: 0,
        text: "你安排老人、妇女和儿童先转移到安全地点，年轻人留下来掩护撤离。大家配合得很好。",
        choices: [
            { text: "确保所有人安全撤离", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter1_start" },
            { text: "组织后卫队伍", consequences: { resources: { reputation: +35, ammo: +10 }, status: { morale: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_collect_weapons": {
        chapter: 0,
        text: "你收集了村里的猎枪、大刀和农具。虽然比不上日军的装备，但总比赤手空拳强。",
        choices: [
            { text: "分发给年轻人", consequences: { resources: { ammo: +20, reputation: +25 }, status: { morale: +30 } }, nextNode: "chapter1_start" },
            { text: "设置防御阵地", consequences: { resources: { ammo: +15, intelligence: +20 }, status: { morale: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter0_contact_villages": {
        chapter: 0,
        text: "你派人去联系其他村庄，很快就收到了回应。大家决定联合起来，共同抵抗日军的侵犯。",
        choices: [
            { text: "建立联合防线", consequences: { resources: { reputation: +50, intelligence: +30 }, status: { morale: +40 } }, nextNode: "chapter1_start" },
            { text: "组织联合撤离", consequences: { resources: { reputation: +45 }, status: { morale: +35 } }, nextNode: "chapter1_start" }
        ]
    },

    // ==================== Chapter 1 Missing Nodes ====================
    "chapter1_retreat": {
        chapter: 1,
        emotion: "caution",
        text: "你们迅速撤离现场，避免了日军的追击。虽然没有扩大战果，但保存了实力，为下一次行动做好准备。",
        background: "安全撤离，保存实力",
        choices: [
            { text: "返回根据地休整", consequences: { resources: { food: +20 }, status: { morale: +30, fatigue: -20 } }, nextNode: "chapter1_start" },
            { text: "寻找新的行动目标", consequences: { resources: { intelligence: +30 }, status: { morale: +20, fatigue: +15 } }, nextNode: "chapter1_scout_mission" }
        ]
    },
    "chapter1_mission_success": {
        chapter: 1,
        emotion: "triumph",
        text: "任务圆满完成！日军高级指挥官被击毙，敌人的指挥系统陷入混乱。这是游击队的重大胜利！",
        background: "任务成功，士气大振",
        choices: [
            { text: "趁乱发起进攻", consequences: { resources: { ammo: +40, reputation: +50 }, status: { morale: +50, fatigue: +30 } }, nextNode: "chapter1_start" },
            { text: "安全撤离", consequences: { resources: { intelligence: +30 }, status: { morale: +40, fatigue: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_quick_extract": {
        chapter: 1,
        emotion: "relief",
        text: "你选择了最安全的撤离路线，成功脱离了危险区域。虽然没有收集更多情报，但确保了人员安全。",
        background: "快速撤离，安全第一",
        choices: [
            { text: "返回汇报情况", consequences: { resources: { reputation: +25 }, status: { morale: +30, fatigue: +15 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_collect_intel": {
        chapter: 1,
        emotion: "careful",
        text: "你冒险在撤离前收集了更多情报，包括日军的部署图和通讯密码本。这些情报极其珍贵！",
        background: "收集情报，价值连城",
        choices: [
            { text: "立即返回汇报", consequences: { resources: { intelligence: +60, reputation: +45 }, status: { morale: +45, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_chaos_cover": {
        chapter: 1,
        emotion: "daring",
        text: "你制造了一连串爆炸，引起混乱。趁着敌人慌乱之际，你成功撤离。",
        background: "制造混乱，掩护撤退",
        choices: [
            { text: "返回根据地", consequences: { resources: { ammo: +20, reputation: +35 }, status: { morale: +40, fatigue: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_wait_extraction": {
        chapter: 1,
        emotion: "patient",
        text: "你在约定地点等待接应队伍。虽然等待让人焦虑，但最终安全与队友会合。",
        background: "等待接应，团队配合",
        choices: [
            { text: "一起返回", consequences: { resources: { reputation: +30 }, status: { morale: +35, fatigue: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_train_sniper_new": {
        chapter: 1,
        emotion: "teaching",
        text: "你开始培训新的狙击手。虽然过程艰苦，但看到队员们的进步让你感到欣慰。",
        background: "传授技艺，培养后继",
        choices: [
            { text: "继续强化训练", consequences: { resources: { reputation: +40, intelligence: +30 }, status: { morale: +45, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_study_sniper_tactics": {
        chapter: 1,
        emotion: "analytical",
        text: "通过研究缴获的日军手册，你了解了敌人狙击手的战术特点，这将帮助你更好地对付他们。",
        background: "知己知彼，百战不殆",
        choices: [
            { text: "将心得分享给队友", consequences: { resources: { intelligence: +45, reputation: +35 }, status: { morale: +40, fatigue: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_improvised_camo": {
        chapter: 1,
        emotion: "creative",
        text: "你用当地材料制作了简易伪装服，在草丛和树林中几乎难以被发现。",
        background: "就地取材，巧制伪装",
        choices: [
            { text: "测试伪装效果", consequences: { resources: { intelligence: +35, reputation: +30 }, status: { morale: +35, fatigue: +20 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_sniper_notes": {
        chapter: 1,
        emotion: "documentation",
        text: "你详细记录了狙击经验和心得，这些笔记将成为游击队的宝贵教材。",
        background: "记录经验，传承智慧",
        choices: [
            { text: "整理成册分发", consequences: { resources: { intelligence: +50, reputation: +45 }, status: { morale: +50, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_field_hospital": {
        chapter: 1,
        emotion: "compassion",
        text: "你在山洞中建立了一个简易野战医院，虽然条件简陋，但已能救治很多伤员。",
        background: "野战医院，救死扶伤",
        choices: [
            { text: "继续改善条件", consequences: { resources: { medicine: +50, reputation: +55 }, status: { morale: +55, fatigue: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_medical_team": {
        chapter: 1,
        emotion: "teamwork",
        text: "你组建了一支医护小组，每个成员都学会了基本的急救技能。",
        background: "医护小组，协同作战",
        choices: [
            { text: "开展培训演练", consequences: { resources: { medicine: +40, reputation: +45 }, status: { morale: +50, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_medical_supplies": {
        chapter: 1,
        emotion: "resourceful",
        text: "你从各种渠道收集到了珍贵的医护物资，包括绷带、消毒药水和止痛药。",
        background: "物资收集，未雨绸缪",
        choices: [
            { text: "妥善保管分配", consequences: { resources: { medicine: +55, intelligence: +30 }, status: { morale: +45, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_medical_manual": {
        chapter: 1,
        emotion: "scholarly",
        text: "你编写了一本简易医护手册，用通俗易懂的语言讲解急救知识。",
        background: "医护手册，普及知识",
        choices: [
            { text: "印刷分发", consequences: { resources: { intelligence: +45, reputation: +50 }, status: { morale: +55, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_chinese_medicine_research": {
        chapter: 1,
        emotion: "innovation",
        text: "你研究当地草药，找到了一些能替代西药的中药方子，解决了药品短缺的问题。",
        background: "中药研究，就地取材",
        choices: [
            { text: "推广使用", consequences: { resources: { medicine: +40, intelligence: +40 }, status: { morale: +50, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_war_courses": {
        chapter: 1,
        emotion: "education",
        text: "你在夜校增设了抗战课程，教村民们认识侵略者的本质和抗战的意义。",
        background: "抗战教育，唤醒民众",
        choices: [
            { text: "扩大课程范围", consequences: { resources: { reputation: +55, intelligence: +40 }, status: { morale: +60, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_student_teachers": {
        chapter: 1,
        emotion: "growth",
        text: "你培养了几个优秀的学生成为小教师，他们开始在其他村庄传播知识。",
        background: "薪火相传，教育兴邦",
        choices: [
            { text: "建立教学网络", consequences: { resources: { reputation: +60, intelligence: +35 }, status: { morale: +60, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_book_corner": {
        chapter: 1,
        emotion: "culture",
        text: "你在村里建立了一个小小的图书角，虽然只有几十本书，但村民们如饥似渴地阅读。",
        background: "图书角落，知识殿堂",
        choices: [
            { text: "继续收集书籍", consequences: { resources: { intelligence: +35, reputation: +45 }, status: { morale: +55, fatigue: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_study_competition": {
        chapter: 1,
        emotion: "motivation",
        text: "你组织了学习竞赛，大家的学习热情高涨，进步明显。",
        background: "学习竞赛，你追我赶",
        choices: [
            { text: "定期举办", consequences: { resources: { reputation: +50 }, status: { morale: +60, fatigue: +25 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_simple_textbooks": {
        chapter: 1,
        emotion: "creation",
        text: "你编写了适合农民学习的简易教材，用他们熟悉的例子讲解知识。",
        background: "简易教材，因材施教",
        choices: [
            { text: "印刷推广", consequences: { resources: { intelligence: +50, reputation: +55 }, status: { morale: +60, fatigue: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_expand_railroad_success": {
        chapter: 1,
        emotion: "momentum",
        text: "你们乘胜追击，又破坏了多段铁路，日军的运输系统几乎瘫痪！",
        background: "扩大战果，连战连捷",
        choices: [
            { text: "安全撤离", consequences: { resources: { intelligence: +55, reputation: +65 }, status: { morale: +70, fatigue: +55 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_collect_railroad_spoils": {
        chapter: 1,
        emotion: "harvest",
        text: "你们收集了大量战利品，包括日军丢弃的武器弹药和补给物资。",
        background: "收集战利，补充给养",
        choices: [
            { text: "带回根据地", consequences: { resources: { ammo: +50, money: +35 }, status: { morale: +55, fatigue: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_railroad_intel_network": {
        chapter: 1,
        emotion: "strategy",
        text: "你在铁路沿线建立了情报网，任何列车调动都能第一时间掌握。",
        background: "铁路情报，掌握敌情",
        choices: [
            { text: "完善网络", consequences: { resources: { intelligence: +60, reputation: +50 }, status: { morale: +60, fatigue: +45 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_more_railroad_sabotage": {
        chapter: 1,
        emotion: "persistence",
        text: "你们持续破坏铁路，让日军疲于修复，大大消耗了敌人的资源。",
        background: "持续破袭，消耗敌人",
        choices: [
            { text: "继续行动", consequences: { resources: { ammo: +45, reputation: +55 }, status: { morale: +60, fatigue: +50 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_agent_training": {
        chapter: 1,
        emotion: "professional",
        text: "你对联络员进行专业培训，教他们如何隐蔽行动、传递情报。",
        background: "特工培训，专业技能",
        choices: [
            { text: "派遣执行任务", consequences: { resources: { intelligence: +50, reputation: +45 }, status: { morale: +55, fatigue: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_secret_codes": {
        chapter: 1,
        emotion: "security",
        text: "你设计了一套联络暗号，只有知情人才能理解其中含义。",
        background: "暗号系统，保密通讯",
        choices: [
            { text: "培训使用方法", consequences: { resources: { intelligence: +55, reputation: +40 }, status: { morale: +55, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_emergency_contact": {
        chapter: 1,
        emotion: "preparation",
        text: "你建立了紧急联络机制，确保在危急时刻能迅速通知相关人员。",
        background: "紧急联络，未雨绸缪",
        choices: [
            { text: "进行演练", consequences: { resources: { intelligence: +50, reputation: +45 }, status: { morale: +55, fatigue: +30 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_backup_contact_points": {
        chapter: 1,
        emotion: "redundancy",
        text: "你设置了多个备用联络点，即使主要联络点暴露，也能保持通讯畅通。",
        background: "备用据点，双重保险",
        choices: [
            { text: "测试可靠性", consequences: { resources: { intelligence: +45, reputation: +50 }, status: { morale: +60, fatigue: +40 } }, nextNode: "chapter1_start" }
        ]
    },
    "chapter1_contact_check": {
        chapter: 1,
        emotion: "vigilance",
        text: "你定期检查联络网络的运作情况，确保每个环节都安全可靠。",
        background: "定期检查，确保安全",
        choices: [
            { text: "加强薄弱环节", consequences: { resources: { intelligence: +40, reputation: +45 }, status: { morale: +55, fatigue: +35 } }, nextNode: "chapter1_start" }
        ]
    },

    // ==================== Chapter 2 Missing Nodes ====================
    "chapter2_first_aid_station": {
        chapter: 2,
        emotion: "compassion",
        text: "你建立了前线急救站，在枪林弹雨中抢救伤员。你的行动挽救了无数战友的生命。",
        background: "急救站点，生死线上",
        choices: [
            { text: "继续救治伤员", consequences: { resources: { medicine: +50, reputation: +65 }, status: { morale: +70, fatigue: +55 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_rescue_team": {
        chapter: 2,
        emotion: "bravery",
        text: "你组织了一支救护队，专门负责将伤员从火线上撤下来。",
        background: "救护队伍，火线救援",
        choices: [
            { text: "继续救援行动", consequences: { resources: { medicine: +45, reputation: +60 }, status: { morale: +65, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_better_first_aid": {
        chapter: 2,
        emotion: "improvement",
        text: "你改进了急救方法，提高了伤员的存活率。",
        background: "改良急救，提高效率",
        choices: [
            { text: "推广新方法", consequences: { resources: { intelligence: +45, medicine: +40 }, status: { morale: +60, fatigue: +45 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_wounded_records": {
        chapter: 2,
        emotion: "documentation",
        text: "你详细记录了每位伤员的信息，便于后续治疗和家属联系。",
        background: "伤员记录，人文关怀",
        choices: [
            { text: "完善记录系统", consequences: { resources: { intelligence: +40, reputation: +55 }, status: { morale: +60, fatigue: +40 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_evacuate_wounded": {
        chapter: 2,
        emotion: "urgent",
        text: "你组织将重伤员转移到后方医院，确保他们得到更好的治疗。",
        background: "伤员转移，生死时速",
        choices: [
            { text: "安排后续转移", consequences: { resources: { medicine: +40, reputation: +60 }, status: { morale: +65, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_pursue_enemy": {
        chapter: 2,
        emotion: "aggressive",
        text: "你带领战士们乘胜追击，歼灭了更多敌人，缴获了大量武器装备。",
        background: "乘胜追击，扩大战果",
        choices: [
            { text: "巩固胜利", consequences: { resources: { ammo: +60, reputation: +70 }, status: { morale: +75, fatigue: +60 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_consolidate_position": {
        chapter: 2,
        emotion: "strategic",
        text: "你选择巩固现有阵地，修筑工事，为下一步行动做准备。",
        background: "巩固阵地，稳扎稳打",
        choices: [
            { text: "加强防御", consequences: { resources: { reputation: +55, intelligence: +35 }, status: { morale: +60, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_capture_enemy": {
        chapter: 2,
        emotion: "victory",
        text: "你俘虏了多名敌军，从他们口中获取了重要情报。",
        background: "俘虏敌军，获取情报",
        choices: [
            { text: "继续审讯", consequences: { resources: { intelligence: +55, reputation: +60 }, status: { morale: +65, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_gather_supplies": {
        chapter: 2,
        emotion: "resourceful",
        text: "你指挥战士们打扫战场，收集了大量武器弹药和补给物资。",
        background: "打扫战场，补充物资",
        choices: [
            { text: "分配物资", consequences: { resources: { ammo: +50, money: +40 }, status: { morale: +60, fatigue: +45 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_report_victory": {
        chapter: 2,
        emotion: "pride",
        text: "你向总部报告了胜利的消息，全军士气大振！",
        background: "报捷总部，士气高涨",
        choices: [
            { text: "准备下一战", consequences: { resources: { reputation: +75, intelligence: +40 }, status: { morale: +75, fatigue: +40 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_annihilate_enemy": {
        chapter: 2,
        emotion: "decisive",
        text: "你下令全歼包围圈内的敌军，无一漏网！这是一次完美的伏击战。",
        background: "全歼敌军，大获全胜",
        choices: [
            { text: "庆祝胜利", consequences: { resources: { ammo: +55, reputation: +70 }, status: { morale: +80, fatigue: +55 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_release_propaganda": {
        chapter: 2,
        emotion: "psychological",
        text: "你释放了部分俘虏，让他们回去宣传中国军队的优待政策，瓦解敌军士气。",
        background: "释放俘虏，心理战术",
        choices: [
            { text: "观察效果", consequences: { resources: { reputation: +65, intelligence: +45 }, status: { morale: +70, fatigue: +45 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_gather_weapons": {
        chapter: 2,
        emotion: "practical",
        text: "你收集了大量日军丢弃的武器装备，大大增强了部队的火力。",
        background: "缴获武器，增强火力",
        choices: [
            { text: "分发武器", consequences: { resources: { ammo: +60, money: +30 }, status: { morale: +65, fatigue: +45 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_interrogate_prisoners": {
        chapter: 2,
        emotion: "intelligence",
        text: "通过审讯俘虏，你获取了敌军的作战计划和部署情况。",
        background: "审讯俘虏，获取情报",
        choices: [
            { text: "上报情报", consequences: { resources: { intelligence: +60, reputation: +55 }, status: { morale: +65, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_ambush_escape": {
        chapter: 2,
        emotion: "cautious",
        text: "你选择快速撤离，避免敌人增援部队的到来。保存实力是明智的选择。",
        background: "快速撤离，保存实力",
        choices: [
            { text: "返回休整", consequences: { resources: { intelligence: +35 }, status: { morale: +55, fatigue: +40 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_full_assault": {
        chapter: 2,
        emotion: "fierce",
        text: "你发起全面进攻，敌人在两面夹击下土崩瓦解！这是一场辉煌的胜利！",
        background: "全面进攻，敌军崩溃",
        choices: [
            { text: "扩大战果", consequences: { resources: { ammo: +65, reputation: +80 }, status: { morale: +85, fatigue: +65 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_pincer_movement": {
        chapter: 2,
        emotion: "tactical",
        text: "你实施分割包围战术，将敌军切成数段各个击破。",
        background: "分割包围，各个击破",
        choices: [
            { text: "完成包围", consequences: { resources: { intelligence: +60, reputation: +70 }, status: { morale: +75, fatigue: +60 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_feint_attack": {
        chapter: 2,
        emotion: "deceptive",
        text: "你以佯攻牵制敌人主力，为友军创造了进攻机会。",
        background: "佯攻牵制，配合作战",
        choices: [
            { text: "等待时机", consequences: { resources: { ammo: +45, intelligence: +50 }, status: { morale: +65, fatigue: +50 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_cut_retreat": {
        chapter: 2,
        emotion: "strategic",
        text: "你成功切断了敌人的退路，让他们无处可逃！",
        background: "断其退路，瓮中捉鳖",
        choices: [
            { text: "发起总攻", consequences: { resources: { intelligence: +60, reputation: +65 }, status: { morale: +75, fatigue: +60 } }, nextNode: "chapter2_start" }
        ]
    },
    "chapter2_accept_surrender": {
        chapter: 2,
        emotion: "merciful",
        text: "面对绝境的敌军选择投降，你接受了他们的投降，展现了中国军人的气度。",
        background: "接受投降，仁义之师",
        choices: [
            { text: "优待俘虏", consequences: { resources: { intelligence: +50, reputation: +70 }, status: { morale: +75, fatigue: +55 } }, nextNode: "chapter2_start" }
        ]
    },

    // ==================== Chapter 3-5 Generic Fallback Nodes ====================
    // Chapter 3
    "chapter3_more_issues": { chapter: 3, text: "你增加了刊物的发行期数，影响力扩大了。", choices: [{ text: "继续发展", consequences: { resources: { money: +60, reputation: +65 }, status: { morale: +70, fatigue: +50 } }, nextNode: "chapter3_start" }] },
    "chapter3_bigger_team": { chapter: 3, text: "你招募了更多记者，新闻报道更加全面。", choices: [{ text: "培训新人", consequences: { resources: { reputation: +60, intelligence: +45 }, status: { morale: +70, fatigue: +50 } }, nextNode: "chapter3_start" }] },
    "chapter3_enemy_zone_reporting": { chapter: 3, text: "你派记者深入敌占区采访，揭露日军暴行。", choices: [{ text: "发表报道", consequences: { resources: { intelligence: +60, reputation: +70 }, status: { morale: +70, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_special_issue": { chapter: 3, text: "你出版了纪念特刊，记录抗战中的感人事迹。", choices: [{ text: "广泛发行", consequences: { resources: { reputation: +75, money: +50 }, status: { morale: +80, fatigue: +55 } }, nextNode: "chapter3_start" }] },
    "chapter3_reader_feedback": { chapter: 3, text: "你建立了读者反馈机制，让刊物更贴近读者需求。", choices: [{ text: "改进内容", consequences: { resources: { intelligence: +50, reputation: +55 }, status: { morale: +65, fatigue: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_mass_rally": { chapter: 3, text: "你组织了大型抗日集会，场面震撼！", choices: [{ text: "发表演讲", consequences: { resources: { reputation: +80, intelligence: +50 }, status: { morale: +85, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_train_speakers": { chapter: 3, text: "你培训了一批演讲人才，抗战宣传覆盖更广。", choices: [{ text: "派遣各地", consequences: { resources: { reputation: +70, intelligence: +55 }, status: { morale: +80, fatigue: +55 } }, nextNode: "chapter3_start" }] },
    "chapter3_innovate_speeches": { chapter: 3, text: "你创新演讲形式，更能打动人心。", choices: [{ text: "推广新形式", consequences: { resources: { reputation: +75, intelligence: +60 }, status: { morale: +82, fatigue: +55 } }, nextNode: "chapter3_start" }] },
    "chapter3_wider_propaganda": { chapter: 3, text: "你扩大了宣传范围，让更多民众了解抗战形势。", choices: [{ text: "继续扩展", consequences: { resources: { reputation: +78, intelligence: +52 }, status: { morale: +83, fatigue: +58 } }, nextNode: "chapter3_start" }] },
    "chapter3_international_attention": { chapter: 3, text: "你的努力引起了国际媒体的关注。", choices: [{ text: "加强联络", consequences: { resources: { intelligence: +65, reputation: +75 }, status: { morale: +80, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_more_artworks": { chapter: 3, text: "你创作了更多抗战主题艺术作品。", choices: [{ text: "展出作品", consequences: { resources: { reputation: +75, intelligence: +55 }, status: { morale: +85, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_art_exhibition": { chapter: 3, text: "你组织了抗战艺术展览，反响热烈。", choices: [{ text: "巡回展出", consequences: { resources: { reputation: +80, money: +55 }, status: { morale: +88, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_art_talent_development": { chapter: 3, text: "你培养了一批艺术人才。", choices: [{ text: "指导创作", consequences: { resources: { reputation: +70, intelligence: +50 }, status: { morale: +82, fatigue: +55 } }, nextNode: "chapter3_start" }] },
    "chapter3_comfort_performances_art": { chapter: 3, text: "你组织艺术慰劳演出，为前线战士送去精神食粮。", choices: [{ text: "继续演出", consequences: { resources: { reputation: +78 }, status: { morale: +90, fatigue: +65 } }, nextNode: "chapter3_start" }] },
    "chapter3_art_publication": { chapter: 3, text: "你将艺术作品结集出版。", choices: [{ text: "发行推广", consequences: { resources: { reputation: +75, money: +60 }, status: { morale: +86, fatigue: +58 } }, nextNode: "chapter3_start" }] },
    "chapter3_new_courses": { chapter: 3, text: "你在夜校增设了新课程。", choices: [{ text: "继续完善", consequences: { resources: { reputation: +70, intelligence: +55 }, status: { morale: +80, fatigue: +55 } }, nextNode: "chapter3_start" }] },
    "chapter3_expand_night_school": { chapter: 3, text: "你扩大了夜校规模。", choices: [{ text: "增加师资", consequences: { resources: { reputation: +75, money: +55 }, status: { morale: +82, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_more_teachers": { chapter: 3, text: "你培训了更多教师。", choices: [{ text: "派遣各地", consequences: { resources: { reputation: +72, intelligence: +52 }, status: { morale: +80, fatigue: +58 } }, nextNode: "chapter3_start" }] },
    "chapter3_branch_schools": { chapter: 3, text: "你建立了多个分校。", choices: [{ text: "统一管理", consequences: { resources: { reputation: +78, intelligence: +58 }, status: { morale: +84, fatigue: +65 } }, nextNode: "chapter3_start" }] },
    "chapter3_education_magazine": { chapter: 3, text: "你创办了教育刊物。", choices: [{ text: "广泛发行", consequences: { resources: { reputation: +70, intelligence: +60 }, status: { morale: +82, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_expand_donations": { chapter: 3, text: "你扩大了募捐规模。", choices: [{ text: "妥善分配", consequences: { resources: { money: +95, reputation: +80 }, status: { morale: +90, fatigue: +65 } }, nextNode: "chapter3_start" }] },
    "chapter3_new_donation_methods": { chapter: 3, text: "你创新了募捐形式。", choices: [{ text: "推广新方法", consequences: { resources: { money: +85, reputation: +75 }, status: { morale: +88, fatigue: +60 } }, nextNode: "chapter3_start" }] },
    "chapter3_charity_events": { chapter: 3, text: "你组织了义演义卖活动。", choices: [{ text: "继续举办", consequences: { resources: { money: +90, reputation: +78 }, status: { morale: +90, fatigue: +65 } }, nextNode: "chapter3_start" }] },
    "chapter3_long_term_mechanism": { chapter: 3, text: "你建立了长效募捐机制。", choices: [{ text: "完善制度", consequences: { resources: { money: +80, reputation: +75 }, status: { morale: +85, fatigue: +58 } }, nextNode: "chapter3_start" }] },
    "chapter3_transparent_management": { chapter: 3, text: "你实行公开透明的资金管理。", choices: [{ text: "公布账目", consequences: { resources: { reputation: +85, intelligence: +50 }, status: { morale: +92, fatigue: +55 } }, nextNode: "chapter3_start" }] },

    // Chapter 4
    "chapter4_secret_warehouse_building": { chapter: 4, text: "你在隐蔽地点建立了秘密仓库。", choices: [{ text: "继续储备", consequences: { resources: { food: +80, medicine: +50, reputation: +55 }, status: { morale: +65, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_distributed_storage_expanded": { chapter: 4, text: "你将物资分散储存在多个地点。", choices: [{ text: "继续分散", consequences: { resources: { food: +75, medicine: +45, reputation: +50 }, status: { morale: +63, fatigue: +58 } }, nextNode: "chapter4_start" }] },
    "chapter4_transport_network_building": { chapter: 4, text: "你建立了一个秘密运输网络。", choices: [{ text: "完善网络", consequences: { resources: { intelligence: +60, reputation: +55 }, status: { morale: +68, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_transport_training_expanded": { chapter: 4, text: "你培训了一批运输人员。", choices: [{ text: "派遣任务", consequences: { resources: { reputation: +58, intelligence: +52 }, status: { morale: +66, fatigue: +55 } }, nextNode: "chapter4_start" }] },
    "chapter4_expand_procurement": { chapter: 4, text: "你扩大了采购规模。", choices: [{ text: "继续采购", consequences: { resources: { money: +70, food: +90 }, status: { morale: +70, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_new_route_exploration": { chapter: 4, text: "你开辟了新的运输路线。", choices: [{ text: "测试路线", consequences: { resources: { intelligence: +65, reputation: +58 }, status: { morale: +72, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_contact_points_expanded": { chapter: 4, text: "你在沿途建立了多个联络点。", choices: [{ text: "加强联络", consequences: { resources: { intelligence: +58, reputation: +55 }, status: { morale: +68, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_guide_training_expanded": { chapter: 4, text: "你培训了一批向导。", choices: [{ text: "安排任务", consequences: { resources: { reputation: +60, intelligence: +52 }, status: { morale: +66, fatigue: +58 } }, nextNode: "chapter4_start" }] },
    "chapter4_emergency_plans": { chapter: 4, text: "你制定了应急预案。", choices: [{ text: "演练预案", consequences: { resources: { intelligence: +62, reputation: +58 }, status: { morale: +72, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_route_maintenance": { chapter: 4, text: "你定期维护运输路线。", choices: [{ text: "继续维护", consequences: { resources: { intelligence: +55, reputation: +52 }, status: { morale: +65, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_expand_business": { chapter: 4, text: "你扩大了地下钱庄的业务规模。", choices: [{ text: "继续发展", consequences: { resources: { money: +105, reputation: +62 }, status: { morale: +72, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_branch_network": { chapter: 4, text: "你建立了多个分支机构。", choices: [{ text: "统一管理", consequences: { resources: { money: +90, reputation: +58 }, status: { morale: +68, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_attract_customers": { chapter: 4, text: "你吸引了更多客户。", choices: [{ text: "提升服务", consequences: { resources: { money: +95, reputation: +58 }, status: { morale: +75, fatigue: +58 } }, nextNode: "chapter4_start" }] },
    "chapter4_financial_talent_training": { chapter: 4, text: "你培训了一批金融人才。", choices: [{ text: "委以重任", consequences: { resources: { reputation: +62, intelligence: +55 }, status: { morale: +72, fatigue: +60 } }, nextNode: "chapter4_start" }] },
    "chapter4_security_enhancement": { chapter: 4, text: "你加强了安全措施。", choices: [{ text: "定期检查", consequences: { resources: { intelligence: +58, money: +50 }, status: { morale: +68, fatigue: +55 } }, nextNode: "chapter4_start" }] },
    "chapter4_forgery_diversification": { chapter: 4, text: "你扩大了伪造证件的种类。", choices: [{ text: "继续生产", consequences: { resources: { intelligence: +68, reputation: +62 }, status: { morale: +75, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_forgery_quality_improvement": { chapter: 4, text: "你不断提高伪造质量。", choices: [{ text: "测试效果", consequences: { resources: { intelligence: +72, reputation: +58 }, status: { morale: +78, fatigue: +68 } }, nextNode: "chapter4_start" }] },
    "chapter4_forgery_security_network": { chapter: 4, text: "你建立了安全网络。", choices: [{ text: "加强保密", consequences: { resources: { intelligence: +65, reputation: +58 }, status: { morale: +72, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_forgery_professionals": { chapter: 4, text: "你培训了一批专业人员。", choices: [{ text: "安排生产", consequences: { resources: { reputation: +62, intelligence: +58 }, status: { morale: +75, fatigue: +68 } }, nextNode: "chapter4_start" }] },
    "chapter4_new_markets": { chapter: 4, text: "你开辟了新的市场。", choices: [{ text: "继续拓展", consequences: { resources: { intelligence: +62, money: +68 }, status: { morale: +72, fatigue: +62 } }, nextNode: "chapter4_start" }] },
    "chapter4_expand_boycott": { chapter: 4, text: "你扩大了抵制日货运动的范围。", choices: [{ text: "继续推广", consequences: { resources: { reputation: +78, intelligence: +58 }, status: { morale: +82, fatigue: +68 } }, nextNode: "chapter4_start" }] },
    "chapter4_supervision_mechanism": { chapter: 4, text: "你建立了监督机制。", choices: [{ text: "加强监督", consequences: { resources: { reputation: +72, intelligence: +52 }, status: { morale: +78, fatigue: +62 } }, nextNode: "chapter4_start" }] },
    "chapter4_promote_domestic": { chapter: 4, text: "你大力宣传国货的优点。", choices: [{ text: "扩大宣传", consequences: { resources: { reputation: +75, intelligence: +50 }, status: { morale: +80, fatigue: +65 } }, nextNode: "chapter4_start" }] },
    "chapter4_unite_merchants": { chapter: 4, text: "你联合了更多爱国商人。", choices: [{ text: "加强合作", consequences: { resources: { reputation: +80, money: +58 }, status: { morale: +85, fatigue: +68 } }, nextNode: "chapter4_start" }] },
    "chapter4_expose_collaborators": { chapter: 4, text: "你揭发了汉奸商人。", choices: [{ text: "继续监督", consequences: { resources: { reputation: +82, intelligence: +55 }, status: { morale: +88, fatigue: +68 } }, nextNode: "chapter4_start" }] },

    // Chapter 5
    "chapter5_intensive_training": { chapter: 5, text: "你组织了高强度的实战训练。", choices: [{ text: "继续训练", consequences: { resources: { ammo: +80, reputation: +72 }, status: { morale: +90, fatigue: +80 } }, nextNode: "chapter5_start" }] },
    "chapter5_new_tactics_learning": { chapter: 5, text: "你学习了新式战术。", choices: [{ text: "演练战术", consequences: { resources: { intelligence: +78, reputation: +68 }, status: { morale: +92, fatigue: +82 } }, nextNode: "chapter5_start" }] },
    "chapter5_joint_exercises": { chapter: 5, text: "你组织了联合演练。", choices: [{ text: "完善配合", consequences: { resources: { reputation: +80, intelligence: +72 }, status: { morale: +95, fatigue: +85 } }, nextNode: "chapter5_start" }] },
    "chapter5_equipment_check": { chapter: 5, text: "你仔细检查了所有装备武器。", choices: [{ text: "修理维护", consequences: { resources: { ammo: +85, intelligence: +68 }, status: { morale: +90, fatigue: +80 } }, nextNode: "chapter5_start" }] },
    "chapter5_psychological_training": { chapter: 5, text: "你进行了心理素质训练。", choices: [{ text: "继续强化", consequences: { resources: { reputation: +65 }, status: { morale: +98, fatigue: +75 } }, nextNode: "chapter5_start" }] },
    "chapter5_enemy_deployment_map": { chapter: 5, text: "你绘制了详细的敌军部署图。", choices: [{ text: "上报总部", consequences: { resources: { intelligence: +88, reputation: +78 }, status: { morale: +92, fatigue: +85 } }, nextNode: "chapter5_start" }] },
    "chapter5_japanese_war_plans": { chapter: 5, text: "你获取了日军的作战计划！", choices: [{ text: "立即汇报", consequences: { resources: { intelligence: +95, reputation: +85 }, status: { morale: +98, fatigue: +90 } }, nextNode: "chapter5_start" }] },
    "chapter5_defect_recruitment": { chapter: 5, text: "你成功策反了几名日军人员。", choices: [{ text: "安排任务", consequences: { resources: { intelligence: +85, reputation: +75 }, status: { morale: +92, fatigue: +88 } }, nextNode: "chapter5_start" }] },
    "chapter5_enemy_intelligence_network": { chapter: 5, text: "你在敌后建立了完善的情报网。", choices: [{ text: "持续监控", consequences: { resources: { intelligence: +90, reputation: +80 }, status: { morale: +95, fatigue: +90 } }, nextNode: "chapter5_start" }] },
    "chapter5_safe_return": { chapter: 5, text: "你安全返回根据地。", choices: [{ text: "汇报情况", consequences: { resources: { intelligence: +78, reputation: +72 }, status: { morale: +90, fatigue: +85 } }, nextNode: "chapter5_start" }] },
    "chapter5_militia_combat": { chapter: 5, text: "你组织民兵参加战斗。", choices: [{ text: "继续动员", consequences: { resources: { ammo: +75, reputation: +82 }, status: { morale: +98, fatigue: +90 } }, nextNode: "chapter5_start" }] },
    "chapter5_supply_protection": { chapter: 5, text: "你建立了完善的后勤保障体系。", choices: [{ text: "继续供给", consequences: { resources: { food: +100, reputation: +78 }, status: { morale: +95, fatigue: +92 } }, nextNode: "chapter5_start" }] },
    "chapter5_stretcher_teams": { chapter: 5, text: "你组织了担架队。", choices: [{ text: "待命出发", consequences: { resources: { medicine: +65, reputation: +75 }, status: { morale: +92, fatigue: +88 } }, nextNode: "chapter5_start" }] },
    "chapter5_mass_intelligence": { chapter: 5, text: "你发动群众组成情报网络。", choices: [{ text: "加强联络", consequences: { resources: { intelligence: +82, reputation: +72 }, status: { morale: +95, fatigue: +90 } }, nextNode: "chapter5_start" }] },
    "chapter5_inspire_masses": { chapter: 5, text: "你鼓舞群众士气，大家对胜利充满信心！", choices: [{ text: "发起动员", consequences: { resources: { reputation: +80 }, status: { morale: +100, fatigue: +85 } }, nextNode: "chapter5_start" }] }
};

// Merge missing nodes into storyNodes when this script loads
if (typeof storyNodes !== 'undefined') {
    Object.assign(storyNodes, missingNodes);
}

// Export merge function
window.mergeMissingNodes = function() {
    if (typeof storyNodes !== 'undefined') {
        Object.assign(storyNodes, missingNodes);
    }
};
