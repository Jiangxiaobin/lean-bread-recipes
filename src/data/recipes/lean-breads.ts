import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC } from '../../types/recipe';

export const leanBreads: Recipe[] = [
  // ==================== 1. Pain de Campagne ====================
  {
    id: 'pain-de-campagne',
    name: 'Pain de Campagne',
    nameZh: '乡村面包',
    category: RC.LEAN_BREAD,
    description:
      'A rustic French country loaf with a chewy crumb and blistered crust, built on a levain preferment for nuanced acidity and exceptional keeping quality.',
    descriptionZh:
      '经典法式乡村面包，以鲁邦种为发酵引种，拥有富有嚼劲的蜂窝状组织、起泡酥脆的外壳以及复杂的酸香风味，保质期长。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 70,
    difficulty: 'intermediate',
    totalTime: 1440,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    preferment: {
      name: 'Levain',
      nameZh: '鲁邦种',
      description:
        'A stiff (60% hydration) levain built with mature rye sourdough starter, T65 flour, and whole wheat flour. Ferment at 24-26°C for 8-10 hours until tripled in volume and domed on top.',
      flourPercentageOfTotal: 10,
      ingredients: [
        { id: 'levain-t65', name: 'T65 flour', nameZh: 'T65面粉', percentage: 10, isFlour: true },
        { id: 'levain-ww', name: 'Whole wheat flour', nameZh: '全麦面粉', percentage: 1, isFlour: true },
        { id: 'levain-water', name: 'Water', nameZh: '水', percentage: 6.6, isFlour: false },
        { id: 'levain-starter', name: 'Mature rye sourdough starter', nameZh: '成熟黑麦鲁邦种', percentage: 2, isFlour: false },
      ],
      instructions:
        'Mix all levain ingredients until no dry flour remains. Cover and ferment at 24-26°C for 8-10 hours until tripled in volume, domed, and smelling pleasantly acidic.',
      instructionsZh:
        '混合所有鲁邦种原料至无干粉。盖保鲜膜，24-26°C发酵8-10小时，至体积三倍大、表面呈穹顶状、散发出宜人的酸香。',
    },

    ingredients: [
      { id: 't65', name: 'T65 flour (Type 65)', nameZh: 'T65面粉', percentage: 90, isFlour: true },
      { id: 'ww', name: 'Whole wheat flour', nameZh: '全麦面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 70, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'levain', name: 'Levain (from preferment)', nameZh: '鲁邦种（见酵种）', percentage: 10, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Mix Levain: Combine the levain ingredients in a small bowl. Cover and ferment at 24-26°C for 8-10 hours until tripled and domed.',
        instructionZh:
          '制作鲁邦种：在小碗中混合鲁邦种原料，盖保鲜膜，24-26°C发酵8-10小时至体积三倍大且顶部呈圆拱形。',
        durationMinutes: 600,
      },
      {
        stepNumber: 2,
        instruction:
          'Autolyse: In a large bowl, combine the T65 flour, whole wheat flour, and water (reserve 50 g for bassinage). Mix until no dry flour remains. Cover and rest at room temperature for 1 hour. The levain can be added now for a fermentolyse, or after the rest for a classic autolyse.',
        instructionZh:
          '水合：在大碗中混合T65面粉、全麦面粉和水（预留50g用于后加水）。搅拌至无干粉，盖保鲜膜室温静置1小时。可将鲁邦种此刻加入进行发酵水合，或在水合结束后加入。',
        durationMinutes: 60,
      },
      {
        stepNumber: 3,
        instruction:
          'Mix: Add the levain and salt to the autolysed dough. Mix by hand using the Rubaud method (thumb-and-palm scooping) for 8-10 minutes until the dough gains strength and releases cleanly from the bowl. Gradually incorporate the reserved bassinage water during mixing.',
        instructionZh:
          '搅拌：将鲁邦种和盐加入水合好的面团中。采用Rubaud手法（拇指和掌心舀揉）揉面8-10分钟，直至面团产生筋度并能干净地脱离碗壁。期间逐步加入预留的后加水。',
        durationMinutes: 15,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Ferment: Transfer to a lightly oiled straight-walled container. Ferment at 24-26°C for 4-5 hours. Perform 4 coil folds at 30-minute intervals during the first 2 hours. The dough should rise by 50-75% and show visible gas bubbles.',
        instructionZh:
          '基础发酵：转移到轻微涂油的直壁容器中。24-26°C发酵4-5小时。前2小时内每30分钟进行一次卷折（共4次）。面团应膨胀50-75%且可见明显气泡。',
        durationMinutes: 300,
        tip: 'Use a straight-walled container to accurately judge volume increase. Mark the starting level with a rubber band.',
        tipZh: '使用直壁容器以准确判断体积增长，用橡皮筋标记初始高度。',
      },
      {
        stepNumber: 5,
        instruction:
          'Shape: Turn the dough onto a lightly floured surface. Pre-shape into a round and rest 20 minutes uncovered. Final shape as a tight boule or batard. Place seam-side up in a heavily floured banneton. Pinch the seam closed.',
        instructionZh:
          '整形：将面团倒在轻撒面粉的台面上，预整成圆形后不盖布静置20分钟。最终整形成紧致的圆球或椭圆形。接缝朝上放入大量撒粉的发酵篮中，捏紧收口。',
        durationMinutes: 30,
      },
      {
        stepNumber: 6,
        instruction:
          'Cold Proof & Bake: Cover the banneton and cold-proof in the refrigerator at 3-4°C for 12-16 hours. When ready to bake, preheat oven with a Dutch oven or baking stone to 250°C for 45 minutes. Invert the dough onto parchment, score with a single deep slash, and bake covered at 250°C for 25 minutes. Uncover, reduce to 220°C, and bake 20-25 minutes more until the crust is deep mahogany. Cool completely on a wire rack before slicing.',
        instructionZh:
          '冷藏发酵与烘烤：盖住发酵篮，放入3-4°C冰箱冷藏发酵12-16小时。烘烤前将烤箱与铸铁锅或石板一同预热至250°C 45分钟。将面团倒扣在烘焙纸上，划一道深切口，盖盖250°C烤25分钟。揭盖后降至220°C再烤20-25分钟至外壳呈深红褐色。放在晾网上完全冷却后再切片。',
        durationMinutes: 960,
        tip: 'The bread is done when the internal temperature reaches 96-98°C. The crust should sound hollow when tapped on the bottom.',
        tipZh: '面包内部温度达到96-98°C即为烤熟，敲击底部应发出空洞的声音。',
      },
    ],

    tips: [
      'For the most complex flavour, cold-proof for the full 16 hours — the extended retardation develops deeper acidity and improves crust blistering.',
      'If your kitchen is cool (below 22°C), extend bulk fermentation by 1-2 hours rather than increasing levain percentage, which can lead to over-acidification.',
      'Bassinage (reserved water added after initial mixing) improves extensibility without sacrificing strength — critical for open crumb in high-hydration country loaves.',
    ],
    tipsZh: [
      '想要最丰富的风味，冷藏发酵满16小时——长时间的迟缓发酵会发展出更深层的酸味并改善外壳起泡效果。',
      '如果厨房温度较低（低于22°C），延长基础发酵1-2小时而非增加鲁邦种比例，后者可能导致过度酸化。',
      '后加水法（在初步混合后加入预留的水分）可提高面团延展性而不牺牲筋度——这是高水量乡村面包形成开放气孔的关键。',
    ],
  },

  // ==================== 2. Pain au Levain ====================
  {
    id: 'pain-au-levain',
    name: 'Pain au Levain',
    nameZh: '天然酵母面包',
    category: RC.LEAN_BREAD,
    description:
      'A pure sourdough hearth bread that relies entirely on wild yeast and bacteria for fermentation. Mild tang, glossy open crumb, and a shatteringly crisp crust make this the benchmark artisan loaf.',
    descriptionZh:
      '完全依靠野生酵母和乳酸菌发酵的纯天然酵种面包。温和的酸味、富有光泽的开放式气孔组织以及酥脆裂响的外壳，使其成为手工面包的标杆之作。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 72,
    difficulty: 'intermediate',
    totalTime: 1560,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 90, isFlour: true },
      { id: 'ww-flour', name: 'Whole wheat flour', nameZh: '全麦面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 72, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'starter', name: 'Mature sourdough starter (100% hydration)', nameZh: '成熟鲁邦种（100%含水量）', percentage: 15, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Feed Starter: 10-12 hours before mixing, feed your sourdough starter at a 1:2:2 ratio (starter:flour:water) so it peaks when you are ready to mix the dough. It should pass the float test.',
        instructionZh:
          '喂养酵种：在混合面团前10-12小时，以1:2:2的比例（酵种:面粉:水）喂养酵种，使其在混合面团时达到活力峰值。酵种应通过浮水测试。',
        durationMinutes: 660,
      },
      {
        stepNumber: 2,
        instruction:
          'Autolyse: Combine bread flour, whole wheat flour, and water in a mixing bowl. Mix by hand until all flour is hydrated and no dry bits remain. Cover and rest at room temperature for 45-60 minutes to allow glutenin and gliadin to hydrate and bond.',
        instructionZh:
          '水合：在搅拌碗中混合高筋面粉、全麦面粉和水。用手搅拌至所有面粉湿润无干粉。盖保鲜膜室温静置45-60分钟，使谷蛋白和醇溶蛋白充分水合键结。',
        durationMinutes: 60,
      },
      {
        stepNumber: 3,
        instruction:
          'Mix & Strengthen: Add the peaked starter and salt to the autolysed dough. Pinch and fold to incorporate, then perform slap-and-fold kneading for 5-7 minutes until the dough surface is smooth and the dough feels elastic. Transfer to a clear container for bulk.',
        instructionZh:
          '混合与增筋：将活力峰值酵种和盐加入水合面团中。用捏合折叠法混合均匀，然后进行5-7分钟摔打折叠揉面，直至面团表面光滑且有弹性。转移到透明容器中进行基础发酵。',
        durationMinutes: 15,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Fermentation: Maintain 24-26°C for 4.5-5.5 hours. Perform 3 sets of coil folds at 45-minute intervals. The dough is ready when it has risen 60-75%, shows gas bubbles on the surface, has a slight dome, and jiggles when the container is shaken.',
        instructionZh:
          '基础发酵：保持24-26°C发酵4.5-5.5小时。每隔45分钟进行一次卷折，共3次。面团膨胀60-75%、表面可见气泡、呈微穹顶状且摇晃容器时有颤动感即为完成。',
        durationMinutes: 330,
      },
      {
        stepNumber: 5,
        instruction:
          'Shape & Cold Proof: Pre-shape the dough into a round on a lightly floured surface and bench rest 25 minutes uncovered. Final shape into a tight batard. Place seam-side up in a floured banneton. Cover and cold-proof at 3-4°C for 14-16 hours.',
        instructionZh:
          '整形与冷藏：在轻撒面粉的台面上将面团预整成圆形，不盖布静置25分钟。最终整形成紧致的椭圆形。接缝朝上放入撒粉的发酵篮中。盖住后放入3-4°C冰箱冷藏发酵14-16小时。',
        durationMinutes: 960,
      },
    ],

    tips: [
      'The float test is a reliable readiness indicator for your starter: drop a teaspoon of starter into room-temperature water — if it floats, it is ready to leaven dough.',
      'Scoring a cold-proofed loaf straight from the fridge is easier and produces cleaner expansion cuts. Use a curved lame held at a 30-degree angle for the best ear.',
      'For a thinner, crispier crust, introduce steam into your oven with a shallow pan of boiling water placed on the bottom rack during the first 15 minutes of baking.',
    ],
    tipsZh: [
      '浮水测试是判断酵种准备就绪的可靠指标：取一茶匙酵种放入室温水中——如果浮起，即可用于发酵面团。',
      '直接从冰箱取出的冷藏发酵面团更容易割包，且能割出更干净利落的膨胀切口。使用弯刃割包刀，保持30度角可获得最佳"耳朵"效果。',
      '想要更薄更酥脆的外壳，可在烤箱底层放置装沸水的浅盘，在烘烤的前15分钟为烤箱提供蒸汽。',
    ],
  },

  // ==================== 3. Vollkornbrot (100% Rye) ====================
  {
    id: 'vollkornbrot',
    name: '100% Rye Vollkornbrot',
    nameZh: '德式全黑麦面包',
    category: RC.LEAN_BREAD,
    description:
      'A dense, moist, and deeply aromatic 100% rye loaf from the German tradition. Driven entirely by rye sourdough, it develops complex malty, earthy, and slightly sweet notes over a 48-hour slow fermentation. Traditionally sliced thin and served with cured meats and cheese.',
    descriptionZh:
      '源自德国传统的100%黑麦面包，质地密实湿润、香气深沉浓郁。完全依靠黑麦酸面团发酵，经过48小时缓慢发酵，发展出复杂的麦芽香、泥土香和淡淡的甜味。传统上切成薄片，搭配腌肉和奶酪食用。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 68,
    difficulty: 'advanced',
    totalTime: 2880,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    ingredients: [
      { id: 'rye-flour', name: 'Whole rye flour (Type 1150 or 1740)', nameZh: '全黑麦粉（1150型或1740型）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 68, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'rye-starter', name: 'Rye sourdough starter (100% hydration)', nameZh: '黑麦酸面团酵种（100%含水量）', percentage: 20, isFlour: false },
      { id: 'molasses', name: 'Blackstrap molasses', nameZh: '黑糖蜜', percentage: 3, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Build Rye Sourdough: 12-14 hours before mixing, feed your rye sourdough starter with rye flour and water at 1:1:1. Ferment at 24-26°C until very active, fruity, and nearly tripled. Rye sourdough should smell pleasantly of apple cider vinegar.',
        instructionZh:
          '培养黑麦酸面团：混合面团前12-14小时，以1:1:1的比例用黑麦粉和水喂养黑麦酵种。24-26°C发酵至非常活跃、果香浓郁且体积近三倍大。黑麦酸面团应散发宜人的苹果醋香气。',
        durationMinutes: 780,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix Dough: In a large bowl, combine the whole rye flour, water, and molasses. Mix thoroughly until homogeneous — rye dough will be very sticky and paste-like because rye pentosans absorb water differently than wheat gluten does. This is normal.',
        instructionZh:
          '搅拌面团：在大碗中混合全黑麦粉、水和黑糖蜜。彻底搅拌至均匀——黑麦面团会非常粘稠呈糊状，这是因为黑麦戊聚糖吸水方式不同于小麦面筋，属正常现象。',
        durationMinutes: 10,
      },
      {
        stepNumber: 3,
        instruction:
          'Fermentolyse: Add the active rye sourdough starter to the dough and mix thoroughly. Cover and rest at 28-30°C for 2-3 hours. The rye sourdough will begin acidifying the dough immediately, activating pentosanase enzymes that improve crumb texture.',
        instructionZh:
          '发酵水合：将活跃的黑麦酸面团加入面团中充分混合。盖保鲜膜，在28-30°C下静置2-3小时。黑麦酸面团会立即开始酸化面团，激活戊聚糖酶从而改善面包组织。',
        durationMinutes: 180,
      },
      {
        stepNumber: 4,
        instruction:
          'Add Salt & Proof: Incorporate the salt evenly into the dough. Transfer to a well-greased pullman pan (rye dough cannot hold its own shape). Smooth the top with a wet spatula. Cover and proof at 28-30°C for 3-4 hours until the dough has risen by about 30-40% and tiny pinholes appear on the surface.',
        instructionZh:
          '加盐与发酵：将盐均匀拌入面团。转移到充分涂油的带盖吐司模具中（黑麦面团无法自行保持形状）。用湿刮刀抹平表面。盖好，28-30°C发酵3-4小时，至面团膨胀约30-40%且表面出现细小针孔。',
        durationMinutes: 240,
      },
      {
        stepNumber: 5,
        instruction:
          'Bake: Preheat oven to 170°C. Place the pan in the oven and bake at 170°C for 60 minutes. Then reduce temperature to 150°C and bake for another 60 minutes. The long, slow bake is essential to gelatinize the rye starches fully.',
        instructionZh:
          '烘烤：预热烤箱至170°C。将模具放入烤箱，170°C烤60分钟。然后降至150°C再烤60分钟。长时间低温烘烤对充分糊化黑麦淀粉至关重要。',
        durationMinutes: 120,
      },
      {
        stepNumber: 6,
        instruction:
          'Rest & Mature: Remove from the oven and brush the top with water for a glossy finish. Cool in the pan for 10 minutes, then unmold and wrap in a clean linen towel. Let rest at room temperature for a full 24 hours before slicing. This resting period is non-negotiable — the crumb must set and the flavours must meld. Slice very thin and serve with butter, smoked fish, or aged cheese.',
        instructionZh:
          '静置熟成：出炉后在面包表面刷水以获得光泽效果。在模具中冷却10分钟后脱模，用洁净的亚麻布包裹。在室温下静置整整24小时后再切片。这段静置期不可省略——面包组织需要定型，风味需要融合。切成极薄的片，搭配黄油、烟熏鱼或陈年奶酪享用。',
        durationMinutes: 1440,
        tip: 'Never slice rye bread the same day it is baked — the crumb will be gummy and the flavour one-dimensional. Patience is rewarded exponentially.',
        tipZh: '黑麦面包切忌当天烘烤当天切——面包组织会粘腻且风味单一。耐心等待回报是成倍的。',
      },
    ],

    tips: [
      'Rye flour contains no functional gluten. The dough will never feel elastic or pass a windowpane test. Structure comes from pentosan gels and starch gelatinization during the long bake.',
      'Use a pullman pan with a lid for a traditional rectangular loaf; remove the lid for the last 30 minutes of baking to develop a darker crust.',
      'Molasses is not just for colour — it provides fermentable sugars for the sourdough microbes and contributes to the distinctive malty bitterness of traditional Vollkornbrot.',
    ],
    tipsZh: [
      '黑麦粉不含功能性面筋。面团永远不会感觉有弹性，也不会通过手套膜测试。面包的结构来自戊聚糖凝胶和长时间烘烤中的淀粉糊化。',
      '使用带盖吐司模具可制作传统长方形面包；在烘烤最后30分钟揭开盖子以形成更深色的外壳。',
      '糖蜜不仅仅用于着色——它为酸面团微生物提供可发酵糖，并贡献传统全黑麦面包独特的麦芽苦味。',
    ],
  },

  // ==================== 4. Baguette Tradition ====================
  {
    id: 'baguette-tradition',
    name: 'Baguette de Tradition',
    nameZh: '传统法棍',
    category: RC.LEAN_BREAD,
    description:
      'The quintessential French baguette as protected by the Décret Pain of 1993: only flour, water, salt, and yeast. A long, cool fermentation develops the signature cream-coloured crumb with irregular alveoli and a glass-shard crust that crackles as it cools.',
    descriptionZh:
      '法国标志性的传统法棍，受1993年"面包法令"保护：仅含面粉、水、盐和酵母。漫长低温发酵发展出标志性的奶油色面包组织、不规则的气孔以及冷却时会噼啪作响的玻璃碎片般的外壳。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 75,
    difficulty: 'advanced',
    totalTime: 1200,
    yieldDescription: '3 baguettes',
    yieldDescriptionZh: '3根法棍',

    ingredients: [
      { id: 't65', name: 'T65 flour (Type 65)', nameZh: 'T65面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 75, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.3, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Autolyse: Combine the T65 flour and water (reserve 5% of the water as bassinage) in a large bowl. Mix by hand until no dry flour remains. Cover and rest at room temperature for 45 minutes.',
        instructionZh:
          '水合：在大碗中混合T65面粉和水（预留5%水作为后加水）。用手搅拌至无干粉。盖保鲜膜室温静置45分钟。',
        durationMinutes: 45,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix: Sprinkle the instant yeast and salt over the autolysed dough. Mix by hand using the pincer method for 5-7 minutes until fully incorporated. If the dough feels tight, gradually add the reserved bassinage water during mixing.',
        instructionZh:
          '搅拌：将即发干酵母和盐撒在水合好的面团上。用捏切法手工搅拌5-7分钟至完全融合。如果面团感觉紧实，在搅拌过程中逐步加入预留的后加水。',
        durationMinutes: 10,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk Fermentation with Folds: Transfer to a lightly oiled container. Ferment at 23-24°C for 3 hours. Perform 3 sets of coil folds at 45, 90, and 135 minutes. After the last fold, leave untouched for the remaining time. Target a 40-50% volume increase — baguette dough should NOT double.',
        instructionZh:
          '基础发酵与折叠：转移到轻微涂油的容器中。23-24°C发酵3小时。在第45、90、135分钟各进行一次卷折，共3次。最后一次折叠后不再翻动面团直至发酵结束。目标体积增加40-50%——法棍面团不应该翻倍。',
        durationMinutes: 180,
        tip: 'Under-fermentation is preferable to over-fermentation for baguettes. A dough that has doubled will be exhausted and unable to produce dramatic oven spring.',
        tipZh: '对法棍而言，发酵不足优于发酵过度。翻倍的面团已经力竭，无法产生漂亮的烤箱爆发力。',
      },
      {
        stepNumber: 4,
        instruction:
          'Divide & Pre-shape: Turn the dough onto a floured surface. Divide into 3 equal pieces (approximately 290 g each) using a bench knife. Pre-shape each piece into a loose cylinder. Cover with a couche or linen and rest 20 minutes.',
        instructionZh:
          '分割与预整形：将面团倒在撒粉的台面上。用切面刀分成三等份（每份约290g）。将每份预整形成松散的圆柱形。盖上发酵布静置20分钟。',
        durationMinutes: 25,
      },
      {
        stepNumber: 5,
        instruction:
          'Final Shape: Shape each piece into a baguette 45-50 cm long. Work from the centre outward, sealing the seam with the heel of your hand on each roll. Taper the ends gently. Place seam-side up on a heavily floured couche, pleating the cloth between each baguette for support.',
        instructionZh:
          '最终整形：将每份面团整形成45-50厘米长的法棍形状。从中心向两端操作，每次卷折时用手掌根部封紧接缝。轻柔地搓尖两端。接缝朝上放置在大量撒粉的发酵布上，每根法棍之间打出褶皱以提供支撑。',
        durationMinutes: 20,
      },
      {
        stepNumber: 6,
        instruction:
          'Final Proof: Cover with the couche and proof at room temperature (23-24°C) for 45-60 minutes until the dough is puffy and a gentle poke springs back slowly but leaves a slight indentation.',
        instructionZh:
          '最终发酵：盖上发酵布，室温（23-24°C）发酵45-60分钟，至面团蓬松且轻按后缓慢回弹但留下轻微凹陷。',
        durationMinutes: 60,
      },
      {
        stepNumber: 7,
        instruction:
          'Score & Bake: Preheat oven with a baking stone or steel to 260°C for at least 45 minutes. Transfer each baguette seam-side down onto a floured peel or transfer board. Score each with 3-5 overlapping longitudinal slashes using a curved lame held at a 30-degree angle. Load into the oven and create steam (boiling water in a preheated cast iron pan, or 2 minutes of oven spray). Bake at 250°C with steam for 12 minutes, then vent the oven, reduce to 230°C, and bake for another 12-15 minutes until deep golden brown. Cool on a wire rack.',
        instructionZh:
          '割包与烘烤：将烤箱与石板或钢版一同预热至260°C至少45分钟。将每根法棍接缝朝下转移到撒粉的转移板上。使用弯刃割包刀，保持30度角，在每根法棍上纵向斜割3-5刀，刀口重叠。送入烤箱并制造蒸汽（预热铸铁锅倒入沸水，或向烤箱喷水2分钟）。带蒸汽250°C烤12分钟，然后排汽、降至230°C再烤12-15分钟至深金黄色。放在晾网上冷却。',
        durationMinutes: 75,
        tip: 'For authentic scoring, each slash should overlap the previous one by about one-third of its length — this creates the classic "wheat stalk" pattern.',
        tipZh: '正宗的割包手法中，每一刀应与前一刀重叠约三分之一的长度——这会产生经典的"麦穗"图案。',
      },
    ],

    tips: [
      'The couche (linen cloth) is not just for support — it wicks moisture away from the dough surface, creating a thin skin that facilitates clean scoring and contributes to the crackling crust.',
      'A baking steel outperforms a stone for baguettes because its higher thermal conductivity transfers heat more aggressively during the first critical minutes of oven spring.',
      'Do not flour the top of the baguettes before scoring — a light dusting is fine, but excess flour will clog the lame and drag the dough rather than cutting it cleanly.',
    ],
    tipsZh: [
      '发酵布不仅仅是支撑工具——它能从面团表面吸走水分，形成一层薄皮，有助于干净利落的割包和酥脆的外壳。',
      '对于法棍而言，烘焙钢板优于石板，因为其更高的导热性能在烤箱爆发力最关键的前几分钟更有效地传递热量。',
      '割包前不要在法棍顶部撒过多的面粉——轻撒即可，过多的面粉会堵塞割包刀，导致拖拽面团而非干净地切割。',
    ],
  },

  // ==================== 5. Baguette Poolish ====================
  {
    id: 'baguette-poolish',
    name: 'Baguette sur Poolish',
    nameZh: '波兰种法棍',
    category: RC.LEAN_BREAD,
    description:
      'A baguette fermented with a 30% poolish preferment for enhanced extensibility, deeper wheat flavour, and a more open crumb structure. The poolish contributes nutty, slightly sweet notes from its extended cool fermentation.',
    descriptionZh:
      '以30%波兰种预发酵法棍，增强面团延展性、加深小麦风味并获得更开放的气孔结构。波兰种通过长时间低温发酵贡献坚果香和微甜的韵味。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 76,
    difficulty: 'advanced',
    totalTime: 1080,
    yieldDescription: '3 baguettes',
    yieldDescriptionZh: '3根法棍',

    preferment: {
      name: 'Poolish',
      nameZh: '波兰种',
      description:
        'A liquid preferment made with equal parts flour and water (100% hydration) and a tiny amount of commercial yeast. Fermented at cool room temperature for 12-16 hours, it develops a sweet, nutty aroma and a dome of fine bubbles.',
      flourPercentageOfTotal: 30,
      ingredients: [
        { id: 'poolish-t65', name: 'T65 flour', nameZh: 'T65面粉', percentage: 30, isFlour: true },
        { id: 'poolish-water', name: 'Water', nameZh: '水', percentage: 30, isFlour: false },
        { id: 'poolish-yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.02, isFlour: false },
      ],
      instructions:
        'Combine equal weights of T65 flour and water with a pinch of instant yeast. Stir until smooth, cover, and ferment at 18-20°C for 12-16 hours until the surface is covered in fine bubbles and the aroma is sweet and nutty.',
      instructionsZh:
        '将等重量的T65面粉和水与一小撮即发干酵母混合。搅拌至顺滑，盖保鲜膜，在18-20°C下发酵12-16小时，至表面布满细小气泡、散发出甜美的坚果香。',
    },

    ingredients: [
      { id: 't65', name: 'T65 flour (Type 65)', nameZh: 'T65面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 76, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.1, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make Poolish: The evening before baking, mix the poolish ingredients until smooth. Cover and ferment at 18-20°C for 12-16 hours. The poolish is ready when it is domed, covered in bubbles, and smells sweetly alcoholic with nutty notes.',
        instructionZh:
          '制作波兰种：烘烤前一天晚上，将波兰种原料混合至顺滑。盖保鲜膜，18-20°C发酵12-16小时。波兰种呈穹顶状、布满气泡、散发甜酒香和坚果香即为完成。',
        durationMinutes: 840,
      },
      {
        stepNumber: 2,
        instruction:
          'Autolyse: Combine the remaining T65 flour with the water (reserve 5% for bassinage). Mix by hand until hydrated. Cover and rest 30 minutes.',
        instructionZh:
          '水合：将剩余T65面粉与水混合（预留5%水用于后加水）。用手搅拌至湿润。盖保鲜膜静置30分钟。',
        durationMinutes: 30,
      },
      {
        stepNumber: 3,
        instruction:
          'Final Dough: Add the poolish, salt, and instant yeast to the autolysed dough. Mix thoroughly using the pincer method. The poolish will make the dough feel very extensible — work it until it comes together and clears the sides of the bowl. Add bassinage water as needed.',
        instructionZh:
          '最终面团：将波兰种、盐和即发干酵母加入水合面团。用捏切法充分混合。波兰种会让面团感觉非常延展——继续揉至面团成团并能离开碗壁。根据需要加入后加水。',
        durationMinutes: 12,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Fermentation: Ferment at 23-24°C for 2.5-3 hours. Perform 3 coil folds at 45-minute intervals. Because the poolish contributes acidity and enzymatic activity, the dough will feel softer and more extensible than a direct-method baguette.',
        instructionZh:
          '基础发酵：23-24°C发酵2.5-3小时。每隔45分钟进行一次卷折，共3次。由于波兰种贡献了酸度和酶活性，面团会比直接法法棍更柔软、更具延展性。',
        durationMinutes: 180,
      },
      {
        stepNumber: 5,
        instruction:
          'Divide, Pre-shape & Rest: Divide into 3 pieces, pre-shape as loose cylinders, and rest 20 minutes under a couche.',
        instructionZh:
          '分割、预整形与静置：分成三等份，预整形成松散圆柱形，在发酵布下静置20分钟。',
        durationMinutes: 25,
      },
      {
        stepNumber: 6,
        instruction:
          'Final Shape & Proof: Shape into baguettes 45-50 cm long. Place seam-side up on a heavily floured couche. Proof at 23-24°C for 45-60 minutes until puffy and springy.',
        instructionZh:
          '最终整形与发酵：整形成45-50厘米长的法棍。接缝朝上置于大量撒粉的发酵布上。23-24°C发酵45-60分钟至蓬松有弹性。',
        durationMinutes: 60,
      },
      {
        stepNumber: 7,
        instruction:
          'Score & Bake: Preheat oven with baking stone/steel to 260°C for 45 minutes. Transfer baguettes seam-side down, score with 3-5 overlapping slashes, and bake with steam at 250°C for 12 minutes, then vent and finish at 230°C for 12-15 minutes. The poolish baguette will have a slightly deeper colour and more pronounced blistering.',
        instructionZh:
          '割包与烘烤：将烤箱与石板/钢板一同预热至260°C 45分钟。将法棍接缝朝下转移，割3-5刀重叠斜口，带蒸汽250°C烤12分钟，然后排汽降温至230°C再烤12-15分钟。波兰种法棍颜色略深，外壳起泡更明显。',
        durationMinutes: 75,
      },
    ],

    tips: [
      'A poolish that has collapsed and smells sharply sour is over-fermented. Use it anyway — it will still contribute flavour, but you may need to reduce the final proof time slightly to compensate for the increased acidity.',
      'The tiny pinch of yeast in the poolish (0.02% of total flour) is enough to inoculate the preferment without overwhelming it — commercial yeast grows exponentially, and too much will consume all the sugars before the flavour compounds develop.',
      'For the most pronounced blistering, cold-proof the shaped baguettes in the refrigerator for 6-8 hours before baking, uncovered for the last hour to develop a slight skin.',
    ],
    tipsZh: [
      '已经塌陷且气味尖锐酸臭的波兰种已经发酵过度。仍然可以使用——它依然能贡献风味，但可能需要稍微缩短最终发酵时间以补偿增加的酸度。',
      '波兰种中极少量酵母（总面粉的0.02%）足以接种预发酵面团而不会过度——商业酵母呈指数增长，过量会在风味物质形成前耗尽所有糖分。',
      '想要最明显的外壳起泡效果，可将整形后的法棍在冰箱中冷藏发酵6-8小时，最后1小时不盖布以形成一层薄皮。',
    ],
  },

  // ==================== 6. Ciabatta Classica ====================
  {
    id: 'ciabatta-classica',
    name: 'Ciabatta Classica',
    nameZh: '经典恰巴塔',
    category: RC.LEAN_BREAD,
    description:
      'The iconic Italian slipper bread with a thin, flour-dusted crust and a wildly open crumb structure filled with irregular, glassy alveoli. High hydration and minimal handling are the secrets to its signature texture.',
    descriptionZh:
      '标志性的意大利"拖鞋面包"，拥有薄薄的撒粉外壳和充满不规则玻璃质感大气孔的开放式面包组织。高水量和最小程度的手工操作是其标志性口感的秘诀。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 80,
    difficulty: 'intermediate',
    totalTime: 960,
    yieldDescription: '2 loaves',
    yieldDescriptionZh: '2个面包',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 80, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.4, isFlour: false },
      { id: 'olive-oil', name: 'Extra virgin olive oil', nameZh: '特级初榨橄榄油', percentage: 2, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Mix: In a large bowl, combine the bread flour and instant yeast. Add the water and mix by hand until a shaggy, sticky dough forms. This is a very high-hydration dough — it will look more like a thick batter than conventional bread dough. Cover and rest 20 minutes.',
        instructionZh:
          '混合：在大碗中混合高筋面粉和即发干酵母。加入水，用手搅拌至形成粗糙粘稠的面团。这是极高水量的面团——看起来更像浓稠的面糊而非传统面包面团。盖保鲜膜静置20分钟。',
        durationMinutes: 25,
      },
      {
        stepNumber: 2,
        instruction:
          'Add Salt & Oil: Sprinkle the salt over the dough and drizzle the olive oil on top. Using wet hands, pinch and fold the dough repeatedly to distribute the salt and oil evenly. The dough will tighten briefly from the salt, then relax again.',
        instructionZh:
          '加盐与油：将盐撒在面团上，淋上橄榄油。用湿手反复捏合折叠面团，使盐和油均匀分布。面团会因盐而短暂收紧，然后再次松弛。',
        durationMinutes: 5,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk Fermentation with Folds: Cover and ferment at 24-26°C for 2.5-3 hours. Perform 4 sets of coil folds at 30-minute intervals for the first 2 hours. Use wet hands each time to prevent sticking. After the final fold, leave the dough completely untouched — do not degas.',
        instructionZh:
          '基础发酵与折叠：盖保鲜膜，24-26°C发酵2.5-3小时。前2小时内每30分钟进行一次卷折，共4次。每次使用湿手防止粘连。最后一次折叠后不再触碰面团——切勿排气。',
        durationMinutes: 180,
        tip: 'After the last fold, do not disturb the dough. Ciabatta relies on trapped fermentation gases for its open crumb; degassing at any point will collapse the alveolar structure.',
        tipZh: '最后一次折叠后不要扰动面团。恰巴塔的开放组织依赖于被困住的发酵气体；任何时候的排气操作都会破坏气孔结构。',
      },
      {
        stepNumber: 4,
        instruction:
          'Divide & Pre-shape: Heavily flour a work surface. Turn the dough out gently, disturbing it as little as possible. Flour the top surface. Using a bench knife, divide the dough into 2 equal rectangles. Do not pre-shape in the traditional sense — simply separate cleanly with the bench knife.',
        instructionZh:
          '分割与预整形：在台面上大量撒粉。轻轻倒出面团，尽量不扰动。在面团表面撒粉。用切面刀将面团分成两个相等的长方形。不要按传统方式预整形——仅用切面刀干净地分开即可。',
        durationMinutes: 10,
      },
      {
        stepNumber: 5,
        instruction:
          'Final Proof: Transfer each piece to a heavily floured couche or parchment-lined tray. Gently stretch each piece into a roughly rectangular slipper shape, about 20 x 10 cm. Flour the tops. Proof uncovered at 24-26°C for 45-60 minutes until very puffy and wobbling.',
        instructionZh:
          '最终发酵：将每块面团转移到大量撒粉的发酵布或铺有烘焙纸的烤盘上。轻柔地将每块拉伸成约20x10厘米的拖鞋形状长方形。表面撒粉。不盖布，24-26°C发酵45-60分钟至非常蓬松且晃动。',
        durationMinutes: 60,
      },
      {
        stepNumber: 6,
        instruction:
          'Bake: Preheat oven with a baking stone/steel to 250°C for at least 40 minutes. Slide the ciabatta onto the stone (still on parchment if easier). Create steam immediately. Bake with steam at 240°C for 10 minutes, then vent, reduce to 220°C, and bake for 15-18 minutes more until deep golden. The loaves should feel light for their size. Cool on a wire rack.',
        instructionZh:
          '烘烤：将烤箱与石板/钢板一同预热至250°C至少40分钟。将恰巴塔送入烤箱（可连烘焙纸一起）。立即制造蒸汽。带蒸汽240°C烤10分钟，然后排汽、降至220°C再烤15-18分钟至深金黄色。面包应感觉比其体积轻。放在晾网上冷却。',
        durationMinutes: 70,
      },
    ],

    tips: [
      'The dough should jiggle like a loose gelatin when ready to bake. If it feels stiff or tight, it is under-proofed and will not achieve the signature open crumb.',
      'Use a dough scraper or bench knife for all handling — ciabatta dough is too sticky for hands even when floured. Treat the dough like a fragile liquid, not a solid.',
      'Olive oil at 2% is optional but traditional in some Italian bakeries. It softens the crumb slightly and adds a subtle fruity note without making the bread enriched.',
    ],
    tipsZh: [
      '准备烘烤时面团应像松散的果冻一样晃动。如果感觉僵硬或紧实，说明发酵不足，无法获得标志性的开放组织。',
      '所有操作均使用刮板或切面刀——恰巴塔面团过于粘稠，即使撒了粉也无法用手操作。将面团视为脆弱的液体而非固体。',
      '2%的橄榄油是可选的，但在一些意大利面包房是传统做法。它会使面包组织略微柔软，并增添微妙的果香，而不会使面包成为高油面包。',
    ],
  },

  // ==================== 7. Ciabatta Biga ====================
  {
    id: 'ciabatta-biga',
    name: 'Ciabatta con Biga',
    nameZh: '意式酵种恰巴塔',
    category: RC.LEAN_BREAD,
    description:
      'An Italian ciabatta built on a stiff biga preferment that ferments for 16-18 hours, developing profound wheat complexity and a stronger, more extensible dough structure capable of supporting 82% hydration for an even more dramatic open crumb.',
    descriptionZh:
      '以意式硬酵种（Biga）为基础的恰巴塔，经16-18小时发酵，发展出深刻的小麦复杂风味和更强韧、更具延展性的面团结构，能够支撑82%的超高水量，形成更加壮观的开放气孔组织。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 82,
    difficulty: 'advanced',
    totalTime: 1200,
    yieldDescription: '2 loaves',
    yieldDescriptionZh: '2个面包',

    preferment: {
      name: 'Biga',
      nameZh: '意式酵种',
      description:
        'A stiff Italian preferment at 50% hydration made with bread flour and a minuscule amount of yeast. Fermented at cool temperature for 16-18 hours, biga develops a clean, slightly acidic aroma and intense wheat flavour.',
      flourPercentageOfTotal: 30,
      ingredients: [
        { id: 'biga-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 30, isFlour: true },
        { id: 'biga-water', name: 'Water', nameZh: '水', percentage: 15, isFlour: false },
        { id: 'biga-yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.03, isFlour: false },
      ],
      instructions:
        'Mix bread flour and water at a 2:1 ratio with a tiny pinch of yeast until a stiff, shaggy dough forms. Knead briefly until it comes together. Cover and ferment at 16-18°C for 16-18 hours. The biga will triple in volume, smell intensely of wheat and light alcohol, and show a honeycomb internal structure.',
      instructionsZh:
        '将高筋面粉和水按2:1比例与极少量酵母混合，搅拌成干硬的粗糙面团。简短揉面至成团。盖保鲜膜，16-18°C发酵16-18小时。Biga会膨胀至三倍大，散发浓郁的小麦和淡淡酒香，内部呈蜂窝状结构。',
    },

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 82, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.1, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make Biga: Two evenings before baking, combine the biga ingredients and knead briefly until a stiff dough forms. Cover and ferment at 16-18°C for 16-18 hours until tripled and honeycombed internally.',
        instructionZh:
          '制作Biga：烘烤前两天的晚上，混合Biga原料，简短揉面至成硬面团。盖保鲜膜，16-18°C发酵16-18小时至体积三倍大且内部呈蜂窝状。',
        durationMinutes: 1020,
      },
      {
        stepNumber: 2,
        instruction:
          'Incorporate Biga: In a large bowl, combine the remaining bread flour with most of the water (reserve 10% bassinage). Tear the biga into walnut-sized chunks and add them to the bowl. Mix and squeeze by hand, breaking up the biga chunks until the dough is a shaggy, uniform mass. This takes patience — the biga is stiff and takes time to disperse.',
        instructionZh:
          '融入Biga：在大碗中混合剩余高筋面粉和大部分水（预留10%后加水）。将Biga撕成核桃大小的块加入碗中。用手搅拌和捏压，将Biga块打散，直到面团成为粗糙均匀的整体。这需要耐心——Biga质地干硬，需要时间分散。',
        durationMinutes: 15,
      },
      {
        stepNumber: 3,
        instruction:
          'Add Salt & Continue Mixing: Sprinkle the salt and remaining instant yeast over the dough. Continue mixing with wet hands, gradually incorporating the reserved bassinage water. The dough will be extremely wet and sticky at 82% hydration — this is normal. Mix for 8-10 minutes until smooth and somewhat cohesive.',
        instructionZh:
          '加盐并继续搅拌：将盐和剩余即发干酵母撒在面团上。用湿手继续搅拌，逐步加入预留的后加水。82%水量的面团极其湿润粘手——这是正常的。搅拌8-10分钟至光滑且有一定凝聚力。',
        durationMinutes: 12,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Fermentation: Transfer to a straight-walled container. Ferment at 24-26°C for 3-3.5 hours. Perform 4 coil folds at 30-minute intervals using wet hands. After the final fold, do not touch the dough again. The biga-driven dough will develop exceptional strength and gas retention.',
        instructionZh:
          '基础发酵：转移到直壁容器中。24-26°C发酵3-3.5小时。使用湿手每30分钟进行一次卷折，共4次。最后一次折叠后不再触碰面团。Biga驱动的面团将发展出卓越的筋度和气体保持能力。',
        durationMinutes: 210,
      },
      {
        stepNumber: 5,
        instruction:
          'Divide, Shape & Final Proof: Turn the dough onto a generously floured surface. Flour the top and divide into 2 rectangles with a bench knife. Gently stretch into ciabatta slipper shapes on floured parchment. Proof uncovered at 24-26°C for 50-70 minutes until the dough wobbles freely and has visibly expanded.',
        instructionZh:
          '分割、整形与最终发酵：将面团倒在大量撒粉的台面上。表面撒粉，用切面刀分成两个长方形。在撒粉的烘焙纸上轻柔拉伸成恰巴塔拖鞋形状。不盖布，24-26°C发酵50-70分钟，直至面团自由晃动且明显膨胀。',
        durationMinutes: 70,
      },
      {
        stepNumber: 6,
        instruction:
          'Bake: Preheat oven with baking steel to 260°C for 40 minutes. Bake with steam at 240°C for 12 minutes, then vent, reduce to 220°C, and bake for 15-18 minutes. The biga ciabatta will bake to a deeper gold than the direct-method version and the crumb will be even more dramatically open. Cool completely before slicing.',
        instructionZh:
          '烘烤：将烤箱与烘焙钢板一同预热至260°C 40分钟。带蒸汽240°C烤12分钟，然后排汽、降至220°C再烤15-18分钟。Biga版的恰巴塔比直接法版本烤色更深，气孔组织更加壮观。完全冷却后切片。',
        durationMinutes: 70,
      },
    ],

    tips: [
      'Big hydration numbers like 82% are only possible with strong flour (at least 12.5% protein) and a biga preferment. The biga pre-digests the flour, making it more water-absorbent and structurally resilient.',
      'Tearing biga into chunks rather than just stirring it in ensures a more even distribution through the final dough. Large undissolved biga lumps will create dense, chewy spots in the crumb.',
      'The biga can be held at peak readiness in the refrigerator for up to 6 hours if your final dough timing shifts. Let it come back to cool room temperature before incorporating.',
    ],
    tipsZh: [
      '像82%这样的超高水量只有在使用高筋面粉（至少12.5%蛋白质）和Biga预发酵种的条件下才能实现。Biga预消化了面粉，使其更吸水且结构更具韧性。',
      '将Biga撕成小块而非简单地搅拌入面团，能确保其在最终面团中更均匀地分布。未溶解的大块Biga会在面包组织中形成致密难嚼的区域。',
      '如果最终面团制作时间有变动，可在Biga达到活力峰值时放入冰箱冷藏保存长达6小时。使用前让其恢复至凉爽室温。',
    ],
  },

  // ==================== 8. Focaccia Genovese ====================
  {
    id: 'focaccia',
    name: 'Focaccia Genovese',
    nameZh: '佛卡夏',
    category: RC.LEAN_BREAD,
    description:
      'The classic Genoese focaccia — a dimpled, olive-oil-rich flatbread with a crisp bottom, pillowy crumb, and a golden, brine-flecked top. Quick enough for a same-day bake, yet delivers the satisfaction of an artisan loaf.',
    descriptionZh:
      '经典热那亚佛卡夏——一款布满凹痕、富含橄榄油的扁平面包，底部酥脆、组织如枕头般松软、表面金黄并点缀着盐水斑痕。当天即可完成烘焙，却能带来手工面包的满足感。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 75,
    difficulty: 'beginner',
    totalTime: 300,
    yieldDescription: '1 pan',
    yieldDescriptionZh: '1盘',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 75, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.5, isFlour: false },
      { id: 'olive-oil', name: 'Extra virgin olive oil', nameZh: '特级初榨橄榄油', percentage: 5, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Mix: Combine bread flour, instant yeast, water, and half of the olive oil (2.5%) in a large bowl. Mix by hand until a sticky, cohesive dough forms. This is a slack dough — do not be tempted to add more flour. Cover and rest 15 minutes.',
        instructionZh:
          '混合：在大碗中混合高筋面粉、即发干酵母、水和一半橄榄油（2.5%）。用手搅拌至形成粘稠但有凝聚力的面团。这是松软的面团——不要添加额外的面粉。盖保鲜膜静置15分钟。',
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        instruction:
          'Strengthen & Salt: Add the salt and mix by hand for 3-4 minutes until fully incorporated. Perform 2 sets of stretch-and-folds 10 minutes apart to build strength without intensive kneading.',
        instructionZh:
          '增筋与加盐：加入盐，用手搅拌3-4分钟至完全融合。间隔10分钟进行2组拉伸折叠，无需强力揉面即可建立筋度。',
        durationMinutes: 25,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk Fermentation: Cover and ferment at 24-26°C for 1.5-2 hours until the dough has doubled and is bubbly. Perform one coil fold at the 45-minute mark.',
        instructionZh:
          '基础发酵：盖保鲜膜，24-26°C发酵1.5-2小时至面团翻倍且充满气泡。在第45分钟时进行一次卷折。',
        durationMinutes: 120,
      },
      {
        stepNumber: 4,
        instruction:
          'Pan & Dimple: Drizzle the remaining olive oil (2.5%) onto a half-sheet pan (roughly 33 x 23 cm). Transfer the dough to the pan and gently stretch it toward the corners with oiled fingertips. If the dough resists, let it relax for 10 minutes and stretch again. Once stretched to fill the pan, use all ten fingertips to dimple the entire surface, pressing down to the bottom. The dimples should be deep — they will fill with oil and brine.',
        instructionZh:
          '铺盘与戳孔：将剩余橄榄油（2.5%）淋在半张烤盘（约33x23厘米）上。将面团转移到烤盘中，用涂油的指尖轻柔地向四角拉伸。如果面团回缩，静置10分钟后再拉伸。铺满烤盘后，用十指在整个表面戳出深深的凹痕，向下按压至底部。凹痕应足够深——它们将容纳橄榄油和盐水。',
        durationMinutes: 35,
        tip: 'Deep, confident dimpling that penetrates to the bottom of the pan creates the classic focaccia texture — the oil pools in the depressions and fries the dough from the top as it bakes.',
        tipZh: '深而果断的戳孔直达烤盘底部，是经典佛卡夏口感的关键——橄榄油在凹痕中汇集，烘烤时从上方"油炸"面团。',
      },
      {
        stepNumber: 5,
        instruction:
          'Proof, Top & Bake: Proof the dimpled dough uncovered at 24-26°C for 45-60 minutes until very puffy. Meanwhile, preheat oven to 230°C. Make a brine by dissolving 1 teaspoon of salt in 2 tablespoons of warm water. Just before baking, re-dimple the dough gently and pour the brine over the top — it will fill the dimples. Sprinkle flaky sea salt on top. Bake at 230°C for 20-25 minutes until deep golden on top and the bottom sounds hollow when tapped. Transfer to a wire rack immediately to preserve the crisp bottom.',
        instructionZh:
          '发酵、装饰与烘烤：不盖布，24-26°C发酵45-60分钟至非常蓬松。同时预热烤箱至230°C。将1茶匙盐溶于2汤匙温水中制成盐水。烘烤前轻轻再次戳孔，将盐水浇在表面——盐水将填满凹痕。表面撒上海盐片。230°C烤20-25分钟至表面深金黄色且敲击底部声音空洞。立即转移到晾网上以保持底部酥脆。',
        durationMinutes: 90,
      },
    ],

    tips: [
      'The brine poured over the dimpled dough is the secret to authentic focaccia Genovese — it creates a salty, crystalline crust on top while the oil underneath fries the bottom to a golden crisp.',
      'Do not cover the dough during the final proof. The slight skin that forms on the surface helps trap the brine and oil in the dimples rather than letting them run off.',
      'For the crispest bottom, place the sheet pan directly on a preheated baking stone or the oven floor for the first 10 minutes of baking.',
    ],
    tipsZh: [
      '在戳孔面团上浇注盐水是正宗热那亚佛卡夏的秘诀——它在表面形成咸味结晶外壳，同时底部的橄榄油将面包底部"油炸"至金黄酥脆。',
      '最终发酵时不要盖住面团。表面形成的薄皮有助于将盐水和橄榄油锁在凹痕中而非让它们流走。',
      '想要最酥脆的底部，可在烘烤前10分钟将烤盘直接放在预热好的石板上或烤箱底部。',
    ],
  },

  // ==================== 9. San Francisco Sourdough ====================
  {
    id: 'sf-sourdough',
    name: 'San Francisco Sourdough',
    nameZh: '旧金山酸面包',
    category: RC.LEAN_BREAD,
    description:
      'The legendary San Francisco sourdough — characterised by a pronounced tangy acidity, chewy texture, and deep mahogany crust. The unique symbiotic culture of Lactobacillus sanfranciscensis and indigenous yeasts produces a flavour profile that cannot be replicated by shortcuts.',
    descriptionZh:
      '传奇的旧金山酸面包——以显著的酸味、富有嚼劲的质地和深红褐色外壳为特征。旧金山乳酸杆菌（Lactobacillus sanfranciscensis）与本土酵母的独特共生菌群产生的风味无法通过捷径复制。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 72,
    difficulty: 'intermediate',
    totalTime: 1440,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 90, isFlour: true },
      { id: 'ww-flour', name: 'Whole wheat flour', nameZh: '全麦面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 72, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'starter', name: 'Mature sourdough starter (100% hydration)', nameZh: '成熟鲁邦种（100%含水量）', percentage: 20, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare Starter: For the most authentic San Francisco-style tang, use a starter that has been maintained at 22-24°C with 2 refreshments per day for at least 3 days before baking. The starter should be sharp, cleanly acidic, and pass the float test at its peak.',
        instructionZh:
          '准备酵种：要获得最正宗的旧金山风格酸味，使用在烘烤前至少3天以每日2次换养频率、22-24°C维持的酵种。酵种应尖锐清爽且在其峰值时通过浮水测试。',
        durationMinutes: 4320,
        tip: 'The characteristic SF tang comes from acetic acid, which is produced when the starter is kept at cooler temperatures (22-24°C) and fed at a lower hydration. Warmer, wetter starters favour lactic acid and produce a milder flavour.',
        tipZh: '标志性的旧金山酸味来自醋酸，当酵种在较低温度（22-24°C）和较低含水量下喂养时产生。温度较高、含水量较高的酵种偏乳酸菌，风味更温和。',
      },
      {
        stepNumber: 2,
        instruction:
          'Autolyse: Combine bread flour, whole wheat flour, and water. Mix until hydrated. Cover and rest for 1 hour at room temperature.',
        instructionZh: '水合：混合高筋面粉、全麦面粉和水。搅拌至湿润。盖保鲜膜室温静置1小时。',
        durationMinutes: 60,
      },
      {
        stepNumber: 3,
        instruction:
          'Mix: Add the peaked starter and salt. Mix thoroughly using the Rubaud method for 6-8 minutes until the dough is smooth and moderately developed. Target a final dough temperature of 24-26°C.',
        instructionZh:
          '搅拌：加入活力峰值酵种和盐。采用Rubaud手法充分搅拌6-8分钟至面团光滑且适度发展面筋。目标面团终温为24-26°C。',
        durationMinutes: 12,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Ferment: Transfer to a straight-walled container. Ferment at 24-26°C for 4-5 hours. Perform 3 coil folds at 45-minute intervals. The dough should rise by 50-60% — SF sourdough benefits from a slightly shorter bulk than other artisan loaves to preserve the sharp acidity.',
        instructionZh:
          '基础发酵：转移到直壁容器中。24-26°C发酵4-5小时。每隔45分钟进行一次卷折，共3次。面团膨胀50-60%——旧金山酸面包的基础发酵略短于其他手工面包，以保留尖锐的酸味。',
        durationMinutes: 300,
      },
      {
        stepNumber: 5,
        instruction:
          'Shape, Cold Proof & Bake: Pre-shape, rest 20 minutes, and final shape as a tight boule. Place in a floured banneton, seam-side up. Cold-proof at 3-4°C for 12-16 hours. Bake in a preheated Dutch oven at 250°C covered for 25 minutes, then uncovered at 220°C for 20-25 minutes. Cool completely.',
        instructionZh:
          '整形、冷藏发酵与烘烤：预整形成圆形后静置20分钟，最终整形成紧致圆球。接缝朝上放入撒粉的发酵篮中。3-4°C冷藏发酵12-16小时。在预热的铸铁锅中盖盖250°C烤25分钟，然后揭盖220°C再烤20-25分钟。完全冷却。',
        durationMinutes: 960,
      },
    ],

    tips: [
      'The defining characteristic of SF sourdough is its acidity — if your starter has been producing mild bread, shift to a stiff starter (60% hydration) maintained at a cooler temperature for one week before attempting this recipe.',
      'Do not over-proof SF sourdough. The higher acidity from the 20% starter inoculation and cooler fermentation means the gluten degrades faster. Stop bulk fermentation at 50-60% rise, not double.',
      'A traditional SF sourdough scores in a square or "plus sign" pattern on a boule, which creates a distinctive peeled-back crust pattern as the loaf expands.',
    ],
    tipsZh: [
      '旧金山酸面包的标志性特征是酸度——如果你的酵种一直产出温和酸味的面包，在尝试本配方前，转而使用硬酵种（60%含水量）并在较低温度下维持一周。',
      '切勿过度发酵旧金山酸面包。20%酵种接种量和较低温发酵带来的较高酸度意味着面筋降解更快。在膨胀50-60%时停止基础发酵，而非翻倍。',
      '传统旧金山酸面包在圆形面包上以方形或"十字形"图案割包，面包膨胀时会产生独特的剥开式外壳花纹。',
    ],
  },

  // ==================== 10. Pane Toscano ====================
  {
    id: 'pane-toscano',
    name: 'Pane Toscano',
    nameZh: '托斯卡纳无盐面包',
    category: RC.LEAN_BREAD,
    description:
      'The famously salt-free bread of Tuscany — Pane Sciocco — born from a centuries-old tradition of pairing unsalted bread with the intensely salty cured meats, pecorino, and anchovy-laden dishes of Tuscan cuisine. The absence of salt produces a uniquely tender crumb and allows the pure wheat flavour to shine.',
    descriptionZh:
      '著名的托斯卡纳无盐面包（Pane Sciocco）——源于数世纪的传统，将无盐面包与托斯卡纳菜肴中极咸的腌肉、佩科里诺奶酪和鳀鱼料理搭配食用。无盐的配方造就了独特的柔软组织，让纯粹的小麦风味得以彰显。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 68,
    difficulty: 'intermediate',
    totalTime: 1080,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 68, isFlour: false },
      { id: 'starter', name: 'Mature sourdough starter (100% hydration)', nameZh: '成熟鲁邦种（100%含水量）', percentage: 20, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Feed Starter: Refresh your sourdough starter 8-10 hours before mixing. Target a 1:2:2 feeding ratio so the starter peaks at mixing time.',
        instructionZh:
          '喂养酵种：在混合面团前8-10小时换养酵种。采用1:2:2喂养比例，使酵种在混合时间达到峰值。',
        durationMinutes: 540,
      },
      {
        stepNumber: 2,
        instruction:
          'Autolyse: Combine bread flour and water in a bowl. Mix until all flour is hydrated. Cover and rest at room temperature for 1 hour. Without salt, the autolyse proceeds more efficiently — gluten bonds form faster, so the 1-hour rest is sufficient.',
        instructionZh:
          '水合：在碗中混合高筋面粉和水。搅拌至所有面粉湿润。盖保鲜膜室温静置1小时。由于没有盐，水合过程更加高效——面筋键结形成更快，所以1小时静置已足够。',
        durationMinutes: 60,
      },
      {
        stepNumber: 3,
        instruction:
          'Mix & Develop: Add the peaked starter to the autolysed dough. Mix by hand for 5-6 minutes using the Rubaud method. Without salt competing for water, the dough will develop strength quickly. Be careful not to over-mix — salt-free dough has a narrower optimal development window.',
        instructionZh:
          '混合与发展：将活力峰值酵种加入水合面团。采用Rubaud手法手工搅拌5-6分钟。由于没有盐竞争水分，面团会快速产生筋度。注意不要过度搅拌——无盐面团的最佳面筋发展窗口较窄。',
        durationMinutes: 10,
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk Fermentation: Transfer to a straight-walled container. Ferment at 24-26°C for 3-3.5 hours. Without salt to regulate yeast activity, fermentation proceeds faster — watch the dough, not the clock. Perform 3 coil folds at 40-minute intervals. Stop bulk when the dough has risen by 60-70% and shows a slight wobble.',
        instructionZh:
          '基础发酵：转移到直壁容器中。24-26°C发酵3-3.5小时。由于没有盐调节酵母活性，发酵更快——观察面团而非死守时钟。每隔40分钟进行一次卷折，共3次。面团膨胀60-70%且轻微晃动时停止基础发酵。',
        durationMinutes: 210,
        tip: 'Salt-free dough ferments 20-30% faster than salted dough. Check readiness early and often — over-fermented Pane Toscano collapses easily because the gluten network lacks the tightening effect of salt.',
        tipZh: '无盐面团比有盐面团发酵快20-30%。尽早并频繁检查——过度发酵的托斯卡纳面包很容易塌陷，因为面筋网络缺乏盐的收紧作用。',
      },
      {
        stepNumber: 5,
        instruction:
          'Shape, Proof & Bake: Pre-shape the dough into a round on a lightly floured surface and rest 20 minutes. Final shape as a boule or oval. Place in a floured banneton. Proof at room temperature for 2-2.5 hours, or cold-proof at 3-4°C for 10-12 hours. Preheat oven with Dutch oven to 240°C. Bake covered at 240°C for 25 minutes, uncovered at 210°C for 15-20 minutes. The crust will be paler than salted breads — this is normal.',
        instructionZh:
          '整形、发酵与烘烤：在轻撒面粉的台面上将面团预整成圆形，静置20分钟。最终整形成圆球或椭圆形。放入撒粉的发酵篮中。室温发酵2-2.5小时，或3-4°C冷藏发酵10-12小时。将烤箱与铸铁锅一同预热至240°C。盖盖240°C烤25分钟，揭盖210°C烤15-20分钟。外壳比有盐面包颜色更浅——这属正常现象。',
        durationMinutes: 840,
      },
    ],

    tips: [
      'Pane Toscano is not meant to be eaten on its own. It is designed to accompany intensely salty foods — prosciutto, salami, anchovies, pecorino, and olive oil-based dishes. The bread acts as a neutral canvas that balances and absorbs the salt from the accompaniments.',
      'If you must add salt for flavour, use at most 1% — this is no longer traditional Pane Toscano but many home bakers find a minimal amount helps with dough handling without overwhelming the intended neutrality.',
      'The absence of salt makes this bread stale faster than standard bread. Slice and freeze any portions not eaten within 24 hours. Toasted Pane Toscano is exceptional for bruschetta and ribollita.',
    ],
    tipsZh: [
      '托斯卡纳面包并非为单独食用而生。它被设计用来搭配极咸的食物——帕尔马火腿、萨拉米、鳀鱼、佩科里诺奶酪以及橄榄油类菜肴。面包充当中性画布，平衡并吸收配菜的盐分。',
      '如果必须加盐调味，最多使用1%——这已不再是传统托斯卡纳面包，但许多家庭烘焙者发现极少量盐有助于面团操作，且不会压倒预期的中性风味。',
      '无盐使这款面包比标准面包更快变干。24小时内未食用的部分应切片冷冻。烤过的托斯卡纳面包用于制作意式烤面包片（bruschetta）和意式蔬菜面包汤（ribollita）格外美味。',
    ],
  },

  // ==================== 11. Roggenmischbrot ====================
  {
    id: 'roggenmischbrot',
    name: 'Roggenmischbrot',
    nameZh: '德式混合黑麦',
    category: RC.LEAN_BREAD,
    description:
      'A German mixed rye-wheat bread that balances the earthy depth of rye with the structure and lift of wheat flour. Mildly sour from a rye sourdough ferment, with a moist, sliceable crumb and a deeply aromatic crust. The everyday bread of German bakeries.',
    descriptionZh:
      '德式黑麦与小麦混合面包，将黑麦的泥土芬芳与小麦的结构和蓬松度完美平衡。黑麦酸面团发酵带来温和酸味，组织湿润可切片，外壳香气深沉浓郁。这是德国面包房的日常面包。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 70,
    difficulty: 'intermediate',
    totalTime: 1200,
    yieldDescription: '1 loaf',
    yieldDescriptionZh: '1个面包',

    ingredients: [
      { id: 'rye-flour', name: 'Whole rye flour (Type 1150)', nameZh: '全黑麦粉（1150型）', percentage: 70, isFlour: true },
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 30, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 70, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'rye-starter', name: 'Rye sourdough starter (100% hydration)', nameZh: '黑麦酸面团酵种（100%含水量）', percentage: 15, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Build Rye Sourdough: 12 hours before mixing, feed your rye sourdough starter with rye flour and water at a 1:1:1 ratio. Ferment at 24-26°C until very active, deeply aromatic, and risen to at least double.',
        instructionZh:
          '培养黑麦酸面团：混合面团前12小时，以1:1:1比例用黑麦粉和水喂养黑麦酵种。24-26°C发酵至非常活跃、香气深沉且体积至少翻倍。',
        durationMinutes: 720,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix Dough: In a large bowl, combine the rye flour, bread flour, water, and the active rye sourdough starter. Mix thoroughly for 8-10 minutes — the dough will be sticky and heavy due to the high rye content but should develop some cohesion from the wheat flour. Cover and rest 30 minutes.',
        instructionZh:
          '搅拌面团：在大碗中混合黑麦粉、高筋面粉、水和活跃的黑麦酸面团酵种。充分搅拌8-10分钟——由于黑麦含量高，面团会粘稠沉重，但小麦粉会使其产生一定的凝聚力。盖保鲜膜静置30分钟。',
        durationMinutes: 40,
      },
      {
        stepNumber: 3,
        instruction:
          'Add Salt & Bulk Ferment: Sprinkle the salt over the dough and mix by hand for 2-3 minutes to distribute. Transfer to a lightly oiled container. Ferment at 26-28°C for 2.5-3 hours. Perform 2 sets of coil folds at 45 and 90 minutes. The dough will rise by about 40-50% — rye-heavy doughs will never double.',
        instructionZh:
          '加盐与基础发酵：将盐撒在面团上，用手搅拌2-3分钟使其均匀分布。转移到轻微涂油的容器中。26-28°C发酵2.5-3小时。在第45和90分钟各进行一次卷折，共2次。面团膨胀约40-50%——高黑麦比例的面团永远不会翻倍。',
        durationMinutes: 180,
      },
      {
        stepNumber: 4,
        instruction:
          'Shape & Proof: Turn the dough onto a floured work surface (use rye flour for dusting — wheat flour will streak the crust). Shape into a tight oval or round. Place seam-side down in a floured banneton or proofing basket. Proof at 26-28°C for 1.5-2 hours until puffy and a finger poke springs back slowly. Alternatively, cold-proof for 8-12 hours for more developed flavour.',
        instructionZh:
          '整形与发酵：将面团倒在撒粉的台面上（使用黑麦粉做手粉——小麦粉会在外壳留下条纹）。整形成紧致的椭圆形或圆形。接缝朝下放入撒粉的发酵篮中。26-28°C发酵1.5-2小时至蓬松且手指按压缓慢回弹。或者冷藏发酵8-12小时以获得更丰富的风味。',
        durationMinutes: 120,
      },
      {
        stepNumber: 5,
        instruction:
          'Score & Bake: Preheat oven with a baking stone to 240°C for 45 minutes. Invert the loaf onto a peel or parchment. Score with a cross or diamond pattern using a straight lame — rye dough requires a shallower, more decisive cut than wheat dough. Bake with steam at 230°C for 15 minutes, then vent, reduce to 200°C, and bake 30-35 minutes more until deeply browned and the internal temperature reaches 96°C. Cool on a wire rack for at least 3 hours before slicing.',
        instructionZh:
          '割包与烘烤：将烤箱与石板一同预热至240°C 45分钟。将面包倒扣在转移板或烘焙纸上。使用直刃割包刀以十字或菱形图案割包——黑麦面团需要比小麦面团更浅更果断的切割。带蒸汽230°C烤15分钟，然后排汽、降至200°C再烤30-35分钟至深褐色且内部温度达到96°C。在晾网上冷却至少3小时后再切片。',
        durationMinutes: 90,
      },
    ],

    tips: [
      'Mischbrot means "mixed bread" in German. The ratio of rye to wheat can be adjusted — 70/30 is a classic hearty version, but 50/50 is common for a lighter everyday bread.',
      'Rye doughs have a shorter optimal proofing window than wheat doughs. Over-proofing leads to a collapsed loaf because the pentosan structure breaks down irreversibly. Err on the side of slightly under-proofed.',
      'Always let rye and rye-mixed breads cool completely and rest for several hours before slicing. The crumb structure sets during cooling and the flavour continues to develop for up to 24 hours.',
    ],
    tipsZh: [
      'Mischbrot在德语中意为"混合面包"。黑麦与小麦的比例可以调整——70/30是经典的浓郁版本，但50/50也是常见的轻盈日常面包比例。',
      '黑麦面团的最佳发酵窗口比小麦面团更窄。过度发酵会导致面包塌陷，因为戊聚糖结构会不可逆地崩解。宁可略微发酵不足。',
      '黑麦和混合黑麦面包务必完全冷却并静置数小时后再切片。面包组织在冷却过程中定型，风味在长达24小时内持续发展。',
    ],
  },

  // ==================== 12. Pita Bread ====================
  {
    id: 'pita',
    name: 'Pita Bread',
    nameZh: '皮塔饼',
    category: RC.LEAN_BREAD,
    description:
      'The classic Middle Eastern pocket bread that puffs dramatically in a hot oven, forming a hollow interior perfect for stuffing. Simple, fast, and deeply satisfying — from mixing bowl to table in under 3 hours.',
    descriptionZh:
      '经典的中东口袋面包，在高温烤箱中戏剧性地膨胀，形成中空的内部，非常适合填馅。简单、快速且极具满足感——从搅拌碗到餐桌不到3小时。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 62,
    difficulty: 'beginner',
    totalTime: 150,
    yieldDescription: '8 pitas',
    yieldDescriptionZh: '8个饼',

    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (12-13% protein)', nameZh: '高筋面粉（12-13%蛋白质）', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 62, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.5, isFlour: false },
      { id: 'yeast', name: 'Instant dry yeast', nameZh: '即发干酵母', percentage: 0.5, isFlour: false },
      { id: 'olive-oil', name: 'Extra virgin olive oil', nameZh: '特级初榨橄榄油', percentage: 3, isFlour: false },
    ],

    steps: [
      {
        stepNumber: 1,
        instruction:
          'Mix: In a large bowl, combine bread flour, instant yeast, water, olive oil, and salt. Mix by hand or with a dough whisk until a shaggy dough forms. Knead on a clean surface for 6-8 minutes until smooth and elastic. The dough should be moderately firm at 62% hydration — it should clean the work surface without sticking excessively.',
        instructionZh:
          '混合：在大碗中混合高筋面粉、即发干酵母、水、橄榄油和盐。用手或面团搅拌器搅拌至形成粗糙面团。在干净的台面上揉面6-8分钟至光滑有弹性。62%水量的面团应具有中等硬度——能够离开台面且不会过度粘连。',
        durationMinutes: 15,
      },
      {
        stepNumber: 2,
        instruction:
          'Bulk Ferment: Place the dough in a lightly oiled bowl, cover, and ferment at 24-26°C for 60-75 minutes until doubled in size.',
        instructionZh:
          '基础发酵：将面团放入轻微涂油的碗中，盖保鲜膜，24-26°C发酵60-75分钟至体积翻倍。',
        durationMinutes: 75,
      },
      {
        stepNumber: 3,
        instruction:
          'Divide & Pre-shape: Turn the dough onto a clean surface. Divide into 8 equal pieces (approximately 100 g each). Shape each piece into a tight ball by pulling the edges to the centre and pinching closed. Place seam-side down on a lightly floured surface, cover with a damp towel, and rest for 15 minutes.',
        instructionZh:
          '分割与预整形：将面团倒在干净台面上。分成8等份（每份约100g）。将每份的边缘向中心拉扯并捏紧收口，整形成紧致的小圆球。接缝朝下放置在轻撒面粉的台面上，盖上湿布，静置15分钟。',
        durationMinutes: 20,
      },
      {
        stepNumber: 4,
        instruction:
          'Shape Pitas: Using a rolling pin, roll each ball into a flat round 5-6 mm thick and 15-18 cm in diameter. Roll from the centre outward, rotating the dough 90 degrees after each pass to maintain an even circle. The thickness is critical — too thin and the pita will not form a pocket; too thick and it will be doughy. Place the rolled rounds on a lightly floured surface and cover with a dry towel. Rest for 15 minutes.',
        instructionZh:
          '擀制皮塔饼：用擀面杖将每个球擀成5-6毫米厚、15-18厘米直径的扁平圆饼。从中心向外擀，每次擀压后旋转90度以保持圆形均匀。厚度至关重要——太薄皮塔饼无法形成口袋；太厚则会生面团感。将擀好的圆饼放在轻撒面粉的台面上，盖上干布。静置15分钟。',
        durationMinutes: 25,
        tip: 'Roll with even, deliberate pressure. A dough that springs back aggressively during rolling needs more rest — do not fight it, or the gluten will tear and the pita will not puff uniformly.',
        tipZh: '用均匀、从容的压力擀制。擀制过程中剧烈回缩的面团需要更多静置时间——不要强行擀制，否则面筋会撕裂，皮塔饼无法均匀膨胀。',
      },
      {
        stepNumber: 5,
        instruction:
          'Bake: Place a baking stone or inverted heavy baking sheet on the middle rack and preheat the oven as hot as it will go — ideally 260-280°C — for at least 30 minutes. Bake the pitas 2-3 at a time directly on the stone. They will puff into a ball within 2-3 minutes. After they puff, bake for another 60-90 seconds until lightly golden at the edges. Remove immediately and wrap in a clean kitchen towel to keep soft. For the most dramatic pockets, use a pizza steel and preheat for 45 minutes.',
        instructionZh:
          '烘烤：将石板或倒置的厚重烤盘放在烤箱中层，以最高温度——理想为260-280°C——预热至少30分钟。每次烤2-3个皮塔饼，直接放在石板上。饼会在2-3分钟内膨胀成球。膨胀后再烤60-90秒至边缘轻微金黄。立即取出并用干净的厨巾包裹保温以保持柔软。想要最壮观的"口袋"效果，使用烘焙钢板并预热45分钟。',
        durationMinutes: 45,
        tip: 'The pocket forms because intense heat instantly vaporises water on the dough surface, creating steam pressure that inflates the pita like a balloon. This requires a preheated thermal mass (stone or steel) — a cold baking sheet will not produce pockets.',
        tipZh: '口袋的形成是因为强热瞬间蒸发面团表面的水分，产生蒸汽压力将皮塔饼像气球一样吹起。这需要预热的蓄热体（石板或钢板）——冷的烤盘无法产生口袋。',
      },
    ],

    tips: [
      'The key to the pocket is a combination of even rolling (5-6 mm thickness) and extreme heat. If your pitas are not puffing, check your oven temperature with a standalone thermometer — most home ovens run cooler than their setting indicates.',
      'Pitas can be rolled and held between sheets of parchment for up to 1 hour before baking. Keep them covered to prevent a skin from forming.',
      'Leftover pitas can be refreshed by sprinkling with water and warming in a dry skillet for 30 seconds per side, or by wrapping in foil and heating in a 180°C oven for 5 minutes.',
    ],
    tipsZh: [
      '形成口袋的关键是均匀擀制（5-6毫米厚度）和极高温度的配合。如果皮塔饼不膨胀，用独立温度计检查烤箱实际温度——大多数家用烤箱的实际温度低于设定值。',
      '皮塔饼可在擀好后用烘焙纸隔开保存长达1小时再烘烤。保持覆盖以防表面结皮。',
      '剩余的皮塔饼可洒水后用干煎锅每面加热30秒恢复口感，或用锡纸包裹在180°C烤箱中加热5分钟。',
    ],
  },
];
