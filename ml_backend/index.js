const express = require('express');
const axios = require('axios');
var cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/api/items', (req, res) => {
    const response = {
        author: {
            name: 'Brayhan',
            lastname: 'Garcia',
        },
        categories: [],
        items: [],
    };

    if (!req.query.q) {
        return res.json(response);
    }

    axios
        .get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q)
        .then(resp => {
            const items = [];
            resp.data.results.map(item => {
                items.push({
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: item.price,
                        decimals: 0,
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping ? item.shipping.free_shipping : false,
                });
            });
            response.items = items;
            res.json(response);
        })
        .catch(error => {
            res.json(response);
        });
});

app.get('/api/items/:id', (req, res) => {
    const response = {
        author: {
            name: 'Brayhan',
            lastname: 'Garcia',
        },
        categories: [],
        item: null,
    };

    if (!req.params.id) {
        return res.json(response);
    }

    axios
        .get('https://api.mercadolibre.com/sites/MLA/items/' + req.params.id)
        .then(resp => {
            response.item = {
                id: resp.data.item.id,
                title: resp.data.item.title,
                price: {
                    currency: resp.data.item.currency_id,
                    amount: resp.data.item.price,
                    decimals: 0,
                },
                picture: resp.data.item.thumbnail,
                condition: resp.data.item.condition,
                free_shipping: resp.data.item.shipping ? resp.data.item.shipping.free_shipping : false,
            };
            res.json(response);
        })
        .catch(error => {
            res.json(response);
        });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
