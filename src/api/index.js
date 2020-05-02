import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

export const getStatSummary = async (country) => {
   try {
      if (country) {
         const {
            data: {
               Countries
            }
         } = await axios.get(url);
         //return country s
         const countriesStat = Countries.filter(({
            Country
         }) => (Country === country ? Country : null));
         return countriesStat[0];

      } else {
         const {
            data:{
               Global
            }
         } = await axios.get(url);
         //return global stats
         return Global;
      }
   } catch (error) {
      return error.name;
   }
};

const urlCountries = 'https://api.covid19api.com/countries';

export const getCountries = async () => {
   try {
      const {
         data
      } = await axios.get(urlCountries);
      const countries = data.map(({
         Country
      }) => Country);
      //return countries

      return countries;
   } catch (error) {
      return error.name;
   }
};


