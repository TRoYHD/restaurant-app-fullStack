import React from "react";
import Link from "next/link";
import Image from "next/image";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4 ">
      <div className="relative 2-8 h-8">
        <Image src="/cart.png" alt="" fill/>
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
