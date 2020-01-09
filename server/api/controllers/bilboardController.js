const bilboardService = require('../services/bilboardService');

module.exports = {
    get_list_of_bilboards: async (req, res) => {
        let bilboards;
        try {
            if (req.query.free) {
                bilboards = await bilboardService.findByFree(req.query.free);
            } else if (req.query.lighting) {
                bilboards = await bilboardService.findByLighted(req.query.lighting);
            } else {
                bilboards = await bilboardService.findAll();
            }
            res.json(bilboards);
        } catch (err) {
            res.json(err);
        };
    },
    get_one_bilboard: async (req, res) => {
        try {
            const bilboard = await bilboardService.findById(req.params.id);
            res.json(bilboard);
        } catch (err) {
            res.json(err);
        }
    },
    create_a_bilboard: async (req, res) => {
        try {
            const bilboard = bilboardService.create(req.body.code, req.body.dimension,
                req.body.free, req.body.side, req.body.lighting, req.body.location_description, req.params.id);
            res.json(bilboard);
        } catch (err) {
            res.json(err);
        }
    },
    update_a_bilboard: async (req, res) => {
        try {
            const result = bilboardService.update(req.params.id, req.body.code, req.body.dimension,
                req.body.free, req.body.side, req.body.lighting, req.body.location_description);
            res.json( result[0] ? 'The bilboard is updated!': 'Nothing is updated!');
        } catch (err) {
            res.json(err);
        }
    },
    delete_a_bilboard: async (req, res) => {
        try {
            const result = await bilboardService.delete(req.params.id);
            res.json(result ? 'The bilboard is deleted!': 'The bilboard with the given id does not exist!');
        } catch (err) {
            res.json(err);
        }
    }
}