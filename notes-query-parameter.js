/* Selain path parameter, terdapat cara lain yang sering digunakan dalam mengirimkan data melalui URL, 
yakni dengan query parameter. Data yang dikirim melalui query memiliki format key=value, contohnya:
localhost:5000?name=harry&location=bali Contoh di atas memiliki dua query parameter. 
Yang pertama adalah name=harry dan location=bali. Tanda tanya (?) di sana berfungsi sebagai separator (pemisah) 
antara path dan query parameter. query parameter melalui request.query*/
server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    const { name, location } = request.query;
    return `Hello, ${name} from ${location}`;
  },
});
/* curl -X GET http://localhost:5000/hello/dicoding?lang=id
// output: Hai, dicoding!
curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding! */
