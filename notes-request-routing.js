// Routing pada Hapi tidak dilakukan di dalam request handler seperti cara native,
// melainkan ia memanfaatkan objek route configuration yang disimpan pada method server.route()
// const init = async () => {
//   const server = Hapi.server({
//     port: 3000,
//     host: "localhost",
//   });

//   server.route({
//     method: "GET",
//     path: "/",
//     handler: (request, h) => {
//       return "Hello World!";
//     },
//   });

//   await server.start();
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };

// server.route() selain dapat menerima route configuration, ia juga dapat menerima array dari route configuration.
// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: "localhost",
//   });

//   server.route([
//     {
//       method: "GET",
//       path: "/",
//       handler: (request, h) => {
//         return "Homepage";
//       },
//     },
//     {
//       method: "GET",
//       path: "/about",
//       handler: (request, h) => {
//         return "About Page";
//       },
//     },
//   ]);

//   await server.start();
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };
/* Kami merekomendasikan untuk memisahkan seluruh routes configuration pada berkas JavaScript berbeda. Dengan begitu, 
satu berkas JavaScript hanya memiliki satu fungsi atau tanggung jawab saja (single responsibility principle). */

// Latihan
/* Pada latihan kali kita akan membuat routes configuration dengan ketentuan berikut:

URL: ‘/’
Method: GET
Mengembalikan pesan “Homepage”.
Method: <any> (selain method GET)
Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.

URL: ‘/about’
Method: GET
Mengembalikan pesan “About page”.
Method: <any> (selain method GET)
Mengembalikan pesan “Halaman tidak dapat diakses dengan method tersebut”.

URL: <any> (selain “/’ dan “/about”)
Method: <any>
Mengembalikan pesan “Halaman tidak ditemukan”. 

pada routes.js
Anda bisa lihat beberapa properti method memiliki nilai ‘*’, itu artinya route dapat diakses menggunakan seluruh method 
yang ada pada HTTP. 

Kemudian, nilai ‘/{any*}’ pada route paling akhir berfungsi untuk menangani permintaan masuk pada path yang belum 
Anda tentukan. Ini merupakan salah satu teknik dalam menetapkan routing yang dinamis menggunakan Hapi.

*/
