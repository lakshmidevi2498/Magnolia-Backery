import React, { useState, useEffect } from 'react';

const Innercomp1 = () => {
  const innerImgData=localStorage.getItem('innerImages')
  const productImages = JSON.parse(innerImgData)
  
  const [defaultImg, setDefaultImg] = useState(productImages[0].img);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSet = (img) => {
    setDefaultImg(img);
  };

  return (
    <>
      <h6 className='text1 mt-5 container'>
        <span className='text-decoration-underline'>Our Products</span>
        &nbsp;<i className="fa-solid fa-chevron-right mt-1"></i>&nbsp;
        <span className='text-decoration-underline'>World-Famous Bananapudding</span>
        &nbsp;<i className="fa-solid fa-chevron-right mt-1"></i>&nbsp;
        <span className='text-decoration-underline'>World-Famous Bananapudding variety Multipack</span>
      </h6>
      <div className="container">
  <div className="row d-flex justify-content-between">
    <div className="col-12 col-md-6 my-3">
      <img src={defaultImg} style={{ maxWidth: '100%', height: 'auto' }} alt="Default" />
    </div>
    <div className="col-12 col-md-6 p-5 p-md-3 p-lg-5">
      <h1 className="text02" >World-Famous Banana Pudding Variety Multipack</h1>
      <h6>$ 64.00</h6>
      <h6 className="border-bottom border-dark fw-medium fs-5">Delivers Nationwide</h6>
      <div className='d-block '>
      <div className="border border-dark rounded-1 mt-3 position-relative">
        <h6 className="p-4 p-md-2 p-lg-4 text-center">MULTIPACK (6 COUNT)</h6>
        <i className="fa-regular fa-circle position-absolute" style={{ top: '10px', left: '10px', background: '#bae8d4' }}></i>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <div className="d-flex align-items-center">
          <button className="py-1 px-2 rounded-circle text-light" style={{ background: '#581b28' }}><i className="fa-solid fa-minus"></i></button>
          <span className="mx-3">1</span>
          <button className="py-1 px-2 rounded-circle text-light" style={{ background: '#581b28' }}><i className="fa-solid fa-plus"></i></button>
        </div>
        <button className="btn" style={{ background: '#581b28', color: '#f7c0c3' }}>Add To Cart</button>
      </div>
      </div>
     
    </div>
  </div>
</div>
      <div className='container  align-items-start justify-content-start'>
        <div className='d-flex   col-12  col-md-6'>
          {productImages.map((item) => (
            <>
            <img src={item.img} style={{maxWidth:'20%', height:'auto', marginRight:'10px'}} onClick={() => handleSet(item.img)} />
            </>
          ))}
        </div>
        <div className='col-12 col-md-6  mt-4'>
        <p>This online exclusive variety pack combines three of our most popular world-famous banana pudding flavors in one pack! 
            Each multipack includes two Red Velvet Banana Pudding cups, 
            two Chocolate Hazelnut Banana Pudding cups and two Classic Banana Pudding cups.</p>
      </div>

      <div>
      <ul className="navbar-nav p-2 col-12  col-md-6">
                <li className="nav-item">
                  <div
                    className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom border-dark fs-3"
                    onClick={() => toggleDropdown('pickup')}
                  >
                    Ingredients
                    <div>
                      {activeDropdown === 'pickup' ? (
                        <i className="fa fa-chevron-up ms-2 icons" ></i>
                      ) : (
                        <i className="fa fa-chevron-down ms-2 icons"></i>
                      )}
                    </div>
                  </div>
                  {activeDropdown === 'pickup' && (
                    <div className="dropdown-menu border-0 p-0 m-0 show border" style={{ zIndex: '1' }}>
                      
                        <p>Red Velvet Banana Pudding Ingredients: Vanilla Pudding Sweetened Condensed Milk (Milk, Sucrose), Water, Vanilla Pudding Mix (Dextrose, Sugar, Modified Food Starch, Less Than 2% Of Disodium Phosphate, Tetrasodium Pyrophosphate, Tricalcium Phosphate, Natural And Artificial Flavor, Salt, Xanthan Gum, Nonfat Dry Milk, Mono And Diglycerides, Yellow 5, Yellow 6), Heavy Cream (Cream, Milk, Carrageenan, Mono And Diglycerides, Cellulose Gum, Polysorbate 80), Bananas, Red Velvet Cake (Sugar, Cake Flour (Bleached Wheat Flour, Niacin, Iron, Thiamin Mononitrate, Riboflavin, Folic Acid), Butter (Pasteurized Cream, Natural Flavorings (Lactic Acid)), Whole Milk, Vitamin D3, Sour Cream (Cultured Cream), Egg, Red Food Coloring (Water, Fd&C Red #40, Citric Acid, And Sodium Benzoate), Cocoa Powder, Pure Vanilla Extract (Vanilla Bean Extractives In Water, Alcohol (35%)), Apple Cider Vinegar (Distilled Vinegar Diluted To 5% Acidity, Apple Cider Vinegar, Caramel Color), Sodium Bicarbonate, Salt (Yellow Prussiate Of Soda)), Mini Dark Chocolate Chips (Cocoa Paste, Sugar, Fat-Reduced Cocoa Powder, Lecithin, Natural Vanilla Flavor)</p>

                        <p>Chocolate Hazelnut Banana Pudding Ingredients: Vanilla Pudding Sweetened Condensed Milk (Milk, Sucrose), Water, Vanilla Pudding Mix (Dextrose, Sugar, Modified Food Starch, Less Than 2% Of Disodium Phosphate, Tetrasodium Pyrophosphate, Tricalcium Phosphate, Natural And Artificial Flavor, Salt, Xanthan Gum, Nonfat Dry Milk, Mono And Diglycerides, Yellow 5, Yellow 6), Heavy Cream (Cream, Milk, Carrageenan, Mono And Diglycerides, Cellulose Gum, Polysorbate 80), Bananas, Chocolate Hazelnut Spread (Sugar, Palm Oil, Hazelnuts, Skim Milk, Cocoa, Soy Lecithin, Vanillin (Artificial Flavor)), Vanilla Wafers (Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, Riboflavin, Folic Acid), Sugar, Interesterified Soybean Oil, Whey (Milk), Dextrose, Salt, Leavening Agents (Sodium Bicarbonate, Monocalcium Phosphate), Artificial Flavors, Egg, Modified Food Starch)</p>
                      <p></p>
                    </div>
                  )}
                </li>
            <li className="nav-item">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom border-dark fs-3"
                onClick={() => toggleDropdown('flavor')}
              >
                Allergens
                {activeDropdown === 'flavor' ? (
                  <i className="fa fa-chevron-up ms-2 icons"></i>
                ) : (
                  <i className="fa fa-chevron-down ms-2 icons"></i>
                )}
              </div>
              {activeDropdown === 'flavor' && (
                <div className="dropdown-menu border-0 p-0 m-0 show" style={{ zIndex: '1' }}>
                     <p>Classic Banana Pudding : Contains: Milk, Egg, Wheat, Soy Chocolate Hazelnut Banana Pudding : Contains: Milk, Egg, Wheat, Soy, Tree Nuts Red Velvet Banana Pudding: Contains: Milk, Egg, Wheat Made in a Facility that Processes Eggs, Milk, Peanuts, Tree Nuts, And Wheat</p>
                    </div>
              )}
            </li>
              </ul>
      </div>
      </div>
      

      
    </>
  );
};

export default Innercomp1;
