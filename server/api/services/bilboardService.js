const Bilboard = require('../models/Bilboard');

module.exports = {
    findAll: async () => {
        return bilboards = await Bilboard.findAll();
    },
    findByFree: async (free) => {
        const bilboards = await Bilboard.findAll({
            where: {
                free: free
            }
        });
        return bilboards;
    },
    findByLighted: async (lighted) => {
        const bilboards = await Bilboard.findAll({
            where: {
                lighting: lighted
            }
        });
        return bilboards;
    },
    findById: async (id) => {
        return await Bilboard.findByPk(id);
    },
    create: async (code, dimension, free, side, lighting, location_description, place_id) => {
        const bilboard = await Bilboard.create({
            code: code,
            dimension: dimension,
            free: free,
            side: side,
            lighting: lighting,
            location_description: location_description,
            place_id: place_id
        });
        return bilboard;
    },
    update: async (id, code, dimension, free, side, lighting, location_description) => {
        const  result = await Bilboard.update({
            code: code,
            dimension: dimension,
            free: free,
            side: side,
            lighting: lighting,
            location_description: location_description
        }, {
            where: {
                id: id
            }
        });
        return result;
    },
    delete: async (id) => {
        const result = await Bilboard.destroy({
            where: {
                id: id
            }
        });
        return result;
    }
}
