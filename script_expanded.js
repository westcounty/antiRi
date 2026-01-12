// 游戏补充脚本 - 包含所有缺失的过渡节点和完整故事线

// ==================== 第一章补充节点 ====================
const chapter1Supplementary = {
    // 射击训练补充
    "chapter1_sniper_training": {
        chapter: 1,
        emotion: "precision",
        text: "你深入学习狙击技术，包括风速计算、远程瞄准和隐蔽移动。你的精准度不断提高，已经成为队伍中最出色的射手之一。",
        background: "狙击训练，精益求精",
        choices: [
            {
                text: "执行狙击任务",
                consequences: { resources: { ammo: +40, reputation: +50, intelligence: +30 }, status: { morale: +45, fatigue: +40 } },
                nextNode: "chapter1_sniper_mission"
            },
            {
                text: "培训其他队员",
                consequences: { resources: { reputation: +45, intelligence: +25 }, status: { morale: +40, fatigue: +35 } },
                nextNode: "chapter1_train_sniper_new"
            },
            {
                text: "研究日军狙击手战术",
                consequences: { resources: { intelligence: +35 }, status: { morale: +35, fatigue: +30 } },
                nextNode: "chapter1_study_sniper_tactics"
            },
            {
                text: "自制伪装装备",
                consequences: { resources: { intelligence: +30, reputation: +35 }, status: { morale: +40, fatigue: +35 } },
                nextNode: "chapter1_improvised_camo"
            },
            {
                text: "记录狙击心得",
                consequences: { resources: { intelligence: +40, reputation: +40 }, status: { morale: +45, fatigue: +30 } },
                nextNode: "chapter1_sniper_notes"
            }
        ]
    },
    
    "chapter1_sniper_mission": {
        chapter: 1,
        emotion: "focus",
        text: "你接到任务，要消灭日军的一名高级指挥官。你在指定位置潜伏了三天，终于等到了目标出现。你屏住呼吸，扣动了扳机……",
        background: "狙击任务，一击必中",
        choices: [
            {
                text: "成功完成任务",
                consequences: { resources: { ammo: +35, reputation: +60, intelligence: +35 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter1_mission_success"
            },
            {
                text: "立即撤离",
                consequences: { resources: { intelligence: +30, reputation: +50 }, status: { morale: +45, fatigue: +40 } },
                nextNode: "chapter1_quick_extract"
            },
            {
                text: "收集情报再撤离",
                consequences: { resources: { intelligence: +45, reputation: +55 }, status: { morale: +50, fatigue: +45 } },
                nextNode: "chapter1_collect_intel"
            },
            {
                text: "制造混乱掩护撤离",
                consequences: { resources: { ammo: +25, reputation: +45 }, status: { morale: +45, fatigue: +40 } },
                nextNode: "chapter1_chaos_cover"
            },
            {
                text: "等待接应",
                consequences: { resources: { intelligence: +25, reputation: +40 }, status: { morale: +40, fatigue: +35 } },
                nextNode: "chapter1_wait_extraction"
            }
        ]
    },
    
    // 医护训练补充
    "chapter1_advanced_first_aid": {
        chapter: 1,
        emotion: "compassion",
        text: "你学习了更高级的急救技术，包括手术缝合、输血技术和复杂伤情处理。你成为了游击队不可或缺的医护力量。",
        background: "高级医护培训",
        choices: [
            {
                text: "建立野战医院",
                consequences: { resources: { medicine: +40, reputation: +50, money: +30 }, status: { morale: +50, fatigue: +45 } },
                nextNode: "chapter1_field_hospital"
            },
            {
                text: "培训医护小组",
                consequences: { resources: { medicine: +35, reputation: +45 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_medical_team"
            },
            {
                text: "收集医护物资",
                consequences: { resources: { medicine: +45, intelligence: +25 }, status: { morale: +45, fatigue: +40 } },
                nextNode: "chapter1_medical_supplies"
            },
            {
                text: "编写医护手册",
                consequences: { resources: { intelligence: +40, reputation: +45 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_medical_manual"
            },
            {
                text: "研究中药代替方案",
                consequences: { resources: { medicine: +30, intelligence: +35 }, status: { morale: +45, fatigue: +35 } },
                nextNode: "chapter1_chinese_medicine_research"
            }
        ]
    },
    
    // 村民互助补充
    "chapter1_teach_adults": {
        chapter: 1,
        emotion: "education",
        text: "你开始在夜校教成年人识字。他们白天劳累，晚上依然坚持学习。很快，村民们的文化水平有了明显提高。",
        background: "成人教育，点燃希望",
        choices: [
            {
                text: "增设抗战课程",
                consequences: { resources: { reputation: +45, intelligence: +35 }, status: { morale: +55, fatigue: +40 } },
                nextNode: "chapter1_war_courses"
            },
            {
                text: "培养小教师",
                consequences: { resources: { reputation: +50, intelligence: +30 }, status: { morale: +55, fatigue: +35 } },
                nextNode: "chapter1_student_teachers"
            },
            {
                text: "建立图书角",
                consequences: { resources: { intelligence: +30, reputation: +40 }, status: { morale: +50, fatigue: +35 } },
                nextNode: "chapter1_book_corner"
            },
            {
                text: "组织学习竞赛",
                consequences: { resources: { reputation: +45, morale: +30 }, status: { morale: +55, fatigue: +30 } },
                nextNode: "chapter1_study_competition"
            },
            {
                text: "编写简易教材",
                consequences: { resources: { intelligence: +40, reputation: +45 }, status: { morale: +55, fatigue: +40 } },
                nextNode: "chapter1_simple_textbooks"
            }
        ]
    },
    
    // 爆破训练补充
    "chapter1_blow_railroad": {
        chapter: 1,
        emotion: "explosives",
        text: "你们成功炸毁了日军的一段铁路。日军的补给线被切断，运输陷入瘫痪。这是游击队的又一次重大胜利。",
        background: "铁路被毁，敌人慌乱",
        choices: [
            {
                text: "扩大战果",
                consequences: { resources: { intelligence: +45, reputation: +55 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter1_expand_railroad_success"
            },
            {
                text: "迅速撤离",
                consequences: { resources: { intelligence: +30, reputation: +45 }, status: { morale: +50, fatigue: +45 } },
                nextNode: "chapter1_retreat"
            },
            {
                text: "收集战利品",
                consequences: { resources: { ammo: +40, money: +25 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_collect_railroad_spoils"
            },
            {
                text: "建立铁路情报网",
                consequences: { resources: { intelligence: +50, reputation: +45 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter1_railroad_intel_network"
            },
            {
                text: "继续破坏铁路",
                consequences: { resources: { ammo: +35, reputation: +50 }, status: { morale: +55, fatigue: +50 } },
                nextNode: "chapter1_more_railroad_sabotage"
            }
        ]
    },
    
    // 情报网络补充
    "chapter1_recruit_agents": {
        chapter: 1,
        emotion: "network",
        text: "你在各村发展可靠的联络员。他们有的是教师，有的是商人，有的是农民，但他们都有一颗爱国的心。",
        background: "情报网络，遍布各地",
        choices: [
            {
                text: "培训联络技巧",
                consequences: { resources: { intelligence: +40, reputation: +40 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_agent_training"
            },
            {
                text: "建立联络暗号",
                consequences: { resources: { intelligence: +45, reputation: +35 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_secret_codes"
            },
            {
                text: "设置紧急联络方式",
                consequences: { resources: { intelligence: +40, reputation: +40 }, status: { morale: +50, fatigue: +35 } },
                nextNode: "chapter1_emergency_contact"
            },
            {
                text: "建立备用联络点",
                consequences: { resources: { intelligence: +35, reputation: +45 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter1_backup_contact_points"
            },
            {
                text: "定期联络检查",
                consequences: { resources: { intelligence: +30, reputation: +40 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter1_contact_check"
            }
        ]
    }
};

// ==================== 第二章补充节点 ====================
const chapter2Supplementary = {
    // 救助伤员补充
    "chapter2_rescue_wounded": {
        chapter: 2,
        emotion: "heroism",
        text: "你冒着枪林弹雨抢救伤员。你的勇敢激励了身边的人更多人加入了救援行动。",
        background: "抢救伤员，生命至上",
        choices: [
            {
                text: "建立急救站",
                consequences: { resources: { medicine: +45, reputation: +60 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter2_first_aid_station"
            },
            {
                text: "组织救护队",
                consequences: { resources: { medicine: +40, reputation: +55 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter2_rescue_team"
            },
            {
                text: "改进急救方法",
                consequences: { resources: { intelligence: +40, medicine: +35 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter2_better_first_aid"
            },
            {
                text: "记录伤员信息",
                consequences: { resources: { intelligence: +35, reputation: +50 }, status: { morale: +55, fatigue: +40 } },
                nextNode: "chapter2_wounded_records"
            },
            {
                text: "组织伤员转移",
                consequences: { resources: { medicine: +35, reputation: +55 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter2_evacuate_wounded"
            }
        ]
    },
    
    // 战术反击补充
    "chapter2_counter_charge": {
        chapter: 2,
        emotion: "counterattack",
        text: "你带领战士们发起了反击。日军被这突如其来的冲锋打乱了阵脚，丢下武器向后逃窜。",
        background: "反击冲锋，敌军溃散",
        choices: [
            {
                text: "乘胜追击",
                consequences: { resources: { ammo: +50, reputation: +60 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter2_pursue_enemy"
            },
            {
                text: "巩固阵地",
                consequences: { resources: { reputation: +50, intelligence: +30 }, status: { morale: +55, fatigue: +50 } },
                nextNode: "chapter2_consolidate_position"
            },
            {
                text: "俘虏敌军",
                consequences: { resources: { intelligence: +45, reputation: +55 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter2_capture_enemy"
            },
            {
                text: "打扫战场",
                consequences: { resources: { ammo: +40, money: +30 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter2_gather_supplies"
            },
            {
                text: "向总部报捷",
                consequences: { resources: { reputation: +65, intelligence: +35 }, status: { morale: +65, fatigue: +40 } },
                nextNode: "chapter2_report_victory"
            }
        ]
    },
    
    // 埋伏战术补充
    "chapter2_set_ambush": {
        chapter: 2,
        emotion: "strategy",
        text: "你精心布置了埋伏圈。日军冲锋部队进入了你们的包围圈，随着一声令下，枪声大作，日军倒下一片。",
        background: "伏击成功，敌军损失惨重",
        choices: [
            {
                text: "全歼敌军",
                consequences: { resources: { ammo: +45, reputation: +60 }, status: { morale: +65, fatigue: +50 } },
                nextNode: "chapter2_annihilate_enemy"
            },
            {
                text: "释放俘虏宣传",
                consequences: { resources: { reputation: +55, intelligence: +35 }, status: { morale: +60, fatigue: +45 } },
                nextNode: "chapter2_release_propaganda"
            },
            {
                text: "收集武器装备",
                consequences: { resources: { ammo: +50, money: +25 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter2_gather_weapons"
            },
            {
                text: "审讯俘虏获取情报",
                consequences: { resources: { intelligence: +45, reputation: +45 }, status: { morale: +55, fatigue: +45 } },
                nextNode: "chapter2_interrogate_prisoners"
            },
            {
                text: "快速撤离",
                consequences: { resources: { intelligence: +30 }, status: { morale: +50, fatigue: +40 } },
                nextNode: "chapter2_ambush_escape"
            }
        ]
    },
    
    // 协调进攻补充
    "chapter2_coordinated_attack": {
        chapter: 2,
        emotion: "coordination",
        text: "你们与友军配合，对日军形成了夹击之势。日军腹背受敌，阵脚大乱。",
        background: "协同作战，两面夹击",
        choices: [
            {
                text: "全面进攻",
                consequences: { resources: { ammo: +55, reputation: +70 }, status: { morale: +70, fatigue: +60 } },
                nextNode: "chapter2_full_assault"
            },
            {
                text: "分割包围",
                consequences: { resources: { intelligence: +50, reputation: +60 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter2_pincer_movement"
            },
            {
                text: "佯攻牵制",
                consequences: { resources: { ammo: +40, intelligence: +45 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter2_feint_attack"
            },
            {
                text: "断其退路",
                consequences: { resources: { intelligence: +50, reputation: +55 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter2_cut_retreat"
            },
            {
                text: "俘虏投降敌军",
                consequences: { resources: { intelligence: +40, reputation: +60 }, status: { morale: +65, fatigue: +50 } },
                nextNode: "chapter2_accept_surrender"
            }
        ]
    }
};

// ==================== 第三章补充节点 ====================
const chapter3Supplementary = {
    // 刊物发行补充
    "chapter3_increase_circulation": {
        chapter: 3,
        emotion: "expansion",
        text: "你的刊物发行量不断增加，影响力越来越大。你开始考虑如何进一步扩大影响。",
        background: "刊物发行，遍地开花",
        choices: [
            {
                text: "增加刊期",
                consequences: { resources: { money: +55, reputation: +60 }, status: { morale: +65, fatigue: +50 } },
                nextNode: "chapter3_more_issues"
            },
            {
                text: "扩大记者团队",
                consequences: { resources: { reputation: +55, intelligence: +40 }, status: { morale: +65, fatigue: +50 } },
                nextNode: "chapter3_bigger_team"
            },
            {
                text: "深入敌占区采访",
                consequences: { resources: { intelligence: +50, reputation: +60 }, status: { morale: +60, fatigue: +55 } },
                nextNode: "chapter3_enemy_zone_reporting"
            },
            {
                text: "出版特刊纪念",
                consequences: { resources: { reputation: +65, money: +40 }, status: { morale: +70, fatigue: +50 } },
                nextNode: "chapter3_special_issue"
            },
            {
                text: "建立读者反馈机制",
                consequences: { resources: { intelligence: +40, reputation: +50 }, status: { morale: +60, fatigue: +40 } },
                nextNode: "chapter3_reader_feedback"
            }
        ]
    },
    
    // 演讲活动补充
    "chapter3_organize_speeches": {
        chapter: 3,
        emotion: "passion",
        text: "你的演讲活动越来越频繁。你的话激励了无数人投身抗战。",
        background: "激情演讲，激励人心",
        choices: [
            {
                text: "组织大型集会",
                consequences: { resources: { reputation: +70, intelligence: +40 }, status: { morale: +75, fatigue: +55 } },
                nextNode: "chapter3_mass_rally"
            },
            {
                text: "培训演讲人才",
                consequences: { resources: { reputation: +60, intelligence: +45 }, status: { morale: +70, fatigue: +50 } },
                nextNode: "chapter3_train_speakers"
            },
            {
                text: "创新演讲形式",
                consequences: { resources: { reputation: +65, intelligence: +50 }, status: { morale: +72, fatigue: +50 } },
                nextNode: "chapter3_innovate_speeches"
            },
            {
                text: "扩大宣传范围",
                consequences: { resources: { reputation: +68, intelligence: +42 }, status: { morale: +73, fatigue: +52 } },
                nextNode: "chapter3_wider_propaganda"
            },
            {
                text: "争取国际关注",
                consequences: { resources: { intelligence: +55, reputation: +65 }, status: { morale: +70, fatigue: +55 } },
                nextNode: "chapter3_international_attention"
            }
        ]
    },
    
    // 艺术创作补充
    "chapter3_create_art": {
        chapter: 3,
        emotion: "creativity",
        text: "你的艺术创作激发了民众的抗战热情。你开始考虑如何进一步发挥艺术的力量。",
        background: "艺术创作，振奋人心",
        choices: [
            {
                text: "创作更多作品",
                consequences: { resources: { reputation: +65, intelligence: +45 }, status: { morale: +75, fatigue: +55 } },
                nextNode: "chapter3_more_artworks"
            },
            {
                text: "组织艺术展览",
                consequences: { resources: { reputation: +70, money: +45 }, status: { morale: +78, fatigue: +55 } },
                nextNode: "chapter3_art_exhibition"
            },
            {
                text: "培训艺术人才",
                consequences: { resources: { reputation: +60, intelligence: +40 }, status: { morale: +72, fatigue: +50 } },
                nextNode: "chapter3_art_talent_development"
            },
            {
                text: "艺术慰劳演出",
                consequences: { resources: { reputation: +68, morale: +40 }, status: { morale: +80, fatigue: +60 } },
                nextNode: "chapter3_comfort_performances_art"
            },
            {
                text: "艺术作品出版",
                consequences: { resources: { reputation: +65, money: +50 }, status: { morale: +76, fatigue: +52 } },
                nextNode: "chapter3_art_publication"
            }
        ]
    },
    
    // 夜校教育补充
    "chapter3_night_school": {
        chapter: 3,
        emotion: "education",
        text: "你的夜校越办越好，吸引了越来越多的人前来学习。",
        background: "教育之光，照亮前程",
        choices: [
            {
                text: "增设新课程",
                consequences: { resources: { reputation: +60, intelligence: +45 }, status: { morale: +70, fatigue: +50 } },
                nextNode: "chapter3_new_courses"
            },
            {
                text: "扩大夜校规模",
                consequences: { resources: { reputation: +65, money: +45 }, status: { morale: +72, fatigue: +55 } },
                nextNode: "chapter3_expand_night_school"
            },
            {
                text: "培训更多教师",
                consequences: { resources: { reputation: +62, intelligence: +42 }, status: { morale: +70, fatigue: +52 } },
                nextNode: "chapter3_more_teachers"
            },
            {
                text: "建立分校网络",
                consequences: { resources: { reputation: +68, intelligence: +48 }, status: { morale: +74, fatigue: +58 } },
                nextNode: "chapter3_branch_schools"
            },
            {
                text: "出版教育刊物",
                consequences: { resources: { reputation: +60, intelligence: +50 }, status: { morale: +72, fatigue: +55 } },
                nextNode: "chapter3_education_magazine"
            }
        ]
    },
    
    // 募捐活动补充
    "chapter3_organize_donations": {
        chapter: 3,
        emotion: "solidarity",
        text: "你的募捐活动得到了社会各界的积极响应。越来越多的人加入到支援抗战的行列中来。",
        background: "爱心汇聚，共赴国难",
        choices: [
            {
                text: "扩大募捐规模",
                consequences: { resources: { money: +85, reputation: +70 }, status: { morale: +80, fatigue: +60 } },
                nextNode: "chapter3_expand_donations"
            },
            {
                text: "创新募捐形式",
                consequences: { resources: { money: +75, reputation: +65 }, status: { morale: +78, fatigue: +55 } },
                nextNode: "chapter3_new_donation_methods"
            },
            {
                text: "组织义演义卖",
                consequences: { resources: { money: +80, reputation: +68 }, status: { morale: +80, fatigue: +58 } },
                nextNode: "chapter3_charity_events"
            },
            {
                text: "建立长效机制",
                consequences: { resources: { money: +70, reputation: +65 }, status: { morale: +75, fatigue: +52 } },
                nextNode: "chapter3_long_term_mechanism"
            },
            {
                text: "公开透明管理",
                consequences: { resources: { reputation: +75, intelligence: +40 }, status: { morale: +82, fatigue: +50 } },
                nextNode: "chapter3_transparent_management"
            }
        ]
    }
};

// ==================== 第四章补充节点 ====================
const chapter4Supplementary = {
    // 物资囤积补充
    "chapter4_hoard_supplies": {
        chapter: 4,
        emotion: "preparation",
        text: "你在沦陷区秘密囤积了大量物资。这些物资将成为支援抗战的重要力量。",
        background: "物资储备，支援抗战",
        choices: [
            {
                text: "建立秘密仓库",
                consequences: { resources: { food: +70, medicine: +40, reputation: +50 }, status: { morale: +60, fatigue: +55 } },
                nextNode: "chapter4_secret_warehouse_building"
            },
            {
                text: "分散储存",
                consequences: { resources: { food: +65, medicine: +35, reputation: +45 }, status: { morale: +58, fatigue: +52 } },
                nextNode: "chapter4_distributed_storage_expanded"
            },
            {
                text: "建立运输网络",
                consequences: { resources: { intelligence: +50, reputation: +48 }, status: { morale: +62, fatigue: +55 } },
                nextNode: "chapter4_transport_network_building"
            },
            {
                text: "培训运输人员",
                consequences: { resources: { reputation: +50, intelligence: +45 }, status: { morale: +60, fatigue: +50 } },
                nextNode: "chapter4_transport_training_expanded"
            },
            {
                text: "扩大采购规模",
                consequences: { resources: { money: +60, food: +80 }, status: { morale: +65, fatigue: +60 } },
                nextNode: "chapter4_expand_procurement"
            }
        ]
    },
    
    // 运输路线补充
    "chapter4_establish_routes": {
        chapter: 4,
        emotion: "logistics",
        text: "你建立了一条条从沦陷区到根据地的秘密运输线。这些运输线成为了抗战的生命线。",
        background: "运输网络，生死线",
        choices: [
            {
                text: "开辟新路线",
                consequences: { resources: { intelligence: +55, reputation: +50 }, status: { morale: +65, fatigue: +60 } },
                nextNode: "chapter4_new_route_exploration"
            },
            {
                text: "建立联络点",
                consequences: { resources: { intelligence: +50, reputation: +48 }, status: { morale: +62, fatigue: +55 } },
                nextNode: "chapter4_contact_points_expanded"
            },
            {
                text: "培训向导",
                consequences: { resources: { reputation: +52, intelligence: +45 }, status: { morale: +60, fatigue: +52 } },
                nextNode: "chapter4_guide_training_expanded"
            },
            {
                text: "建立应急预案",
                consequences: { resources: { intelligence: +55, reputation: +50 }, status: { morale: +65, fatigue: +58 } },
                nextNode: "chapter4_emergency_plans"
            },
            {
                text: "定期维护路线",
                consequences: { resources: { intelligence: +48, reputation: +45 }, status: { morale: +58, fatigue: +55 } },
                nextNode: "chapter4_route_maintenance"
            }
        ]
    },
    
    // 金融活动补充
    "chapter4_underground_bank": {
        chapter: 4,
        emotion: "finance",
        text: "你的地下钱庄运转良好，为抗战提供了重要的资金支持。",
        background: "金融运作，暗流涌动",
        choices: [
            {
                text: "扩大业务规模",
                consequences: { resources: { money: +95, reputation: +55 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter4_expand_business"
            },
            {
                text: "建立分支机构",
                consequences: { resources: { money: +80, reputation: +52 }, status: { morale: +62, fatigue: +58 } },
                nextNode: "chapter4_branch_network"
            },
            {
                text: "吸引更多客户",
                consequences: { resources: { money: +85, reputation: +50 }, status: { morale: +68, fatigue: +52 } },
                nextNode: "chapter4_attract_customers"
            },
            {
                text: "培训金融人才",
                consequences: { resources: { reputation: +55, intelligence: +48 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter4_financial_talent_training"
            },
            {
                text: "加强安全措施",
                consequences: { resources: { intelligence: +50, money: +40 }, status: { morale: +62, fatigue: +50 } },
                nextNode: "chapter4_security_enhancement"
            }
        ]
    },
    
    // 伪造证件补充
    "chapter4_forged_documents": {
        chapter: 4,
        emotion: "skill",
        text: "你的伪造技术越来越精湛。各种证件几乎可以以假乱真。",
        background: "技艺精湛，瞒天过海",
        choices: [
            {
                text: "扩大伪造种类",
                consequences: { resources: { intelligence: +60, reputation: +55 }, status: { morale: +68, fatigue: +60 } },
                nextNode: "chapter4_forgery_diversification"
            },
            {
                text: "提高伪造质量",
                consequences: { resources: { intelligence: +65, reputation: +50 }, status: { morale: +70, fatigue: +62 } },
                nextNode: "chapter4_forgery_quality_improvement"
            },
            {
                text: "建立安全网络",
                consequences: { resources: { intelligence: +58, reputation: +52 }, status: { morale: +65, fatigue: +58 } },
                nextNode: "chapter4_forgery_security_network"
            },
            {
                text: "培训专业人员",
                consequences: { resources: { reputation: +55, intelligence: +50 }, status: { morale: +68, fatigue: +60 } },
                nextNode: "chapter4_forgery_professionals"
            },
            {
                text: "开辟新市场",
                consequences: { resources: { intelligence: +55, money: +60 }, status: { morale: +65, fatigue: +55 } },
                nextNode: "chapter4_new_markets"
            }
        ]
    },
    
    // 抵制日货补充
    "chapter4_boycott_japanese": {
        chapter: 4,
        emotion: "patriotism",
        text: "你组织的抵制日货运动取得了显著成效。日货在沦陷区的销量大幅下降。",
        background: "抵制日货，共克时艰",
        choices: [
            {
                text: "扩大抵制范围",
                consequences: { resources: { reputation: +70, intelligence: +50 }, status: { morale: +75, fatigue: +60 } },
                nextNode: "chapter4_expand_boycott"
            },
            {
                text: "建立监督机制",
                consequences: { resources: { reputation: +65, intelligence: +45 }, status: { morale: +72, fatigue: +55 } },
                nextNode: "chapter4_supervision_mechanism"
            },
            {
                text: "宣传国货优点",
                consequences: { resources: { reputation: +68, intelligence: +42 }, status: { morale: +74, fatigue: +58 } },
                nextNode: "chapter4_promote_domestic"
            },
            {
                text: "联合更多商人",
                consequences: { resources: { reputation: +72, money: +50 }, status: { morale: +78, fatigue: +62 } },
                nextNode: "chapter4_unite_merchants"
            },
            {
                text: "举报汉奸商人",
                consequences: { resources: { reputation: +75, intelligence: +48 }, status: { morale: +80, fatigue: +60 } },
                nextNode: "chapter4_expose_collaborators"
            }
        ]
    }
};

// ==================== 第五章补充节点 ====================
const chapter5Supplementary = {
    "chapter5_training_for_counter": {
        chapter: 5,
        emotion: "preparation",
        text: "你加强了军事训练，为即将到来的反攻做准备。战士们士气高昂，训练刻苦。",
        background: "厉兵秣马，待命出击",
        choices: [
            {
                text: "强化实战训练",
                consequences: { resources: { ammo: +70, reputation: +65 }, status: { morale: +85, fatigue: +75 } },
                nextNode: "chapter5_intensive_training"
            },
            {
                text: "学习新式战术",
                consequences: { resources: { intelligence: +70, reputation: +60 }, status: { morale: +88, fatigue: +78 } },
                nextNode: "chapter5_new_tactics_learning"
            },
            {
                text: "组织联合演练",
                consequences: { resources: { reputation: +72, intelligence: +65 }, status: { morale: +90, fatigue: +80 } },
                nextNode: "chapter5_joint_exercises"
            },
            {
                text: "检查装备武器",
                consequences: { resources: { ammo: +75, intelligence: +60 }, status: { morale: +85, fatigue: +75 } },
                nextNode: "chapter5_equipment_check"
            },
            {
                text: "心理素质训练",
                consequences: { resources: { morale: +85, reputation: +58 }, status: { morale: +92, fatigue: +70 } },
                nextNode: "chapter5_psychological_training"
            }
        ]
    },
    
    "chapter5_deep_intel": {
        chapter: 5,
        emotion: "danger",
        text: "你深入敌后收集重要情报。这些情报将为反攻提供宝贵参考。",
        background: "深入敌后，获取情报",
        choices: [
            {
                text: "绘制敌军部署图",
                consequences: { resources: { intelligence: +80, reputation: +70 }, status: { morale: +88, fatigue: +82 } },
                nextNode: "chapter5_enemy_deployment_map"
            },
            {
                text: "获取日军作战计划",
                consequences: { resources: { intelligence: +85, reputation: +75 }, status: { morale: +92, fatigue: +85 } },
                nextNode: "chapter5_japanese_war_plans"
            },
            {
                text: "策反日军人员",
                consequences: { resources: { intelligence: +78, reputation: +68 }, status: { morale: +88, fatigue: +82 } },
                nextNode: "chapter5_defect_recruitment"
            },
            {
                text: "建立敌后情报网",
                consequences: { resources: { intelligence: +82, reputation: +72 }, status: { morale: +90, fatigue: +85 } },
                nextNode: "chapter5_enemy_intelligence_network"
            },
            {
                text: "安全返回",
                consequences: { resources: { intelligence: +70, reputation: +65 }, status: { morale: +85, fatigue: +80 } },
                nextNode: "chapter5_safe_return"
            }
        ]
    },
    
    "chapter5_organized_masses": {
        chapter: 5,
        emotion: "power",
        text: "你组织群众准备支援前线。全民皆兵，准备迎接最后的决战。",
        background: "全民动员，准备决战",
        choices: [
            {
                text: "组织民兵参战",
                consequences: { resources: { ammo: +65, reputation: +75 }, status: { morale: +92, fatigue: +85 } },
                nextNode: "chapter5_militia_combat"
            },
            {
                text: "建立后勤保障",
                consequences: { resources: { food: +90, reputation: +70 }, status: { morale: +90, fatigue: +88 } },
                nextNode: "chapter5_supply_protection"
            },
            {
                text: "组织担架队",
                consequences: { resources: { medicine: +55, reputation: +68 }, status: { morale: +88, fatigue: +82 } },
                nextNode: "chapter5_stretcher_teams"
            },
            {
                text: "建立情报网络",
                consequences: { resources: { intelligence: +75, reputation: +65 }, status: { morale: +90, fatigue: +85 } },
                nextNode: "chapter5_mass_intelligence"
            },
            {
                text: "鼓舞群众士气",
                consequences: { resources: { morale: +88, reputation: +72 }, status: { morale: +95, fatigue: +80 } },
                nextNode: "chapter5_inspire_masses"
            }
        ]
    }
};

// ==================== 统一整合函数 ====================
function mergeAllStoryNodes() {
    // 将所有补充节点合并到主storyNodes对象
    Object.assign(storyNodes, chapter1Supplementary);
    Object.assign(storyNodes, chapter2Supplementary);
    Object.assign(storyNodes, chapter3Supplementary);
    Object.assign(storyNodes, chapter4Supplementary);
    Object.assign(storyNodes, chapter5Supplementary);
    
    // 合并其他补丁节点
    if (typeof missingNodes !== 'undefined') {
        Object.assign(storyNodes, missingNodes);
    }
    if (typeof allMissingNodes !== 'undefined') {
        Object.assign(storyNodes, allMissingNodes);
    }
    if (typeof progressionNodes !== 'undefined') {
        Object.assign(storyNodes, progressionNodes);
    }
    if (typeof enhancedChapterNodes !== 'undefined') {
        Object.assign(storyNodes, enhancedChapterNodes);
    }
    
    // 修复循环节点
    fixLoopingNodesInStory();
}

// 修复指向循环节点的引用
function fixLoopingNodesInStory() {
    const chapterProgressMap = {
        'chapter1_start': 'chapter1_progress',
        'chapter2_start': 'chapter2_progress',
        'chapter3_start': 'chapter3_progress',
        'chapter4_start': 'chapter4_progress',
        'chapter5_start': 'chapter5_progress'
    };
    
    // 需要保持指向start的节点（过渡节点等）
    const keepOriginal = [
        'transition_chapter1', 'transition_chapter2', 'transition_chapter3',
        'transition_chapter4', 'transition_chapter5', 'transition_chapter6',
        'start', 'chapter0_join_guerrilla', 'chapter0_join_army',
        'chapter0_join_cultural', 'chapter0_join_smuggling'
    ];
    
    let fixedCount = 0;
    
    for (const nodeId in storyNodes) {
        // 跳过需要保持原样的节点
        if (keepOriginal.includes(nodeId)) continue;
        
        // 跳过start节点本身
        if (nodeId.endsWith('_start')) continue;
        
        // 跳过进度节点
        if (nodeId.includes('_progress') || nodeId.includes('_missions') || 
            nodeId.includes('_battles') || nodeId.includes('_work') || 
            nodeId.includes('_business') || nodeId.includes('_final')) continue;
        
        const node = storyNodes[nodeId];
        if (!node || !node.choices) continue;
        
        for (const choice of node.choices) {
            if (choice.nextNode && chapterProgressMap[choice.nextNode]) {
                choice.nextNode = chapterProgressMap[choice.nextNode];
                fixedCount++;
            }
        }
    }
    
    console.log('Fixed looping references:', fixedCount);
}

// 在游戏初始化时调用
function initGameWithAllContent() {
    // 合并所有故事节点
    mergeAllStoryNodes();
    
    // 初始化游戏
    initGame();
}

// 移除立即调用，改为在script.js中storyNodes定义后调用