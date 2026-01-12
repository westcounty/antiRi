// 增强版第二章和第三章内容 + 角色系统修复

const enhancedChapterNodes = {
    // ==================== 第二章：正面坚守 - 增强版 ====================
    "chapter2_start": {
        chapter: 2,
        emotion: "determination",
        text: "1938年10月，你作为国军第88师的一名士兵李明，参加了武汉会战。这是抗战以来规模最大的一场战役，百万大军在长江两岸展开殊死搏斗。\n\n你的连队驻守在万家岭阵地，负责阻击日军第106师团。连长是个湖南人，他说：'弟兄们，身后就是武汉，退无可退！'\n\n战斗已经进行了三天三夜，阵地上硝烟弥漫，到处是弹坑和尸体。你的耳朵被炮声震得嗡嗡作响，但你知道，只要还有一口气，就要坚守下去。",
        background: "武汉会战，万家岭战役",
        choices: [
            {
                text: "坚守阵地，誓死不退",
                consequences: { resources: { ammo: +30, reputation: +40 }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter2_defend_position"
            },
            {
                text: "组织反击，趁敌疲惫",
                consequences: { resources: { ammo: +20, reputation: +50 }, status: { morale: +60, fatigue: +40 } },
                nextNode: "chapter2_counterattack"
            },
            {
                text: "救助伤员，稳定士气",
                consequences: { resources: { medicine: +30, reputation: +35 }, status: { morale: +40, fatigue: +20 } },
                nextNode: "chapter2_help_wounded"
            },
            {
                text: "侦察敌情，寻找弱点",
                consequences: { resources: { intelligence: +45, reputation: +30 }, status: { morale: +35, fatigue: +35 } },
                nextNode: "chapter2_scout_enemy"
            }
        ]
    },

    "chapter2_defend_position": {
        chapter: 2,
        emotion: "courage",
        text: "日军发起了又一波冲锋，炮火将阵地炸得天翻地覆。你紧握着手中的中正式步枪，瞄准冲上来的日军扣动扳机。\n\n'打！给老子打！'连长嘶哑地喊着。子弹从你身边呼啸而过，你的战友老张中弹倒下了，但你来不及悲伤，必须继续战斗。\n\n经过两个小时的激战，这波进攻终于被打退了。阵地上，活着的人已经不到一半。",
        background: "激烈的阵地防御战",
        choices: [
            { text: "抢修工事，准备下一轮", consequences: { resources: { reputation: +30 }, status: { morale: +30, fatigue: +20 } }, nextNode: "chapter2_repair_fortifications" },
            { text: "收集弹药，补充武器", consequences: { resources: { ammo: +40 }, status: { morale: +25, fatigue: +15 } }, nextNode: "chapter2_collect_ammo" },
            { text: "照顾伤员，鼓舞士气", consequences: { resources: { medicine: +20, reputation: +25 }, status: { morale: +40, fatigue: +10 } }, nextNode: "chapter2_boost_morale" }
        ]
    },

    "chapter2_counterattack": {
        chapter: 2,
        emotion: "fierce",
        text: "趁着日军进攻受挫、士气低落的时机，连长决定组织反击。你和十几个战友悄悄摸到敌人侧翼，等待信号弹升起。\n\n'冲啊！'随着一声怒吼，你们如猛虎下山般扑向敌人。日军被这突如其来的反击打懵了，阵脚大乱。你端着刺刀，与一个日军士兵展开肉搏，最终将他刺倒。\n\n这次反击夺回了一个小高地，缴获了一挺重机枪和几箱弹药。",
        background: "反击得手，缴获武器",
        choices: [
            { text: "巩固阵地，扩大战果", consequences: { resources: { ammo: +50, reputation: +45 }, status: { morale: +50, fatigue: +35 } }, nextNode: "chapter2_expand_victory" },
            { text: "撤回原阵地，保存实力", consequences: { resources: { ammo: +30, reputation: +30 }, status: { morale: +35, fatigue: +20 } }, nextNode: "chapter2_tactical_retreat" },
            { text: "设置埋伏，等敌反扑", consequences: { resources: { intelligence: +40, reputation: +35 }, status: { morale: +40, fatigue: +25 } }, nextNode: "chapter2_set_ambush" }
        ]
    },

    "chapter2_help_wounded": {
        chapter: 2,
        emotion: "compassion",
        text: "阵地上到处是伤员的呻吟声。你找到了军医老孙，帮他一起抢救伤员。没有麻药，伤员咬着木棍忍受剧痛；没有绷带，你撕下自己的衬衫包扎伤口。\n\n'谢谢你，兄弟。'一个腹部中弹的战友握着你的手说，'别管我了，继续打鬼子去。'你含着泪点点头，这就是中国军人的骨气。",
        background: "战地救护，生死与共",
        choices: [
            { text: "继续救治更多伤员", consequences: { resources: { medicine: +35, reputation: +40 }, status: { morale: +45, fatigue: +25 } }, nextNode: "chapter2_save_more" },
            { text: "组织转运重伤员", consequences: { resources: { reputation: +35 }, status: { morale: +40, fatigue: +30 } }, nextNode: "chapter2_evacuate_wounded" },
            { text: "返回战位继续战斗", consequences: { resources: { ammo: +20, reputation: +30 }, status: { morale: +35, fatigue: +15 } }, nextNode: "chapter2_return_to_fight" }
        ]
    },

    "chapter2_scout_enemy": {
        chapter: 2,
        emotion: "tension",
        text: "你自告奋勇去侦察敌情。趁着夜色，你匍匐前进，悄悄接近日军阵地。通过观察，你发现日军的弹药补给点就在一片树林里，而且守卫松懈。\n\n这个情报太重要了！如果能炸掉敌人的弹药库，他们的进攻就会被大大削弱。你悄悄退回来，向连长汇报了这个发现。",
        background: "深入敌后侦察",
        choices: [
            { text: "申请带人去炸弹药库", consequences: { resources: { ammo: +60, intelligence: +50 }, status: { morale: +55, fatigue: +40 } }, nextNode: "chapter2_bomb_depot" },
            { text: "汇报情报等待命令", consequences: { resources: { intelligence: +55, reputation: +35 }, status: { morale: +40, fatigue: +20 } }, nextNode: "chapter2_report_intel" },
            { text: "继续侦察获取更多情报", consequences: { resources: { intelligence: +45 }, status: { morale: +35, fatigue: +35 } }, nextNode: "chapter2_continue_scout" }
        ]
    },

    // 第二章后续节点
    "chapter2_repair_fortifications": {
        chapter: 2,
        emotion: "determination",
        text: "你和战友们连夜抢修工事，加固掩体，挖深战壕。虽然疲惫不堪，但大家都知道，这些工事就是生命线。",
        background: "抢修工事",
        choices: [
            { text: "继续备战", consequences: { resources: { reputation: +25 }, status: { morale: +30 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_collect_ammo": {
        chapter: 2,
        emotion: "resourceful",
        text: "你从战场上收集了不少弹药和武器，包括几支完好的三八式步枪和大量子弹。这些都是宝贵的战斗资源。",
        background: "收集战利品",
        choices: [
            { text: "分发武器弹药", consequences: { resources: { ammo: +35 }, status: { morale: +35 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_boost_morale": {
        chapter: 2,
        emotion: "warmth",
        text: "你给伤员们讲述后方人民的支持，告诉他们家人都在等着他们回去。看到战友们眼中重新燃起希望的光芒，你感到无比欣慰。",
        background: "鼓舞士气",
        choices: [
            { text: "继续战斗", consequences: { resources: { reputation: +30 }, status: { morale: +45 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_expand_victory": {
        chapter: 2,
        emotion: "triumph",
        text: "你们乘胜追击，又夺取了两个山头。日军106师团陷入了重围，这就是著名的万家岭大捷！",
        background: "扩大战果",
        choices: [
            { text: "继续进攻", consequences: { resources: { reputation: +55, ammo: +40 }, status: { morale: +60 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_tactical_retreat": {
        chapter: 2,
        emotion: "prudent",
        text: "你们带着缴获的武器撤回原阵地，保存了有生力量。连长说：'打仗不是蛮干，要讲究策略。'",
        background: "战术撤退",
        choices: [
            { text: "整顿部队", consequences: { resources: { ammo: +25 }, status: { morale: +35, fatigue: -15 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_set_ambush": {
        chapter: 2,
        emotion: "cunning",
        text: "你们在高地周围设下埋伏。果然，日军很快组织了反扑，却一头撞进了伏击圈，损失惨重。",
        background: "伏击成功",
        choices: [
            { text: "打扫战场", consequences: { resources: { intelligence: +45, ammo: +35 }, status: { morale: +50 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_save_more": {
        chapter: 2,
        emotion: "compassion",
        text: "你救治了十几名伤员，他们中有很多人后来重返战场。你的医术虽然粗糙，但你的爱心挽救了许多生命。",
        background: "救死扶伤",
        choices: [
            { text: "继续工作", consequences: { resources: { medicine: +30, reputation: +40 }, status: { morale: +50 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_evacuate_wounded": {
        chapter: 2,
        emotion: "responsibility",
        text: "你组织担架队将重伤员转移到后方医院。这是一项危险的任务，但你完成得很好。",
        background: "转运伤员",
        choices: [
            { text: "返回阵地", consequences: { resources: { reputation: +35 }, status: { morale: +40 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_return_to_fight": {
        chapter: 2,
        emotion: "duty",
        text: "你擦干眼泪，重新拿起武器返回战位。战友们的牺牲不能白费，必须继续战斗！",
        background: "重返战场",
        choices: [
            { text: "继续战斗", consequences: { resources: { ammo: +20 }, status: { morale: +40, fatigue: +10 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_bomb_depot": {
        chapter: 2,
        emotion: "daring",
        text: "你带领三名战友潜入敌后，成功炸毁了日军的弹药库！巨大的爆炸照亮了夜空，这是一次辉煌的胜利！",
        background: "炸毁敌军弹药库",
        choices: [
            { text: "安全撤离", consequences: { resources: { ammo: +50, reputation: +60 }, status: { morale: +60 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_report_intel": {
        chapter: 2,
        emotion: "disciplined",
        text: "你详细汇报了侦察结果，上级很快制定了作战计划。你的情报为后续作战提供了重要依据。",
        background: "汇报情报",
        choices: [
            { text: "等待命令", consequences: { resources: { intelligence: +50, reputation: +35 }, status: { morale: +35 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_continue_scout": {
        chapter: 2,
        emotion: "thorough",
        text: "你继续侦察，绘制了一份详细的敌军部署图。这份情报价值连城，对整个战役都有帮助。",
        background: "深入侦察",
        choices: [
            { text: "返回汇报", consequences: { resources: { intelligence: +55 }, status: { morale: +40, fatigue: +25 } }, nextNode: "chapter2_progress" }
        ]
    },

    // 第二章进度节点
    "chapter2_progress": {
        chapter: 2,
        emotion: "reflection",
        text: "武汉会战持续了四个多月，虽然最终武汉失守，但日军也付出了惨重代价，战略进攻能力大大削弱。你在战斗中成长为一名经验丰富的老兵。\n\n长官找到你说：'李明，你表现出色。现在有两个选择：继续在正面战场战斗，或者去后方接受新的任务。'",
        background: "武汉会战结束",
        choices: [
            {
                text: "继续在正面战场战斗",
                consequences: { status: { morale: +20 } },
                nextNode: "chapter2_more_battles"
            },
            {
                text: "我准备好接受新的使命",
                consequences: { status: { morale: +25 }, flags: { ready_for_chapter3: true } },
                nextNode: "transition_chapter3"
            }
        ]
    },

    "chapter2_more_battles": {
        chapter: 2,
        emotion: "determination",
        text: "你决定继续战斗。接下来的日子里，你参加了更多的战役。",
        background: "继续战斗",
        choices: [
            { text: "参加长沙保卫战", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter2_changsha" },
            { text: "参加随枣会战", consequences: { resources: { ammo: +30 }, status: { morale: +30 } }, nextNode: "chapter2_suizao" },
            { text: "我准备好进入下一阶段", consequences: { status: { morale: +20 } }, nextNode: "transition_chapter3" }
        ]
    },

    "chapter2_changsha": {
        chapter: 2,
        emotion: "heroic",
        text: "在长沙保卫战中，你参与了城市防御战。中国军队在薛岳将军的指挥下，三次打退日军进攻，取得辉煌胜利！",
        background: "长沙会战大捷",
        choices: [
            { text: "继续战斗", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_suizao": {
        chapter: 2,
        emotion: "fierce",
        text: "在随枣会战中，你所在的部队与日军进行了艰苦的拉锯战。虽然伤亡惨重，但成功阻止了日军西进。",
        background: "随枣会战",
        choices: [
            { text: "整顿休整", consequences: { resources: { ammo: +35 }, status: { morale: +40, fatigue: -20 } }, nextNode: "chapter2_progress" }
        ]
    },

    // ==================== 第三章：文化抗战 - 增强版 ====================
    "chapter3_start": {
        chapter: 3,
        emotion: "passionate",
        text: "1940年春，你作为记者张华，来到了战时首都重庆。这座山城聚集了大量从沦陷区逃来的文化人士，他们用笔和声音继续着另一种形式的战斗。\n\n你加入了《新华日报》，负责报道前线战况和后方生活。主编老周是个五十多岁的老报人，他说：'笔杆子也是枪杆子，我们的文章要让每个中国人都燃起抗战的热情！'\n\n今天，你接到了几个任务：去采访从前线回来的伤兵，去报道工厂的生产情况，还要写一篇社论鼓舞民众士气。你决定先做哪一件？",
        background: "重庆，战时文化抗战中心",
        choices: [
            {
                text: "采访前线伤兵，记录真实战况",
                consequences: { resources: { intelligence: +40, reputation: +35 }, status: { morale: +45, fatigue: +25 } },
                nextNode: "chapter3_interview_soldiers"
            },
            {
                text: "报道后方工厂，宣传生产支前",
                consequences: { resources: { reputation: +40 }, status: { morale: +40, fatigue: +20 } },
                nextNode: "chapter3_report_factories"
            },
            {
                text: "撰写社论文章，鼓舞民众士气",
                consequences: { resources: { reputation: +45 }, status: { morale: +50, fatigue: +30 } },
                nextNode: "chapter3_write_editorial"
            },
            {
                text: "采访流亡学生，关注教育问题",
                consequences: { resources: { reputation: +35, intelligence: +30 }, status: { morale: +40, fatigue: +20 } },
                nextNode: "chapter3_interview_students"
            }
        ]
    },

    "chapter3_interview_soldiers": {
        chapter: 3,
        emotion: "moved",
        text: "在陆军医院里，你采访了十几位从前线回来的伤兵。他们讲述了激烈的战斗、战友的牺牲、对胜利的信念。\n\n一位失去右臂的年轻士兵说：'我不后悔，因为身后是我们的家园。如果让我再选一次，我还是会冲上去。'\n\n你含着热泪记录下这些话，这将成为最动人的报道。",
        background: "陆军医院采访",
        choices: [
            { text: "整理采访稿件发表", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter3_publish_interview" },
            { text: "帮助伤员写家书", consequences: { resources: { reputation: +40 }, status: { morale: +45, fatigue: +15 } }, nextNode: "chapter3_write_letters" },
            { text: "记录更多战斗故事", consequences: { resources: { intelligence: +40 }, status: { morale: +40, fatigue: +20 } }, nextNode: "chapter3_more_stories" }
        ]
    },

    "chapter3_report_factories": {
        chapter: 3,
        emotion: "admiration",
        text: "你来到了重庆的兵工厂。这里日夜不停地生产着枪炮弹药，工人们三班倒，用自己的汗水支援前线。\n\n一位老工人师傅说：'我儿子在前线打仗，我就在后方造枪。我们父子俩一起打鬼子！'\n\n这种精神深深打动了你，这就是中华民族的脊梁！",
        background: "兵工厂采访",
        choices: [
            { text: "报道工人的爱国精神", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter3_worker_spirit" },
            { text: "了解生产技术创新", consequences: { resources: { intelligence: +40 }, status: { morale: +35 } }, nextNode: "chapter3_tech_innovation" },
            { text: "采访女工的故事", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_women_workers" }
        ]
    },

    "chapter3_write_editorial": {
        chapter: 3,
        emotion: "inspired",
        text: "你坐在油灯下，写下了一篇激昂的社论《我们必将胜利》。文章分析了国际形势，鼓舞了全国人民的抗战信心。\n\n这篇文章发表后引起强烈反响，很多读者来信表示受到了鼓舞。甚至有人将文章抄写后寄到前线，让战士们传阅。",
        background: "挥笔写社论",
        choices: [
            { text: "继续撰写更多文章", consequences: { resources: { reputation: +50 }, status: { morale: +55 } }, nextNode: "chapter3_more_articles" },
            { text: "组织读者座谈会", consequences: { resources: { reputation: +45 }, status: { morale: +45, fatigue: +20 } }, nextNode: "chapter3_reader_meeting" },
            { text: "投稿其他报刊扩大影响", consequences: { resources: { reputation: +55 }, status: { morale: +50 } }, nextNode: "chapter3_expand_influence" }
        ]
    },

    "chapter3_interview_students": {
        chapter: 3,
        emotion: "hope",
        text: "你采访了一群从北平、天津等地逃来的流亡学生。他们在极其艰苦的条件下坚持学习，组织了读书会和抗日宣传队。\n\n一位女学生说：'知识就是力量。我们现在好好学习，将来要用知识建设新中国！'\n\n这些年轻人的精神让你看到了中国的希望。",
        background: "流亡学生采访",
        choices: [
            { text: "报道学生的学习生活", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_student_life" },
            { text: "帮助组织抗日宣传", consequences: { resources: { reputation: +45 }, status: { morale: +50, fatigue: +25 } }, nextNode: "chapter3_organize_propaganda" },
            { text: "募集物资支援学生", consequences: { resources: { food: +20, reputation: +35 }, status: { morale: +40 } }, nextNode: "chapter3_support_students" }
        ]
    },

    // 第三章后续节点
    "chapter3_publish_interview": {
        chapter: 3,
        emotion: "impact",
        text: "你的采访报道发表后，在社会上引起强烈反响。许多人被伤兵们的故事打动，纷纷捐款捐物支援前线。",
        background: "报道引发反响",
        choices: [
            { text: "继续做更多报道", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_write_letters": {
        chapter: 3,
        emotion: "warmth",
        text: "你帮助不识字的伤员写家书。当你读着他们想对家人说的话时，不禁热泪盈眶。这些朴实的话语比任何文章都动人。",
        background: "帮写家书",
        choices: [
            { text: "寄出家书", consequences: { resources: { reputation: +35 }, status: { morale: +50 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_more_stories": {
        chapter: 3,
        emotion: "recording",
        text: "你记录下了几十个战斗故事，这些都将成为珍贵的历史资料。每一个故事都是一段可歌可泣的抗战史诗。",
        background: "记录战斗故事",
        choices: [
            { text: "整理出版", consequences: { resources: { intelligence: +45, reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_worker_spirit": {
        chapter: 3,
        emotion: "admiration",
        text: "你的报道《后方的战士》发表后，工人们的爱国精神感动了无数人。工厂产量大幅提升，支援前线的物资源源不断。",
        background: "报道工人精神",
        choices: [
            { text: "继续报道", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_tech_innovation": {
        chapter: 3,
        emotion: "impressed",
        text: "你了解到工人们在缺乏设备的情况下，自主创新了许多生产技术。这些创新大大提高了武器产量。",
        background: "技术创新报道",
        choices: [
            { text: "发表技术报道", consequences: { resources: { intelligence: +45 }, status: { morale: +40 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_women_workers": {
        chapter: 3,
        emotion: "respect",
        text: "女工们承担了大量工作，她们白天工作，晚上还要照顾家庭。她们的坚强令人敬佩。",
        background: "女工故事",
        choices: [
            { text: "发表专题报道", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_more_articles": {
        chapter: 3,
        emotion: "prolific",
        text: "你笔耕不辍，一篇篇激昂的文章发表出来，在社会上产生了广泛影响。有人称你为'抗战笔兵'。",
        background: "文章不断发表",
        choices: [
            { text: "继续写作", consequences: { resources: { reputation: +55 }, status: { morale: +55 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_reader_meeting": {
        chapter: 3,
        emotion: "interaction",
        text: "你组织了一场读者座谈会，与读者面对面交流。大家对抗战形势的讨论热烈而深入。",
        background: "读者座谈会",
        choices: [
            { text: "继续组织活动", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_expand_influence": {
        chapter: 3,
        emotion: "influence",
        text: "你的文章被多家报刊转载，影响力越来越大。你的名字开始被更多人知道。",
        background: "扩大影响",
        choices: [
            { text: "继续扩大影响", consequences: { resources: { reputation: +60 }, status: { morale: +55 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_student_life": {
        chapter: 3,
        emotion: "hope",
        text: "你的报道让更多人关注到流亡学生的处境，社会各界纷纷伸出援手。",
        background: "学生生活报道",
        choices: [
            { text: "继续关注学生", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_organize_propaganda": {
        chapter: 3,
        emotion: "active",
        text: "你帮助学生们组织了一次大规模的抗日宣传活动，街头演讲、张贴标语、散发传单，声势浩大。",
        background: "抗日宣传活动",
        choices: [
            { text: "继续组织活动", consequences: { resources: { reputation: +50 }, status: { morale: +55 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_support_students": {
        chapter: 3,
        emotion: "generosity",
        text: "你发起了一次募捐活动，为流亡学生筹集了不少物资。学生们感激不尽。",
        background: "支援学生",
        choices: [
            { text: "继续帮助", consequences: { resources: { food: +25, reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_progress" }
        ]
    },

    // 第三章进度节点
    "chapter3_progress": {
        chapter: 3,
        emotion: "reflection",
        text: "在重庆的这段时间，你见证了文化抗战的力量。笔墨虽然无法直接杀敌，但它唤醒了千千万万中国人的爱国热情。\n\n主编老周找到你：'张华，你的工作很出色。现在有个机会，可以去沦陷区做秘密工作，你愿意吗？'",
        background: "文化抗战的成果",
        choices: [
            {
                text: "继续在后方从事文化工作",
                consequences: { status: { morale: +20 } },
                nextNode: "chapter3_more_work"
            },
            {
                text: "我准备好接受新的挑战",
                consequences: { status: { morale: +30 }, flags: { ready_for_chapter4: true } },
                nextNode: "transition_chapter4"
            }
        ]
    },

    "chapter3_more_work": {
        chapter: 3,
        emotion: "dedicated",
        text: "你决定继续在后方从事文化工作。接下来你可以：",
        background: "继续文化抗战",
        choices: [
            { text: "编写抗战教材", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter3_textbooks" },
            { text: "组织文艺演出", consequences: { resources: { reputation: +45 }, status: { morale: +45 } }, nextNode: "chapter3_performances" },
            { text: "我准备好进入下一阶段", consequences: { status: { morale: +20 } }, nextNode: "transition_chapter4" }
        ]
    },

    "chapter3_textbooks": {
        chapter: 3,
        emotion: "educational",
        text: "你参与编写了一套抗战教材，在各地学校广泛使用。孩子们从小就懂得了爱国的道理。",
        background: "编写教材",
        choices: [
            { text: "继续工作", consequences: { resources: { reputation: +45 }, status: { morale: +40 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_performances": {
        chapter: 3,
        emotion: "cultural",
        text: "你组织了多场抗战文艺演出，话剧、歌曲、舞蹈，每一场都座无虚席，极大地鼓舞了民众士气。",
        background: "文艺演出",
        choices: [
            { text: "继续组织", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter3_progress" }
        ]
    }
};

// 角色信息更新函数
function updateCharacterForChapter(chapter) {
    const characters = [
        { id: 0, name: "王二柱", role: "村民", description: "河北完县野场村农民" },
        { id: 1, name: "王二柱", role: "游击队员", description: "抗日游击队战士" },
        { id: 2, name: "李明", role: "国军士兵", description: "国民革命军第88师士兵" },
        { id: 3, name: "张华", role: "记者", description: "《新华日报》战地记者" },
        { id: 4, name: "王二柱", role: "村长", description: "野场村村长，组织大生产" },
        { id: 5, name: "王二柱", role: "抗战老兵", description: "见证胜利的抗战老兵" },
        { id: 6, name: "王二柱", role: "胜利者", description: "抗战胜利的见证者" }
    ];
    
    if (chapter >= 0 && chapter < characters.length) {
        const char = characters[chapter];
        gameState.currentCharacter = char.id;
        
        // 更新UI显示
        const charNameEl = document.getElementById('character-name');
        const charRoleEl = document.getElementById('character-role');
        
        if (charNameEl) charNameEl.textContent = char.name;
        if (charRoleEl) charRoleEl.textContent = char.role;
        
        console.log('Character updated:', char.name, char.role);
    }
}

// 合并增强节点
function mergeEnhancedChapterNodes() {
    if (typeof storyNodes !== 'undefined') {
        Object.assign(storyNodes, enhancedChapterNodes);
        console.log('Enhanced chapter nodes merged:', Object.keys(enhancedChapterNodes).length);
    }
}

// 重写showCurrentNode以更新角色
const originalShowCurrentNode = typeof showCurrentNode === 'function' ? showCurrentNode : null;

function enhancedShowCurrentNode() {
    const node = storyNodes[gameState.currentNode];
    if (node && node.chapter !== undefined) {
        // 检查是否切换了章节
        if (node.chapter !== gameState.currentChapter) {
            gameState.currentChapter = node.chapter;
            updateCharacterForChapter(node.chapter);
            
            // 更新章节显示
            const chapterEl = document.getElementById('chapter-name');
            if (chapterEl && typeof chapters !== 'undefined' && chapters[node.chapter]) {
                chapterEl.textContent = chapters[node.chapter].name;
            }
        }
    }
    
    if (originalShowCurrentNode) {
        originalShowCurrentNode();
    }
}

// 暴露函数
if (typeof window !== 'undefined') {
    window.updateCharacterForChapter = updateCharacterForChapter;
    window.mergeEnhancedChapterNodes = mergeEnhancedChapterNodes;
}
