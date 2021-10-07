function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)/100);

    return precioConDescuento;
}

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//     const resultP = document.getElementById("ResultPrice")
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento
// }

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

// Reto cupones #1 Arrays and switch

// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
//     let descuento;
  
    const coupons = [
      {
          name: "2X1_bebe",
          discount: 50,
      },
      {
          name: "pero_no_le_digas_a_nadie",
          discount: 30,
      },
      {
          name: "es_un_secreto",
          discount: 25,
      },
  ];

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  
  const userCoupon = coupons.find(isCouponValueValid);
  
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");

  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
    // switch(couponValue) {
    //   case "JuanDC_es_Batman":
    //     descuento = 15;
    //   break;
    //   case "pero_no_le_digas_a_nadie":
    //     descuento = 30;
    //   break;
    //   case "es_un_secreto":
    //     descuento = 25;
    //   break;
    // }
  
  //   const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
  //   const resultP = document.getElementById("ResultPrice");
  //   resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  // }

  // Reto cupones #2 Legibilidad, error first y muerte al switch

//   if (!coupons.includes(couponValue)) {
//     alert("El cupón " + couponValue + "no es válido");
//  } else if (couponValue === "JuanDC_es_Batman") {
//     descuento = 15;
//  } else if (couponValue === "pero_no_le_digas_a_nadie") {
//     descuento = 30;
//  } else if (couponValue === "es_un_secreto") {
//     descuento = 25;
//  }

  // Reto cupones #3 Arrays y condicionales inteligentes

