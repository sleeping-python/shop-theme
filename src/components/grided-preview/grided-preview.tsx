import { ItemWrapper } from 'features/user-profile/order/order.style';
import React from 'react';
import { GridedImageaContainerArra, GridContainer, GridedWrapper } from './grided-preview.styles';

const GridedPreview = ({
  items = [],
  title,
  deviceType: { mobile, tablet, desktop },
  ...rest
}: any) => {

  const images = items.slice(0, 5).map((item: any, index: number) => {
    const GridedImageContainer = GridedImageaContainerArra[index];
    return <GridedImageContainer key={"Grided_image_"+index}>
      <img 
        src={item.url}
        key={index}
        alt={title}
        style={{ width: '100%', height: '100%', position: 'relative', borderRadius: "inherit", objectFit: "cover" }}
      />
    </GridedImageContainer>
  });
  return (
    <GridedWrapper>
      <GridContainer>
        {images}
      </GridContainer>
    </GridedWrapper>
  )
}

export default GridedPreview;