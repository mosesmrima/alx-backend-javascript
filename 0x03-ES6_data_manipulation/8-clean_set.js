export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') return '';
  let finalString = '';
  for (const item of set) {
    if (item !== undefined && item.startsWith(startString)) {
      const noStart = item.replace(startString, '');
      finalString = finalString.concat(noStart, '-');
    }
  }
  return finalString.slice(0, -1);
}
