const Bilboard = require('../models/Bilboard');

module.exports = {
    get_list_of_bilboards: async (req, res) => {
        let bilboards;
        try {
            if (req.query.free) {
                bilboards = await Bilboard.findAll({
                    where: {
                        free: req.query.free
                    }
                });
            } else if (req.query.lighting) {
                bilboards = await Bilboard.findAll({
                    where: {
                        lighting: req.query.lighting
                    }
                });
            } else {
                bilboards = await Bilboard.findAll();
            }
            res.json(bilboards);
        } catch (err) {
            res.json(err);
        };
    },
    get_one_bilboard: async (req, res) => {
        try {
            let bilboard = await Bilboard.findByPk(req.params.id);
            res.json(bilboard);
        } catch (err) {
            res.json(err);
        }
    }
}