# 《星火》Commercial Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade 《星火》 from a functional prototype to a commercial-grade text adventure game that authentically embodies 群众路线 (Mass Line), 军事民主 (Military Democracy), and 敌后斗争 (Behind-Enemy-Lines Struggle) as core gameplay mechanics.

**Architecture:** Enhance the existing vanilla JS architecture by adding three new game systems (MassLine, MilitaryDemocracy, Guerrilla) as separate script files that integrate with the existing `gameState`, `storyNodes`, and `handleChoice` flow. Add new resources (`peopleHeart`, `massBase`) to the state, new node types (`assembly`, `military_council`, `battle_review`, `sweep`) to the story engine, and new UI panels for these systems. Story content is expanded with ~80 new nodes across all chapters.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript (no build tools, no frameworks)

---

### Task 1: Add New Resources and State Fields

**Files:**
- Modify: `script.js:17-57` (gameState object)
- Modify: `script.js:2874-2898` (restartGame reset)

- [ ] **Step 1: Add peopleHeart and massBase to gameState.resources**

In `script.js`, add two new resource fields to `gameState.resources`:

```javascript
resources: {
    food: 100,
    ammo: 0,
    intelligence: 0,
    reputation: 0,
    money: 500,
    medicine: 0,
    peopleHeart: 50,
    massBase: 0
},
```

- [ ] **Step 2: Add tunnel and militia tracking to gameState**

Add new tracking fields after the `playthroughs` field:

```javascript
// 群众路线追踪
tunnelLevel: 0,
militiaUnlocked: false,
assemblyCount: 0,
// 军事民主追踪
councilDecisions: [],
reviewBonuses: [],
tacticalBonus: 0,
// 敌后斗争追踪
guerrillaTactics: [],
sweepsSurvived: 0,
intelNetwork: []
```

- [ ] **Step 3: Update restartGame to reset new fields**

In the `restartGame` function, add the new fields to the reset object.

- [ ] **Step 4: Verify game loads without errors**

Open `index.html` in browser, confirm game starts and the existing flow still works.

- [ ] **Step 5: Commit**

```bash
git add script.js
git commit -m "feat: add peopleHeart, massBase and system tracking to gameState"
```

---

### Task 2: Add New Resource UI Elements

**Files:**
- Modify: `index.html:67-98` (resources-panel)
- Modify: `style.css:194-199` (resource icon colors)
- Modify: `script.js` (updateUI function)

- [ ] **Step 1: Add peopleHeart and massBase resource elements to HTML**

After the medicine resource div in `index.html`, add:

```html
<div class="resource people-heart-resource">
    <div class="resource-icon heart-icon">心</div>
    <span class="resource-name">民心</span>
    <div class="progress-bar mini-bar">
        <div class="progress-fill people-heart-fill" id="people-heart-bar" style="width: 50%"></div>
    </div>
    <span class="resource-value" id="peopleHeart-value">50</span>
</div>
<div class="resource">
    <div class="resource-icon mass-icon">众</div>
    <span class="resource-name">群众基础</span>
    <span class="resource-value" id="massBase-value">0</span>
</div>
```

- [ ] **Step 2: Add CSS for new resource icons and people-heart progress bar**

```css
.heart-icon { background: #e74c3c; }
.mass-icon { background: #ff6b35; }

.people-heart-resource {
    flex-basis: 100%;
    justify-content: center;
    border: 2px solid #e74c3c;
    background-color: #4a2a2a;
}

.mini-bar {
    width: 80px;
    height: 10px;
}

.people-heart-fill {
    background: linear-gradient(90deg, #e74c3c, #ff6b6b);
}
```

- [ ] **Step 3: Update the updateUI function to refresh new resources**

Add lines to the existing `updateUI` function to update `peopleHeart-value`, `massBase-value`, and the `people-heart-bar` width.

- [ ] **Step 4: Verify new resources appear in the UI**

