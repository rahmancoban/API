const PORT = 8000;
import express from 'express';

const app = express();

const discoverAfrica = [
    {
        "id": 1,
        "name": "Best of Rwanda",
        "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "image": "https://deih43ym53wif.cloudfront.net/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg",
        "price": "17,995"
    },
    {
        "id": 2,
        "name": "A week in Gana",
        "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/e6/cc/ca/ihsai8ftcobt.jpg",
        "price": "5,995"
    },
    {
        "id": 3,
        "name": "Surf in South Africa",
        "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "image": "https://www.trafalgar.com/media/di4jvqfd/south-africa-table-mountain-scenic-482989593-ge-nov22-2600x1300.jpg",
        "price": "3,995"
    },
    {
        "id": 4,
        "name": "Senegal is favorite",
        "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "image": "https://www.afdb.org/sites/default/files/promoville-senegal-1500.jpg",
        "price": "12,995"
    },
    {
        "id": 5,
        "name": "Somalia is not dangerous",
        "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "image": "https://politicalviolenceataglance.org/wp-content/uploads/2018/09/34649506720_219e6c679f_k.jpg",
        "price": "9,995"
    },

];


app.get('/discover-africa', (req, res) => {
    res.json(discoverAfrica)
});


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));