const pool = require('../db/pool');

async function getTranslations(req,res){
    try {
        const { lang } = req.params;
        if (lang !== 'en' && lang !== 'sv'){
            return res.status(400).json({ error: 'Language must be "en" or "sv" '});
        }

        const column = lang === 'en' ? 'en_text' :'sv_text'

        const result = await pool.query(
            `SELECT key, ${column} AS text FROM ui_translations`
        );
        const translations = {};
        result.rows.forEach(row =>{
            translations[row.key] = row.text;
        });

        return res.status(200).json(translations);
    } catch (error) {
        console.error('Translations error: ', error);
        return res.status(500).json({ error: 'Internal server error'});
    }
}

module.exports = {
    getTranslations
};