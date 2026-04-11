import React, { useState } from 'react'
import './PriceList.css'



export default function PriceList() {
    const [searchArticle, setSearchArticle] = useState('');
    const [searchProduct, setSearchProduct] = useState('')



    const Product = [
        { id: 1, articleNo: '1000', name: 'Web Development Service', inPrice: 4250, price: 8500, unit: 'hour', inStock: 15, description: 'Description for Web Development Service' },
        { id: 2, articleNo: '1111', name: 'Logo Design Package', inPrice: 1200, price: 3500, unit: 'st', inStock: 10, description: 'Desciption for Logo Design Package' },
    ]

    const handleFieldChange = (id, field, value) => {
        setProducts(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
    };

    const filteredProducts = Product.filter(p => {
        const matchArticle = p.articleNo.toLowerCase().includes(searchArticle.toLowerCase())

        const matchName = p.name.toLowerCase().includes(searchProduct.toLowerCase())

        return matchArticle && matchName;
    })

    const menuItems = [
        { iconSvg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.406px" height="122.881px" viewBox="0 0 122.406 122.881" enable-background="new 0 0 122.406 122.881" xml:space="preserve"><g><path d="M72.041,44.723c1.405,0.187,2.665,0.835,3.62,1.791c1.141,1.14,1.846,2.716,1.846,4.456c0,1.74-0.705,3.315-1.846,4.456 c-1.141,1.141-2.716,1.846-4.456,1.846s-3.315-0.706-4.456-1.846c-1.14-1.14-1.846-2.716-1.846-4.456 c0-1.671,0.65-3.19,1.712-4.318c0.914-3.399,1.889-6.579,2.911-9.549H50.868L5.128,82.842l34.908,34.91l45.719-45.719 l-1.149-34.931H74.501C73.648,39.487,72.826,42.024,72.041,44.723L72.041,44.723z M43.321,85.219 c0.979-0.979,1.507-1.99,1.577-3.027c0.077-1.043-0.248-2.424-0.967-4.135c-0.725-1.717-1.348-3.346-1.87-4.885 s-0.814-3.014-0.897-4.432c-0.07-1.42,0.134-2.768,0.624-4.045c0.477-1.279,1.348-2.545,2.607-3.804 c2.099-2.099,4.535-3.123,7.314-3.065c2.773,0.063,5.457,1.158,8.04,3.294l2.881,3.034c1.946,2.607,2.799,5.33,2.557,8.166 c-0.235,2.83-1.532,5.426-3.893,7.785l-6.296-6.297c1.291-1.291,2.035-2.531,2.238-3.727c0.191-1.197-0.165-2.252-1.081-3.168 c-0.821-0.82-1.717-1.195-2.69-1.139c-0.967,0.064-1.908,0.547-2.817,1.457c-0.922,0.922-1.393,1.914-1.412,2.977 c-0.019,1.063,0.306,2.416,0.973,4.064c0.661,1.652,1.24,3.25,1.736,4.801c0.496,1.553,0.782,3.035,0.858,4.445 c0.076,1.426-0.127,2.787-0.591,4.104c-0.477,1.316-1.336,2.596-2.588,3.848c-2.125,2.125-4.522,3.186-7.212,3.18 s-5.311-1.063-7.855-3.16l-3.747,3.746l-2.964-2.965l3.766-3.764c-2.423-2.996-3.568-5.998-3.447-9.02 c0.127-3.014,1.476-5.813,4.045-8.383l6.278,6.277c-1.412,1.412-2.175,2.799-2.277,4.16c-0.108,1.367,0.414,2.627,1.571,3.783 c0.839,0.84,1.755,1.26,2.741,1.242C41.508,86.549,42.443,86.096,43.321,85.219L43.321,85.219z M71.077,32.853 c7.116-18.397,16.244-27.775,24.729-31.22c8.027-3.258,15.521-1.369,20.513,3.258c4.963,4.602,7.403,11.919,5.367,19.555 c-2.478,9.289-11.631,19.046-31.114,24.54c-0.456,0.128-0.918,0.112-1.339-0.021l0.785,23.858c0.019,0.609-0.221,1.164-0.619,1.564 l0.005,0.004l-47.865,47.865c-0.83,0.83-2.175,0.83-3.004,0L0.622,84.346c-0.83-0.83-0.83-2.176,0-3.006l47.865-47.864 c0.415-0.415,0.958-0.622,1.502-0.622v0H71.077L71.077,32.853z M89.088,44.53c0.069-0.027,0.142-0.051,0.215-0.072 c17.59-4.96,25.738-13.337,27.837-21.208c1.563-5.859-0.271-11.437-4.023-14.917c-3.726-3.454-9.394-4.833-15.542-2.337 c-7.226,2.933-15.051,11.011-21.457,26.856h10.538c1.173,0,2.124,0.951,2.124,2.125c0,0.035-0.001,0.071-0.003,0.106L89.088,44.53 L89.088,44.53z"/></svg>', label: 'Price list', url: '/pricelist', active: true }


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
                                    <span className='pl-menu-icon' dangerouslySetInnerHTML={{ __html: item.iconSvg }} />
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
                                <span pl-th pl-th-arrow></span>
                                <span className="pl-th plt-th-article">Article No.</span>
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
                                        <span className='pl-td pl-td-inprice'>
                                            <input
                                                type='text'
                                                value={product.inPrice}
                                                onChange={(e) => handleFieldChange(product.id, 'inPrice', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-tb pl-tb-unit'>
                                            <input
                                                type="text"
                                                value={product.unit}
                                                onChange={(e) => handleFieldChange(product.id, 'unit', e.target.value)}
                                            />
                                        </span>
                                        <span className='pl-tb pl-tb-stock'>
                                            <input
                                                type='text'
                                                value={product.inStock}
                                                onChange={(e) => handleFieldChange(product.id, 'inStock', e.target.value)}
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