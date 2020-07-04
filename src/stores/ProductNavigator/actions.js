export const TOGGLE_PRODUCT_MENU = 'TOGGLE_PRODUCT_MENU';
export const TOGGLE_RESET_CAROUSEL = 'TOGGLE_RESET_CAROUSEL';
export const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY";

export function toggleProductMenu()
{
  
  return {type:TOGGLE_PRODUCT_MENU};
}

//Change the category of the products to show 
export const setProductCategory = (category)=>{
  return {
    type:SET_PRODUCT_CATEGORY,
    category,
  };
}

//TURN OFF/ON the initialization of the carousel
export const toggleReseCarousel = ()=>{
  return {type:TOGGLE_RESET_CAROUSEL};
}