const Place = require('../models/Place');
const Bilboard = require('../models/Bilboard');
const op = require('sequelize').Op;

module.exports = {
    get_list_of_places: async (req, res) => {
        try {
            let places;
            if (req.query.name) {
                places = await Place.findAll({
                    where: {
                        name: {
                            [op.like]: '%' + [req.query.name] + '%'
                        }
                    }
                });
            } else if (req.query.monthlyRentPrice) {
                places = await Place.findAll({
                    where: {
                        monthly_rent_price: req.query.monthlyRentPrice
                    }
                });
            } else {
                places = await Place.findAll();
            }
            res.json(places);
        } catch (err) {
            res.json(err);
        }
    },
    get_one_place: async (req, res) => {
        try {
            let place = await Place.findByPk(req.params.id, { include: [Bilboard] });
            res.json(place);
        } catch (err) {
            res.json(err);
        }
    },
    create_a_place: async (req, res) => {
        try {
            let place = await Place.create({
                name: req.body.name,
                monthly_rent_price: req.body.monthly_rent_price
            });
            res.json(place)
        } catch (err) {
            res.json(err);
        }
    },
    update_a_place: async (req, res) => {
        try {
            let result = await Place.update({
                name: req.body.name,
                monthly_rent_price: req.body.monthly_rent_price
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json(result[0] ? 'The place is updated!' : 'Nothing is updated!');
        } catch (err) {
            res.json(err);
        }
    },
    delete_a_place: async (req, res) => {
        try {
            let result = await Place.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json(result[0] ? 'The place is deleted!': 'The place with the given id does not exist!');
        } catch (err) {
            res.json(err);
        }
    },
    add_a_bilboard: async (req, res) => {
        try {
            let bilboard = await Bilboard.create({
                code: req.body.code,
                dimension: req.body.dimension,
                free: req.body.free,
                side: req.body.side,
                lighting: req.body.lighting,
                location_description: req.body.location_description,
                place_id: req.params.id
            });
            res.json(bilboard);
        } catch (err) {
            res.json(err);
        }
    },
    update_a_bilboard: async (req, res) => {
        try {
            let result = await Bilboard.update({
                code: req.body.code,
                dimension: req.body.dimension,
                free: req.body.free,
                side: req.body.side,
                lighting: req.body.lighting,
                location_description: req.body.location_description
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json( result[0] ? 'The bilboard is updated!': 'Nothing is updated!');
        } catch (err) {
            res.json(err);
        }
    },
    delete_a_bilboard: async (req, res) => {
        try {
            let result = await Bilboard.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json(result[0] ? 'The bilboard is deleted!': 'The bilboard with the given id does not exist!');
        } catch (err) {
            res.json(err);
        }
    }
}