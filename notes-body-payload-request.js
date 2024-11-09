/* Good News! Ketika menggunakan Hapi, Anda tidak lagi berurusan dengan stream untuk mendapatkan datanya. 
Di balik layar, Hapi secara default akan mengubah payload JSON menjadi objek JavaScript. Dengan begitu, 
Anda tak lagi berurusan dengan JSON.parse()! payload tersebut dapat diakses pada route handler melalui 
properti request.payload*/
server.route({
  method: "POST",
  path: "/login",
  handler: (request, h) => {
    const { username, password } = request.payload;
    return `Welcome ${username}!`;
  },
});
/*  handler menerima payload melalui request.payload. Dalam kasus tersebut, client mengirimkan data 
login dengan struktur: */
// { "username": "harrypotter", "password": "encryptedpassword" }
