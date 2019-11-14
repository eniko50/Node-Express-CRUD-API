const Bilboard = require('../model/Bilboard');

module.exports = {
    all_bilboards: (req, res) => {
        if (req.params.id) {
            Bilboard.getById(req.params.id, (err, bilboard) => {
                if (err) {
                    res.json(err);
                }
                res.json(bilboard);
            });
        } else {
            Bilboard.get((err, bilboard) => {
                if (err) {
                    res.json(err);
                }
                res.json(bilboard);
            });
        }
    },

    create_a_bilboard: (req, res) => {
        Bilboard.create(req.body, (err, results) => {
            if (err) {
                res.json(err);
            }
            res.json(req.body);
        });
    },

    update_a_bilboard: (req, res) => {
        Bilboard.update(req.body, req.params.id, (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.json(rows);
        });
    },

    delete_a_bilboard: (req, res) => {
        Bilboard.delete(req.params.id, (err, count) => {
            if (err) {
                res.json(err);
            }
            res.json(count);
        });
    }
}