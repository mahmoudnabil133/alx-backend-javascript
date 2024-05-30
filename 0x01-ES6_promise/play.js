// Function to fetch data from an API
// function fetchData(url) {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     });
// }

// // Using the fetchData function
// fetchData('https://api.example.com/data')
//   .then(data => {
//     console.log('Data fetched:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// // Using async/await to fetch data
// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('Data fetched:', data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchData('https://api.example.com/data');

// ----------------------- learn promiss -----------------------------//

// build promiss
const p = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve('yes message success');
  else reject('failed message');
});

// use promiss
p
  .then((msg) => `${msg} hahah`)
  .then((msg) => console.log(`second message ${msg}`))
  .catch((err) => console.log(err));

console.log(1 instanceof Number);
