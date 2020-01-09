const Place = require('../models/Place');
const Bilboard = require('../models/Bilboard');
const op = require('sequelize').Op;

module.exports = {
    findAll: async () => {
        return await Place.findAll();
    },
    findByNameContains: async (name) => {
        const places = await Place.findAll({
            where: {
                name: {
                    [op.like]: '%' + [name] + '%'
                }
            }
        });
        return places;
    },
    findByMonthlyRentPrice: async (price) => {
        const places = await Place.findAll({
            where: {
                monthly_rent_price: price
            }
        });
        return places;
    },
    findById: async (id) => {
        return await Place.findByPk(id, { include: Bilboard });
    },
    create: async (name, price) => {
        const place = await Place.create({
            name: name,
            monthly_rent_price: price
        });
        return place;
    },
    update: async (id, name, price) => {
        const place = await Place.update({
            name: name,
            monthly_rent_price: price
        }, {
            where: {
                id: id
            }
        });
        return place;
    },
    delete: async (id) => {
        const result = await Place.destroy({
            where: {
                id: id
            }
        });
        return result;
    }
}
