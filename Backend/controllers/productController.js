const pool = require('../db/pool');




async function getAllProducts(req, res) {
    try {
        const result = await pool.query(
            `SELECT id, article_no, name, in_price, price, unit, in_stock, description
            FROM products 
            WHERE is_active = true
            ORDER BY article_no ASC
            `
        );
        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Get products error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT id, article_no, name, in_price, price, unit, in_stock, description
            FROM products
            where id = $1 AND is_active = true`,
            [id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });

        return res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Get products error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


async function createProduct(req, res) {
    try {
        const { article_no, name, in_price, price, unit, in_stock, description } = req.body;

        if (!name) return res.status(400).json({ error: 'Product name is requered' });

        const result = await pool.query(`
            INSERT INTO products (article_no, name, in_price, price, unit, in_stock, description)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id, article_no, name, in_price, price, unit, in_stock, description
            `,
            [article_no || null, name, in_price || 0, price || 0, unit || 'st', in_stock || 0, description || '']
        );
        return res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Create product error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const { article_no, name, in_price, price, unit, in_stock, description } = req.body;

        if (!name) return res.status(400).json({ error: 'Product name is required' });

        const result = await pool.query(`
            UPDATE products
            SET article_no = $1,
            name = $2,
            in_price = $3,
            price = $4,
            unit = $5,
            in_stock = $6,
            description = $7,
            update_at = CURRENT_TIMESTAMP
            WHERE id = $8 AND is_active = true
            RETURNING id, article_no, name, in_price, price,unit, in_stock, description`,
            [article_no, name, in_price, price, unit, in_stock, description, id]
        );

        if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });

        return res.status(200).json(result.rows[0]);

    } catch (error) {
        console.error('Update product error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function patchProduct(req, res) {
    try {
        const { id } = req.params;
        const fields = req.body;

        const allowedFields = ['article_no', 'name', 'in_price', 'price', 'unit', 'in_stock', 'description'];

        const updates = [];
        const values = [];
        let paramIndex = 1;

        for (const [key, value] of Object.entries(fields)) {
            if (allowedFields.includes(key)) {
                updates.push(`${key} = $${paramIndex}`);
                values.push(value);
                paramIndex++;
            }
        }
        if (updates.length === 0) return res.status(400).json({ error: 'No valid fields to update' })

        updates.push(`update_at = CURRENT_TIMESTAMP`);
        values.push(id);

        const result = await pool.query(`
                UPDATE products
                SET ${updates.join(',')}
                WHERE id = $${paramIndex} AND is_active = true
                RETURNING id, article_no, name, in_price, price, unit, in_stock, description`,
            values);

        if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json(result.rows[0])
    } catch (error) {
        console.error('Patch product error:', error);
        return res.status(500).json({ error: 'Internal server error' });

    }
}


async function deleteProduct(req, res){
    try {
        const { id } = req.params;

        const result = await pool.query(
            `UPDATE products
            SET is_active = false, update_at = CURRENT_TIMESTAMP
            WHERE id = $1 AND is_active = true
            RETURNING id`,
            [id]
        );

        if(result.rows.length === 0) return res.status(404).json({ error: 'Product not found'});

        return res.status(200).json({ message: 'Product deleted successfully'});
    } catch (error) {
        console.error('Delete product error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}