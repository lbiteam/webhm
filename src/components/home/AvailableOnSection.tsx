import flipkart from "@/assets/Shopping logo/flipkart-logo.webp"
import amazon from "@/assets/Shopping logo/amazon-logo.webp"
import snapdeal from "@/assets/Shopping logo/snapdeal-logo.webp"
import blinkit from "@/assets/Shopping logo/blinkit-logo.webp"
import storelogo from "@/assets/Shopping logo/store-logo.webp"
const AvailableOnSection = () => (
  <section className="bg-orange-50 border-b border-amber-100 py-8 overflow-hidden">
    <div className="container mx-auto px-6">
      <p className="text-center text-xs font-bold text-amber-600 uppercase tracking-widest mb-6">
        Our Products Are Available On
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16  ">
      <img
          src={storelogo}
          alt="Honeyman Store"
          className="h-8 object-contain"
          onClick={() => window.open("https://honeymanstore.com/shop", "_blank")}
        />
        <img
          src={blinkit}
          alt="Blinkit"
          className="h-8 object-contain"
          onClick={() => window.open("https://blinkit.com/prn/honeyman-multi-flower-honey/prid/716424", "_blank")}
        />
          <img
          src={amazon}
          alt="Amazon"
          className="h-8 object-contain"
          onClick={() => window.open("https://www.amazon.in/Honeyman-Multi-Flower-Original-Adulteration-Sweetener/dp/B0CKC5CZX1/ref=sr_1_5?crid=1WRPR48GBWKM5&dib=eyJ2IjoiMSJ9.4fbY_qQFD8nzKWOKbQtiBJMTU7St8Xm4yQklN0mFv8BbonqBiL6Mz_1av6CGj6iLXTkk7toThCy5oeqOwcj17-Zg9gmWRCZtErF9lNrtPEmHDuSeyKLKixQ8dLKdhB1U_YYCk1fGhQIzCbZFfWXtm8OhT7xpnULEsCZ8Xx3KCvNtigu6jI7Aqs7jLeoff9F_zhOIuj9uEdHWHDZd1uOjYKRb5Me3ZSdtqjEGx0fxIe01gYmxtn8k5o_GmRve3xFPtdgRl9ZTt3lhxYVTm75Qjfyu10_QegebDoErLHVm-_8.4Geuf-VFz8MygdWRN3aVtdDqBiefg3n8B2ZvhHpEhms&dib_tag=se&keywords=honeyman%2Bhoney&qid=1770282733&sprefix=%2Caps%2C364&sr=8-5&th=1", "_blank")}
        />
        <img
          src={flipkart}
          alt="Flipkart"
          className="h-8 object-contain"
          onClick={() => window.open("https://www.flipkart.com/search?q=honeyman+honey&sid=eat%2Clnz&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_1_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_1_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=honeyman+honey%7CHoney&requestId=8e4739b8-e3c2-4097-b50c-a3b2a1be021f&as-searchtext=h", "_blank")}
        />
        <img
          src={snapdeal}
          alt="Snapdeal"
          className="h-8 object-contain"
          onClick={() => window.open("https://www.snapdeal.com/search?clickSrc=top_searches&keyword=honeyman%20honey&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy", "_blank")}
        />
      
      
      </div>
    </div>
  </section>
);

export default AvailableOnSection;
