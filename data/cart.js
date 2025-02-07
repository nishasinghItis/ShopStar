export const cart=[];

export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach((cardItem) => {
      if (productId == cardItem.productId) {
        matchingItem = cardItem;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
  }