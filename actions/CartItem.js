"use client";

import RemoveButton from "@/components/RemoveButton";

function CartItem({ id, name, price, onRemove }) {
  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <RemoveButton id={id} onRemove={onRemove} />
    </div>
  );
}

export default CartItem;