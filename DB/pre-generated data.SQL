
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
('pricelist.search_product', 'Sök produkt...', 'Search Product...'),
('pricelist.col_price', 'Pris', 'Price'),
('pricelist.col_description', 'Beskrivning', 'Description');


---price list data 
INSERT INTO products (article_no, name, in_price, price, unit, in_stock, description) VALUES
('1000', 'Web Development Service', 4250.00, 8500.00, 'hour', 15, 'Full-stack web development service'),
('1001', 'Logo Design Package', 1200.00, 3500.00, 'st', 10, 'Complete logo design with revisions'),
('1002', 'SEO Optimization', 800.00, 2200.00, 'hour', 20, 'Search engine optimization service'),
('1003', 'Cloud Hosting Monthly', 150.00, 450.00, 'month', 100, 'Cloud hosting with 99.9% uptime'),
('1004', 'Mobile App Development', 15000.00, 35000.00, 'st', 5, 'Native mobile application'),
('1005', 'UI/UX Design', 2000.00, 5500.00, 'hour', 12, 'User interface and experience design'),
('1006', 'Database Administration', 1800.00, 4000.00, 'hour', 8, 'Database setup and maintenance'),
('1007', 'Email Marketing Setup', 500.00, 1500.00, 'st', 25, 'Email campaign configuration'),
('1008', 'SSL Certificate', 50.00, 200.00, 'year', 50, 'SSL security certificate'),
('1009', 'Domain Registration', 80.00, 250.00, 'year', 200, 'Domain name registration service'),
('1010', 'Content Writing', 300.00, 900.00, 'st', 30, 'Professional content writing'),
('1011', 'Video Production', 3500.00, 8000.00, 'st', 3, 'Professional video production'),
('1012', 'Social Media Management', 1000.00, 3000.00, 'month', 15, 'Social media account management'),
('1013', 'IT Consultation', 2500.00, 6000.00, 'hour', 10, 'IT strategy consultation'),
('1014', 'Graphic Design', 600.00, 1800.00, 'st', 20, 'Custom graphic design work'),
('1015', 'API Integration', 3000.00, 7500.00, 'st', 7, 'Third-party API integration'),
('1016', 'Cybersecurity Audit', 4000.00, 10000.00, 'st', 4, 'Complete security audit'),
('1017', 'Technical Support', 200.00, 600.00, 'hour', 50, 'Technical support service'),
('1018', 'E-commerce Setup', 5000.00, 12000.00, 'st', 6, 'Complete e-commerce store setup'),
('1019', 'Data Analytics', 1500.00, 4500.00, 'hour', 9, 'Data analysis and reporting'),
('1020', 'Print Design', 400.00, 1200.00, 'st', 18, 'Brochures, flyers and print media');