CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ui_translations (
    id SERIAL PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    en_text TEXT,
    sv_text TEXT
);

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    in_price NUMERIC(10,2),
    price NUMERIC(10,2),
    is_active BOOLEAN DEFAULT true,
    update_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)