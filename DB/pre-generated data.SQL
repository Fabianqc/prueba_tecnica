
-- user data 
INSERT INTO users (email, password_hash)
VALUES (
    'admin@123fakturera.se',
    '$2b$10$hoAllFGM3jCfijsyagE4teTESkdLamv/ar8x1cSeaz4YB8D2F1NYq'
)
-- password: 123456 


--translations data
INSERT INTO ui_translations (key, sv_text, en_text) VALUES
('login.title', 'Logga in', 'Log in'),
('login.email_label', 'Skriv in din epost adress', 'Enter your email address'),
('login.email_placeholder', 'Epost adress', 'Email address'),
('login.password_label', 'Skriv in ditt lösenord', 'Enter your password'),
('login.password_placeholder', 'Lösenord', 'Password'),
('login.submit', 'Logga in', 'Log in'),
('login.register', 'Registrera dig', 'Register'),
('login.forgot_password', 'Glömt lösenord?', 'Forgot password?'),
('nav.home', 'Hem', 'Home'),
('nav.prices', 'Priser', 'Prices'),
('nav.features', 'Funktioner', 'Features'),
('nav.contact', 'Kontakta oss', 'Contact us'),
('pricelist.menu', 'Meny', 'Menu'),
('pricelist.search_article', 'Sök artikelnr...', 'Search Article No...'),
('pricelist.new_product', 'Ny produkt', 'New Product'),
('pricelist.advanced_mode', 'Avancerat läge', 'Advanced mode'),
('pricelist.col_article', 'Artikelnr', 'Article No.'),
('pricelist.col_product', 'Produkt/Tjänst', 'Product/Service'),
('pricelist.col_inprice', 'Inpris', 'In Price'),
('pricelist.col_unit', 'Enhet', 'Unit'),
('pricelist.col_stock', 'I lager', 'In Stock'),
('pricelist.col_description', 'Beskrivning', 'Description');