Open browser, confirm 民心 bar and 群众基础 number display correctly.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css script.js
git commit -m "feat: add peopleHeart and massBase UI elements"
```

---

### Task 3: Create Mass Line System (群众路线)

**Files:**
- Create: `script_mass_line.js`
- Modify: `index.html` (add script tag)

- [ ] **Step 1: Create script_mass_line.js with core mass line logic**

Create the file with:
1. `getPeopleHeartLevel(value)` - returns tier name based on value (0-20: 人心涣散, 20-40: 将信将疑, 40-60: 逐渐信任, 60-80: 鱼水情深, 80-100: 铜墙铁壁)
2. `getMassLineEffects(level)` - returns passive effects for each tier (food bonus, intel accuracy, unlock flags)
3. `applyMassLineEffects()` - called each turn to apply passive effects based on current peopleHeart
4. `updateMassBase(amount)` - increases massBase (never decreases)
5. `checkMassLineUnlocks()` - checks if tunnel/militia/tactics should be unlocked based on thresholds

- [ ] **Step 2: Add assembly node type handling**

Add function `handleAssemblyNode(node)` that:
1. Displays the assembly text with a special "群众大会" header
2. Shows choices with `massReaction` text visible based on current peopleHeart level
3. Modifies consequence weights based on peopleHeart (high heart = better outcomes)
4. After choice, shows the mass reaction text as feedback before proceeding

- [ ] **Step 3: Create 8 assembly story nodes**

Add assembly nodes spanning chapters 1-5:
- `village_assembly_spring_planting` (Ch1): Help with farming vs conscript labor
- `village_assembly_militia` (Ch1): Form village militia discussion
- `village_assembly_rent_reduction` (Ch1): Rent reduction policy debate
- `village_assembly_winter_school` (Ch2): Winter literacy campaign
- `village_assembly_tunnel` (Ch3): Propose digging tunnels
- `village_assembly_production` (Ch4): Great production movement
- `village_assembly_counterattack` (Ch5): Mobilize for counterattack
- `village_assembly_victory` (Ch6): Victory celebration assembly

- [ ] **Step 4: Add script tag to index.html**

Add `<script src="script_mass_line.js"></script>` before the startup script block.

- [ ] **Step 5: Integrate mass line effects into handleChoice**

In `script.js` `handleChoice`, after `applyConsequences`, add call to `applyMassLineEffects()` and `checkMassLineUnlocks()`.

- [ ] **Step 6: Verify assembly nodes work end-to-end**

Navigate to an assembly node, confirm special UI renders, choices work, and peopleHeart changes correctly.

- [ ] **Step 7: Commit**

```bash
git add script_mass_line.js index.html script.js
git commit -m "feat: implement Mass Line system with assembly nodes and peopleHeart mechanics"
```

---

### Task 4: Create Military Democracy System (军事民主)

**Files:**
- Create: `script_military_democracy.js`
- Modify: `index.html` (add script tag)

- [ ] **Step 1: Create script_military_democracy.js with council mechanics**

Create the file with:
1. `handleCouncilNode(node)` - renders "诸葛亮会" UI with proposer cards showing plan name, advantage, risk, and resource requirements
2. `handleBattleReviewNode(node)` - renders "战后复盘" UI, applies permanent tactical bonuses
3. `calculateBattleModifier(choice, gameState)` - adjusts battle outcomes based on whether player adopted collective wisdom vs autocratic decisions
4. `getCouncilHistory()` - tracks council decisions for ending evaluation

- [ ] **Step 2: Create 6 military council story nodes**

- `battle_council_ambush_01` (Ch1): First ambush planning - 口袋阵 vs 打了就跑
- `battle_council_railroad` (Ch1): Railroad sabotage planning
- `battle_council_defense` (Ch2): Defensive position planning
- `battle_council_counterattack` (Ch2): Counterattack timing debate
- `battle_council_sweep_response` (Ch3): How to respond to enemy sweep
- `battle_council_final_offensive` (Ch5): Final offensive planning

- [ ] **Step 3: Create 6 battle review nodes**

One after each council node, showing experience learned and granting permanent bonuses.

- [ ] **Step 4: Add script tag and integrate into handleChoice**

- [ ] **Step 5: Verify council and review nodes work**

- [ ] **Step 6: Commit**

```bash
git add script_military_democracy.js index.html script.js
git commit -m "feat: implement Military Democracy system with council and review nodes"
```

---

### Task 5: Create Guerrilla Warfare System (敌后斗争)

**Files:**
- Create: `script_guerrilla.js`
- Modify: `index.html` (add script tag)

- [ ] **Step 1: Create script_guerrilla.js with sweep and tactics systems**

Create the file with:
1. `triggerSweepEvent(intensity)` - triggers enemy sweep with 3 levels (小规模清乡, 铁壁合围, 三光政策)
2. `getAvailableTactics()` - returns unlocked guerrilla tactics based on massBase and flags
3. `executeTactic(tacticId)` - processes a guerrilla tactic (麻雀战, 地雷战, 破袭战, 围困据点) with resource costs and rewards
4. `tunnelSystem` object - manages tunnel levels (基础地道→战斗地道→地道网络), build requirements, and defensive bonuses
5. `intelNetworkSystem` - manages intelligence agents, accuracy based on peopleHeart

- [ ] **Step 2: Create sweep event story nodes (4 nodes)**

- `sweep_small_ch1`: Small-scale mopping up (Ch1, difficulty: easy)
- `sweep_encirclement_ch3`: Iron wall encirclement (Ch3, difficulty: hard)
- `sweep_three_alls_ch4`: Three-alls policy (Ch4, difficulty: extreme)
- `sweep_final_ch5`: Final desperate sweep (Ch5, difficulty: hard)

Each node offers 3-4 response choices whose availability depends on tunnel level, peopleHeart, and unlocked tactics.

- [ ] **Step 3: Create guerrilla tactic story nodes (8 nodes)**

- `tactic_sparrow_warfare_01/02` (Ch1-2): Hit and run raids
- `tactic_mine_warfare_01/02` (Ch2-3): Homemade mine operations
- `tactic_sabotage_01/02` (Ch3-4): Railroad/communication sabotage
- `tactic_siege_01/02` (Ch4-5): Blockade isolated outposts

- [ ] **Step 4: Create tunnel building story nodes (3 nodes)**

- `tunnel_build_basic` (Ch1): Basic hiding tunnels
- `tunnel_upgrade_combat` (Ch2): Combat tunnel upgrade
- `tunnel_upgrade_network` (Ch4): Village-to-village network

- [ ] **Step 5: Create intel network story nodes (3 nodes)**

- `intel_recruit_cuihua` (Ch1): Recruit the vegetable delivery woman
- `intel_recruit_shopkeeper` (Ch2): Recruit the shopkeeper
- `intel_turn_puppet` (Ch3): Turn a puppet army officer

- [ ] **Step 6: Add script tag and integrate**

Add sweep checks to the random event system - sweeps trigger based on chapter and probability.

- [ ] **Step 7: Verify all guerrilla mechanics work**

- [ ] **Step 8: Commit**

```bash
git add script_guerrilla.js index.html script.js
git commit -m "feat: implement Guerrilla Warfare system with sweeps, tactics, tunnels, and intel"
```

---

### Task 6: Expand Story Content with Three-System Integration

**Files:**
- Modify: `script_mass_line.js` (add integrated story nodes)
- Modify: `script_military_democracy.js` (add integrated nodes)
- Modify: `script_guerrilla.js` (add integrated nodes)
- Modify: `script.js` (update chapter transitions to route through new content)

- [ ] **Step 1: Add Chapter 1 integrated storyline (~20 new nodes)**

Chapter 1 (敌后微光) becomes the showcase chapter with all 3 systems:
- Sequence: join guerrillas → help villagers (mass line) → first ambush council (democracy) → first sweep (guerrilla) → build tunnels → assembly about militia
- Each path through chapter 1 hits at least one node from each system

- [ ] **Step 2: Add Chapter 3-4 integrated nodes (~15 nodes)**

Cultural resistance and economic warfare chapters get mass line and guerrilla integration:
- Zhang Teacher holds literacy assemblies
- Chen Boss navigates underground economy with intel network
- Sweeps affect cultural and economic operations

- [ ] **Step 3: Add Chapter 5-6 convergence nodes (~10 nodes)**

Final chapters bring all systems together:
- Grand assembly for counterattack mobilization
- Final council for liberation offensive
- All guerrilla tactics available for final push
- Victory evaluation based on all three system scores

- [ ] **Step 4: Update chapter transition nodes**

Modify existing `transition_chapterX` nodes to route through new content, ensuring the player encounters the three systems naturally.

- [ ] **Step 5: Test full playthrough**

Play through chapters 0-6, verifying no broken node links and all three systems are encountered.

- [ ] **Step 6: Commit**

```bash
git add script_mass_line.js script_military_democracy.js script_guerrilla.js script.js
git commit -m "feat: expand story content with integrated three-system narrative"
```

---

### Task 7: Enhanced Ending Evaluation System

**Files:**
- Modify: `script.js:2830-2870` (showEnding function)

- [ ] **Step 1: Create scoring functions for each system**

```javascript
function calculateMassLineScore() // based on peopleHeart, massBase, assembly choices
function calculateDemocracyScore() // based on council decisions, review participation
function calculateGuerrillaScore() // based on sweeps survived, tactics used, tunnel level
```

- [ ] **Step 2: Create graded ending with report card**

Replace simple victory text with a detailed "抗战报告" showing:
- Overall grade (S/A/B/C/D)
- Mass Line score with commentary
- Military Democracy score with commentary
- Guerrilla Warfare score with commentary
- Key decisions that shaped the outcome
- Historical context for the grade

- [ ] **Step 3: Add "脱离群众" failure ending**

New ending type triggered when peopleHeart drops to 0: the guerrilla base collapses due to loss of popular support.

- [ ] **Step 4: Verify all ending paths**

- [ ] **Step 5: Commit**

```bash
git add script.js
git commit -m "feat: enhanced ending evaluation with three-system grading"
```

---

### Task 8: UI/UX Enhancements

**Files:**
- Modify: `style.css`
- Modify: `index.html`

- [ ] **Step 1: Add special styling for assembly nodes**

Red-themed panel with "群众大会" banner, people icon, and mass reaction display area.

- [ ] **Step 2: Add special styling for council nodes**

Military green panel with "诸葛亮会" banner, proposer cards side-by-side showing plan details.

- [ ] **Step 3: Add special styling for battle review nodes**

After-action report style with "+X战术加成" badge animations.

- [ ] **Step 4: Add special styling for sweep events**

Red alert styling with warning banner and countdown feeling.

- [ ] **Step 5: Add people-heart level indicator**

Visual indicator above the resource bar showing current tier name (e.g. "鱼水情深") with appropriate color.

- [ ] **Step 6: Add choice requirement indicators**

Choices that require minimum resources show the requirement with green (met) or red (unmet) coloring.

- [ ] **Step 7: Add resource change animations**

When resources change, flash the number with +/- indicator and color (green for gain, red for loss).

- [ ] **Step 8: Commit**

```bash
git add style.css index.html
git commit -m "feat: enhanced UI with system-specific panels and visual feedback"
```

---

### Task 9: Save System Upgrade

**Files:**
- Modify: `script.js:2992-3014` (save/load functions)
- Modify: `index.html` (save modal)

- [ ] **Step 1: Implement multi-slot save system**

Replace single-save with 3 manual slots + 1 auto-save slot. Add save slot selection modal with preview info (chapter, time, peopleHeart, date saved).

- [ ] **Step 2: Add auto-save every 3 nodes**

In `handleChoice`, increment a counter and auto-save every 3 choices.

- [ ] **Step 3: Add save version and migration**

Tag saves with version "2.0.0". On load, detect old saves (no version) and migrate by adding new fields with defaults.

- [ ] **Step 4: Verify save/load with new fields**

- [ ] **Step 5: Commit**

```bash
git add script.js index.html style.css
git commit -m "feat: multi-slot save system with auto-save and version migration"
```

---

### Task 10: Final Integration and Polish

**Files:**
- All files

- [ ] **Step 1: Fix any broken node references**

Run a validation pass checking all `nextNode` references resolve to existing nodes.

- [ ] **Step 2: Balance resource numbers**

Ensure no path leads to unwinnable states too early; verify difficulty curve across chapters.

- [ ] **Step 3: Add node count to completion tracking**

Update the completion system to count new nodes and systems.

- [ ] **Step 4: Full playthrough test**

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete commercial upgrade with mass line, military democracy, and guerrilla systems"
```
