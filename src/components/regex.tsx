import React from "react";

interface Props {
  myString: string;
}

const Regex = ({ myString }: Props) => {
  // let re = /o+/;  // + işareti aynı olanları tek seferde seçer
  // let re = /o+/g;  // g global
  // let re = /o+/gm;  // g global m multiline
  // let re = /bura?da/g;  // ? opsiyonel
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
  // let re = /[T,t]he/g; // Köşeli parantezin içindekilere uyan ve geri kalan kısmı içeren karakterleri seçer
  // let re = /[a-zA-Z0-9_?\.]he/g; //  yukarıdaki örneğin belirli aralıklar belirtilerek yapılmış hali
  // let re = /gr(a|e)y/g; //  belirli iki karakterden biri için yapılan regex
  // let re = /(re|ra)+/g // aynı karakter dizisinden ne kadar varsa seçmek için
  // let re = /^[Ss]/g // paragraf başında bu örnek için 's' ve 'S' ile başlayanları seçer
  // let re = /[Ss]$/gm // paragraf sonunda bu örnek için multiline yani çok satırlı paragraf ve 's' ve 'S' ile bitenleri seçer
  // let re = /...(?==")/gm // '="' ifadesinin önündeki 3 karakteri seçmek için (örn: url="www.google.com" için 'url' seçer ) parantez içine '?=' yani lookbehind
  // let re = /(?<=url=").../gm // 'url="' ifadesinin sonrasındaki 3 karakteri seçmek için (örn: url="www.google.com" için 'www' seçer ) parantez içine '?<=' yani lookafter
  let re = /(?<!url=").../gm // yukarıdaki örneğin tam tersi
  
  
  const exp = myString.replace(re, "*");

  return (
    <div>
      <h2>{exp}</h2>
    </div>
  );
};

export default Regex;
