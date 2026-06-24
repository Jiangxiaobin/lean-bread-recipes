import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC, BakerSystem as BS } from '../../types/recipe';

export const cookiesCrackers: Recipe[] = [
  {
    id: 'soda-crackers',
    name: 'Soda Crackers',
    nameZh: '苏打饼干',
    category: RC.COOKIES_CRACKERS,
    description:
      'The classic crisp, flaky cracker — lighter than air with delicate layers achieved through a simple lamination of yeasted dough. These are the crackers that launched a thousand cheese boards, with the signature blistered top and that unmistakable soda tang. A deceptively simple recipe that rewards precision.',
    descriptionZh:
      '经典酥脆薄饼——轻如空气，通过简单的发酵面团折叠形成精致层次。这便是装点了无数芝士拼盘的饼干，拥有标志性的气泡表面与无可替代的苏打风味。看似简单却考验精准度的配方。',
    bakerSystem: BS.DIRECT_WEIGHT,
    defaultAnchorWeight: 0,
    anchorLabel: 'N/A',
    anchorLabelZh: '不适用',
    ingredients: [
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 250, isFlour: true },
      { id: 'water', name: 'Water (warm)', nameZh: '水（温水）', percentage: 100, isFlour: false },
      { id: 'butter', name: 'Unsalted butter (cold)', nameZh: '无盐黄油（冷藏）', percentage: 30, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 2, isFlour: false },
      { id: 'baking-soda', name: 'Baking soda', nameZh: '小苏打', percentage: 1, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 1, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the dough: Dissolve yeast in warm water (38°C) and let stand for 5 minutes until foamy. In a large bowl, whisk flour, salt, and baking soda together. Cut cold butter into small cubes and rub into the flour mixture with fingertips until it resembles coarse meal — visible butter pieces are desirable as they create flaky layers. Add the yeast water and mix just until a cohesive dough forms. Do not overwork.',
        instructionZh:
          '制作面团：将酵母溶于温水（38°C）中静置5分钟至起泡。在大碗中混合面粉、盐与小苏打。将冷藏黄油切成小丁，用指尖搓入面粉混合物中至呈粗沙状——可见的黄油颗粒是形成酥脆层次的关键。加入酵母水，仅搅拌至面团凝聚即可。切勿过度搅拌。',
        durationMinutes: 15,
      },
      {
        stepNumber: 2,
        instruction:
          'First fermentation: Cover the bowl with plastic wrap and let the dough ferment at room temperature for 40 minutes. The dough will not double in size — soda crackers rely on a short fermentation that develops flavor without excessive leavening. The dough should feel relaxed and slightly puffy.',
        instructionZh:
          '第一次发酵：用保鲜膜覆盖碗口，室温发酵40分钟。面团体积不会翻倍——苏打饼干依靠短时间发酵来发展风味而不过度膨胀。面团应感觉松弛并略微鼓胀。',
        durationMinutes: 40,
      },
      {
        stepNumber: 3,
        instruction:
          'Laminate the dough: On a lightly floured surface, roll the dough into a 30×40 cm rectangle, about 3 mm thick. Fold it in thirds like a business letter — left third over center, right third over left. Rotate 90°, roll again to a 3 mm rectangle, and fold in thirds once more. This creates 9 papery layers. For extra-flaky crackers, repeat the fold once more (27 layers). Wrap and rest for 10 minutes.',
        instructionZh:
          '折叠面团：在轻撒面粉的工作台上，将面团擀成约3毫米厚、30×40厘米的长方形。如叠信般三折——左侧三分之一折向中心，右侧三分之一折上。旋转90°，再次擀至3毫米厚长方形，再次三折。此步形成9层薄层。为获得超酥脆饼干，可再重复折叠一次（27层）。包裹静置10分钟。',
        durationMinutes: 15,
      },
      {
        stepNumber: 4,
        instruction:
          'Roll and dock: Roll the rested dough to approximately 1.5 mm thickness — nearly translucent. The thinner the dough, the crispier the cracker. Transfer to a parchment-lined baking sheet. Using a docker or fork, prick holes throughout the surface at regular intervals (every 2–3 cm). This prevents large air bubbles from forming and ensures even baking. Sprinkle the surface lightly with additional sea salt.',
        instructionZh:
          '擀薄与扎孔：将静置好的面团擀至约1.5毫米厚度——几乎透光。面团越薄，饼干越脆。移至铺有烘焙纸的烤盘上。用打孔器或叉子在表面均匀扎孔（每隔2–3厘米）。这能防止大气泡形成并确保均匀烘烤。表面轻轻撒上额外的海盐。',
        durationMinutes: 10,
      },
      {
        stepNumber: 5,
        instruction:
          'Bake: Preheat oven to 200°C (390°F). Before baking, score the dough into 5×5 cm squares using a pizza cutter or sharp knife — do not cut all the way through, just score deeply enough to guide breaking later. Bake for 10–15 minutes, rotating the pan halfway, until the crackers are evenly golden brown with darker blistered spots. The crackers at the edges may brown faster — remove them individually as they finish and return the rest to the oven. Cool completely on a wire rack (they will crisp further as they cool). Break along the score lines.',
        instructionZh:
          '烘烤：预热烤箱至200°C。入炉前用披萨刀或锋利小刀将面团划成5×5厘米的方格——无需完全切透，只需划出足够深的印痕以便后续掰开。烘烤10–15分钟，中途旋转烤盘，至饼干均匀金黄色并带有深色气泡斑点。边缘的饼干上色较快——可逐一取出已烤好的，其余继续烘烤。在晾架上完全冷却（冷却过程中将进一步变脆）。沿印痕掰开。',
        durationMinutes: 15,
      },
    ],
    tips: [
      'The key to ultra-crisp soda crackers is rolling thin — the dough should be translucent enough to see the grain of your work surface through it. If you can read a newspaper through the dough, it is at the right thickness.',
      'For authentic bakery-style blisters, brush off excess flour before the final roll, and mist the dough very lightly with water just before it enters the oven — the steam lifts the top layer.',
      'Cold butter cut into visible pea-sized pieces creates the flaky layers. If the butter melts into the flour completely during mixing, the crackers will be hard rather than flaky.',
      'Store completely cooled crackers in an airtight container with a silica packet or a few grains of raw rice wrapped in cheesecloth to maintain crispness for up to 1 week.',
    ],
    tipsZh: [
      '超脆苏打饼干的关键在于擀得够薄——面团应薄到几乎透明，能透过面皮看到工作台的纹理。如果能透过面团读报纸，厚度就对了。',
      '要获得正宗的烘焙店气泡外观，最终擀面前扫去多余干粉，入炉前极轻微地在面团表面喷水雾——蒸汽会顶起表层形成气泡。',
      '冷藏黄油切成可见的豌豆大小颗粒才能形成酥脆层次。若搅拌时黄油完全融入面粉，饼干将变硬而非酥脆。',
      '将完全冷却的饼干存放在密封容器中，放入硅胶干燥剂或用芝士布包裹的几粒生米，可保持酥脆长达1周。',
    ],
    difficulty: 'intermediate',
    totalTime: 90,
    yieldDescription: '~40 crackers',
    yieldDescriptionZh: '约40片',
  },
  {
    id: 'ladyfingers',
    name: 'Ladyfingers (Savoiardi)',
    nameZh: '手指饼干',
    category: RC.COOKIES_CRACKERS,
    description:
      'Light as air, crisp on the outside, and sponge-tender within — these elegant Italian biscotti are the foundation of tiramisu and countless charlottes. Made from a classic French biscuit à la cuillère batter (separated eggs, folded with flour), they are piped into neat fingers and dusted with sugar before baking. Master these and you hold the key to the world of mousse-based desserts.',
    descriptionZh:
      '轻如空气、外壳酥脆、内部柔软如海绵——这些优雅的意大利饼干是提拉米苏与无数夏洛特蛋糕的基石。以经典法式分蛋海绵面糊（分离蛋清蛋黄，拌入面粉）制成，挤成整齐的手指形，撒糖烘烤。掌握了它，便掌握了慕斯甜点世界的钥匙。',
    bakerSystem: BS.DIRECT_WEIGHT,
    defaultAnchorWeight: 0,
    anchorLabel: 'N/A',
    anchorLabelZh: '不适用',
    ingredients: [
      { id: 'egg-yolk', name: 'Egg yolks', nameZh: '蛋黄', percentage: 60, isFlour: false },
      { id: 'egg-white', name: 'Egg whites', nameZh: '蛋白', percentage: 90, isFlour: false },
      { id: 'cake-flour', name: 'Cake flour', nameZh: '低筋面粉', percentage: 100, isFlour: true },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 80, isFlour: false },
      { id: 'cornstarch', name: 'Cornstarch', nameZh: '玉米淀粉', percentage: 20, isFlour: true },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare: Preheat oven to 190°C (375°F). Line two baking sheets with parchment paper. Fit a large piping bag with a 1.5 cm plain round tip. Have all ingredients at room temperature — cold eggs will not whip to proper volume. Sift the cake flour and cornstarch together three times to aerate thoroughly.',
        instructionZh:
          '准备：预热烤箱至190°C。两张烤盘铺上烘焙纸。大裱花袋安装1.5厘米平口圆嘴。所有材料需回温至室温——冷藏鸡蛋无法打发至理想体积。低筋面粉与玉米淀粉一同过筛三次以充分蓬松。',
        durationMinutes: 10,
      },
      {
        stepNumber: 2,
        instruction:
          'Make the meringue: In a spotlessly clean bowl, whip egg whites on medium speed until frothy. Gradually add half the sugar (40 g) in a steady stream while continuing to whip. Increase speed to high and whip until stiff, glossy peaks form — the meringue should stand straight up when the whisk is lifted and feel smooth between your fingers (no graininess from undissolved sugar).',
        instructionZh:
          '制作蛋白霜：在绝对无油的干净盆中，中速打发蛋白至起粗泡。保持打发的同时匀速加入一半糖（40克）。加速至高速，继续打发至硬挺有光泽的尖峰——提起打蛋器时蛋白霜直立不弯，手指间搓揉感觉细滑（无未溶解糖粒）。',
        durationMinutes: 8,
      },
      {
        stepNumber: 3,
        instruction:
          'Make the yolk mixture: In a separate bowl, whip egg yolks with the remaining sugar (40 g) on high speed until the mixture is pale, thick, and falls in ribbons from the whisk — about 4–5 minutes. The mixture should triple in volume. Add a small spoonful of the meringue to the yolks and stir vigorously to lighten the mixture (this makes it easier to fold in the remaining meringue without deflating).',
        instructionZh:
          '制作蛋黄糊：在另一盆中，将蛋黄与剩余糖（40克）高速打发至颜色发白、浓稠，提起打蛋器呈缎带状流下——约4–5分钟。体积应增至三倍。舀一小勺蛋白霜加入蛋黄糊中用力搅拌均匀使其轻盈（这样后续拌入剩余蛋白霜时不易消泡）。',
        durationMinutes: 5,
      },
      {
        stepNumber: 4,
        instruction:
          'Fold and pipe: Pour the lightened yolk mixture over the remaining meringue. Sift the flour-cornstarch mixture over the top in three additions, folding gently with a large spatula after each. Fold only until no streaks of flour remain — the batter should still look voluminous and mousse-like. Transfer to the piping bag. Pipe 10 cm long strips onto the prepared sheets, leaving 3 cm between each. Generously dust the tops with powdered sugar (this creates the signature thin, crisp crust). Wait 2 minutes and dust again — the first layer of sugar dissolves and the second layer creates the crackly top.',
        instructionZh:
          '翻拌与挤花：将稀释后的蛋黄糊倒在蛋白霜上。将面粉淀粉混合物分三次筛在表面，每次用大号刮刀轻柔翻拌。仅翻拌至无干粉条纹即可——面糊应仍蓬松如慕斯状。装入裱花袋。在准备好的烤盘上挤成10厘米长的条，间隔3厘米。表面大量筛撒糖粉（形成标志性的薄脆外壳）。等待2分钟后再次筛撒——第一层糖溶解，第二层形成酥脆的裂纹顶面。',
        durationMinutes: 15,
      },
      {
        stepNumber: 5,
        instruction:
          'Bake: Place baking sheets in the preheated oven and immediately reduce temperature to 175°C (350°F). Bake for 12–15 minutes until the ladyfingers are puffed, lightly golden at the edges, and firm to the touch. The centers should spring back when pressed gently. Cool completely on the baking sheets — they will be fragile when warm but firm up as they cool. Once cool, store in an airtight container. For tiramisu use, let them dry out slightly overnight for better coffee absorption.',
        instructionZh:
          '烘烤：将烤盘放入预热烤箱，立即将温度降至175°C。烘烤12–15分钟，至手指饼干膨胀、边缘微金黄、触感坚实。轻按中心应能回弹。在烤盘上完全冷却——温热时较为脆弱，冷却后变坚实。冷却后存放于密封容器中。用于提拉米苏时，可敞开晾一晚稍干燥以更好地吸收咖啡液。',
        durationMinutes: 15,
      },
    ],
    tips: [
      'The double dusting of powdered sugar is the secret to the classic ladyfinger crust — the first layer melts and forms a syrup, the second layer sits on top and crystallizes into the signature crackled shell.',
      'When folding flour into meringue, use a large balloon whisk instead of a spatula for the first few turns — it incorporates flour more quickly with less deflation. Switch to a spatula to finish.',
      'To ensure uniform size, draw 10 cm lines on the underside of the parchment paper as a piping guide — this is especially helpful when making ladyfingers for a charlotte where uniform height matters.',
      'For a chocolate variation, replace 15% of the flour with Dutch-process cocoa powder, sifted with the flour — serve alongside espresso for a simple, elegant dessert.',
    ],
    tipsZh: [
      '两次撒糖粉是经典手指饼干外壳的秘诀——第一层融化形成糖浆，第二层浮于表面结晶成标志性的裂纹脆壳。',
      '将面粉翻拌入蛋白霜时，前几次可用大号球形打蛋器代替刮刀——能更快地拌入面粉且不易消泡。最后再换成刮刀完成。',
      '为保证大小一致，可在烘焙纸背面画10厘米长的线作为挤花参考——制作夏洛特蛋糕需统一高度时尤其有用。',
      '巧克力变体：用15%的荷兰工艺可可粉替代等量面粉，与面粉一同过筛——搭配浓缩咖啡食用即是简单优雅的甜点。',
    ],
    difficulty: 'beginner',
    totalTime: 45,
    yieldDescription: '~30 ladyfingers',
    yieldDescriptionZh: '约30根',
  },
  {
    id: 'shortbread',
    name: 'Scottish Shortbread',
    nameZh: '苏格兰黄油酥饼',
    category: RC.COOKIES_CRACKERS,
    description:
      'The purest expression of butter in cookie form — Scottish shortbread follows the immutable 3:2:1 ratio (butter : sugar : flour) that has defined this biscuit for centuries. Only three ingredients, yet the result is a tender, crumbly wedge that melts on the tongue. No eggs, no leavening, no liquid — just butter, sugar, and flour transformed by craft.',
    descriptionZh:
      '黄油在饼干形态中最纯粹的表达式——苏格兰黄油酥饼遵循永恒的3:2:1黄金比例（黄油:糖:面粉），数百年来定义了这款饼干。仅三种原料，却成就了在舌尖融化的绵柔酥粒。无蛋、无膨松剂、无液体——仅凭黄油、糖与面粉，由技艺点化而成。',
    bakerSystem: BS.BUTTER_ANCHOR,
    defaultAnchorWeight: 200,
    anchorLabel: 'Total Butter',
    anchorLabelZh: '总黄油',
    fatPercentage: 100,
    sugarPercentage: 30,
    ingredients: [
      { id: 'butter', name: 'Unsalted butter', nameZh: '无盐黄油', percentage: 100, isFlour: false },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 60, isFlour: true },
      { id: 'sugar', name: 'Caster sugar', nameZh: '细砂糖', percentage: 30, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare the butter: The butter must be at the ideal temperature — cool room temperature (18–20°C), not soft or greasy. Press your finger into it; it should yield with some resistance but not be squishy. Cut butter into chunks and place in a stand mixer bowl. Beat with the paddle attachment on medium-low speed for 1–2 minutes just until smooth and creamy — do not whip air into it, as aeration creates fragile shortbread that crumbles rather than snaps.',
        instructionZh:
          '准备黄油：黄油温度至关重要——凉爽室温（18–20°C），不可过软或油腻。手指按压应有阻力而回弹，但不应软烂。将黄油切块放入搅拌缸。使用桨形搅拌头以中低速搅拌1–2分钟，仅至顺滑乳脂状——切勿打入过多空气，充气会使酥饼脆弱易碎而非酥脆。',
        durationMinutes: 5,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix the dough: Add sugar to the creamed butter and mix on low speed for 1–2 minutes until just incorporated — the mixture should look sandy, not fluffy. Sift the flour over the butter mixture. Mix on the lowest speed until the dough just begins to clump together. Stop the mixer the moment it looks like wet sand that holds when squeezed. Overmixing develops gluten and produces tough shortbread.',
        instructionZh:
          '混合面团：将糖加入打发黄油中，低速搅拌1–2分钟至刚刚混合均匀——混合物应呈沙状而非蓬松状。将面粉筛入黄油混合物。以最低速搅拌至面团刚刚开始结团。一旦呈湿润可捏合成团的沙状即停止。过度搅拌会发展面筋使酥饼变硬。',
        durationMinutes: 8,
      },
      {
        stepNumber: 3,
        instruction:
          'Shape: Turn the crumbly dough out onto a piece of parchment paper. Gather and press together firmly with your hands — the warmth of your palms helps it come together. Place a second sheet of parchment on top and roll into a 20 cm circle, about 1 cm thick. Transfer the parchment with the dough onto a baking sheet. Using your thumb and forefinger, crimp the edges decoratively. Prick the surface all over with a fork in a radial pattern. Score deeply into 16 wedges with a sharp knife. Sprinkle the surface with a thin, even layer of granulated sugar. Refrigerate for at least 30 minutes (or freeze for 15) — cold dough going into a hot oven is essential for shape retention.',
        instructionZh:
          '整形：将松散面团倒在烘焙纸上。用手聚拢并用力压实——掌心的温度有助于成团。盖上第二张烘焙纸，擀成约1厘米厚、直径20厘米的圆形。将烘焙纸连同面团转移至烤盘上。用拇指与食指在边缘捏出装饰花边。用叉子在表面均匀扎孔呈放射状图案。用锋利刀深切出16块楔形划痕。表面均匀撒上一层薄砂糖。冷藏至少30分钟（或冷冻15分钟）——冷面团进入热烤箱是保持形状的关键。',
        durationMinutes: 35,
      },
      {
        stepNumber: 4,
        instruction:
          'Bake: Preheat oven to 160°C (320°F). Bake the chilled shortbread for 35–45 minutes, rotating the pan halfway through. The shortbread is done when it is set and firm to the touch but still very pale — it should have almost no color, just the faintest hint of gold at the edges. If it browns, the temperature was too high or it baked too long; authentic Scottish shortbread is famously pale. Remove from the oven and immediately re-cut along the score lines while hot. Let cool completely on the baking sheet on a wire rack — the shortbread will firm and crisp as it cools. Dust with additional caster sugar before serving.',
        instructionZh:
          '烘烤：预热烤箱至160°C。将冷藏好的酥饼烘烤35–45分钟，中途旋转烤盘。酥饼定型、触感坚实但颜色仍非常浅淡时即熟——应几乎无色，仅边缘有极淡的金色。如上色则温度过高或时间过长；正宗的苏格兰酥饼以颜色浅淡闻名。出炉后趁热立即沿划痕再切一次。在烤盘上完全冷却——冷却过程中酥饼将变硬变脆。食用前撒上额外的细砂糖。',
        durationMinutes: 45,
      },
    ],
    tips: [
      'Traditional Scottish shortbread uses rice flour for up to 25% of the flour weight — it adds an extra sandy crispness that is worth trying. Replace 15 g of all-purpose flour with rice flour per 100 g total flour.',
      'The dough must be cold when it enters the oven. If the butter melts before the flour structure sets, the shortbread will spread and lose its shape. Refrigeration is not optional — it is essential.',
      'Authentic shortbread should be pale, not golden. The low oven temperature (160°C) is deliberate — it slowly sets the structure without caramelizing the sugar or browning the butter.',
      'Shortbread improves with age. Stored in an airtight tin, the flavor deepens over 2–3 days as the butter and flour marry. Make it ahead of time for the best result.',
    ],
    tipsZh: [
      '传统苏格兰酥饼使用米粉替代最多25%的面粉——增添额外的沙质酥脆感，值得一试。每100克总面粉中以15克米粉替代中筋面粉。',
      '面团入炉时必须是冷藏状态。若黄油在面粉结构定型前融化，酥饼会摊平变形。冷藏不是可选项——而是必须。',
      '正宗酥饼应颜色浅淡而非金黄。低烤箱温度（160°C）是刻意为之——缓慢定型结构而不焦化糖分或褐化黄油。',
      '酥饼随时间愈佳。存放于密封铁盒中，2–3天后黄油与面粉融合使风味更深邃。提前制作以获得最佳效果。',
    ],
    difficulty: 'beginner',
    totalTime: 60,
    yieldDescription: '16 wedges',
    yieldDescriptionZh: '16块',
  },
  {
    id: 'biscotti',
    name: 'Cantucci (Biscotti)',
    nameZh: '意式脆饼',
    category: RC.COOKIES_CRACKERS,
    description:
      'The twice-baked almond biscuit from Tuscany — first baked as a log, sliced, then returned to the oven to achieve its signature bone-dry crunch. Biscotti are designed for dunking in Vin Santo, coffee, or hot chocolate. The dough contains no butter in many traditional recipes, but a small amount here yields a more tender first bite without sacrificing the essential crispness.',
    descriptionZh:
      '源自托斯卡纳的两次烘烤杏仁饼干——先整条烘烤，切片后再回炉以获得标志性的干硬酥脆。意式脆饼专为蘸食圣酒、咖啡或热巧克力而设计。传统配方中多不含黄油，但此版本加入少量以使第一口更为柔和，同时不失其必不可少的脆硬质地。',
    bakerSystem: BS.DIRECT_WEIGHT,
    defaultAnchorWeight: 0,
    anchorLabel: 'N/A',
    anchorLabelZh: '不适用',
    ingredients: [
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 250, isFlour: true },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 150, isFlour: false },
      { id: 'eggs', name: 'Whole eggs', nameZh: '全蛋', percentage: 100, isFlour: false },
      { id: 'almonds', name: 'Whole almonds (unblanched)', nameZh: '整粒杏仁（带皮）', percentage: 100, isFlour: false },
      { id: 'butter', name: 'Unsalted butter (melted)', nameZh: '无盐黄油（融化）', percentage: 30, isFlour: false },
      { id: 'baking-powder', name: 'Baking powder', nameZh: '泡打粉', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1, isFlour: false },
      { id: 'vanilla', name: 'Vanilla extract', nameZh: '香草精', percentage: 5, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare: Preheat oven to 180°C (350°F). Line a baking sheet with parchment paper. If almonds are untoasted, spread them on a separate tray and toast at 180°C for 8–10 minutes until fragrant and lightly colored. Cool completely. Toasting the almonds is not optional — raw almonds will steam inside the dough and create a softer texture, while toasted almonds contribute crunch and depth.',
        instructionZh:
          '准备：预热烤箱至180°C。烤盘铺烘焙纸。若杏仁未经烘烤，另取烤盘摊开以180°C烘8–10分钟至飘香并微上色。完全冷却。杏仁烘烤是必要的——生杏仁会在面团内蒸煮导致质地变软，而烘烤杏仁则贡献脆硬口感与风味深度。',
        durationMinutes: 15,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix the dough: In a large bowl, whisk flour, baking powder, and salt together. In a separate bowl, whisk eggs, sugar, melted butter, and vanilla extract until the sugar is mostly dissolved — the mixture will be thick and pale. Pour the wet ingredients into the dry and stir with a wooden spoon until a stiff, sticky dough forms. Fold in the cooled toasted almonds. The dough will be very sticky — resist adding extra flour unless it is unmanageably wet.',
        instructionZh:
          '混合面团：在大碗中混合面粉、泡打粉、盐。在另一碗中搅打鸡蛋、糖、融化黄油与香草精至糖基本溶解——混合物浓稠发白。将湿料倒入干料中，用木勺搅拌至形成硬挺黏手的面团。拌入已冷却的烘烤杏仁。面团将非常黏手——除非实在无法操作，否则不要额外加面粉。',
        durationMinutes: 10,
      },
      {
        stepNumber: 3,
        instruction:
          'First bake (log): Divide the dough in half. With dampened hands, shape each half into a log approximately 25 cm long, 8 cm wide, and 2 cm thick — flat on top. Place both logs on the prepared baking sheet with at least 8 cm between them; they will spread. Gently flatten and even out the logs with damp fingers. Bake for 25–30 minutes until the logs are firm to the touch, lightly golden, and a skewer inserted in the center comes out clean. The surface may have slight cracks — this is normal.',
        instructionZh:
          '第一次烘烤（整条）：将面团分成两半。用湿手将每半整形成约25厘米长、8厘米宽、2厘米厚的扁长方形。两条摆放在准备好的烤盘上，间距至少8厘米（会摊开）。用湿手指轻轻压平整理顶部。烘烤25–30分钟至表面触感坚实、微金黄色、中心插入竹签干净取出。表面可能出现细微裂纹——此为正常现象。',
        durationMinutes: 30,
      },
      {
        stepNumber: 4,
        instruction:
          'Slice: Remove logs from the oven and let cool on the baking sheet for 10–15 minutes — just long enough to handle safely but still warm. Transfer to a cutting board. Using a serrated bread knife, slice diagonally into 1.5 cm thick slices using a gentle sawing motion. Wipe the knife between cuts for clean slices. Arrange the slices cut-side down on the baking sheet, leaving space between each.',
        instructionZh:
          '切片：取出烤盘，在烤盘上冷却10–15分钟——足以安全触握但仍温热。移至切菜板上。用锯齿面包刀以轻柔锯切动作斜切成1.5厘米厚的片。每切一刀擦拭刀身以保证切面整齐。将切片切面朝下排放在烤盘上，片间留有空隙。',
        durationMinutes: 15,
      },
      {
        stepNumber: 5,
        instruction:
          'Second bake: Reduce oven temperature to 150°C (300°F). Return the sliced biscotti to the oven and bake for 15–20 minutes, turning each slice over halfway through. The biscotti should feel dry and firm. For a softer bite (less traditional), bake 12 minutes per side. For the classic hard crunch preferred in Tuscany, bake until the biscotti are bone-dry with no give when pressed — they will harden further as they cool. Cool completely on a wire rack before storing. Biscotti keep for weeks in an airtight container.',
        instructionZh:
          '第二次烘烤：烤箱温度降至150°C。将切好的脆饼片送回烤箱烘烤15–20分钟，中途翻面一次。脆饼应感觉干燥坚实。若偏好更软的口感（非传统），每面烘12分钟。若追求托斯卡纳经典的硬脆口感，烘至按压完全无回弹——冷却后还会进一步变硬。在晾架上完全冷却后储存。意式脆饼在密封容器中可保存数周。',
        durationMinutes: 20,
      },
    ],
    tips: [
      'For authentic Tuscan cantucci, use unblanched whole almonds with their skins on — the skins add a subtle bitterness and rustic appearance. If you cannot find them, blanched almonds will work but lack the traditional character.',
      'A spray bottle of water is the best tool for working with this sticky dough — lightly mist your hands and work surface instead of flouring them, preventing extra flour from toughening the biscotti.',
      'The second bake is what defines biscotti — underbaking at this stage produces a cookie-like texture rather than the classic crunch. Trust the process; they will seem overbaked before they cool.',
      'For a chocolate-dipped version, temper 200 g of dark chocolate (70% cacao) and dip one end of each fully cooled biscotto. Let set on parchment paper — the slight bitterness of dark chocolate perfectly balances the sweet almond cookie.',
    ],
    tipsZh: [
      '制作正宗托斯卡纳脆饼应使用带皮整粒杏仁——杏仁皮增添微妙的苦味和质朴外观。若无带皮杏仁，去皮杏仁亦可，但缺少传统特色。',
      '喷水瓶是操作此黏手面团的最佳工具——轻轻喷湿手掌和工作台面而非撒面粉，避免因额外添加面粉而使脆饼变硬。',
      '第二次烘烤是意式脆饼的定义步骤——此阶段烘烤不足会产生饼干般的质地而非经典的硬脆口感。相信这个过程：冷却前它们看起来会像是烤过了。',
      '巧克力蘸面版本：调温200克黑巧克力（可可含量70%），将完全冷却的脆饼一端蘸入。置于烘焙纸上凝固——黑巧克力的微苦完美平衡甜杏仁饼干的风味。',
    ],
    difficulty: 'intermediate',
    totalTime: 90,
    yieldDescription: '~24 biscotti',
    yieldDescriptionZh: '约24根',
  },
];
