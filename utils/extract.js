import cheerio from 'react-native-cheerio';

const extractCourtData = (html) => {
  const data = cheerio.load(html);

  const mainData = data('table').attr('style' , 'text-align:left;border-collapse:collapse').eq(2);

  const result = []; 

  mainData.find('tr').each((index, element) => {
    const row = [];
    data(element).find('th, td').each((i, el) => {
      row.push(data(el).text().trim());
    });
    result.push({ data: row });
  });
  return result ; 
};

export default extractCourtData;