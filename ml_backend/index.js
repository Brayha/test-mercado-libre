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

    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q)
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
                    state: item.address.state_name,
                    condition: item.condition,
                    free_shipping: item.shipping ? item.shipping.free_shipping : false,
                });
            });
            response.items = items;
            let arrayCategories = resp.data.available_filters[0].values;
            arrayCategories.sort((a,b) => b.results - a.results);
            arrayCategories = arrayCategories.slice(0,5);
            response.categories = arrayCategories;
            res.json(response);
        })
        .catch(error => {
            res.json(error);
        });
});

app.get('/api/items/:id', (req, res) => {
    const response = {
        author: {
            name: 'Brayhan',
            lastname: 'Garcia',
        },
        categories: [],
        item: [],
    };
    if (!req.params.id) {
        return res.json(response);
    }
    
    const urlProduct='https://api.mercadolibre.com/items/' + req.params.id;

    axios.get(urlProduct)
        .then(resp => {
            axios.get(urlProduct + '/description').then(
                descriptionData => {
                    response.item = {
                        id: resp.data.id,
                        title: resp.data.title,
                        price: {
                            currency: resp.data.currency_id,
                            amount: resp.data.price,
                            decimals: 0,
                        },
                        picture: resp.data.thumbnail,
                        condition: resp.data.condition,
                        free_shipping: resp.data.shipping ? resp.data.shipping.free_shipping : false,
                        sold_quantity: resp.data.sold_quantity,
                        description: descriptionData.data.plain_text,
                    };
                    res.json(response);
                } 
            );
        })
        .catch(error => {
            console.log(error);
            res.json(response);
        });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
