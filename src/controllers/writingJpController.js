const pool = require("../config/database");

const hiraganaController = async (req, res) => {
    try {
        const query = await pool.query(
            "SELECT * FROM hiragana ORDER BY hiragana_id ASC"
        );

        const result = query.rows.map((row) => ({
            id: row.hiragana_id,
            character: row.character,
            romaji: row.romaji,
            type: row.type,
        }));

        res.status(200).json({
            error: false,
            message: "Hiragana data retrieved successfully",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: true,
            message: "Error retrieving hiragana data",
            error: err.message,
        });
    }
};

const katakanaController = async (req, res) => {
    try {
        const query = await pool.query(
            "SELECT * FROM katakana ORDER BY katakana_id ASC"
        );

        const result = query.rows.map((row) => ({
            id: row.katakana_id,
            character: row.character,
            romaji: row.romaji,
            type: row.type,
        }));

        res.status(200).json({
            error: false,
            message: "Katakana data retrieved successfully",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: true,
            message: "Error retrieving katakana data",
            error: err.message,
        });
    }
};

const particleController = async (req, res) => {
    try {
        const query = await pool.query(
            "SELECT * FROM particles ORDER BY particle_id ASC"
        );

        const result = query.rows.map((row) => ({
            id: row.particle_id,
            particle_name: row.particle_name,
            description: row.description,
            example_sentence: row.example_sentence,
        }));

        res.status(200).json({
            error: false,
            message: "Particles data retrieved successfully",
            datas: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: true,
            message: "Error retrieving particles data",
            error: err.message,
        });
    }
};

module.exports = {
    hiraganaController,
    katakanaController,
    particleController,
};
