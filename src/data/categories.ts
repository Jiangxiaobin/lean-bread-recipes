import { type CategoryInfo, RecipeCategory as RC } from '../types/recipe';

export const categories: CategoryInfo[] = [
  {
    id: RC.LEAN_BREAD,
    name: 'Lean Breads',
    nameZh: '硬质瘦面包',
    color: 'var(--color-lean-bread)',
    description: 'No sugar, no oil — pure flour, water, salt, and fermentation. Sourdough, rye, baguette, ciabatta.',
    descriptionZh: '无糖无油，仅面粉、水、盐与发酵的纯粹面包。酸面包、黑麦、法棍、恰巴塔。',
    icon: '🥖',
    typicalHydration: '62-85%',
  },
  {
    id: RC.ENRICHED_BREAD,
    name: 'Enriched Breads',
    nameZh: '软质面包',
    color: 'var(--color-enriched-bread)',
    description: 'Butter, milk, eggs, and sugar create soft, tender crumb. Toast bread, brioche, milk bread.',
    descriptionZh: '黄油、牛奶、鸡蛋与糖赋予柔软细腻的组织。吐司、布里欧修、牛奶面包。',
    icon: '🍞',
    typicalHydration: '55-75%',
  },
  {
    id: RC.SWEET_BREAD,
    name: 'Sweet Breads',
    nameZh: '甜面包',
    color: 'var(--color-sweet-bread)',
    description: 'Higher sugar and fat content, often with fillings or toppings. Japanese sweet buns, cinnamon rolls.',
    descriptionZh: '糖油含量更高，常带内馅或顶饰。日式甜面包、肉桂卷。',
    icon: '🍩',
    typicalHydration: '42-63%',
  },
  {
    id: RC.LAMINATED_PASTRY,
    name: 'Laminated Pastries',
    nameZh: '酥皮面包',
    color: 'var(--color-laminated-pastry)',
    description: 'Alternating layers of dough and butter, folded to create hundreds of flaky layers.',
    descriptionZh: '面团与黄油交替折叠，形成数百层酥脆薄层。可颂、丹麦酥皮。',
    icon: '🥐',
    typicalHydration: '50-60%',
  },
  {
    id: RC.COOKIES_CRACKERS,
    name: 'Cookies & Crackers',
    nameZh: '饼干与脆饼',
    color: 'var(--color-cookies-crackers)',
    description: 'Crisp, crunchy, or crumbly — from soda crackers to buttery shortbread and biscotti.',
    descriptionZh: '酥脆、松脆或干香——从苏打饼干到黄油酥饼与意式脆饼。',
    icon: '🍪',
  },
  {
    id: RC.PIES_TARTS,
    name: 'Pies & Tarts',
    nameZh: '派与挞',
    color: 'var(--color-pies-tarts)',
    description: 'Butter-rich pastry crusts with sweet or savory fillings. Galette, fruit tart, pâte sucrée.',
    descriptionZh: '黄油丰富的酥皮搭配甜咸馅料。国王饼、水果挞、甜酥挞皮。',
    icon: '🥧',
  },
  {
    id: RC.SEASONAL,
    name: 'Seasonal Specials',
    nameZh: '节日限定',
    color: 'var(--color-seasonal)',
    description: 'Festive bakes tied to holidays and celebrations. Panettone, mooncakes, stollen.',
    descriptionZh: '与节日庆典相关的烘焙珍品。潘娜托尼、月饼、圣诞面包。',
    icon: '🎄',
  },
];

export function getCategoryInfo(category: string): CategoryInfo {
  const info = categories.find((c) => c.id === category);
  if (!info) throw new Error(`Category "${category}" not found`);
  return info;
}
