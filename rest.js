var restify = require("restify");
var server = restify.createServer();

server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

server.get('/', respond);
server.get('/api/promotions', respondPromotions);
server.get('/api/notifications', respondNotifications);
server.get('/api/product/:id', respondProduct);

var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});


function respond(req, res, next) {
    res.send('Welcome to your API test!');
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
      goal:"catalogo",
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

  var product = {
    "productCode": 163205,
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
        "value": ""
      },
      {
        "label": "Descripcion larga",
        "value": "Diseño Compacto. Ultra Silencioso. Filtro totalmente Lavable. Display LCD. Temporizador 12hs. Novedoso accesorio de instalación manual. 3 Modos Operación: Refrigeración, Deshumidificación y Ventilación. Gas R-410a."
      },
      {
        "label": "Jerarquia",
        "value": ""
      },
      {
        "label": "Cubicaje",
        "value": ""
      },
      {
        "label": "Precio costo",
        "value": ""
      },
      {
        "label": "Precio venta",
        "value": ""
      },
      {
        "label": "Indice ABC",
        "value": ""
      },
      {
        "label": "Imagen",
        "value": ""
      },
      {
        "label": "Origen",
        "value": "CHINA"
      },
      {
        "label": "Garantía",
        "value": ""
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
        "value": ""
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
        goal:"megadia",
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

  if(id == product.productCode){
    res.send(product);
  }else{
    res.status(400);
    res.send('There is no product with id ' + id);
  }

}
