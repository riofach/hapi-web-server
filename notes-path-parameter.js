/* Untuk melakukan hal tersebut, Twitter dan GitHub menggunakan teknik path parameter. Di Hapi Framework, 
teknik tersebut sangat mudah untuk diterapkan. Cukup dengan membungkus path dengan tanda { }, sebagai contoh: */
server.route({
  method: "GET",
  path: "/users/{username}",
  handler: (request, h) => {
    const { username } = request.params;
    return `Hello, ${username}!`;
  },
});
/* Seperti yang Anda lihat di atas, pada properti path terdapat bagian path yang ditulis {username}. 
Itu berarti, server memberikan bagian teks tersebut untuk client manfaatkan sebagai parameter.  
Nantinya parameter ini akan disimpan sebagai properti pada request.params yang dimiliki handler dengan nama 
sesuai yang Anda tetapkan (username). Sebagai contoh, bila Anda melakukan permintaan ke server dengan alamat 
‘/users/harry’, server akan menanggapi dengan ‘Hello, harry!’. Bila client mengabaikannya dengan melakukan 
permintaan pada alamat ‘/users’, server akan mengalami eror. Caranya dengan menambahkan tanda “?” di akhir 
nama parameter-nya.*/

server.route({
  method: "GET",
  path: "/users/{username?}",
  handler: (request, h) => {
    const { username = "stranger" } = request.params;
    return `Hello, ${username}!`;
  },
});
/* Sekarang bila client meminta pada alamat ‘/users/dicoding’, server menanggapi dengan ‘Hello, dicoding!’; 
dan bila client meminta hanya pada path ‘/users’, server akan menanggapinya dengan ‘Hello, stranger!’. */

/* curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!
curl -X GET http://localhost:5000/hello
// output: Hello, stranger! */
