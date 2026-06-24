import { type Recipe, RecipeCategory } from '../types/recipe';

export const recipes: Recipe[] = [
  // ═══════════════════════════════════════════
  // HARD EUROPEAN — 硬欧面包
  // ═══════════════════════════════════════════
  {
    id: 'pain-de-campagne',
    name: 'Pain de Campagne',
    nameZh: '乡村面包',
    category: RecipeCategory.HARD_EUROPEAN,
    description:
      'A rustic French country bread blending white, whole wheat, and rye flours with a natural levain. Mild acidity with a nutty, complex crumb.',
    descriptionZh:
      '经典法式乡村面包，混合高筋粉、全麦粉和黑麦粉，使用天然酵种发酵。酸度温和，麦香浓郁，组织开放。',
    defaultFlourWeight: 500,
    hydration: 70,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 70, isFlour: true },
      { id: 'whole-wheat', name: 'Whole Wheat Flour', nameZh: '全麦粉', percentage: 20, isFlour: true },
      { id: 'rye-flour', name: 'Rye Flour', nameZh: '黑麦粉', percentage: 10, isFlour: true },
      { id: 'water-1', name: 'Water (main)', nameZh: '水（主面团）', percentage: 60, isFlour: false },
      { id: 'water-2', name: 'Water (levain)', nameZh: '水（酵种用）', percentage: 10, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'levain', name: 'Sourdough Starter', nameZh: '天然酵母', percentage: 20, isFlour: false },
    ],
    preferment: {
      name: 'Levain',
      nameZh: '酵种',
      description:
        'A 100% hydration levain, built the night before from your mature starter.',
      flourPercentageOfTotal: 10,
      ingredients: [
        { id: 'levain-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
        { id: 'levain-water', name: 'Water', nameZh: '水', percentage: 100, isFlour: false },
        { id: 'levain-starter', name: 'Mature Starter', nameZh: '成熟酵种', percentage: 50, isFlour: false },
      ],
      instructions:
        'Build levain 8–12 hours before mixing. Should be bubbly, doubled in volume, and pass the float test.',
      instructionsZh:
        '提前8–12小时喂养酵种。酵种应充满气泡，体积翻倍，通过漂浮测试。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction: 'Autolyse: Mix all flours with water (main) until no dry bits. Cover and rest 45 minutes.',
        instructionZh: '水合：混合所有面粉和水（主面团部分），搅拌至无干粉，盖好静置45分钟。',
        durationMinutes: 45,
        tip: 'Autolyse jump-starts gluten development and reduces mixing time.',
        tipZh: '水合可提前启动面筋形成，减少揉面时间。',
      },
      {
        stepNumber: 2,
        instruction: 'Add levain and salt to the autolysed dough. Pinch and fold until fully incorporated.',
        instructionZh: '加入酵种和盐，用捏合法将其充分混入面团。',
        durationMinutes: 5,
      },
      {
        stepNumber: 3,
        instruction: 'Bulk fermentation: 4–5 hours at 24–26°C. Perform 4–6 coil folds at 30-minute intervals for the first 2–3 hours.',
        instructionZh: '基础发酵：24–26°C下发酵4–5小时。前2–3小时每30分钟进行一次折叠（共4–6次）。',
        durationMinutes: 270,
        tip: 'Watch the dough, not the clock. Look for a 30–50% volume increase and a jiggly, aerated texture.',
        tipZh: '观察面团状态而非只看时间。面团体积增长30–50%，晃动时有弹性、充满气体即可。',
      },
      {
        stepNumber: 4,
        instruction: 'Pre-shape gently into a round. Bench rest 20–30 minutes.',
        instructionZh: '轻柔预整形为圆形。静置松弛20–30分钟。',
        durationMinutes: 25,
      },
      {
        stepNumber: 5,
        instruction: 'Final shape into a boule or bâtard. Place seam-side up in a floured banneton.',
        instructionZh: '最终整形为圆形或椭圆。接缝朝上放入撒粉的发酵篮。',
        durationMinutes: 5,
      },
      {
        stepNumber: 6,
        instruction: 'Cold proof: Cover and refrigerate 12–16 hours (or 2–3 hours at room temp for same-day bake).',
        instructionZh: '冷藏发酵：盖好冷藏12–16小时（或室温2–3小时当天烘烤）。',
        durationMinutes: 840,
        tip: 'Cold-proofing deepens flavor and makes scoring easier.',
        tipZh: '冷藏发酵可加深风味，且割包更容易操作。',
      },
      {
        stepNumber: 7,
        instruction: 'Preheat oven to 250°C with a Dutch oven inside for at least 30 minutes.',
        instructionZh: '将烤箱和铸铁锅一起预热至250°C，至少30分钟。',
        durationMinutes: 30,
      },
      {
        stepNumber: 8,
        instruction: 'Turn dough onto parchment, score the top, transfer to Dutch oven. Bake covered 25 min at 230°C, then uncovered 20 min until deep golden.',
        instructionZh: '将面团倒在烘焙纸上，割包，放入铸铁锅。230°C加盖烤25分钟，开盖再烤20分钟至深金色。',
        durationMinutes: 45,
      },
    ],
    tips: [
      'For a more open crumb, handle the dough very gently during shaping.',
      'Adjust water temperature so the final dough is 24–26°C after mixing.',
      'A darker bake develops more complex caramelized flavors.',
    ],
    tipsZh: [
      '整形时手法越轻柔，内部气孔越开放。',
      '调整水温使揉好的面团最终温度在24–26°C。',
      '烤得颜色深一些会产生更复杂的焦糖化风味。',
    ],
  },
  {
    id: 'pain-au-levain',
    name: 'Pain au Levain',
    nameZh: '天然酵母面包',
    category: RecipeCategory.HARD_EUROPEAN,
    description:
      'A pure sourdough bread made with 100% white flour, letting the levain flavor shine through. Light, tangy, with a thin crisp crust.',
    descriptionZh:
      '100%白面粉纯天然酵母面包，酵种风味纯粹。轻盈微酸，表皮薄脆。',
    defaultFlourWeight: 500,
    hydration: 72,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 90, isFlour: true },
      { id: 'ap-flour', name: 'All-Purpose Flour', nameZh: '中筋面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 72, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'levain', name: 'Sourdough Starter (100%)', nameZh: '天然酵母（100%含水量）', percentage: 18, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Autolyse: Mix flours and water. Rest 60 minutes.',
        instructionZh: '水合：混合面粉和水，静置60分钟。',
        durationMinutes: 60,
      },
      {
        stepNumber: 2,
        instruction: 'Add levain and salt. Mix thoroughly by hand for 3–4 minutes.',
        instructionZh: '加入酵种和盐，手揉3–4分钟至充分融合。',
        durationMinutes: 4,
      },
      {
        stepNumber: 3,
        instruction: 'Bulk ferment 4 hours at 25°C with 3–4 stretch-and-folds.',
        instructionZh: '25°C基础发酵4小时，期间进行3–4次拉伸折叠。',
        durationMinutes: 240,
      },
      {
        stepNumber: 4,
        instruction: 'Pre-shape, rest 30 min, then final shape. Cold proof overnight (12–14 hours).',
        instructionZh: '预整形，松弛30分钟，最终整形。隔夜冷藏发酵12–14小时。',
        durationMinutes: 750,
      },
      {
        stepNumber: 5,
        instruction: 'Bake at 240°C in a preheated Dutch oven: 25 min covered, 18 min uncovered.',
        instructionZh: '预热铸铁锅240°C烘烤：加盖25分钟，开盖18分钟。',
        durationMinutes: 43,
      },
    ],
    tips: [
      'Use a mature, well-fed starter for best results.',
      'A longer cold proof (up to 18 hours) develops deeper sourdough tang.',
    ],
    tipsZh: [
      '使用成熟活跃的酵种可获得最佳效果。',
      '延长冷藏发酵至18小时可获得更浓郁的酸味。',
    ],
  },
  {
    id: 'vollkornbrot',
    name: '100% Rye Vollkornbrot',
    nameZh: '德式全黑麦面包',
    category: RecipeCategory.HARD_EUROPEAN,
    description:
      'A dense, deeply flavorful German-style 100% rye bread. Packed with whole rye grains and a touch of molasses. Stays fresh for a week.',
    descriptionZh:
      '德式100%黑麦面包，质地密实，风味深沉。含整粒黑麦和少量糖蜜。可保鲜一周。',
    defaultFlourWeight: 500,
    hydration: 68,
    ingredients: [
      { id: 'rye-flour', name: 'Whole Rye Flour', nameZh: '全黑麦粉', percentage: 80, isFlour: true },
      { id: 'rye-meal', name: 'Rye Meal / Cracked Rye', nameZh: '黑麦碎粒', percentage: 20, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 60, isFlour: false },
      { id: 'molasses', name: 'Molasses', nameZh: '糖蜜', percentage: 4, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'sourdough', name: 'Rye Sourdough Starter', nameZh: '黑麦酸种', percentage: 30, isFlour: false },
      { id: 'seeds', name: 'Sunflower & Flax Seeds', nameZh: '葵花籽和亚麻籽', percentage: 10, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Soak rye meal in hot water for 2 hours (or overnight) to soften.',
        instructionZh: '用热水浸泡黑麦碎粒2小时（或隔夜）使其软化。',
        durationMinutes: 120,
      },
      {
        stepNumber: 2,
        instruction: 'Mix all ingredients into a thick paste (rye dough does not develop gluten — no kneading needed).',
        instructionZh: '将所有材料混合成厚糊状（黑麦面团不形成面筋——无需揉面）。',
        durationMinutes: 5,
      },
      {
        stepNumber: 3,
        instruction: 'Press into a greased loaf pan. Smooth the top with wet hands.',
        instructionZh: '压入抹油的吐司模具中，用湿手抹平表面。',
        durationMinutes: 5,
      },
      {
        stepNumber: 4,
        instruction: 'Proof 3–4 hours at 28–30°C until slightly puffed.',
        instructionZh: '28–30°C发酵3–4小时至微微膨胀。',
        durationMinutes: 210,
      },
      {
        stepNumber: 5,
        instruction: 'Bake at 180°C for 60–70 minutes. Internal temperature should reach 98°C.',
        instructionZh: '180°C烘烤60–70分钟，中心温度应达到98°C。',
        durationMinutes: 65,
        tip: 'Let the bread rest for at least 24 hours before slicing — rye bread improves dramatically with time.',
        tipZh: '至少静置24小时再切片——黑麦面包随时间推移风味大幅提升。',
      },
    ],
    tips: [
      'Rye dough is sticky — use wet hands and a bench scraper, not flour.',
      'This bread gets better after day 2 and stays fresh for 7+ days wrapped in linen.',
    ],
    tipsZh: [
      '黑麦面团很黏——用湿手和刮板操作，不要撒干粉。',
      '这款面包第2天后风味更好，用布包裹可保鲜7天以上。',
    ],
  },

  // ═══════════════════════════════════════════
  // BAGUETTES — 法棍
  // ═══════════════════════════════════════════
  {
    id: 'baguette-tradition',
    name: 'Baguette Tradition',
    nameZh: '传统法棍',
    category: RecipeCategory.BAGUETTE,
    description:
      'The classic French baguette: flour, water, salt, yeast — nothing more. Thin, shatteringly crisp crust with a tender, irregular crumb.',
    descriptionZh:
      '经典法式长棍：只有面粉、水、盐、酵母。表皮薄而酥脆，组织细腻不规则。',
    defaultFlourWeight: 500,
    hydration: 75,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour (T65)', nameZh: '高筋面粉（T65）', percentage: 95, isFlour: true },
      { id: 'ap-flour', name: 'All-Purpose Flour (T55)', nameZh: '中筋面粉（T55）', percentage: 5, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 75, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.4, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Autolyse: Mix flours and water. Rest 30 minutes.',
        instructionZh: '水合：混合面粉和水，静置30分钟。',
        durationMinutes: 30,
      },
      {
        stepNumber: 2,
        instruction: 'Add salt and yeast. Mix until fully incorporated.',
        instructionZh: '加入盐和酵母，揉至完全融合。',
        durationMinutes: 3,
      },
      {
        stepNumber: 3,
        instruction: 'Bulk ferment 1.5 hours at 24°C with 2 stretch-and-folds.',
        instructionZh: '24°C基础发酵1.5小时，2次拉伸折叠。',
        durationMinutes: 90,
      },
      {
        stepNumber: 4,
        instruction: 'Divide into 3 pieces. Pre-shape into cylinders. Bench rest 20 minutes.',
        instructionZh: '分割成3份，预整形成圆柱体。静置松弛20分钟。',
        durationMinutes: 20,
      },
      {
        stepNumber: 5,
        instruction: 'Final shape into baguettes (35–40 cm). Proof seam-side down on a floured couche for 45–60 minutes.',
        instructionZh: '最终整形成35–40厘米长棍。接缝朝下放在撒粉的发酵布上发酵45–60分钟。',
        durationMinutes: 50,
      },
      {
        stepNumber: 6,
        instruction: 'Preheat oven to 250°C with a baking stone and steam pan. Score each baguette with 3–5 overlapping slashes.',
        instructionZh: '预热烤箱至250°C，放入烘焙石板和蒸汽烤盘。每根法棍割3–5道斜口。',
        durationMinutes: 15,
      },
      {
        stepNumber: 7,
        instruction: 'Bake with steam at 240°C for 22–25 minutes. Vent oven door for the last 5 minutes for an extra-crisp crust.',
        instructionZh: '240°C蒸汽烘烤22–25分钟，最后5分钟开烤箱门通风使表皮更酥脆。',
        durationMinutes: 25,
        tip: 'For home ovens: preheat a cast iron pan on the bottom rack, pour boiling water into it when loading the bread.',
        tipZh: '家用烤箱技巧：底層放铸铁锅预热，放入面团时倒入沸水产生蒸汽。',
      },
    ],
    tips: [
      'Steam is critical — it keeps the crust elastic during oven spring.',
      'A thin, sharp blade (lame) at a shallow angle gives the best scoring results.',
    ],
    tipsZh: [
      '蒸汽至关重要——在烤箱膨胀期保持表皮柔软有弹性。',
      '用锋利薄刀片以浅角度割包效果最佳。',
    ],
  },
  {
    id: 'baguette-poolish',
    name: 'Baguette Poolish',
    nameZh: '波兰种法棍',
    category: RecipeCategory.BAGUETTE,
    description:
      'A baguette with a poolish pre-ferment for extra depth of flavor and a longer shelf life. Creamy, nutty notes with the classic crackling crust.',
    descriptionZh:
      '采用波兰种（poolish）预发酵的法棍，风味层次更深，保存时间更长。带有奶油坚果香气和经典酥脆外皮。',
    defaultFlourWeight: 500,
    hydration: 76,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour (T65)', nameZh: '高筋面粉（T65）', percentage: 100, isFlour: true },
      { id: 'water-main', name: 'Water (main dough)', nameZh: '水（主面团）', percentage: 46, isFlour: false },
      { id: 'water-poolish', name: 'Water (poolish)', nameZh: '水（波兰种用）', percentage: 30, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.3, isFlour: false },
    ],
    preferment: {
      name: 'Poolish',
      nameZh: '波兰种',
      description:
        'A 100% hydration pre-ferment. Equal parts flour and water with a tiny pinch of yeast.',
      flourPercentageOfTotal: 30,
      ingredients: [
        { id: 'poolish-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
        { id: 'poolish-water', name: 'Water', nameZh: '水', percentage: 100, isFlour: false },
        { id: 'poolish-yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.2, isFlour: false },
      ],
      instructions:
        'Mix poolish ingredients 12–16 hours before mixing. Cover at room temp (18–21°C). Should be bubbly and smell sweet-nutty.',
      instructionsZh:
        '提前12–16小时制作波兰种。室温（18–21°C）盖好。应充满气泡，散发甜坚果香气。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction: 'Dissolve poolish in water (main). Add flour, mix to a shaggy dough. Rest 30 minutes.',
        instructionZh: '用水（主面团）溶解波兰种，加入面粉揉成粗糙面团，静置30分钟。',
        durationMinutes: 30,
      },
      {
        stepNumber: 2,
        instruction: 'Add salt and yeast. Mix well. Bulk ferment 2 hours with 2 folds.',
        instructionZh: '加入盐和酵母，揉匀。基础发酵2小时，2次折叠。',
        durationMinutes: 120,
      },
      {
        stepNumber: 3,
        instruction: 'Divide and shape baguettes. Final proof 45–50 minutes on a couche.',
        instructionZh: '分割整形成法棍。发酵布上最终发酵45–50分钟。',
        durationMinutes: 50,
      },
      {
        stepNumber: 4,
        instruction: 'Score and bake at 240°C with steam: 22–25 minutes.',
        instructionZh: '割包，240°C蒸汽烘烤22–25分钟。',
        durationMinutes: 25,
      },
    ],
    tips: [
      'Poolish temperature control (18–21°C) is key — too warm and it will over-ferment.',
      'The long poolish fermentation brings out creamy, nutty flavors unique to this method.',
    ],
    tipsZh: [
      '波兰种温度控制（18–21°C）是关键——温度过高会发酵过度。',
      '波兰种长时间发酵产生独特的奶油坚果风味。',
    ],
  },

  // ═══════════════════════════════════════════
  // CIABATTA — 恰巴塔
  // ═══════════════════════════════════════════
  {
    id: 'ciabatta-classica',
    name: 'Ciabatta Classica',
    nameZh: '经典恰巴塔',
    category: RecipeCategory.CIABATTA,
    description:
      'The iconic Italian slipper bread with an exceptionally high hydration and an open, holey crumb. Just flour, water, salt, yeast, and a touch of olive oil.',
    descriptionZh:
      '标志性的意大利拖鞋面包，超高含水量，组织多洞开放。仅用面粉、水、盐、酵母和少许橄榄油。',
    defaultFlourWeight: 500,
    hydration: 80,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 80, isFlour: false },
      { id: 'olive-oil', name: 'Olive Oil', nameZh: '橄榄油', percentage: 2, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.5, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Mix flour, water, and yeast into a very wet, shaggy dough. No kneading — just combine.',
        instructionZh: '将面粉、水和酵母混合成非常湿润的粗糙面团。无需揉面——只需混合均匀。',
        durationMinutes: 3,
      },
      {
        stepNumber: 2,
        instruction: 'Rest 30 minutes (autolyse). Then add salt and olive oil. Mix by folding the dough over itself repeatedly.',
        instructionZh: '静置30分钟（水合）。加入盐和橄榄油，通过反复折叠混合。',
        durationMinutes: 35,
      },
      {
        stepNumber: 3,
        instruction: 'Bulk ferment 2–2.5 hours at 24°C. Perform 3–4 coil folds every 30 minutes. Dough will transform from slack to pillowy.',
        instructionZh: '24°C基础发酵2–2.5小时。每30分钟做一次折叠（3–4次）。面团会从松软变得蓬松。',
        durationMinutes: 140,
        tip: 'Handle the dough gently — you want to preserve the air pockets that form during fermentation.',
        tipZh: '轻柔操作面团——保留发酵过程中形成的气泡。',
      },
      {
        stepNumber: 4,
        instruction: 'Turn dough onto a heavily floured surface. Dust the top generously. Stretch gently into a rectangle.',
        instructionZh: '将面团倒在大量撒粉的台面上。表面也大量撒粉。轻轻拉伸成矩形。',
        durationMinutes: 5,
      },
      {
        stepNumber: 5,
        instruction: 'Cut into 3–4 pieces. Transfer to a floured couche or parchment. Proof 30–40 minutes.',
        instructionZh: '切成3–4块。转移到撒粉的发酵布或烘焙纸上。发酵30–40分钟。',
        durationMinutes: 35,
      },
      {
        stepNumber: 6,
        instruction: 'Bake at 240°C with steam for 20–25 minutes until deep golden.',
        instructionZh: '240°C蒸汽烘烤20–25分钟至深金色。',
        durationMinutes: 23,
      },
    ],
    tips: [
      'High hydration dough is sticky — use wet hands for folding, not dry flour.',
      'Ciabatta is done when it feels light for its size and sounds hollow when tapped.',
    ],
    tipsZh: [
      '高水面团很黏——折叠时用湿手，不要用手粉。',
      '恰巴塔烤好的标志：拿起来感觉轻，敲底部有空心声。',
    ],
  },
  {
    id: 'ciabatta-biga',
    name: 'Ciabatta Biga',
    nameZh: '意式酵种恰巴塔',
    category: RecipeCategory.CIABATTA,
    description:
      'Ciabatta elevated with an Italian biga pre-ferment. The 16-hour biga develops extraordinary depth — nutty, slightly tangy, with an impossibly airy crumb.',
    descriptionZh:
      '用意式酵种（biga）升级的恰巴塔。16小时长时间发酵带来非凡的风味深度——坚果香、微酸、气孔极其开放。',
    defaultFlourWeight: 500,
    hydration: 82,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water-main', name: 'Water (main dough)', nameZh: '水（主面团）', percentage: 52, isFlour: false },
      { id: 'water-biga', name: 'Water (biga)', nameZh: '水（酵种用）', percentage: 30, isFlour: false },
      { id: 'olive-oil', name: 'Olive Oil', nameZh: '橄榄油', percentage: 2, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.3, isFlour: false },
    ],
    preferment: {
      name: 'Biga',
      nameZh: '意式酵种',
      description:
        'A stiff (50% hydration) Italian pre-ferment. Lower hydration than poolish, producing more acetic acidity.',
      flourPercentageOfTotal: 30,
      ingredients: [
        { id: 'biga-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
        { id: 'biga-water', name: 'Water', nameZh: '水', percentage: 50, isFlour: false },
        { id: 'biga-yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.3, isFlour: false },
      ],
      instructions:
        'Mix biga 14–16 hours before. It should be a stiff dough. Ferment at 16–18°C. Ripens to a bubbly, slightly sour mass.',
      instructionsZh:
        '提前14–16小时制作biga，应为较硬的面团。16–18°C发酵至充满气泡、微酸的状态。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction: 'Dissolve biga in main water. Add flour, mix to combine. Rest 30 minutes.',
        instructionZh: '在主面团水中溶解biga，加入面粉混合。静置30分钟。',
        durationMinutes: 30,
      },
      {
        stepNumber: 2,
        instruction: 'Add salt, yeast, olive oil. Mix well. Bulk ferment 2.5 hours with 4 coil folds.',
        instructionZh: '加入盐、酵母和橄榄油，混匀。基础发酵2.5小时，4次折叠。',
        durationMinutes: 150,
      },
      {
        stepNumber: 3,
        instruction: 'Shape and proof 40 minutes on floured linen.',
        instructionZh: '整形，在撒粉的布上发酵40分钟。',
        durationMinutes: 40,
      },
      {
        stepNumber: 4,
        instruction: 'Bake at 245°C with steam for 18–22 minutes.',
        instructionZh: '245°C蒸汽烘烤18–22分钟。',
        durationMinutes: 20,
      },
    ],
    tips: [
      'Biga is stiffer than poolish — crumble it into the water to dissolve faster.',
      'The combination of biga acidity and high hydration creates the ultimate hole structure.',
    ],
    tipsZh: [
      'Biga比波兰种更硬——掰碎放入水中可更快溶解。',
      'Biga的酸度与超高水量的结合，创造出极致的多孔组织。',
    ],
  },

  // ═══════════════════════════════════════════
  // OTHER STAPLES — 其他主食面包
  // ═══════════════════════════════════════════
  {
    id: 'focaccia',
    name: 'Focaccia Genovese',
    nameZh: '佛卡夏（热那亚风味）',
    category: RecipeCategory.OTHER,
    description:
      'A light, airy Italian flatbread with a modest amount of olive oil. Crisp bottom, pillowy interior, dimpled top. Perfect for sandwiches or dipping.',
    descriptionZh:
      '轻盈蓬松的意式扁面包，橄榄油用量克制。底部酥脆，内部柔软，表面有标志性的凹痕。适合做三明治或蘸食。',
    defaultFlourWeight: 500,
    hydration: 75,
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 75, isFlour: false },
      { id: 'olive-oil', name: 'Olive Oil', nameZh: '橄榄油', percentage: 4, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.6, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: 'Mix flour, water, yeast. Autolyse 20 minutes. Add salt, mix well.',
        instructionZh: '混合面粉、水和酵母，水合20分钟。加入盐，揉匀。',
        durationMinutes: 23,
      },
      {
        stepNumber: 2,
        instruction: 'Bulk ferment 1.5 hours with 2 stretch-and-folds.',
        instructionZh: '基础发酵1.5小时，2次拉伸折叠。',
        durationMinutes: 90,
      },
      {
        stepNumber: 3,
        instruction: 'Coat a baking pan with olive oil. Spread dough into the pan. Proof 45 minutes until puffy.',
        instructionZh: '烤盘涂橄榄油，将面团铺展在烤盘中。发酵45分钟至蓬松。',
        durationMinutes: 45,
      },
      {
        stepNumber: 4,
        instruction: 'Dimple the dough with oiled fingers. Drizzle with olive oil and flaky salt.',
        instructionZh: '用沾油的手指压出凹痕。淋上橄榄油和海盐片。',
        durationMinutes: 3,
      },
      {
        stepNumber: 5,
        instruction: 'Bake at 230°C for 20–25 minutes until golden.',
        instructionZh: '230°C烘烤20–25分钟至金黄色。',
        durationMinutes: 23,
      },
    ],
    tips: [
      'Dimpling is not just decorative — it prevents large air bubbles from lifting the crust.',
      'A well-oiled pan creates a fry-like crispy bottom.',
    ],
    tipsZh: [
      '压凹痕不仅是为了美观——也防止大气泡顶起表皮。',
      '烤盘充分抹油可以做出像油炸一样酥脆的底部。',
    ],
  },
];
