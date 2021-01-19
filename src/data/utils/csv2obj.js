function csv2Obj(csv) {
  // TODO: Add image filename in the `cols`.
  const cols = ['question', 'important', 'response'];
  const obj = csv.split('\n').map(row => {
    return row.split(',').reduce((item, col, index) => {
      const prop = cols[index];
      switch (prop) {
        case 'question': {
          item[cols[index]] = col; 
          break;
        }
        case 'important': {
          item[cols[index]] = col === 'OUI'; 
          break;
        } 
        case 'response': {
          item[cols[index]] = col === '❤'; 
          break;
        }
      }
      return item;
    }, {})
  });
  return JSON.stringify(obj, undefined, 2);
}
