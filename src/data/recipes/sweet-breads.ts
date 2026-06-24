import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC } from '../../types/recipe';

export const sweetBreads: Recipe[] = [
  // ═══════════════════════════════════════════
  // 1. Japanese Anpan — 日式红豆面包
  // ═══════════════════════════════════════════
  {
    id: 'anpan',
    name: 'Japanese Anpan',
    nameZh: '日式红豆面包',
    category: RC.SWEET_BREAD,
    description:
      'The beloved Japanese sweet bun filled with smooth red bean paste (anko). Anpan is a Meiji-era classic — soft, slightly sweet dough wrapping a generous core of earthy-sweet azuki beans, finished with a sprinkle of black sesame or a pickled sakura blossom. A perfect companion to green tea.',
    descriptionZh:
      '深受喜爱的日式红豆甜面包，包裹着细腻的红豆馅（豆沙）。红豆面包是明治时代的经典——柔软微甜的面团包裹着饱满的甜糯红豆馅，表面点缀黑芝麻或盐渍樱花。与抹茶是绝配。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 62,
    fatPercentage: 6,
    sugarPercentage: 15,
    difficulty: 'intermediate',
    totalTime: 210,
    yieldDescription: '8 buns / 8个面包',
    yieldDescriptionZh: '8 buns / 8个面包',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 35, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 22, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 6, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 15, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.8, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare the red bean filling: If using homemade anko, cook 300g adzuki beans with 250g sugar and a pinch of salt until soft and thick. Mash or blend to desired smoothness — some prefer tsubuan (chunky) and others koshian (smooth). Divide the cooled anko into 8 equal portions (about 55–60g each) and roll into balls. Refrigerate until firm. If using store-bought, choose a high-quality Japanese-style anko (less sweet than Chinese versions) and portion into 50–55g balls.',
        instructionZh:
          '准备红豆馅：如果自制红豆沙，将300克红豆与250克糖和少许盐一起熬煮至软烂浓稠。按喜好捣碎或搅拌——有人喜欢粒馅（tsubuan），有人喜欢细沙（koshian）。将冷却的豆沙分成8等份（每份约55–60克），搓成圆球。冷藏至硬挺。如使用市售豆沙，选择高品质日式红豆沙（比中式甜度低），分成50–55克的球。',
        durationMinutes: 30,
        tip: 'Chilling the anko balls until firm makes them much easier to wrap — soft filling will squish out during shaping.',
        tipZh: '将豆沙球冷藏至硬挺再包裹——软馅会在整形时被挤出来。',
      },
      {
        stepNumber: 2,
        instruction:
          'Mix the dough: Warm the water and milk together to about 30°C (86°F). In a stand mixer bowl, combine bread flour, sugar, and instant yeast. Add the warm milk-water mixture. Mix with the dough hook on low speed for 2–3 minutes until a rough dough forms, then increase to medium speed and knead for 6–7 minutes until the dough is smooth and starts pulling away from the bowl. Add the softened butter and salt. Continue kneading on medium speed for 5–7 minutes until the dough is very smooth, supple, and passes the windowpane test. The dough should be slightly tacky but not sticky — the higher sugar content will make it feel softer than lean doughs.',
        instructionZh:
          '搅拌面团：水和牛奶一起加热至约30°C。厨师机搅拌碗中混合高筋面粉、糖和即发酵母。加入温牛奶水混合液。面团勾低速搅拌2–3分钟至成团，转中速揉6–7分钟至面团光滑并开始离缸。加入软化黄油和盐，中速继续揉5–7分钟至面团非常光滑柔韧，通过手套膜测试。面团应微黏但不粘手——较高的糖含量使其比瘦面团感觉更柔软。',
        durationMinutes: 18,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk fermentation: Shape dough into a smooth ball, place in a lightly oiled bowl, cover with plastic wrap. Ferment at 26–28°C (79–82°F) for 60–75 minutes until doubled. The higher sugar content may slow fermentation slightly — watch the volume, not the clock. Gently punch down to degas. Divide into 8 equal pieces (use a scale), round each into a ball, cover with a damp cloth, and bench rest for 15 minutes.',
        instructionZh:
          '基础发酵：面团滚圆，放入抹油碗中，保鲜膜覆盖。26–28°C发酵60–75分钟至翻倍。较高的糖含量会略微减缓发酵——观察体积变化而非时间。轻压排气。分割成8等份（用秤），每份滚圆，湿布盖好，松弛15分钟。',
        durationMinutes: 85,
      },
      {
        stepNumber: 4,
        instruction:
          'Shape the anpan: Flatten a dough ball into a 10 cm (4 inch) disc, keeping the center slightly thicker than the edges (edges should be thin for sealing). Place a chilled anko ball in the center. Gather the edges up and around the filling, pinching firmly to seal at the top. Roll the sealed bun gently between your palms to smooth the surface into a perfect round. Place seam-side down on a parchment-lined baking sheet. Repeat with all 8. Flatten each bun slightly with your palm — it should be about 4–5 cm tall and 7–8 cm wide. Brush the tops with a small amount of water and press black sesame seeds or a pickled sakura blossom into the center for decoration.',
        instructionZh:
          '整形：将面团按扁成直径约10厘米的圆片，中间略厚边缘较薄（薄边便于收口）。将冷藏的红豆球放在中心。将边缘提起包裹住馅料，在顶部捏紧收口。双手掌心间轻轻滚圆，使表面光滑。收口朝下放在铺有烘焙纸的烤盘上。重复做完8个。手掌轻轻按扁每个面包——应约4–5厘米高、7–8厘米宽。表面刷少许水，在中间压上黑芝麻或盐渍樱花做装饰。',
        durationMinutes: 20,
        tip: 'Keep the edges thinner than the center — this prevents a thick dough knot at the bottom where the seams meet.',
        tipZh: '边缘擀得比中间薄——这样收口处不会形成厚厚的面疙瘩。',
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof and bake: Cover the shaped buns loosely with oiled plastic wrap. Proof at 28–30°C (82–86°F) for 45–55 minutes until the buns have visibly puffed and increased in size by about 60–70% — they should look soft and pillowy. Preheat oven to 180°C (350°F). Optionally, place a second sheet of parchment and a light baking sheet on top of the buns to create flat tops (traditional for anpan), or bake uncovered for rounded tops. Bake for 14–16 minutes until the bottoms are golden brown — the tops should remain pale with just a hint of color. Cool on a wire rack. Serve at room temperature.',
        instructionZh:
          '最终发酵和烘烤：抹油保鲜膜松松覆盖整形好的面包。28–30°C发酵45–55分钟，至面包明显膨大、体积增加约60–70%——应看起来柔软蓬松。预热烤箱至180°C。传统做法是在面包上再放一张烘焙纸和一个轻烤盘压着烤出平顶，或不压烤出圆顶。烘烤14–16分钟至底部金黄——顶部应保持浅色仅微微上色。晾架上冷却。室温食用。',
        durationMinutes: 65,
        tip: 'Anpan should be pale on top — the contrast between the pale bun and the dark sesame/sakura garnish is part of its classic beauty.',
        tipZh: '红豆面包顶部应保持浅色——浅色面包与深色芝麻/樱花装饰的对比是其经典美感的一部分。',
      },
    ],
    tips: [
      'Homemade anko makes a huge difference — it allows you to control the sweetness and texture. A pinch of salt in the anko balances the sweetness beautifully.',
      'If the dough resists sealing around the filling, let the dough balls rest an extra 5 minutes to relax the gluten.',
      'Anpan keeps well for 2–3 days at room temperature in an airtight container. Microwave for 15 seconds to refresh the softness.',
    ],
    tipsZh: [
      '自制红豆沙效果大不相同——可以自由控制甜度和口感。豆沙中加少许盐能美妙地平衡甜味。',
      '如果面团包馅时回缩不好封口，让面团再多松弛5分钟。',
      '红豆面包密封室温保存2–3天依然美味。微波15秒即可恢复柔软。',
    ],
  },

  // ═══════════════════════════════════════════
  // 2. Melon Pan — 日式菠萝包
  // ═══════════════════════════════════════════
  {
    id: 'melon-pan',
    name: 'Melon Pan',
    nameZh: '日式菠萝包',
    category: RC.SWEET_BREAD,
    description:
      'The iconic Japanese melon pan — despite its name, it contains no melon. The magic is in the contrast: a soft, fluffy sweet bread bun encased in a thin, crisp cookie crust that crackles as you bite into it. The crosshatch pattern on top resembles a muskmelon, giving this beloved bakery staple its name.',
    descriptionZh:
      '标志性的日式菠萝包——虽然叫菠萝包，却完全不含菠萝。其魅力在于反差：柔软蓬松的甜面包外覆一层薄脆的饼干酥皮，咬下去的瞬间饼皮酥裂的声音令人愉悦。表面的菱格花纹酷似网纹甜瓜，因此得名。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 60,
    fatPercentage: 10,
    sugarPercentage: 22,
    difficulty: 'intermediate',
    totalTime: 240,
    yieldDescription: '8 buns / 8个面包',
    yieldDescriptionZh: '8 buns / 8个面包',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 30, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 20, isFlour: false },
      { id: 'egg', name: 'Egg', nameZh: '鸡蛋', percentage: 10, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 10, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 22, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 0.8, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.8, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the cookie crust dough first (it needs to chill): In a bowl, cream 40g softened butter with 40g sugar until light and fluffy. Beat in 1 egg yolk (reserve the white for the bread dough) and a few drops of vanilla or melon extract (optional). Fold in 100g cake flour (or all-purpose flour) and a pinch of baking powder. Mix just until a soft dough forms — do not overwork. Divide into 8 equal balls (about 25g each), wrap in plastic, and refrigerate for at least 1 hour until firm.',
        instructionZh:
          '先制作饼干酥皮（需要冷藏）：碗中将40克软化黄油与40克糖打发至轻盈蓬松。打入1个蛋黄（蛋白留给面包面团用），可加入几滴香草精或哈密瓜香精（可选）。筛入100克低筋面粉和少许泡打粉。轻轻拌匀成软面团——不要过度搅拌。分成8等份（每份约25克），保鲜膜包好冷藏至少1小时至硬挺。',
        durationMinutes: 20,
        tip: 'The cookie dough must be thoroughly chilled — warm dough will be impossible to roll out and place on the buns without tearing.',
        tipZh: '饼干面团必须充分冷藏——温热面团无法擀开并完整覆盖在面包上，会撕裂。',
      },
      {
        stepNumber: 2,
        instruction:
          'Make the bread dough: Warm water and milk to about 30°C (86°F). In a stand mixer, combine bread flour, sugar, and instant yeast. Add the warm milk-water mixture and the reserved egg white (lightly beaten). Mix on low speed for 2–3 minutes to form a rough dough. Knead on medium speed for 6–7 minutes until smooth. Add softened butter and salt, then continue kneading on medium speed for 6–8 minutes until the dough is very smooth, elastic, and passes the windowpane test. The dough should be slightly tacky and very pliable.',
        instructionZh:
          '制作面包面团：水和牛奶加热至约30°C。厨师机中混合高筋面粉、糖和即发酵母。加入温牛奶水混合液和预留的蛋白（稍微打散）。低速搅拌2–3分钟成团。中速揉6–7分钟至光滑。加入软化黄油和盐，中速继续揉6–8分钟至面团非常光滑有弹性，通过手套膜测试。面团应微黏且非常柔韧。',
        durationMinutes: 18,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk fermentation: Shape dough into a smooth ball, place in a lightly oiled bowl, cover. Ferment at 26–28°C (79–82°F) for 60–75 minutes until doubled. Gently punch down, divide into 8 equal pieces (use a scale), round each into a tight ball. Cover with a damp cloth and bench rest for 15 minutes.',
        instructionZh:
          '基础发酵：面团滚圆，放入抹油碗中盖好。26–28°C发酵60–75分钟至翻倍。轻压排气，分割成8等份（用秤），每份紧实滚圆。湿布盖好松弛15分钟。',
        durationMinutes: 85,
      },
      {
        stepNumber: 4,
        instruction:
          'Meanwhile, prepare the cookie crusts: Remove one chilled cookie dough ball at a time from the refrigerator. Place between two sheets of plastic wrap and roll into a thin circle about 10–12 cm (4–5 inches) in diameter — it should be large enough to drape over the top half of a bun. Keep the remaining balls refrigerated. Using a bench scraper or the back of a knife, score a crosshatch (diamond) pattern into each cookie disc — do not cut all the way through.',
        instructionZh:
          '同时准备饼干酥皮：一次从冰箱取出一份冷藏的饼干面团球。放在两张保鲜膜之间，擀成直径约10–12厘米的薄圆片——应足够大以覆盖面包的上半部。其余面团球保持冷藏。用刮板或刀背在每片饼干圆片上压出菱格花纹——不要完全切断。',
        durationMinutes: 15,
      },
      {
        stepNumber: 5,
        instruction:
          'Assemble the melon pan: Take a bench-rested bread dough ball and reshape it into a tight round if needed. Drape a cookie crust disc over the top of the bun, gently pressing the edges to adhere around the sides — the crust should cover the top and upper sides but not the very bottom. Roll the bun in a small dish of granulated sugar, coating the cookie crust evenly. The sugar will caramelize during baking, creating the signature crackly surface. Place seam-side down on a parchment-lined baking sheet. Repeat for all 8 buns, spacing them at least 8 cm (3 inches) apart for expansion.',
        instructionZh:
          '组装菠萝包：将松弛好的面团球重新紧实滚圆。将饼干酥皮圆片覆盖在面包顶部，轻轻将边缘按压在面包侧面——酥皮应覆盖顶部和上半侧面，不包到底部。将面包在砂糖碟中滚一圈，使饼干酥皮均匀沾上糖粒。烘烤时糖粒会焦糖化，形成标志性的酥裂纹理。收口朝下放在铺有烘焙纸的烤盘上。重复做完8个，间距至少8厘米以留膨胀空间。',
        durationMinutes: 20,
        tip: 'The sugar coating is what creates the crackly, crystalline surface — do not skip this step, and use regular granulated sugar (not coarse or powdered).',
        tipZh: '裹糖是产生酥裂纹理的关键步骤——不要省略，使用普通细砂糖（非粗糖或糖粉）。',
      },
      {
        stepNumber: 6,
        instruction:
          'Final proof and bake: Cover the assembled buns loosely with oiled plastic wrap — be careful not to disturb the cookie crusts. Proof at 28–30°C (82–86°F) for 50–65 minutes. The buns will expand, causing the cookie crust to crack along the score lines — this is exactly what you want. The crust should break into the distinctive diamond pattern. Preheat oven to 175°C (350°F). Bake for 16–18 minutes until the cookie crust is golden brown and crisp. The bread portion should remain pale and soft. Cool on a wire rack for at least 20 minutes — the crust will crisp up further as it cools. Best eaten the same day while the crust is still crunchy.',
        instructionZh:
          '最终发酵和烘烤：抹油保鲜膜松松覆盖组装好的面包——小心不要碰到饼干酥皮。28–30°C发酵50–65分钟。面包膨胀会将饼干酥皮沿刻痕撑开——这正是我们想要的效果。酥皮应裂成标志性的菱格图案。预热烤箱至175°C。烘烤16–18分钟至饼干酥皮金黄酥脆。面包部分应保持浅色柔软。晾架上冷却至少20分钟——冷却后酥皮会变得更脆。最好当天食用，享受酥脆的表皮。',
        durationMinutes: 80,
        tip: 'Melon pan is at its peak within 4 hours of baking — the cookie crust gradually softens as it absorbs moisture from the bread. For day-old melon pan, refresh in a 150°C oven for 5 minutes to re-crisp the crust.',
        tipZh: '菠萝包出炉4小时内风味最佳——饼干酥皮会逐渐吸收面包中的水分而变软。隔夜的菠萝包用150°C烤箱回温5分钟即可恢复酥脆。',
      },
    ],
    tips: [
      'The larger the sugar crystals, the more dramatic the crackle effect. Regular granulated sugar is ideal — avoid superfine caster sugar.',
      'If the cookie crust tears during assembly, press it back together gently with your fingers — it will heal during proofing.',
      'For chocolate melon pan, replace 15% of the cookie crust flour with cocoa powder and sprinkle chocolate chips on the bread dough before covering.',
    ],
    tipsZh: [
      '糖粒越大，酥裂效果越明显。普通细砂糖是最佳选择——避免使用超细的糖粉。',
      '如果组装时饼干酥皮撕裂，用手指轻轻按合——发酵时它会自行愈合。',
      '巧克力菠萝包变体：将饼干酥皮中15%的面粉换成可可粉，覆盖酥皮前在面包面团上撒些巧克力豆。',
    ],
  },

  // ═══════════════════════════════════════════
  // 3. Cinnamon Rolls — 肉桂卷
  // ═══════════════════════════════════════════
  {
    id: 'cinnamon-rolls',
    name: 'Cinnamon Rolls',
    nameZh: '肉桂卷',
    category: RC.SWEET_BREAD,
    description:
      'The ultimate comfort bake — soft, pillowy spirals of enriched sweet dough swirled with buttery cinnamon-brown sugar filling, baked until golden and draped in tangy cream cheese frosting. These American bakery classics fill the kitchen with the most irresistible aroma and are worth every minute of effort.',
    descriptionZh:
      '治愈系烘焙的终极之作——柔软蓬松的甜面包螺旋卷，包裹着黄油肉桂红糖馅，烤至金黄后淋上微酸的奶油芝士糖霜。这款经典的美式面包带来满屋无法抗拒的香气，每一分钟的努力都值得。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 63,
    fatPercentage: 15,
    sugarPercentage: 25,
    difficulty: 'intermediate',
    totalTime: 210,
    yieldDescription: '12 rolls / 12个卷',
    yieldDescriptionZh: '12 rolls / 12个卷',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 45, isFlour: false },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 10, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter (dough)', nameZh: '无盐黄油（面团用）', percentage: 15, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 15, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.5, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 1, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the dough: Warm the milk and water together to about 35°C (95°F). Stir in 1 tablespoon of the sugar and sprinkle the instant yeast on top. Let stand for 5–8 minutes until foamy. In a stand mixer bowl, combine bread flour, the remaining sugar, and salt. Add the yeast mixture and mix with the dough hook on low speed for 2 minutes. Add the softened butter in pieces. Knead on medium speed for 8–10 minutes until the dough is very smooth, supple, and passes the windowpane test. The dough should be soft and slightly tacky. Shape into a ball, place in an oiled bowl, cover, and ferment at 26–28°C (79–82°F) for 60–75 minutes until doubled.',
        instructionZh:
          '制作面团：牛奶和水一起加热至约35°C。搅拌入1汤匙糖，表面撒上即发酵母。静置5–8分钟至起泡。厨师机搅拌碗中混合高筋面粉、剩余糖和盐。加入酵母液，面团勾低速搅拌2分钟。分次加入软化黄油。中速揉8–10分钟至面团非常光滑柔韧，通过手套膜测试。面团应柔软微黏。滚圆，放入抹油碗中盖好，26–28°C发酵60–75分钟至翻倍。',
        durationMinutes: 90,
      },
      {
        stepNumber: 2,
        instruction:
          'Prepare the cinnamon filling: In a medium bowl, combine 10% baker\'s percentage softened butter (about 50g at 500g flour), 15% packed brown sugar (75g), and 3% ground cinnamon (15g). Mix into a smooth, spreadable paste. For extra depth, add a pinch of freshly grated nutmeg and a tiny pinch of salt. The filling should be at room temperature and easily spreadable — if too firm, warm gently for a few seconds.',
        instructionZh:
          '准备肉桂馅料：中碗中混合10%面包百分比软化黄油（以500克面粉计约50克）、15%红糖（75克）和3%肉桂粉（15克）。搅拌成顺滑可涂抹的膏状。想要更丰富的层次，加入少许现磨肉豆蔻和微量盐。馅料应为室温、容易涂抹的状态——如果太硬，稍微加热几秒。',
        durationMinutes: 5,
        tip: 'Using soft room-temperature butter for the filling ensures it spreads evenly without tearing the delicate dough.',
        tipZh: '馅料用室温软化黄油可以均匀涂抹而不扯破娇嫩的面团。',
      },
      {
        stepNumber: 3,
        instruction:
          'Shape the rolls: Punch down the fermented dough and turn onto a lightly floured surface. Roll into a rectangle about 40 x 55 cm (16 x 22 inches) and about 6 mm (1/4 inch) thick — aim for even thickness throughout. Spread the cinnamon filling evenly over the entire surface, leaving a 2 cm (1 inch) border along one long edge clean (for sealing). Starting from the opposite long edge, roll the dough tightly into a log, keeping even tension. Pinch the clean edge to seal the log. Position the log seam-side down.',
        instructionZh:
          '整形：发酵好的面团排气，倒在撒薄粉的台面上。擀成约40 x 55厘米的长方形，厚约6毫米——尽量保持厚度均匀。将肉桂馅料均匀涂抹在整个表面，其中一条长边留2厘米空白（用于封口）。从另一条长边开始，将面团紧实卷成圆柱，保持均匀张力。将空白边缘捏紧封口。接缝朝下放置。',
        durationMinutes: 15,
        tip: 'Roll tightly but without stretching the dough — stretching will cause the center rolls to pop up during baking.',
        tipZh: '卷的时候要紧实但不要拉伸面团——拉伸会导致烘烤时中间卷突起来。',
      },
      {
        stepNumber: 4,
        instruction:
          'Cut the rolls: Using unflavored dental floss, a sharp serrated knife, or a bench scraper, cut the log into 12 equal pieces (about 4–5 cm / 1.5–2 inches each). Dental floss gives the cleanest cut: slide a long piece under the log, cross the ends above, and pull through. Arrange the rolls cut-side up in a buttered 23 x 33 cm (9 x 13 inch) baking pan, leaving small gaps between each for expansion — 3 rows of 4 is a perfect fit. Cover loosely with oiled plastic wrap.',
        instructionZh:
          '切割面卷：用无蜡牙线、锯齿刀或刮板将面卷切成12等份（每份约4–5厘米）。牙线切割最干净：将长段牙线滑入面卷下方，两端在上方交叉拉紧切断。面卷切面朝上排列在抹油的23 x 33厘米烤盘中，每卷之间留小缝隙——3行4列是最佳排列。抹油保鲜膜松松覆盖。',
        durationMinutes: 10,
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof: Proof at 28–30°C (82–86°F) for 45–60 minutes until the rolls have nearly doubled and are touching each other — they should look puffy and fill the pan. Towards the end of proofing, preheat the oven to 175°C (350°F).',
        instructionZh:
          '最终发酵：28–30°C发酵45–60分钟，至面卷接近翻倍并互相接触——应看起来蓬松并填满烤盘。发酵快结束时预热烤箱至175°C。',
        durationMinutes: 50,
      },
      {
        stepNumber: 6,
        instruction:
          'Bake and frost: Bake the proofed rolls for 22–26 minutes until golden brown on top and the internal temperature in the center roll reaches 88–90°C (190–194°F). The filling will bubble up slightly — this is normal and desirable. While the rolls bake, make the cream cheese frosting: beat 60g softened cream cheese with 30g softened butter until smooth. Mix in 80g powdered sugar and 1/2 teaspoon vanilla extract. Add milk 1 teaspoon at a time until the frosting is thick but pourable. When the rolls come out of the oven, let them cool for 5–8 minutes, then spread or drizzle the frosting generously over the warm rolls. The residual heat will melt the frosting slightly, allowing it to seep into the crevices. Serve warm.',
        instructionZh:
          '烘烤和淋糖霜：发酵好的面卷烘烤22–26分钟至表面金黄，中间卷的中心温度达88–90°C。馅料会微微冒泡溢出——这是正常且理想的现象。烘烤期间制作奶油芝士糖霜：60克软化奶油芝士加30克软化黄油打至顺滑。混入80克糖粉和1/2茶匙香草精。一茶匙一茶匙地加入牛奶，搅拌至浓稠但可流动的状态。面卷出炉后冷却5–8分钟，然后大量涂抹或淋上糖霜。面卷的余温会使糖霜微微融化，渗入面卷的缝隙中。趁热享用。',
        durationMinutes: 35,
        tip: 'Frost the rolls while they are still warm but not piping hot — if too hot, the frosting will completely melt into a puddle; if fully cold, it won\'t seep into the rolls.',
        tipZh: '趁面卷还温热时淋糖霜但不能太烫——太烫糖霜会完全融化成水；彻底冷了又无法渗入面卷中。',
      },
    ],
    tips: [
      'For overnight cinnamon rolls: after placing the cut rolls in the pan, cover tightly and refrigerate (up to 16 hours). The next morning, let them come to room temperature and proof for about 60–90 minutes before baking. Fresh cinnamon rolls for breakfast with minimal morning effort.',
      'Cinnamon filling too runny? Add a tablespoon of flour to the filling mixture — it helps absorb moisture and prevents the filling from leaking out during baking.',
      'The cream cheese frosting should be tangy, not cloying — use full-fat block cream cheese (not spreadable) for the best texture and flavor.',
      'Leftover rolls reheat beautifully: microwave individual rolls for 20–30 seconds, or cover the pan with foil and warm in a 150°C oven for 10 minutes.',
    ],
    tipsZh: [
      '隔夜肉桂卷做法：切好的面卷排入烤盘后盖紧冷藏（最长16小时）。第二天早上回温后发酵约60–90分钟再烘烤。早晨不费吹灰之力就能吃上新鲜肉桂卷。',
      '肉桂馅太稀？在馅料中加一汤匙面粉——有助于吸收水分，防止烘烤时馅料流出。',
      '奶油芝士糖霜应微酸清爽而非甜腻——使用块状全脂奶油芝士（非涂抹型）可获得最佳质地和风味。',
      '剩下的肉桂卷回热效果极佳：单个微波20–30秒，或整盘盖锡纸150°C烤箱回温10分钟。',
    ],
  },

  // ═══════════════════════════════════════════
  // 4. Belgian Liège Waffle — 比利时列日华夫
  // ═══════════════════════════════════════════
  {
    id: 'liege-waffle',
    name: 'Belgian Liège Waffle',
    nameZh: '比利时列日华夫',
    category: RC.SWEET_BREAD,
    description:
      'Not your ordinary waffle — the Liège waffle is a rich, buttery yeasted dough studded with pearl sugar that caramelizes into crunchy, golden pockets of sweetness when pressed in a hot iron. Dense, chewy, and utterly addictive, these are street-food royalty in Belgium, eaten out of hand with no toppings needed.',
    descriptionZh:
      '绝非普通华夫——列日华夫是一种浓郁黄油的发酵面团，布满珍珠糖粒，在热华夫机中压烤时焦糖化成一颗颗酥脆金黄的甜蜜小炸弹。质地密实有嚼劲，令人欲罢不能。在比利时，这是街头小吃的王者，无需任何配料直接手拿着吃。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 42,
    fatPercentage: 20,
    sugarPercentage: 30,
    difficulty: 'intermediate',
    totalTime: 180,
    yieldDescription: '8 waffles / 8个华夫',
    yieldDescriptionZh: '8 waffles / 8个华夫',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'eggs', name: 'Eggs', nameZh: '鸡蛋', percentage: 25, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 20, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 15, isFlour: false },
      { id: 'pearl-sugar', name: 'Pearl Sugar', nameZh: '珍珠糖', percentage: 30, isFlour: false },
      { id: 'honey', name: 'Honey', nameZh: '蜂蜜', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 1.5, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Activate the yeast: Warm the milk to about 35°C (95°F) — lukewarm, not hot. Add the honey and stir to dissolve. Sprinkle the instant yeast over the surface and let stand for 8–10 minutes until thick and foamy. The honey provides both flavor and food for the yeast, ensuring a vigorous fermentation despite the rich dough.',
        instructionZh:
          '激活酵母：牛奶加热至约35°C——微温不烫。加入蜂蜜搅拌溶解。表面撒上即发酵母，静置8–10分钟至浓稠起泡。蜂蜜既提供风味又为酵母提供养分，确保即使在浓郁面团中也能活跃发酵。',
        durationMinutes: 12,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix the dough: In a stand mixer bowl, combine bread flour and salt. Add the lightly beaten eggs (at room temperature) and the yeast-milk-honey mixture. Mix with the dough hook on low speed for 2 minutes until a rough, shaggy dough forms. Increase to medium speed and knead for 4–5 minutes until the dough is smooth and elastic. With the mixer running on low, add the softened butter in 3–4 additions, allowing each to absorb before adding the next. Once all butter is incorporated, knead on medium speed for 3–4 minutes more. The dough will be soft, rich, and slightly sticky — this is a low-hydration enriched dough that should feel dense but pliable.',
        instructionZh:
          '搅拌面团：厨师机搅拌碗中混合高筋面粉和盐。加入轻微打散的室温鸡蛋和酵母牛奶蜂蜜混合液。面团勾低速搅拌2分钟至形成粗糙面团。转中速揉4–5分钟至面团光滑有弹性。低速运转，分3–4次加入软化黄油，每次吸收后再加下一次。所有黄油吸收后，中速继续揉3–4分钟。面团应柔软、浓郁、微黏——这是一款低水量的软质面团，手感密实但柔韧。',
        durationMinutes: 16,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk fermentation: Shape the dough into a rough ball, place in a lightly oiled bowl, cover with plastic wrap. Ferment at 24–26°C (75–79°F) for 75–90 minutes until doubled in volume. The dough is heavy with butter and eggs, so the rise may be less dramatic than lean doughs — look for a noticeably puffy, aerated texture. Punch down gently and turn onto a lightly floured surface.',
        instructionZh:
          '基础发酵：面团大致滚圆，放入抹油碗中，保鲜膜覆盖。24–26°C发酵75–90分钟至体积翻倍。由于黄油和鸡蛋含量高，面团较重，膨胀不会像瘦面团那样明显——观察面团是否明显蓬松、充满气泡。轻压排气，倒在撒薄粉的台面上。',
        durationMinutes: 85,
        tip: 'The dough will feel heavy and dense after bulk fermentation — this is correct for Liège waffle dough. It is not supposed to be light and airy like bread dough.',
        tipZh: '基础发酵后面团手感沉重密实——这是列日华夫面团的正确状态。它不应该像面包面团那样轻盈。',
      },
      {
        stepNumber: 4,
        instruction:
          'Incorporate the pearl sugar: Gently pat the dough into a rough rectangle. Sprinkle about one-third of the pearl sugar over the surface. Fold the dough over itself and gently knead 2–3 times to distribute the sugar. Repeat twice more with the remaining pearl sugar until the sugar is evenly dispersed throughout the dough. Do not overwork — you want the pearl sugar to remain intact as distinct pieces, not dissolve into the dough. Divide into 8 equal pieces (about 100–110g each), round into balls, and place on a parchment-lined tray. Cover with a cloth and let rest for 15–20 minutes.',
        instructionZh:
          '加入珍珠糖：将面团轻轻拍成大致长方形。表面撒上约三分之一的珍珠糖。将面团折叠起来，轻轻揉2–3下使糖分布。重复两次用完所有珍珠糖，至糖粒均匀分散在面团中。不要过度揉面——要保持珍珠糖作为独立完整的颗粒存在，而非溶入面团中。分成8等份（每份约100–110克），滚圆，放在铺有烘焙纸的托盘上。盖布松弛15–20分钟。',
        durationMinutes: 25,
        tip: 'Do NOT substitute regular sugar for pearl sugar — it will dissolve and burn. Belgian pearl sugar (or Swedish pearl sugar) is specifically made to withstand high heat without melting completely.',
        tipZh: '绝对不能用普通砂糖替代珍珠糖——它会溶解烧焦。比利时珍珠糖（或瑞典珍珠糖）专为承受高温而不完全融化而制。',
      },
      {
        stepNumber: 5,
        instruction:
          'Proof and cook: Cover the dough balls and let proof at 24–26°C (75–79°F) for 30–40 minutes until puffy. Preheat a Belgian waffle iron to medium-high heat (or electric waffle maker to setting 4 out of 5). The iron must be HOT — the pearl sugar needs intense heat to caramelize instantly. If your iron has a temperature setting, aim for 190–200°C (375–390°F). Place a dough ball in the center of the hot iron (no need to grease if your iron is well-seasoned — the butter in the dough provides enough fat). Close the lid firmly and cook for 3–5 minutes until deeply golden brown with dark caramelized sugar spots. The waffle should release easily when the sugar has properly caramelized. Carefully remove (the melted sugar is extremely hot) and place on a cooling rack — do not stack, or they will stick together. Repeat with remaining dough balls. Let cool for 2–3 minutes before eating. Best enjoyed warm, straight from the iron.',
        instructionZh:
          '发酵和烤制：盖好面团球，24–26°C发酵30–40分钟至蓬松。预热比利时华夫饼机至中高温（电动华夫饼机调至5档中的4档）。烤盘必须非常热——珍珠糖需要高温才能瞬间焦糖化。如果烤盘可调温，设置为190–200°C。将面团球放在热烤盘中央（保养好的烤盘无需抹油——面团中的黄油已提供足够油脂）。用力合上盖子，烤3–5分钟至深金黄色并带有深色焦糖斑点。糖充分焦糖化后华夫应能轻松脱离烤盘。小心取出（融化的糖极烫），放在晾架上——不要叠放，否则会粘在一起。重复烤完所有面团球。食用前冷却2–3分钟。趁热享用，出炉即食风味最佳。',
        durationMinutes: 50,
        tip: 'The first waffle is often a test — adjust the heat and timing based on the result. The ideal Liège waffle has a deeply caramelized exterior with crunchy sugar pockets and a soft, chewy interior.',
        tipZh: '第一个华夫通常是试验品——根据成品效果调整火候和时间。理想的列日华夫外表深度焦糖化、布满酥脆糖粒，内部柔软有嚼劲。',
      },
    ],
    tips: [
      'Authentic Belgian pearl sugar is irreplaceable for this recipe — it is made from compressed beet sugar that caramelizes without fully melting. Look for brands like Lars Own or Tiense Suiker. In a pinch, crush sugar cubes into pea-sized chunks as a substitute.',
      'Liège waffle dough can be made the night before: after incorporating the pearl sugar, cover and refrigerate overnight. The next day, divide, shape, proof for 45–60 minutes at room temperature, then cook. The overnight rest deepens the flavor considerably.',
      'Never use a regular (Brussels-style) waffle iron — Liège waffles require the deeper grid pattern and higher heat of a Belgian waffle iron specifically designed for these dense dough waffles.',
      'Clean your waffle iron while it is still warm — burnt sugar hardens like cement when cool. A damp cloth or paper towel on the hot iron lifts the sugar residue easily.',
    ],
    tipsZh: [
      '正宗比利时珍珠糖是这款食谱不可替代的材料——由压制的甜菜糖制成，能焦糖化但不完全融化。可寻找Lars Own或Tiense Suiker等品牌。紧急替代方案：将方糖敲碎成豌豆大小的碎块。',
      '列日华夫面团可提前一晚制作：加入珍珠糖后盖好冷藏过夜。第二天分割整形，室温发酵45–60分钟后烤制。隔夜静置可大幅加深风味。',
      '不要使用普通（布鲁塞尔式）华夫饼机——列日华夫需要更深格纹、更高温度的比利时式华夫饼机，专为这种密实面团华夫设计。',
      '趁华夫饼机还温热时清洁——焦糖冷却后会像水泥一样硬化。趁热用湿布或厨房纸巾擦拭即可轻松去除糖渍。',
    ],
  },
];
