import axios from "axios";
import { OPENPAY } from "../../services/Data";
export const CartPayment = async (bill) => {
  try {
    let name = bill.name.split(" ")[0];
    let lastName = bill.name.split(" ")[1];
    const openpayBill = {
      merchantId: OPENPAY.merchantId,
      privateKey: OPENPAY.privateKey,
      method: OPENPAY.method,
      //name,
      //lastName,
      tokenId: bill.token,
      amount: bill.amount,
      description: bill.description,
      deviceSessionId: bill.deviceSessionId,
      customer: {
        name,
        lastName,
        phoneNumber: bill.phoneNumber,
        email: bill.email,
      },
      production: OPENPAY.production,
      products: bill.cart,
      address: bill.address,
    };

    //console.log("Antes de Pagar.......");
    //console.log(openpayBill);
    //return {};
    return await axios
      .post(OPENPAY.POST_PAYMENT_OPENPAY, openpayBill)
      .then((response) => {
        let result = response;

        return result.data;
      });
  } catch (error) {
    console.log("Catch Error");
    return { Error: error.toString() };
  }
};
