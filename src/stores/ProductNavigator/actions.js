export const TOGGLE_PRODUCT_MENU = 'TOGGLE_PRODUCT_MENU';
export const SET_PRODUCT_CATEGORY = "SET_PRODUCT_CATEGORY";

export function toggleProductMenu()
{
  //console.log("Escribe toggleProductMenu");
  return {type:TOGGLE_PRODUCT_MENU};
}


export const setProductCategory = (category)=>{
  return {
    type:SET_PRODUCT_CATEGORY,
    category
  };
}