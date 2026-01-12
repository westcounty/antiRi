// Complete missing nodes patch - All chapters

const allMissingNodes = {
    // ==================== Chapter 1 Missing ====================
    "chapter1_backup_points": { chapter: 1, text: "你设置了多个备用联络点，确保情报传递的安全性。", choices: [{ text: "继续行动", consequences: { resources: { intelligence: +30 }, status: { morale: +20 } }, nextNode: "chapter1_start" }] },
    "chapter1_bridge_bombing": { chapter: 1, text: "你成功学会了炸桥技术，这将大大阻碍日军的推进。", choices: [{ text: "继续训练", consequences: { resources: { intelligence: +35 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_capture_prisoner": { chapter: 1, text: "你成功抓获了一名落单的日军哨兵，从他口中获取了重要情报。", choices: [{ text: "继续审讯", consequences: { resources: { intelligence: +45 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_develop_spies": { chapter: 1, text: "你在日军内部发展了眼线，他们将为我们提供宝贵的情报。", choices: [{ text: "建立联络", consequences: { resources: { intelligence: +50 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_directional_mines": { chapter: 1, text: "你学会了制作定向地雷，这种武器对日军车队特别有效。", choices: [{ text: "部署地雷", consequences: { resources: { ammo: +30 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_draw_map": { chapter: 1, text: "你绘制了详细的据点地图，标注了敌军的火力点和巡逻路线。", choices: [{ text: "汇报情报", consequences: { resources: { intelligence: +55 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_establish_radio": { chapter: 1, text: "你建立了秘密电台，现在可以与上级保持联系了。", choices: [{ text: "发送情报", consequences: { resources: { intelligence: +45 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_first_aid": { chapter: 1, text: "你学会了基本的急救技术，现在可以救治受伤的战友了。", choices: [{ text: "继续学习", consequences: { resources: { medicine: +20 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_hide_grain": { chapter: 1, text: "你帮助村民把粮食藏到了隐蔽的地方，日军搜查时什么也没找到。", choices: [{ text: "继续帮助", consequences: { resources: { food: +40, reputation: +30 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_infiltrate": { chapter: 1, text: "你成功伪装成劳工混入了日军工地，获取了大量情报。", choices: [{ text: "安全撤离", consequences: { resources: { intelligence: +45 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_landmines": { chapter: 1, text: "你学会了埋设地雷的技术，这是对付日军的有效武器。", choices: [{ text: "实战演练", consequences: { resources: { ammo: +25 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_night_combat": { chapter: 1, text: "你掌握了夜间战斗技巧，黑暗成为了我们的优势。", choices: [{ text: "继续训练", consequences: { resources: { intelligence: +30 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_organize_village_defense": { chapter: 1, text: "你组织村民进行自卫训练，大家的战斗力明显提高。", choices: [{ text: "继续训练", consequences: { resources: { reputation: +35 }, status: { morale: +35 } }, nextNode: "chapter1_start" }] },
    "chapter1_practice_shooting": { chapter: 1, text: "经过刻苦练习，你的射击技术已经相当精准了。", choices: [{ text: "继续练习", consequences: { resources: { ammo: +25 }, status: { morale: +35 } }, nextNode: "chapter1_start" }] },
    "chapter1_radio_report": { chapter: 1, text: "你通过电台向总部汇报了情报，得到了上级的表扬。", choices: [{ text: "继续侦察", consequences: { resources: { intelligence: +35, reputation: +25 }, status: { morale: +35 } }, nextNode: "chapter1_start" }] },
    "chapter1_rebuild_houses": { chapter: 1, text: "你帮助村民修复了被毁的房屋，大家对你充满感激。", choices: [{ text: "继续帮助", consequences: { resources: { reputation: +30 }, status: { morale: +40 } }, nextNode: "chapter1_start" }] },
    "chapter1_secret_network": { chapter: 1, text: "你建立了地下情报传递网，消息可以快速安全地传递。", choices: [{ text: "扩大网络", consequences: { resources: { intelligence: +50 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_stealth_training": { chapter: 1, text: "你掌握了潜伏和伪装的技巧，可以悄无声息地接近敌人。", choices: [{ text: "实战运用", consequences: { resources: { intelligence: +35 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_study_enemy": { chapter: 1, text: "你研究了日军的装备特点，找到了他们的弱点。", choices: [{ text: "分享心得", consequences: { resources: { intelligence: +40 }, status: { morale: +20 } }, nextNode: "chapter1_start" }] },
    "chapter1_thorough_scout": { chapter: 1, text: "经过三天三夜的观察，你掌握了敌人的所有规律。", choices: [{ text: "返回汇报", consequences: { resources: { intelligence: +55 }, status: { morale: +25, fatigue: +30 } }, nextNode: "chapter1_start" }] },
    "chapter1_train_codes": { chapter: 1, text: "你培训队员使用联络密码，确保通讯安全。", choices: [{ text: "继续培训", consequences: { resources: { intelligence: +40 }, status: { morale: +25 } }, nextNode: "chapter1_start" }] },
    "chapter1_train_explosives": { chapter: 1, text: "你培训其他队员使用爆破技术，队伍的战斗力大大提高。", choices: [{ text: "继续培训", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter1_start" }] },

    // ==================== Chapter 2 Missing ====================
    "chapter2_start": { chapter: 2, text: "1938年8月，你作为国军士兵李明，参加了淞沪会战。战斗异常激烈，日军凭借优势火力不断进攻。", choices: [
        { text: "坚守阵地", consequences: { resources: { ammo: +20 }, status: { morale: +30 } }, nextNode: "chapter2_bayonet" },
        { text: "组织反击", consequences: { resources: { reputation: +25 }, status: { morale: +35 } }, nextNode: "chapter2_counter_bombard" }
    ]},
    "chapter2_ammo_depot": { chapter: 2, text: "你发现了日军的弹药库位置，这是个重要情报。", choices: [{ text: "汇报位置", consequences: { resources: { intelligence: +40 }, status: { morale: +25 } }, nextNode: "chapter2_start" }] },
    "chapter2_artillery_success": { chapter: 2, text: "在你的引导下，炮兵成功摧毁了日军阵地！", choices: [{ text: "继续战斗", consequences: { resources: { reputation: +50 }, status: { morale: +40 } }, nextNode: "chapter2_start" }] },
    "chapter2_attack_command": { chapter: 2, text: "你接到进攻命令，带领战友向日军阵地发起冲锋。", choices: [{ text: "冲锋！", consequences: { resources: { ammo: +30 }, status: { morale: +45 } }, nextNode: "chapter2_start" }] },
    "chapter2_bayonet": { chapter: 2, text: "弹药耗尽，你举起刺刀与日军展开白刃战。", choices: [{ text: "奋勇杀敌", consequences: { resources: { reputation: +35 }, status: { morale: +40 } }, nextNode: "chapter2_start" }] },
    "chapter2_breakthrough": { chapter: 2, text: "你带领战友成功突破了日军的包围！", choices: [{ text: "继续突围", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter2_start" }] },
    "chapter2_capture_crew": { chapter: 2, text: "你俘虏了日军炮兵，缴获了一门火炮。", choices: [{ text: "使用火炮", consequences: { resources: { ammo: +50 }, status: { morale: +45 } }, nextNode: "chapter2_start" }] },
    "chapter2_capture_officer": { chapter: 2, text: "你俘虏了一名日军军官，获取了重要情报。", choices: [{ text: "审讯俘虏", consequences: { resources: { intelligence: +55 }, status: { morale: +35 } }, nextNode: "chapter2_start" }] },
    "chapter2_counter_bombard": { chapter: 2, text: "你组织火力反击，成功压制了日军的进攻。", choices: [{ text: "扩大战果", consequences: { resources: { ammo: +25 }, status: { morale: +40 } }, nextNode: "chapter2_start" }] },
    "chapter2_donate_blood": { chapter: 2, text: "你为受伤的战友献血，挽救了他的生命。", choices: [{ text: "继续战斗", consequences: { resources: { reputation: +40 }, status: { morale: +35, fatigue: +20 } }, nextNode: "chapter2_start" }] },
    "chapter2_guide_fire": { chapter: 2, text: "你引导炮兵向日军阵地射击，效果显著。", choices: [{ text: "继续引导", consequences: { resources: { intelligence: +35 }, status: { morale: +35 } }, nextNode: "chapter2_start" }] },
    "chapter2_last_stand": { chapter: 2, text: "这是最后的阵地，你决定战斗到最后一刻。", choices: [{ text: "誓死坚守", consequences: { resources: { reputation: +60 }, status: { morale: +50 } }, nextNode: "chapter2_start" }] },
    "chapter2_record_names": { chapter: 2, text: "你记录下牺牲战友的名字，他们不应该被遗忘。", choices: [{ text: "继续战斗", consequences: { resources: { reputation: +30 }, status: { morale: +30 } }, nextNode: "chapter2_start" }] },
    "chapter2_rescue_prisoners": { chapter: 2, text: "你救出了被俘的战友，大家重新投入战斗。", choices: [{ text: "并肩作战", consequences: { resources: { reputation: +45 }, status: { morale: +45 } }, nextNode: "chapter2_start" }] },
    "chapter2_retreat_with_dignity": { chapter: 2, text: "你有序地组织撤退，保存了有生力量。", choices: [{ text: "重整旗鼓", consequences: { resources: { reputation: +35 }, status: { morale: +30 } }, nextNode: "chapter2_start" }] },
    "chapter2_return_fighters": { chapter: 2, text: "你带领战友返回战场，继续与日军作战。", choices: [{ text: "继续战斗", consequences: { resources: { reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter2_start" }] },
    "chapter2_set_fire": { chapter: 2, text: "你放火烧毁了日军的补给仓库。", choices: [{ text: "迅速撤离", consequences: { resources: { intelligence: +35 }, status: { morale: +35 } }, nextNode: "chapter2_start" }] },
    "chapter2_smoke_cover": { chapter: 2, text: "你制造烟幕掩护战友撤退。", choices: [{ text: "继续掩护", consequences: { resources: { reputation: +30 }, status: { morale: +30 } }, nextNode: "chapter2_start" }] },
    "chapter2_stretcher_team": { chapter: 2, text: "你组织担架队抢救伤员。", choices: [{ text: "继续救援", consequences: { resources: { medicine: +30, reputation: +35 }, status: { morale: +35 } }, nextNode: "chapter2_start" }] },
    "chapter2_take_photos": { chapter: 2, text: "你拍下了战斗的照片，记录这段历史。", choices: [{ text: "继续记录", consequences: { resources: { intelligence: +25 }, status: { morale: +25 } }, nextNode: "chapter2_start" }] },
    "chapter2_wait_fatigue": { chapter: 2, text: "你等待日军疲惫后发起反击。", choices: [{ text: "发起反击", consequences: { resources: { intelligence: +30 }, status: { morale: +35 } }, nextNode: "chapter2_start" }] },
    "chapter2_wait_reinforcement": { chapter: 2, text: "援军终于到了！你们发起了全面反攻。", choices: [{ text: "配合反攻", consequences: { resources: { reputation: +45 }, status: { morale: +50 } }, nextNode: "chapter2_start" }] },

    // ==================== Chapter 3 Missing ====================
    "chapter3_start": { chapter: 3, text: "1940年，你作为文化工作者张老师，在大后方进行抗战宣传工作。你的文字和演讲激励着无数人。", choices: [
        { text: "编写宣传材料", consequences: { resources: { reputation: +30 }, status: { morale: +35 } }, nextNode: "chapter3_wrote_textbooks" },
        { text: "组织演讲活动", consequences: { resources: { reputation: +35 }, status: { morale: +40 } }, nextNode: "chapter3_school_speeches" }
    ]},
    "chapter3_added_courses": { chapter: 3, text: "你在学校增设了抗战教育课程。", choices: [{ text: "继续教学", consequences: { resources: { reputation: +35 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_bazaar": { chapter: 3, text: "你组织了抗日义卖活动，筹集了大量资金。", choices: [{ text: "继续募捐", consequences: { resources: { money: +60 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_comfort_performances": { chapter: 3, text: "你组织慰问演出，为前线战士送去温暖。", choices: [{ text: "继续演出", consequences: { resources: { reputation: +45 }, status: { morale: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_dialect_speeches": { chapter: 3, text: "你用方言演讲，让更多百姓理解抗战意义。", choices: [{ text: "继续宣传", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_enemy_interview": { chapter: 3, text: "你采访了前线战士，记录他们的英勇事迹。", choices: [{ text: "发表报道", consequences: { resources: { reputation: +45 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_expand_school": { chapter: 3, text: "你扩大了学校规模，让更多人接受教育。", choices: [{ text: "继续办学", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_expose_atrocities": { chapter: 3, text: "你揭露了日军的暴行，引起国际关注。", choices: [{ text: "继续揭露", consequences: { resources: { reputation: +55 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_hero_stories": { chapter: 3, text: "你讲述抗日英雄的故事，激励民众斗志。", choices: [{ text: "继续讲述", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_international_speeches": { chapter: 3, text: "你的演讲引起了国际媒体的关注。", choices: [{ text: "扩大影响", consequences: { resources: { reputation: +50 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_invite_celebrities": { chapter: 3, text: "你邀请名人参与抗战宣传，影响力大增。", choices: [{ text: "继续合作", consequences: { resources: { reputation: +55 }, status: { morale: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_large_donation": { chapter: 3, text: "你组织的募捐活动获得了大量捐款。", choices: [{ text: "妥善使用", consequences: { resources: { money: +80 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_made_posters": { chapter: 3, text: "你制作的抗日海报张贴在大街小巷。", choices: [{ text: "继续创作", consequences: { resources: { reputation: +35 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_more_songs": { chapter: 3, text: "你创作了更多抗战歌曲，广为传唱。", choices: [{ text: "继续创作", consequences: { resources: { reputation: +45 }, status: { morale: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_overseas_chinese": { chapter: 3, text: "你联系海外华侨，获得了大量支援。", choices: [{ text: "加强联络", consequences: { resources: { money: +70, reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_protest_march": { chapter: 3, text: "你组织了抗日游行，民众热情高涨。", choices: [{ text: "继续组织", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter3_start" }] },
    "chapter3_school_network": { chapter: 3, text: "你建立了学校网络，教育事业蓬勃发展。", choices: [{ text: "继续扩展", consequences: { resources: { reputation: +45 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_school_speeches": { chapter: 3, text: "你在学校发表演讲，学生们深受鼓舞。", choices: [{ text: "继续演讲", consequences: { resources: { reputation: +40 }, status: { morale: +45 } }, nextNode: "chapter3_start" }] },
    "chapter3_staged_plays": { chapter: 3, text: "你组织演出抗战话剧，观众反响热烈。", choices: [{ text: "继续演出", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter3_start" }] },
    "chapter3_train_artists": { chapter: 3, text: "你培训了一批艺术人才，抗战文艺蓬勃发展。", choices: [{ text: "继续培训", consequences: { resources: { reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_train_journalists": { chapter: 3, text: "你培训了一批记者，新闻报道更加专业。", choices: [{ text: "继续培训", consequences: { resources: { reputation: +45 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_trained_teachers": { chapter: 3, text: "你培训了更多教师，教育队伍壮大了。", choices: [{ text: "继续培训", consequences: { resources: { reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_transport_network": { chapter: 3, text: "你建立了物资运输网络，支援前线。", choices: [{ text: "扩大网络", consequences: { resources: { intelligence: +35 }, status: { morale: +35 } }, nextNode: "chapter3_start" }] },
    "chapter3_women_support": { chapter: 3, text: "你组织妇女支援前线，缝制军衣军鞋。", choices: [{ text: "继续组织", consequences: { resources: { reputation: +40 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },
    "chapter3_wrote_textbooks": { chapter: 3, text: "你编写了抗战教材，在学校广泛使用。", choices: [{ text: "继续编写", consequences: { resources: { reputation: +45 }, status: { morale: +40 } }, nextNode: "chapter3_start" }] },

    // ==================== Chapter 4 Missing ====================
    // 注意：chapter4_start 在 script.js 中已定义，这里不重复定义
    "chapter4_backup_routes": { chapter: 4, text: "你开辟了备用运输路线，确保物资安全送达。", choices: [{ text: "继续运输", consequences: { resources: { intelligence: +35 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_blocked_plunder": { chapter: 4, text: "你阻止了日军的掠夺行动，保护了民众财产。", choices: [{ text: "继续抵抗", consequences: { resources: { reputation: +50 }, status: { morale: +40 } }, nextNode: "chapter4_start" }] },
    "chapter4_bribed_traitor_army": { chapter: 4, text: "你收买了伪军，获取了重要情报。", choices: [{ text: "继续策反", consequences: { resources: { intelligence: +45 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_exposed_collaborators": { chapter: 4, text: "你揭发了汉奸的罪行，维护了正义。", choices: [{ text: "继续追查", consequences: { resources: { reputation: +55 }, status: { morale: +40 } }, nextNode: "chapter4_start" }] },
    "chapter4_forged_bonds": { chapter: 4, text: "你伪造了债券，扰乱了日军的金融系统。", choices: [{ text: "继续行动", consequences: { resources: { money: +40 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_forged_maps": { chapter: 4, text: "你伪造了假地图，误导了日军行动。", choices: [{ text: "继续误导", consequences: { resources: { intelligence: +40 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_forged_passes": { chapter: 4, text: "你伪造了通行证，帮助抗日人员通过封锁线。", choices: [{ text: "继续伪造", consequences: { resources: { intelligence: +45 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_forged_supply_chain": { chapter: 4, text: "你建立了秘密供应链，物资源源不断送往前线。", choices: [{ text: "扩大规模", consequences: { resources: { food: +50 }, status: { morale: +40 } }, nextNode: "chapter4_start" }] },
    "chapter4_gold_exchange": { chapter: 4, text: "你通过地下渠道兑换黄金，为抗战筹集资金。", choices: [{ text: "继续筹资", consequences: { resources: { money: +60 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_high_interest": { chapter: 4, text: "你以高利率吸引日伪资金，削弱敌人经济实力。", choices: [{ text: "继续吸金", consequences: { resources: { money: +55 }, status: { morale: +25 } }, nextNode: "chapter4_start" }] },
    "chapter4_merchant_union": { chapter: 4, text: "你联合爱国商人，共同抵制日货。", choices: [{ text: "扩大联盟", consequences: { resources: { reputation: +50 }, status: { morale: +40 } }, nextNode: "chapter4_start" }] },
    "chapter4_night_transport": { chapter: 4, text: "你在夜间运送物资，躲过了日军的搜查。", choices: [{ text: "继续运输", consequences: { resources: { medicine: +35 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_promoted_domestic": { chapter: 4, text: "你大力推广国货，抵制日本商品。", choices: [{ text: "继续推广", consequences: { resources: { reputation: +45 }, status: { morale: +40 } }, nextNode: "chapter4_start" }] },
    "chapter4_sabotaged_transport": { chapter: 4, text: "你破坏了日军的运输线，延缓了敌人进攻。", choices: [{ text: "继续破坏", consequences: { resources: { intelligence: +40 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_secret_accounts": { chapter: 4, text: "你建立了秘密账户，安全转移抗战资金。", choices: [{ text: "继续运作", consequences: { resources: { money: +45 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_spoiled_goods": { chapter: 4, text: "你设法让日军的补给物资变质，削弱敌人战斗力。", choices: [{ text: "继续行动", consequences: { resources: { intelligence: +35 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_trained_financial": { chapter: 4, text: "你培训了金融人才，地下金融网络更加完善。", choices: [{ text: "继续培训", consequences: { resources: { reputation: +35 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_trained_forgers": { chapter: 4, text: "你培训了伪造专家，证件质量不断提高。", choices: [{ text: "继续培训", consequences: { resources: { intelligence: +40 }, status: { morale: +30 } }, nextNode: "chapter4_start" }] },
    "chapter4_used_caravans": { chapter: 4, text: "你利用商队运送抗战物资。", choices: [{ text: "继续运输", consequences: { resources: { food: +40 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },
    "chapter4_used_tunnels": { chapter: 4, text: "你利用地道运送物资，躲过日军搜查。", choices: [{ text: "继续使用", consequences: { resources: { medicine: +30 }, status: { morale: +35 } }, nextNode: "chapter4_start" }] },

    // ==================== Chapter 5 Missing ====================
    // 注意：chapter5_start 在 script.js 中已定义，这里不重复定义
    "chapter5_boosted_morale": { chapter: 5, text: "你鼓舞了群众的士气，大家对胜利充满信心。", choices: [{ text: "发起进攻", consequences: { resources: { reputation: +50 }, status: { morale: +50 } }, nextNode: "chapter6_start" }] },
    "chapter5_detailed_plan": { chapter: 5, text: "你制定了详细的反攻计划，准备给日军最后一击。", choices: [{ text: "执行计划", consequences: { resources: { intelligence: +45 }, status: { morale: +45 } }, nextNode: "chapter6_start" }] },

    // ==================== Chapter 6 (Victory) ====================
    // 注意：chapter6_start 在 script.js 中已定义，这里不重复定义
    "chapter6_cherish_peace": { chapter: 6, text: "你深知和平来之不易，决心珍惜这来之不易的和平生活。", choices: [{ text: "开始新生活", consequences: { status: { morale: +100 } }, nextNode: "ending_victory" }] },
    "chapter6_continue_serving": { chapter: 6, text: "你决定继续为国家服务，投身到战后重建中去。", choices: [{ text: "贡献力量", consequences: { resources: { reputation: +60 }, status: { morale: +80 } }, nextNode: "ending_victory" }] },
    "chapter6_pass_experience": { chapter: 6, text: "你把抗战的经验传授给年轻一代，让他们铭记历史。", choices: [{ text: "薪火相传", consequences: { resources: { reputation: +70 }, status: { morale: +90 } }, nextNode: "ending_victory" }] },
    "chapter6_record_history": { chapter: 6, text: "你记录下这段历史，让后人永远铭记。", choices: [{ text: "完成记录", consequences: { resources: { reputation: +75 }, status: { morale: +85 } }, nextNode: "chapter6_cherish_peace" }] },
    "chapter6_return_home": { chapter: 6, text: "你终于可以回到家乡，与亲人团聚了。", choices: [{ text: "回家", consequences: { status: { morale: +100 } }, nextNode: "ending_victory" }] },
    "chapter6_reunion": { chapter: 6, text: "你与失散多年的亲人团聚，这是最幸福的时刻。", choices: [{ text: "珍惜当下", consequences: { status: { morale: +100 } }, nextNode: "chapter6_cherish_peace" }] },

    // ==================== Victory Ending ====================
    "ending_victory": { chapter: 6, text: "抗战胜利了！你为这场伟大的民族解放战争贡献了自己的力量。历史会铭记每一位为胜利付出的人。和平来之不易，让我们永远珍惜！", choices: [] },

    // ==================== Event Nodes ====================
    "event_civilian_recorded": { chapter: 1, text: "你记录下了这次事件。", choices: [{ text: "继续", consequences: { resources: { intelligence: +20 } }, nextNode: "chapter1_start" }] },
    "event_civilian_respected": { chapter: 1, text: "村民们对你更加尊敬了。", choices: [{ text: "继续", consequences: { resources: { reputation: +25 } }, nextNode: "chapter1_start" }] },
    "event_civilian_thanked": { chapter: 1, text: "村民们向你表示感谢。", choices: [{ text: "继续", consequences: { resources: { reputation: +20 } }, nextNode: "chapter1_start" }] },
    "event_disinformation": { chapter: 1, text: "你成功传播了假情报，误导了敌人。", choices: [{ text: "继续", consequences: { resources: { intelligence: +30 } }, nextNode: "chapter1_start" }] },
    "event_evacuate": { chapter: 1, text: "你帮助村民安全撤离。", choices: [{ text: "继续", consequences: { resources: { reputation: +30 } }, nextNode: "chapter1_start" }] },
    "event_investigate_spy": { chapter: 1, text: "你调查了可疑人员，排除了隐患。", choices: [{ text: "继续", consequences: { resources: { intelligence: +25 } }, nextNode: "chapter1_start" }] },
    "event_medic_escort": { chapter: 1, text: "你护送伤员到了安全地点。", choices: [{ text: "继续", consequences: { resources: { medicine: +20 } }, nextNode: "chapter1_start" }] },
    "event_medic_training": { chapter: 1, text: "你参加了医护培训。", choices: [{ text: "继续", consequences: { resources: { medicine: +25 } }, nextNode: "chapter1_start" }] },
    "event_medic_treat": { chapter: 1, text: "你救治了伤员。", choices: [{ text: "继续", consequences: { resources: { medicine: +15 } }, nextNode: "chapter1_start" }] },
    "event_supply_claimed": { chapter: 1, text: "你成功获取了物资。", choices: [{ text: "继续", consequences: { resources: { food: +30 } }, nextNode: "chapter1_start" }] },
    "event_supply_delayed": { chapter: 1, text: "物资延迟到达了。", choices: [{ text: "继续", consequences: { resources: { food: +15 } }, nextNode: "chapter1_start" }] },
    "event_supply_shared": { chapter: 1, text: "你把物资分给了大家。", choices: [{ text: "继续", consequences: { resources: { reputation: +25 } }, nextNode: "chapter1_start" }] },
    "event_weapon_inquire": { chapter: 1, text: "你打听到了武器的来源。", choices: [{ text: "继续", consequences: { resources: { intelligence: +20 } }, nextNode: "chapter1_start" }] },
    "event_weapon_purchase": { chapter: 1, text: "你购买了武器装备。", choices: [{ text: "继续", consequences: { resources: { ammo: +25 } }, nextNode: "chapter1_start" }] },
    "event_weapon_reject": { chapter: 1, text: "你拒绝了可疑的武器交易。", choices: [{ text: "继续", consequences: { resources: { reputation: +15 } }, nextNode: "chapter1_start" }] },

    // Chapter transition nodes
    "chapter1_blow_railroad": { chapter: 1, text: "你成功炸毁了日军铁路！", choices: [{ text: "撤离", consequences: { resources: { reputation: +50 }, status: { morale: +40 } }, nextNode: "chapter1_start" }] },
    "chapter1_teach_adults": { chapter: 1, text: "你教村民们识字读书。", choices: [{ text: "继续教学", consequences: { resources: { reputation: +40 }, status: { morale: +35 } }, nextNode: "chapter1_start" }] },
    "chapter1_recruit_agents": { chapter: 1, text: "你发展了可靠的联络员。", choices: [{ text: "继续发展", consequences: { resources: { intelligence: +45 }, status: { morale: +30 } }, nextNode: "chapter1_start" }] }
};

// Merge all missing nodes
if (typeof storyNodes !== 'undefined') {
    Object.assign(storyNodes, allMissingNodes);
}

window.mergeAllMissingNodes = function() {
    if (typeof storyNodes !== 'undefined') {
        Object.assign(storyNodes, allMissingNodes);
    }
};
