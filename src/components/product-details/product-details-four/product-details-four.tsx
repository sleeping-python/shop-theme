import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'components/button/button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductDescription,
  ButtonText,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaTitle,
  MetaSingle,
  MetaItem,
  RelatedItems,
  PageTopbarLayout,
  PageTopTitle,
  PageTitleTopSubbar,
  PageTitleTopLocationLink,
  ProductTitleSubText,
  PageTopRight,
  PageTopShare,
  PageTopSave,
  ProductHighlightsWrapper,
  ProductHighlightHeading,
  ProductHighlightDetails,
  ProductHighlight,
  ProductHighlightHeadingIcon,
  ProductHighlightHeadingText,
  ProductHighlightSection,
  ProductLocationSection,
} from './product-details-four.style';
import { CartIcon } from 'assets/icons/CartIcon';
import ReadMore from 'components/truncate/truncate';
import CarouselWithCustomDots from 'components/multi-carousel/multi-carousel';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { ProductGrid } from 'components/product-grid/product-grid';
import GridedPreview from 'components/grided-preview/grided-preview';
import { ShareIcon } from 'assets/icons/ShareIcon';
import { FavoriteIcon } from 'assets/icons/FavoriteIcon';
import { MallIcon } from 'assets/icons/ProductHighlight/MallIcon';
import { ShoppingIcon } from 'assets/icons/ProductHighlight/ShoppingIcon';
import Highlights from './highlights';
import { Loader } from "@googlemaps/js-api-loader";
import SimpleMap from './simple-map';
import { Coords } from 'google-map-react';
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { Moment } from 'moment'
import TripDatePicker from './TripDatePicker';

