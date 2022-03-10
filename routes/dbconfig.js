require('msnodesqlv8')
const config = {
  server: 'LAPTOP-CIG6U35V\\SQLEXPRESS', // update me
   driver:'msnodesqlv8',
   database:'surveyDb',
   options:{
     trustedConnection:true,
    
   }
};

module.exports = config;
