let items = [
    {
      id: 1,
      name: "Pantalon",
      photo: "img/imagen4.jpg",
      price: 12.99,
    },
    {
      id: 2,
      name: "Chaqueta",
      photo: "img/imagen1.jpg",
      price: 15.99,
    },
    {
       id: 3,
       name: "Camisa",
      photo: "img/imagen3.jpg",
      price: 15.99,
      },
    {
      id: 4,
       name: "Chamarra",
       photo: "img/imagen2.jpg",
       price: 15.99,
      },
      {
        id: 5,
        name: "Camiseta",
        photo: "img/imagen5.jpg",
        price: 15.99,
      },
      {
        id: 6,
        name: "Mangas larga",
        photo: "img/imagen6.jpg",
        price: 15.99,
      },

      {
        id: 7,
        name: "Camisa negra",
        photo: "img/imagen7.jpg",
        price: 15.99,
      },
  ];

  let items2 = [
    {
      id: 1,
      name: "Pantalon",
      photo: "img/imagenMujer1.jpg",
      price: 12.99,
    },
    {
      id: 2,
      name: "Chaqueta",
      photo: "img/imagenMujer2.jpg",
      price: 15.99,
    },
    {
       id: 3,
       name: "Camisa",
      photo: "img/imagenMujer3.jpg",
      price: 15.99,
      },
    {
      id: 4,
       name: "Chamarra",
       photo: "img/imagenMujer4.jpg",
       price: 15.99,
      },
      {
        id: 5,
        name: "Camiseta",
        photo: "img/imagenMujer5.jpg",
        price: 15.99,
      },
      {
        id: 6,
        name: "Mangas larga",
        photo: "img/imagenMujer6.jpg",
        price: 15.99,
      },

      {
        id: 7,
        name: "Camisa negra",
        photo: "img/imagenMujer7.jpg",
        price: 15.99,
      },
      {
        id: 8,
        name: "Camisa esa misma",
        photo: "img/imagenMujer8.jpg",
        price: 15.99,
      },
  ];
  
  function getItem(req, res) {
    let respuesta;
    if (items.length > 0) {
      respuesta = items;
    } else {
      respuesta = { error: true, codigo: 200, mensaje: "La lista de ítems está vacía" };
    }
    res.send(respuesta);
  }

  function getItem2(req, res) {
    let respuesta;
    if (items2.length > 0) {
      respuesta = items2;
    } else {
      respuesta = { error: true, codigo: 200, mensaje: "La lista de ítems está vacía" };
    }
    res.send(respuesta);
  }
  
  module.exports = { getItem, getItem2 };
  
    

        