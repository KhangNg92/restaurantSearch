import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer hMRJwI3_QRA46umKHAMFP-2DSs7FbeL2UY7x30iXmcOBuW_ji6IRAzGYEb81IhhLpj1sHoKGTPpcswO6oLGZZNVcOnGfA-y7A_BcsUYKL7ULTD64Mo3pSqLBfcxQXXYx',
  },
});
