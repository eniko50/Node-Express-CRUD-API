const Rent = require('../models/Rent');
const op = require('sequelize').Op;

module.exports = {
    get_list_of_rents: async (req, res) => {
        try {
            let rents;
            if (req.query.date) {
                rents = await Rent.findAll({
                    where: {
                        start_rent_date :{
                            [op.lte]: req.query.date
                        }, 
                        end_rent_date: {
                            [op.gte]: req.query.date
                        }
                    }
                });
            } else {
                rents = await Rent.findAll();
            }
            res.json(rents);
        } catch (err) {
            res.json(err);
        }
    },
    get_one_rent: async (req, res) => {
        try {
            const rent = await Rent.findByPk(req.params.id);
            res.json(rent);
        } catch (err) {
            res.json(rent);
        }
    },
    create_a_rent: async (req, res) => {
        try {
            const rent = await Rent.create({
                user_id: req.body.user_id,
                bilboard_id: req.body.bilboard_id,
                start_rent_date: req.body.start_rent_date,
                end_rent_date: req.body.end_rent_date
            });
            res.json(rent);
        } catch (err) {
            res.json(err);
        }
    },
    update_a_rent: async (req, res) => {
        try {
            const result = await Rent.update({
                id: req.params.id,
                bilboard_id: req.body.bilboard_id,
                start_rent_date: req.body.start_rent_date,
                end_rent_date: req.body.end_rent_date
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json(result[0] ? 'The rent is updated!' : 'Nothing is updated!');
        } catch (err) {
            res.json(err);
        }
    },
    delete_a_rent: async (req, res) => {
        try {
            const result = await Rent.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json(result ? 'The rent is deleted!' : 'The rent with the given id does not exists!');
        } catch (err) {
            res.json(err);
        }
    }
}