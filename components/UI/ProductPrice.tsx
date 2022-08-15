import React from "react";
import { useExchangeRateGBPToIRR } from "../../hooks/useExchangeRateGBPToBR";
import { useLanguage } from "../../hooks/useLanguage";
import { calculateDiscountPercentage } from "../../utilities/calculateDiscountPercentage";
import { changeNumbersFormatEnToPt} from "../../utilities/changeNumbersFormatEnToPt";
import { gbpCurrencyFormat } from "../../utilities/currencyFormat";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
}) => {
  const { t, locale } = useLanguage();
  const irPrice = useExchangeRateGBPToIRR(price);
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;
  const irDiscountPrice = useExchangeRateGBPToIRR(discountPrice);

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-md md:text-xl"
    : "text-[12px] md:text-md";
  const flexDirection = isInSlider || locale === "en" ? "row" : "row-reverse";

  return (
    <div>
        {discount ? (
          <div className="flex items-end flex-wrap" style={{ flexDirection }}>
            <span className="flex flex-col">
              <del
                className={`text-rose-600 dark:text-rose-300 md:text-sm ${textDiscountPriceSize}`}
              >
                <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                <sub className="ml-1 text-[10px]">
                </sub>
                {locale === "en" ? gbpCurrencyFormat(price) : irPrice}
              </del>
              <ins
                className={`font-bold self-end no-underline mt-1 ${textMainPriceSize}`}
              >
                <sup className="mr-1">{locale === "en" ? "$" : ""}</sup>
                
                {locale === "en"
                  ? gbpCurrencyFormat(discountPrice)
                  : irDiscountPrice}
              </ins>
            </span>
            <span
              className="text-green-700 dark:text-green-300 ml-1 text-[12px] inline-block"
              style={{ direction: "ltr" }}
            >{`(-%${
              locale === "en" ? discount : changeNumbersFormatEnToPt(discount!)
            })`}</span>
          </div>
        ) : (
          <div>
            {isInSlider ? <div className="h-[1.4rem]"></div> : null}{" "}
            {/* ☝slider cards (.slick-slide=>Slider component) are float and because of that, they don't accept height so, for making cards the same height, I have to do this hack*/}
            <div
              className={`flex items-center ${textMainPriceSize} font-bold no-underline`}
              style={{ flexDirection }}
            >
              <sup className="mr-1 rtl:block">{locale === "en" ? "$" : ""}</sup>
              <span>
                {locale === "en" ? gbpCurrencyFormat(price) : irPrice}
              </span>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default ProductPrice;
