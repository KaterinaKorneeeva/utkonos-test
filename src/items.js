
export const itemsByCode = (searchCode, items = []) => {
  let itemsList = [];
  items.map((item)=>{
    itemsList.push({
          id: item.id,
          code: highlight(item.code, searchCode),
      });
  })
  return itemsList
};

const highlight = (code, searchCode) => {
  const tag = 'span';
  let re;
  searchCode.split('').forEach(() => {
    re = new RegExp(searchCode, 'g')
    if (re.test(code)) {
      code = code.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
    }
  })

  return code;
}
