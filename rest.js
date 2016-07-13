var restify = require("restify");
var server = restify.createServer();
var errors = require('restify-errors'); // check https://github.com/restify/errors

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.get('/', respond);
server.get('/api/promotions', respondError401);
server.get('/api/notifications', respondError401);
server.get('/api/product/:id', respondProduct);

var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});


function respond(req, res, next) {
    res.send('Welcome to your API test!');
}

function respondError401(req, res, next) {
  return next(new errors.UnauthorizedError('No token!'));
}

function respondPromotions(req,res,next) {
  var promotionsRes = [
    {
      "code": "1234OF",
      "endDate": "2017-06-01T23:00:00.000",
      "description": "30% de Descuento en TV LED Samsung 55''",
      "goal":"catalogo",
      "type": "catalogo",
      "priority": 100,
      "price": 240.34,
      "currency": "AR",
      "monthlySelledCount": 23,
      "currentDateSelledCount": 3,
      "hotPromotion": true,
      "deals": [
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "todos"
            },
            {
              "type": "contexto",
              "description": "Resistencia - Santiago"
            }
          ],
          "actions": [
            {
              "type": "plan de financiacion",
              "description": "24 cuotas de 73.90"
            },
            {
              "type": "precio fijo ",
              "description": "$1900"
            }
          ]
        },
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "todos"
            }
          ],
          "actions": [
            {
              "type": "precio fijo ",
              "description": "$1900"
            }
          ]
        }
      ]
    },
    {
      "code": "4444OF",
      "endDate": "2017-06-02T23:00:00.000",
      "description": "12 Cuotas sin interes en TV LED Samsung 55''",
      "goal":"megadia",
      "type": "megadia",
      "priority": 98,
      "monthlySelledCount": 12,
      "currentDateSelledCount": 5,
      "hotPromotion": false,
      "deals": [
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "todos"
            },
            {
              "type": "contexto",
              "description": "Resistencia - Santiago"
            }
          ],
          "actions": [
            {
              "type": "plan de financiacion",
              "description": "24 cuotas de 73.90"
            },
            {
              "type": "precio fijo ",
              "description": "$1900"
            }
          ]
        },
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "todos"
            }
          ],
          "actions": [
            {
              "type": "precio fijo ",
              "description": "$1900"
            }
          ]
        }
      ]
    },
    {
      "code": "1234OG",
      "endDate": "2016-12-15T23:00:00.000",
      "description": "30% de Descuento en Heladeras",
      "goal":"tarjeta",
      "type": "catalogo",
      "priority": 100,
      "price": 5000.34,
      "currency": "AR",
      "monthlySelledCount": 23,
      "currentDateSelledCount": 3,
      "hotPromotion": true,
      "deals": [
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "heladeras"
            }
          ]
        },
        {
          "restrictions": [
            {
              "type": "producto",
              "description": "heladeras"
            }
          ],
          "actions": [
            {
              "type": "precio fijo ",
              "description": "$1900"
            }
          ]
        }
      ]
    }
  ];

  res.send(promotionsRes);
}

