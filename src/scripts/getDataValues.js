
export default function getDataValues(data, key) {
  let list = [];

  for (let i = 0; i < data.length; i++) {
    list.push(data[i][key]);
  }

  return list;
}
