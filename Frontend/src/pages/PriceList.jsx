import React, { useState } from 'react'
import './PriceList.css'



export default function PriceList() {
    const [searchArticle, setSearchArticle] = useState('');
    const [searchProduct, setSearchProduct] = useState('');
    const [products, setProducts] = useState([
        { id: 1, articleNo: '1000', name: 'Web Development Service', inPrice: 4250, price: 8500, unit: 'hour', inStock: 15, description: 'Description for Web Development Service' },
        { id: 2, articleNo: '1111', name: 'Logo Design Package', inPrice: 1200, price: 3500, unit: 'st', inStock: 10, description: 'Desciption for Logo Design Package' },
    ]);


    const handleFieldChange = (id, field, value) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
    };

    const filteredProducts = products.filter(p => {
        const matchArticle = p.articleNo.toLowerCase().includes(searchArticle.toLowerCase())

        const matchName = p.name.toLowerCase().includes(searchProduct.toLowerCase())

        return matchArticle && matchName;
    })

    const menuItems = [
        { label: 'Price List', url: '/pricelist', active: true, icon:<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1='7' y1='7' x2='7.01' y2='7' /></svg>}


    ]

    return (
        <div>
            <div className='pl-layout'>
                <header className='pl-header'>
                    <div className='pl-header-left'>
                        <div className='pl-hamburger'>
                            <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='28px' width='28px' xmlns='http://www.w3.org/2000/svg'><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
                        </div>
                        <div className='pl-user-info'>
                            <div className='pl-avatar'>
                                <svg viewBox='0 0 24 24' width='40' height='40' fill='#fff'>
                                    <path d='M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z' />
                                </svg>
                            </div>
                            <div className='pl-user-text'>
                                <span>John Andre</span>
                                <span>Storfjord AS</span>
                            </div>
                        </div>
                    </div>
                    <div className='pl-header-right'>
                        <span className='pl-lang-label'>English</span>
                        <img src='https://storage.123fakturere.no/public/flags/GB.png'
                            alt='EN'
                            className='pl-flag'
                        />
                    </div>
                </header>
                <div className='pl-body'>
                    <aside className='pl-sidebar'>
                        <h3 className='pl-sidebar-title'>Menu</h3>
                        <ul className='pl-menu-list'>
                            {menuItems.map((item, index) => (
                                <li key={index} className={`pl-menu-item ${item.active ? 'active' : ''}`}>
                                    <span className='pl-menu-icon'>{item.icon}</span>
                                    <span className='pl-menu-label'><a className='pl-menu-link' href={item.url}>{item.label}</a></span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <main className='pl-main'>
                        <div className='pl-toolbar'>
                            <div className='pl-search-area'>
                                <div className='pl-search-box'>
                                    <input
                                        type='text'
                                        placeholder='Search Article No ...'
                                        value={searchArticle}
                                        onChange={(e) => (setSearchArticle(e.target.value))}
                                    />
                                    <svg className='pl-search-icon' viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#4FC3F7' strokeWidth='2'>
                                        <circle cx='11' cy='11' r='7' />
                                        <path d='m16.5 16.5 4 4' />
                                    </svg>
                                </div>
                                <div className='pl-search-box'>
                                    <input
                                        type='text'
                                        placeholder='Search Product ...'
                                        value={searchProduct}
                                        onChange={(e) => setSearchProduct(e.target.value)}
                                    />
                                    <svg className='pl-search-icon' viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#4FC3F7' strokeWidth='2'>
                                        <circle cx="11" cy="11" r="7" />
                                        <path d="m16.5 16.5 4 4" />
                                    </svg>
                                </div>
                            </div>
                            <div className='pl-action-buttons'>
                                <button className='pl-action-btn'>
                                    <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#07A31B' strokeWidth='2.5'>
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                    <span>New Product</span>
                                </button>
                                <button className='pl-action-btn'>
                                    <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='#4FC3F7' strokeWidth='2'>
                                        <rect x="5" y="6" width="14" height="14" rx="2" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 14h8M8 10h8" />
                                    </svg>
                                    <span>Advanced mode</span>
                                </button>
                            </div>
                        </div>
                        <div className='pl-table-container'>
                            <div className='pl-table-header'>
                                <span className='pl-th pl-th-arrow'></span>
                                <span className="pl-th pl-th-article">Article No.</span>
                                <span className="pl-th pl-th-name">Product/Service</span>
                                <span className="pl-th pl-th-inprice">In Price</span>
                                <span className="pl-th pl-th-price">Price</span>
                                <span className="pl-th pl-th-unit">Unit</span>
                                <span className="pl-th pl-th-stock">In Stock</span>
                                <span className="pl-th pl-th-desc">Description</span>
                                <span className="pl-th pl-th-actions"></span>
                            </div>
                            <div className='pl-table-body'>
                                {filteredProducts.map((product, idx) => (
                                    <div className='pl-table-row' key={product.id}>
                                        <span className='pl-td pl-td-arrow'>
                                            {idx === filteredProducts.length - 1 && (<svg
                                                viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='#4FC3F7' strokeWidth='2.5'
                                            >
                                                <path d='M5 12h14M12 5l7 7-7 7' />
                                            </svg>
                                            )}

                                        </span>
                                        <span className='pl-td pl-td-article'>
                                            <input
                                                type='text'
                                                value={product.articleNo}
                                                onChange={(e) => handleFieldChange(product.id, 'articleNo', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-name'>
                                            <input type='text' value={product.name} onChange={(e) => handleFieldChange(product.id, 'name', e.target.value)} />
                                        </span>
                                        <span className='pl-td pl-td-inprice'>
                                            <input
                                                type='text'
                                                value={product.inPrice}
                                                onChange={(e) => handleFieldChange(product.id, 'inPrice', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-price'>
                                            <input
                                                type='text'
                                                value={product.price}
                                                onChange={(e) => handleFieldChange(product.id, 'price', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-unit'>
                                            <input
                                                type="text"
                                                value={product.unit}
                                                onChange={(e) => handleFieldChange(product.id, 'unit', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-stock'>
                                            <input
                                                type='text'
                                                value={product.inStock}
                                                onChange={(e) => handleFieldChange(product.id, 'inStock', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-desc'>
                                            <input
                                                type='text'
                                                value={product.description}
                                                onChange={(e) => handleFieldChange(product.id, 'description', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-td pl-td-actions'>
                                            <button className='pl-more-btn'>...</button>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}