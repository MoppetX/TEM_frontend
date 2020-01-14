import axios from 'axios';

export const serverPath =
  process.env.REACT_APP_API_URL || 'http://localhost:3000';

export default axios.create({
  // baseURL: "https://randomuser.me/api/",
  // responseType: "json",
  baseURL: serverPath,
  responseType: 'json',
});

// await axios.get(`${serverPath}/user/all`);

// const AXIOS = {
//   user: {
//     GET_ALL: axios.get(`${serverPath}/user/all`),
//   },
//   recipe: {
//     GET_ALL: axios.get(`${serverPath}/recipe/all`),
//   },
// };

//  getDataFromDbUsingFetch = () => {
//     fetch(`${serverPath}/user/all`)
//       .then(data => data.json())
//       .then(res => this.setState({ data: res.data }));
//   };

// // send a POST request
// axios({
//   method: 'post',
//   url: '/login',
//   data: {
//     firstName: 'Finn',
//     lastName: 'Williams'
//   }
// });

// let userData = await API.get('/', {
//           params: {
//             results: 1,
//             inc: 'name,email,picture'
//           }
//         });

// try {
//   const response = await axios.post('http://demo0725191.mockable.io/post_data', { posted_data: 'example' });
//   console.log('👉 Returned data:', response);
// } catch (e) {
//   console.log(`😱 Axios request failed: ${e}`);
// }
