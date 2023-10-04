import { useEffect, useState } from "react";
import axios from "axios";

interface Currency {
  currency: string;
}

function useCurrencyInfo(Currency: Currency) {
    const [data,setData] = useState({});
  let currency = Currency.currency;
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then((res) => {
        console.log(res.data)
        let response = res.data;
        setData(response[currency]);
      })
      .catch((error) => console.log(error));


  }, [Currency]);

  return data;
}

export default useCurrencyInfo;
