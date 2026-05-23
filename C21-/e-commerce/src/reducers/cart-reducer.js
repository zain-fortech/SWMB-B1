export function cartRedcuer(cart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return cart.filter((item) => item.id !== action.payload);

    case "INCREMENT_QUANTITY":
      return cart.map((item) => {
        if (item.id == action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });

    case "DECREMENT_QUANTITY": {
      const requiredItem = cart.find((item) => item.id == action.payload);

      const shouldRemove = requiredItem.quantity == 1;

      if (shouldRemove) {
        return cart.filter((item) => {
          return item.id != action.payload;
        });
      } else {
        return cart.map((item) => {
          if (item.id == action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    }

    default:
      break;
  }
}
