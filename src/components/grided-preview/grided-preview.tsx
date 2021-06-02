import { ItemWrapper } from 'features/user-profile/order/order.style';
import React from 'react';
import { GridedImageaContainerArra, GridedWrapper } from './grided-preview.styles';

const GridedPreview = ({
  items = [],
  title,
  deviceType: { mobile, tablet, desktop },
  ...rest
}: any) => {

  const images = items.slice(0, 5).map((item: any, index: number) => {
    const GridedImageContainer = GridedImageaContainerArra[index];
    return <GridedImageContainer>
      <img
        src={item.url}
        key={index}
        alt={title}
        style={{ width: '100%', height: '100%', position: 'relative', borderRadius: "inherit" }}
      />
    </GridedImageContainer>
  });
  return (
    <GridedWrapper>
      {images}
    </GridedWrapper>
  )
}

export default GridedPreview;