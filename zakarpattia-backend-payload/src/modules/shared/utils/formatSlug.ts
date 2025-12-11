const translitMap: Record<string, string> = {
  'а':'a','б':'b','в':'v','г':'h','ґ':'g','д':'d','е':'e','є':'ye',
  'ж':'zh','з':'z','и':'y','і':'i','ї':'yi','й':'y','к':'k','л':'l',
  'м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u',
  'ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ь':'','ю':'yu','я':'ya',
};

export function formatSlug(text: string): string {
  if (!text) return '';

  const lowerText = text.toLowerCase();

  const transliterated = lowerText.replace(/./g, char => translitMap[char] || char);

  return transliterated
    .trim()
    .replace(/[^\w\s-]+/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, ''); 
}