function respondNotifications(req,res,next) {
  var notificationsRes = [
    {
      "code": "00001",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Ventas",
      "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "code": "00002",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Administración",
      "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "code": "00003",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Global",
      "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "code": "00004",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Varios",
      "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  res.send(notificationsRes);
}

function respondProduct(req, res, next){
  var id = req.params.id;

  var products = [
    {
    "productCode": 1,
    "category": "CLI",
    "subCategory": "AIR",
    "typeCode": "POR",
    "brand": "ATMA",
    "description": "AIRE PORT.3,0KWFS ATP30C12 CR ",
    "largeDescritpion": "AIRE PORT.3,0KWFS ATP30C12 CR ",
    "origin": null,
    "saleCashPrice": 3609.0,
    "saleListPrice": 3609.0,
    "author": "",
    "discontinuity": 3,
    "stock": [
      {
        "store": 404,
        "level": 23,
        "group": "A"
      },
      {
        "store": 494,
        "level": 10,
        "group": "B"
      }
    ],
    "productFeatures":[
      {
        "label": "Descripcion corta",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Descripcion larga",
        "value": "Diseño Compacto. Ultra Silencioso. Filtro totalmente Lavable. Display LCD. Temporizador 12hs. Novedoso accesorio de instalación manual. 3 Modos Operación: Refrigeración, Deshumidificación y Ventilación. Gas R-410a."
      },
      {
        "label": "Jerarquia",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Cubicaje",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Precio costo",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Precio venta",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Indice ABC",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Imagen",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Origen",
        "value": "CHINA"
      },
      {
        "label": "Garantía",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Alto",
        "value": "77.5  Cm"
      },
      {
        "label": "Profundidad",
        "value": "38.2  Cm"
      },
      {
        "label": "Ancho",
        "value": "46.5  Cm"
      },
      {
        "label": "Peso",
        "value": "31  Kg"
      },
      {
        "label": "Producto",
        "value": "AIRE ACONDICIONADO - PORTATIL"
      },
      {
        "label": "Modelo",
        "value": "ATP30C12"
      },
      {
        "label": "Tipo de gas refrigerante",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Display",
        "value": "Si"
      },
      {
        "label": "Timer",
        "value": "Si"
      },
      {
        "label": "Color",
        "value": "Blanco"
      },
      {
        "label": "Frigorias",
        "value": "2580  Fg/h"
      },
      {
        "label": "Potencia",
        "value": "1150  W"
      },
      {
        "label": "Eficiencia energética",
        "value": "A"
      },
      {
        "label": "Control remoto",
        "value": "SSDD"
      },
      {
        "label": "Tipo",
        "value": "FRIO SOLO"
      }
    ],
    "extendedWarranty": true,
    "promotions":[
      {
        "code": "1234OF",
        "endDate": "2017-06-01T23:00:00.000",
        "description": "30% de Descuento en TV LED Samsung 55''",
        "type": "catalogo",
        "goal":"catalogo",
        "priority": 100,
        "price": 240.34,
        "currency": "AR",
        "monthlySalesCount": 23,
        "currentDateSalesCount": 3,
        "hotPromotion": true,
        "deals": [
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              },
              {
                "type": "contexto",
                "descrition": "Resistencia - Santiago"
              }
            ],
            "actions": [
              {
                "type": "plan de financiacion",
                "descrition": "24 cuotas de 73.90"
              },
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          },
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              }
            ],
            "actions": [
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          }
        ]

      },
      {
        "code": "4444OF",
        "endDate": "2017-06-01T23:00:00.000",
        "description": "12 Cuotas sin interes en TV LED Samsung 55''",
        "type": "megadia",
        "goal":"megadia",
        "priority": 98,
        "monthlySalesCount": 12,
        "currentDateSalesCount": 5,
        "hotPromotion": true,
        "deals": [
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              },
              {
                "type": "contexto",
                "descrition": "Resistencia - Santiago"
              }
            ],
            "actions": [
              {
                "type": "plan de financiacion",
                "descrition": "24 cuotas de 73.90"
              },
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          },
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              }
            ],
            "actions": [
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          }
        ]

      }
    ]
  },
  {
    "productCode": 9780465050659,
    "category": "CLI",
    "subCategory": "AIR",
    "typeCode": "POR",
    "brand": "ATMA",
    "description": "AIRE PORT.3,0KWFS ATP30C12 CR ",
    "largeDescritpion": "AIRE PORT.3,0KWFS ATP30C12 CR ",
    "origin": null,
    "saleCashPrice": 3609.0,
    "saleListPrice": 3609.0,
    "author": "",
    "discontinuity": 3,
    "stock": [
      {
        "store": 404,
        "level": 23,
        "group": "A"
      },
      {
        "store": 494,
        "level": 10,
        "group": "B"
      }
    ],
    "productFeatures":[
      {
        "label": "Descripcion corta",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Descripcion larga",
        "value": "Diseño Compacto. Ultra Silencioso. Filtro totalmente Lavable. Display LCD. Temporizador 12hs. Novedoso accesorio de instalación manual. 3 Modos Operación: Refrigeración, Deshumidificación y Ventilación. Gas R-410a."
      },
      {
        "label": "Jerarquia",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Cubicaje",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Precio costo",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Precio venta",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Indice ABC",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Imagen",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Origen",
        "value": "CHINA"
      },
      {
        "label": "Garantía",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Alto",
        "value": "77.5  Cm"
      },
      {
        "label": "Profundidad",
        "value": "38.2  Cm"
      },
      {
        "label": "Ancho",
        "value": "46.5  Cm"
      },
      {
        "label": "Peso",
        "value": "31  Kg"
      },
      {
        "label": "Producto",
        "value": "AIRE ACONDICIONADO - PORTATIL"
      },
      {
        "label": "Modelo",
        "value": "ATP30C12"
      },
      {
        "label": "Tipo de gas refrigerante",
        "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        "label": "Display",
        "value": "Si"
      },
      {
        "label": "Timer",
        "value": "Si"
      },
      {
        "label": "Color",
        "value": "Blanco"
      },
      {
        "label": "Frigorias",
        "value": "2580  Fg/h"
      },
      {
        "label": "Potencia",
        "value": "1150  W"
      },
      {
        "label": "Eficiencia energética",
        "value": "A"
      },
      {
        "label": "Control remoto",
        "value": "SSDD"
      },
      {
        "label": "Tipo",
        "value": "FRIO SOLO"
      }
    ],
    "extendedWarranty": true,
    "promotions":[
      {
        "code": "1234OF",
        "endDate": "2017-06-01T23:00:00.000",
        "description": "30% de Descuento en TV LED Samsung 55''",
        "type": "catalogo",
        "goal":"catalogo",
        "priority": 100,
        "price": 240.34,
        "currency": "AR",
        "monthlySalesCount": 23,
        "currentDateSalesCount": 3,
        "hotPromotion": true,
        "deals": [
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              },
              {
                "type": "contexto",
                "descrition": "Resistencia - Santiago"
              }
            ],
            "actions": [
              {
                "type": "plan de financiacion",
                "descrition": "24 cuotas de 73.90"
              },
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          },
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              }
            ],
            "actions": [
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          }
        ]

      },
      {
        "code": "4444OF",
        "endDate": "2017-06-01T23:00:00.000",
        "description": "12 Cuotas sin interes en TV LED Samsung 55''",
        "type": "megadia",
        "goal":"megadia",
        "priority": 98,
        "monthlySalesCount": 12,
        "currentDateSalesCount": 5,
        "hotPromotion": true,
        "deals": [
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              },
              {
                "type": "contexto",
                "descrition": "Resistencia - Santiago"
              }
            ],
            "actions": [
              {
                "type": "plan de financiacion",
                "descrition": "24 cuotas de 73.90"
              },
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          },
          {
            "restrictions":   [
              {
                "type": "producto",
                "descrition": "todos"
              }
            ],
            "actions": [
              {
                "type": "precio fijo ",
                "descrition": "$1900"
              }
            ]
          }
        ]

      }
    ]
  }
 ]

  var product = products.filter( function (obj) {
    return obj.productCode == id;
  })[0];

  if(product){
    res.send(product);
  } else{
    res.status(404);
    res.send('No hay producto con ID ' + id);
  }


  // res.status(404);
  // res.send('No hay producto con ID ' + id);

}

function respondNotifications(req,res,next) {
  var notificationsRes = [
    {
      "code": "00001",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Ventas",
      "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "code": "00002",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Administración",
      "content":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
    },
    {
      "code": "00003",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Global",
      "content":"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."
    },
    {
      "code": "00004",
      "sendDate": "2016-06-01T23:00:00.000",
      "title": "Local",
      "content":"Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza al whisky. Jovencillo emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el éxtasis en un imprevisto baño de whisky y gozó como un duque. Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo. El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro. El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.Quiere la boca exhausta vid, kiwi, piña y fugaz jamón."
    }
  ];

  res.send(notificationsRes);
}