type ProductDetailsProps = {
  product: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

// const loader = new Loader({
//   apiKey: "AIzaSyDxDYpXUqKYwX912SlJ8wea20_mVqmAvHQ",
//   // version: "weekly"
// });


const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { isRtl } = useLocale();
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const data = product;

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  // function initMap(): void {
  //   let map: google.maps.Map;
  //   // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   map = new google.maps.Map(
  //     document.getElementById("map") as HTMLElement,
  //     {
  //       zoom: 4,
  //       center: uluru,
  //     }
  //   );
  //   // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }

  useEffect(() => {
    // initMap();
    // let map: google.maps.Map;
    // loader.load().then(() => {
    //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    //   });
    // });
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 500);
  }, []);

  const [startDate, setStartDate] = React.useState<Moment>();
  const [endDate, setEndDate] = React.useState<Moment>();
  const [focusedInput, setFocusedInput] = React.useState<FocusedInputShape>('startDate');
  // const [focus, setFocus] = React.useState('startDate');
  const coords: Coords = {
    lat: 12.938113469567682,
    lng: 77.6944492676392
  }

  const heatMap = [
    {
      lat: 12.938113469567682,
      lng: 77.6944492676392,
      weight: 1
    }, {
      lat: 12.938113469567682,
      lng: 77.6744492676392,
      weight: 0.7
    }, {
      lat: 12.938113469567682,
      lng: 77.6544492676392,
      weight: 0.5
    }, {
      lat: 12.938113469567682,
      lng: 77.6344492676392,
      weight: 0.8
    }
  ];


  const imageArray = [
    {
      url: "https://a0.muscache.com/im/pictures/8696a3d0-40e6-46f8-8398-a41a09f53455.jpg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/82446534-440a-4d8e-9058-fe515a5c5c69.jpg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/6204a4f7-1728-424f-8304-a7775404b1ef.jpg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/3f7fec42-8d28-4ad6-92ae-ebe3e1d8d758.jpg?im_w=720"
    },
    {
      url: "https://a0.muscache.com/im/pictures/0ba4475d-0a5b-4ce0-a22c-5aac20cd45f6.jpg?im_w=720"
    }
  ]

  return (
    <>
      <ProductDetailsWrapper className='product-card' dir='ltr'>
        <PageTopbarLayout>
          <PageTopTitle>Well-lit billboard in City center, Coimbatore.</PageTopTitle>
          <PageTitleTopSubbar>
            <PageTitleTopLocationLink href="/coimbatore">
              Coimbatore, Tamil Nadu, India.
            </PageTitleTopLocationLink>
            <PageTopRight>
              <PageTopShare> <ShareIcon height="15px" width="15px" /> Share </PageTopShare>
              <PageTopSave> <FavoriteIcon height="15px" width="15px" /> Save </PageTopSave>
            </PageTopRight>
          </PageTitleTopSubbar>
        </PageTopbarLayout>
        {!isRtl && (
          <ProductPreview>
            <GridedPreview
              items={imageArray}
              deviceType={deviceType}
            />
            {/* <CarouselWithCustomDots
              items={product.gallery}
              deviceType={deviceType}
            /> */}

          </ProductPreview>
        )}

        <ProductInfo dir={isRtl ? 'rtl' : 'ltr'}>
          <ProductTitlePriceWrapper>
            <ProductTitle>Broad Billboard in Saibaba Colony owned by Times Media </ProductTitle>
            <ProductTitleSubText>900 sqft - 30ft x 30ft - Well lit</ProductTitleSubText>
          </ProductTitlePriceWrapper>

          <ProductHighlightSection>
            <ProductHighlightsWrapper>
              <Highlights
                title="Adjacent to Mall"
                desc="This billboard is at a walking distance from the mall which inturn attracts more customers and target a rich and affordalbe neighbourhood."
                icon={<MallIcon height="25px" width="25px" />}
              />
              <Highlights
                title="Adjacent to shopping area"
                desc="This billboard is at a walking distance from the mall which inturn attracts more customers and target a rich and affordalbe neighbourhood."
                icon={<ShoppingIcon height="25px" width="25px" />}
              />
              <Highlights
                title="High pedestrian visibility"
                desc="This billboard is at a walking distance from the mall which inturn attracts more customers and target a rich and affordalbe neighbourhood."
                icon={<ShoppingIcon height="25px" width="25px" />}
              />
            </ProductHighlightsWrapper>
          </ProductHighlightSection>

          {/* <ProductLocationSection key="map">
            <SimpleMap center={coords} zoom={10} heatMapPositions={heatMap} />
          </ProductLocationSection> */}

          <DateRangePicker
            startDate={startDate}
            startDateId="start-date"
            endDate={endDate}
            endDateId="end-date"
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
            showClearDates={true}
            block={true}
            showDefaultInputIcon={true}
            keepOpenOnDateSelect={true}
            reopenPickerOnClearDates={true}
          />

          {/* <TripDatePicker
            startDateId="search_start_date"
            endDateId="search_end_date"
            autoFocusEndDate={false}
            showInputs={true}
          /> */}
          <ProductPriceWrapper>
            <ProductPrice>
              {CURRENCY}
              {product.salePrice ? product.salePrice : product.price}
            </ProductPrice>

            {product.discountInPercent ? (
              <SalePrice>
                {CURRENCY}
                {product.price}
              </SalePrice>
            ) : null}
          </ProductPriceWrapper>

          <ProductDescription>
            <ReadMore character={600}>{product.description}</ReadMore>
          </ProductDescription>

          <ProductCartWrapper>
            <ProductCartBtn>
              {!isInCart(data.id) ? (
                <Button
                  className='cart-button'
                  variant='primary'
                  size='big'
                  onClick={handleAddClick}
                >
                  <CartIcon mr={2} />
                  <ButtonText>
                    <FormattedMessage
                      id='addToCartButton'
                      defaultMessage='Add to cart'
                    />
                  </ButtonText>
                </Button>
              ) : (
                <Counter
                  value={getItem(data.id).quantity}
                  onDecrement={handleRemoveClick}
                  onIncrement={handleAddClick}
                  className='card-counter'
                  variant='altHorizontal'
                />
              )}
            </ProductCartBtn>
          </ProductCartWrapper>

          <ProductMeta>
            <MetaTitle>Tags:</MetaTitle>
            <MetaSingle>
              {product?.categories?.map((item: any) => (
                <Link
                  href={`/${product.type.toLowerCase()}?category=${item.slug}`}
                  key={`link-${item.id}`}
                >
                  <a>
                    <MetaItem>{item.title}</MetaItem>
                  </a>
                </Link>
              ))}
            </MetaSingle>
          </ProductMeta>
        </ProductInfo>

        {isRtl && (
          <ProductPreview>
            <CarouselWithCustomDots
              items={product.gallery}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}
      </ProductDetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id='intlRelatedItems'
            defaultMessage='Related Items'
          />
        </h2>

        <ProductGrid
          type={product.type.toLowerCase().replace('_', '-')}
          loadMore={false}
          fetchLimit={5}
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
