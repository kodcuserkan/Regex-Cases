import React from "react";

interface Props {
  myString: string;
}

const Regex = ({ myString }: Props) => {
  // let re = /o+/;  + işareti aynı olanları tek seferde seçer
  // let re = /o+/g;  g global
  // let re = /bura?da/g;  ? opsiyonel
  // let re = /.+/g; // ' . ' tek bir karakter + devam edenleri tek parça seçer nokta yeni satır ve paragraf başında çalışmaz
  // let re = /alo/gi; // ' g ' den sonra gelen ' i ' case - insensitive yani büyükküçük harf duyarsız
  // let re = /alü/giu; // ' u ' unicode öiüşğ dahil etmesi için için eklendi
  // let re = /\w/g; // ' \w ' alfa nümeric olan (_ hariç) tüm karakterleri seçer
  // let re = /\W/g; // ' \w ' alfa nümeric olmayan (_ hariç) tüm karakterleri seçer
  // let re = /\s/g; // ' \s ' sadece space karakterleri seçer
  // let re = /\S/g; // ' \S ' sadece space olmayan karakterleri seçer
  // let re = /\d+/g; // ' \d ' sadece space olmayan nümeric karakterleri seçer
  // let re = /\D+/g; // ' \D ' sadece nümeric olmayan karakterleri seçer
  // let re = /.{5}/g; // tüm karakterleri süslü parantez içindeki rakam kadar gruplar halinde seçer
  // let re = /.{2,4}/g; // tüm karakterleri en az ikili en çok dörtlü (bu örnek özelinde) gruplar halinde seçer
  // let re = /.{2,}/g; // tüm karakterleri en az ikili gruplar halinde (tek 1 karakter varsa seçmez ) seçer
  let re = /[T,t]he/g; // Köşeli parantezin içindekilere uyan ve geri kalan kısmı içeren karakterleri seçer seçer

  const exp = myString.replace(re, "*");

  return (
    <div>
      <h2>{exp}</h2>
    </div>
  );
};

export default Regex;
