const placeService = require('../services/placeService');

module.exports = {
    get_list_of_places: async (req, res) => {
        try {
            let places;
            if (req.query.name) {
                places = await placeService.findByNameContains(req.query.name);
            } else if (req.query.monthlyRentPrice) {
                places = await placeService.findByMonthlyRentPrice(req.query.monthlyRentPrice);
            } else {
                places = await placeService.findAll();
            }
            res.json(places);
        } catch (err) {
            res.json(err);
        }
    },
    get_one_place: async (req, res) => {
        try {
            const place = await placeService.findById(req.params.id);
            res.json(place);
        } catch (err) {
            res.json(err);
        }
    },
    create_a_place: async (req, res) => {
        try {
            const place = await placeService.create(req.body.name, req.body.monthly_rent_price);
            res.json(place)
        } catch (err) {
            res.json(err);
        }
    },
    update_a_place: async (req, res) => {
        try {
            const result = await placeService.update(req.params.id, req.body.name, req.body.monthlyRentPrice);
            res.json(result[0] ? 'The place is updated!' : 'Nothing is updated!');
        } catch (err) {
            res.json(err);
        }
    },
    delete_a_place: async (req, res) => {
        try {
            const result = await placeService.delete(req.params.id);
            res.json(result ? 'The place is deleted!': 'The place with the given id does not exist!');
        } catch (err) {
            res.json(err);
        }
    }
}