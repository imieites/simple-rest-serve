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
      "endDate": "2016-06-01T23:00:00.000",
      "description": "30% de Descuento en TV LED Samsung 55''",
      "goal":"producto",
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
      "endDate": "2016-06-02T23:00:00.000",
      "description": "12 Cuotas sin interes en TV LED Samsung 55''",
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
    }
  ];

  res.send(promotionsRes);
}
