// 章节进度系统 - 解决循环问题
// 创建章节进度节点，让玩家可以选择继续当前章节或进入下一章

const progressionNodes = {
    // 第一章进度节点
    "chapter1_progress": {
        chapter: 1,
        emotion: "determination",
        text: "你在游击队的表现得到了大家的认可。队长把你叫到一旁说：'同志，你已经成长了很多。现在有两条路摆在你面前。'",
        background: "根据地，队长的谈话",
        choices: [
            {
                text: "继续在游击队执行任务",
                consequences: { status: { morale: +10 } },
                nextNode: "chapter1_missions"
            },
            {
                text: "我准备好接受更大的挑战了",
                consequences: { status: { morale: +20 }, flags: { ready_for_chapter2: true } },
                nextNode: "transition_chapter2"
            }
        ]
    },

    "chapter1_missions": {
        chapter: 1,
        emotion: "focus",
        text: "游击队还有许多任务需要完成。你决定继续为抗战贡献力量。",
        background: "根据地，准备新任务",
        choices: [
            {
                text: "参加破坏铁路任务",
                consequences: { resources: { intelligence: +20 }, status: { morale: +15 } },
                nextNode: "chapter1_railroad_mission"
            },
            {
                text: "进行情报收集",
                consequences: { resources: { intelligence: +25 }, status: { morale: +15 } },
                nextNode: "chapter1_intel_mission"
            },
            {
                text: "帮助训练新队员",
                consequences: { resources: { reputation: +20 }, status: { morale: +20 } },
                nextNode: "chapter1_training_mission"
            },
            {
                text: "我已经准备好进入下一阶段",
                consequences: { status: { morale: +15 } },
                nextNode: "transition_chapter2"
            }
        ]
    },

    "chapter1_railroad_mission": {
        chapter: 1,
        emotion: "tension",
        text: "你参加了一次铁路破坏行动。在夜色的掩护下，你们成功炸毁了一段日军的补给线。",
        background: "夜间，铁路旁",
        choices: [
            { text: "返回根据地", consequences: { resources: { reputation: +30 }, status: { morale: +25 } }, nextNode: "chapter1_progress" }
        ]
    },

    "chapter1_intel_mission": {
        chapter: 1,
        emotion: "caution",
        text: "你潜入敌占区收集情报，成功获取了日军下一步行动的计划。",
        background: "敌占区，秘密行动",
        choices: [
            { text: "安全返回", consequences: { resources: { intelligence: +40 }, status: { morale: +20 } }, nextNode: "chapter1_progress" }
        ]
    },

    "chapter1_training_mission": {
        chapter: 1,
        emotion: "warmth",
        text: "你把学到的战斗技巧传授给新加入的队员，他们进步很快。",
        background: "训练场",
        choices: [
            { text: "继续其他工作", consequences: { resources: { reputation: +25 }, status: { morale: +30 } }, nextNode: "chapter1_progress" }
        ]
    },

    // 第二章进度节点
    "chapter2_progress": {
        chapter: 2,
        emotion: "determination",
        text: "经过多次战斗，你在部队中已经是一名经验丰富的老兵了。长官对你说：'你的表现很出色，现在有新的任务等着你。'",
        background: "军营，长官的谈话",
        choices: [
            {
                text: "继续在正面战场战斗",
                consequences: { status: { morale: +10 } },
                nextNode: "chapter2_battles"
            },
            {
                text: "我准备好接受新的使命",
                consequences: { status: { morale: +20 }, flags: { ready_for_chapter3: true } },
                nextNode: "transition_chapter3"
            }
        ]
    },

    "chapter2_battles": {
        chapter: 2,
        emotion: "focus",
        text: "前线还有许多战斗等着你。为了祖国，你决定继续战斗。",
        background: "战场，准备新的战斗",
        choices: [
            {
                text: "参加防御战",
                consequences: { resources: { ammo: +20 }, status: { morale: +15 } },
                nextNode: "chapter2_defense_battle"
            },
            {
                text: "执行突袭任务",
                consequences: { resources: { reputation: +25 }, status: { morale: +20 } },
                nextNode: "chapter2_raid_mission"
            },
            {
                text: "协助救治伤员",
                consequences: { resources: { medicine: +20 }, status: { morale: +15 } },
                nextNode: "chapter2_medical_duty"
            },
            {
                text: "我已经准备好进入下一阶段",
                consequences: { status: { morale: +15 } },
                nextNode: "transition_chapter3"
            }
        ]
    },

    "chapter2_defense_battle": {
        chapter: 2,
        emotion: "tension",
        text: "你参加了一场艰苦的防御战，成功阻止了日军的进攻。",
        background: "战壕中",
        choices: [
            { text: "战斗结束", consequences: { resources: { reputation: +35 }, status: { morale: +25 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_raid_mission": {
        chapter: 2,
        emotion: "determination",
        text: "你带领小队夜袭日军营地，缴获了大量物资。",
        background: "夜间突袭",
        choices: [
            { text: "撤回阵地", consequences: { resources: { ammo: +30, food: +20 }, status: { morale: +30 } }, nextNode: "chapter2_progress" }
        ]
    },

    "chapter2_medical_duty": {
        chapter: 2,
        emotion: "compassion",
        text: "你帮助医疗队救治伤员，许多战友因为你的帮助活了下来。",
        background: "野战医院",
        choices: [
            { text: "返回部队", consequences: { resources: { reputation: +25 }, status: { morale: +20 } }, nextNode: "chapter2_progress" }
        ]
    },

    // 第三章进度节点
    "chapter3_progress": {
        chapter: 3,
        emotion: "thoughtful",
        text: "你的文化工作取得了显著成效，越来越多的人了解到抗战的真相。",
        background: "文化工作站",
        choices: [
            {
                text: "继续文化抗战",
                consequences: { status: { morale: +10 } },
                nextNode: "chapter3_work"
            },
            {
                text: "我准备好迎接新的挑战",
                consequences: { status: { morale: +20 }, flags: { ready_for_chapter4: true } },
                nextNode: "transition_chapter4"
            }
        ]
    },

    "chapter3_work": {
        chapter: 3,
        emotion: "determination",
        text: "笔杆子也是武器，你决定继续用文化的力量抗战。",
        background: "编辑部",
        choices: [
            {
                text: "撰写抗战文章",
                consequences: { resources: { reputation: +25 }, status: { morale: +20 } },
                nextNode: "chapter3_writing"
            },
            {
                text: "组织宣传活动",
                consequences: { resources: { reputation: +30 }, status: { morale: +25 } },
                nextNode: "chapter3_propaganda"
            },
            {
                text: "我已经准备好进入下一阶段",
                consequences: { status: { morale: +15 } },
                nextNode: "transition_chapter4"
            }
        ]
    },

    "chapter3_writing": {
        chapter: 3,
        emotion: "focus",
        text: "你撰写的文章在报纸上发表，激励了无数人投身抗战。",
        background: "书桌前",
        choices: [
            { text: "继续工作", consequences: { resources: { reputation: +30 }, status: { morale: +25 } }, nextNode: "chapter3_progress" }
        ]
    },

    "chapter3_propaganda": {
        chapter: 3,
        emotion: "passion",
        text: "你组织的宣传活动非常成功，民众的抗战热情高涨。",
        background: "街头宣传",
        choices: [
            { text: "继续努力", consequences: { resources: { reputation: +35 }, status: { morale: +30 } }, nextNode: "chapter3_progress" }
        ]
    },

    // 第四章进度节点
    "chapter4_progress": {
        chapter: 4,
        emotion: "cunning",
        text: "你的商业网络已经相当成熟，但抗战还在继续。",
        background: "商行",
        choices: [
            {
                text: "继续商业抗战",
                consequences: { status: { morale: +10 } },
                nextNode: "chapter4_business"
            },
            {
                text: "我准备好迎接最后的决战",
                consequences: { status: { morale: +20 }, flags: { ready_for_chapter5: true } },
                nextNode: "transition_chapter5"
            }
        ]
    },

    "chapter4_business": {
        chapter: 4,
        emotion: "determination",
        text: "利用商业网络支持抗战，这是你独特的贡献方式。",
        background: "商铺",
        choices: [
            {
                text: "筹集抗战物资",
                consequences: { resources: { money: +50, food: +30 }, status: { morale: +20 } },
                nextNode: "chapter4_supplies"
            },
            {
                text: "传递情报",
                consequences: { resources: { intelligence: +40 }, status: { morale: +25 } },
                nextNode: "chapter4_intel"
            },
            {
                text: "我已经准备好进入下一阶段",
                consequences: { status: { morale: +15 } },
                nextNode: "transition_chapter5"
            }
        ]
    },

    "chapter4_supplies": {
        chapter: 4,
        emotion: "satisfaction",
        text: "你成功筹集了一批物资，送往前线支援抗战。",
        background: "仓库",
        choices: [
            { text: "继续筹集", consequences: { resources: { reputation: +30 }, status: { morale: +25 } }, nextNode: "chapter4_progress" }
        ]
    },

    "chapter4_intel": {
        chapter: 4,
        emotion: "tension",
        text: "通过商业往来，你成功获取并传递了重要情报。",
        background: "密室",
        choices: [
            { text: "继续工作", consequences: { resources: { intelligence: +35 }, status: { morale: +20 } }, nextNode: "chapter4_progress" }
        ]
    },

    // 第五章进度节点
    "chapter5_progress": {
        chapter: 5,
        emotion: "hope",
        text: "胜利的曙光已经出现，但最后的战斗才是最艰难的。",
        background: "战场",
        choices: [
            {
                text: "继续战斗直到胜利",
                consequences: { status: { morale: +15 } },
                nextNode: "chapter5_final_battles"
            },
            {
                text: "准备迎接胜利",
                consequences: { status: { morale: +25 }, flags: { ready_for_victory: true } },
                nextNode: "transition_chapter6"
            }
        ]
    },

    "chapter5_final_battles": {
        chapter: 5,
        emotion: "determination",
        text: "最后的反攻已经开始，你将参与到这历史性的时刻。",
        background: "进攻前线",
        choices: [
            {
                text: "参加大反攻",
                consequences: { resources: { reputation: +40 }, status: { morale: +35 } },
                nextNode: "chapter5_counterattack"
            },
            {
                text: "解放被占领的城市",
                consequences: { resources: { reputation: +45 }, status: { morale: +40 } },
                nextNode: "chapter5_liberation"
            },
            {
                text: "迎接最终胜利",
                consequences: { status: { morale: +30 } },
                nextNode: "transition_chapter6"
            }
        ]
    },

    "chapter5_counterattack": {
        chapter: 5,
        emotion: "triumph",
        text: "你参加了大反攻，日军节节败退！",
        background: "战场，胜利在望",
        choices: [
            { text: "乘胜追击", consequences: { resources: { reputation: +50 }, status: { morale: +45 } }, nextNode: "chapter5_progress" }
        ]
    },

    "chapter5_liberation": {
        chapter: 5,
        emotion: "joy",
        text: "你参与解放了一座城市，百姓夹道欢迎！",
        background: "解放的城市",
        choices: [
            { text: "继续前进", consequences: { resources: { reputation: +55 }, status: { morale: +50 } }, nextNode: "chapter5_progress" }
        ]
    }
};

// 合并进度节点到主故事节点
function mergeProgressionNodes() {
    if (typeof storyNodes !== 'undefined') {
        Object.assign(storyNodes, progressionNodes);
        console.log('Progression nodes merged:', Object.keys(progressionNodes).length);
    }
}

// 修改指向循环节点的引用
function fixLoopingNodes() {
    if (typeof storyNodes === 'undefined') return;
    
    const chapterProgressMap = {
        'chapter1_start': 'chapter1_progress',
        'chapter2_start': 'chapter2_progress',
        'chapter3_start': 'chapter3_progress',
        'chapter4_start': 'chapter4_progress',
        'chapter5_start': 'chapter5_progress'
    };
    
    let fixedCount = 0;
    
    for (const nodeId in storyNodes) {
        const node = storyNodes[nodeId];
        if (!node.choices) continue;
        
        // 不修改进度节点自己
        if (nodeId.includes('_progress') || nodeId.includes('_missions') || 
            nodeId.includes('_battles') || nodeId.includes('_work') || 
            nodeId.includes('_business') || nodeId.includes('_final')) continue;
        
        // 不修改transition节点
        if (nodeId.startsWith('transition_')) continue;
        
        // 不修改start节点
        if (nodeId.endsWith('_start')) continue;
        
        for (const choice of node.choices) {
            const targetNode = choice.nextNode;
            if (chapterProgressMap[targetNode]) {
                choice.nextNode = chapterProgressMap[targetNode];
                fixedCount++;
            }
        }
    }
    
    console.log('Fixed looping nodes:', fixedCount);
}

// 自动执行
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            mergeProgressionNodes();
            fixLoopingNodes();
        }, 100);
    });
} else {
    // Node.js环境
    if (typeof mergeAllStoryNodes === 'function') {
        const originalMerge = mergeAllStoryNodes;
        mergeAllStoryNodes = function() {
            originalMerge();
            mergeProgressionNodes();
            fixLoopingNodes();
        };
    }
}
