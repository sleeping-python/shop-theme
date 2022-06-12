import React, { ReactElement, useEffect } from 'react';
import {
  ProductHighlightHeading,
  ProductHighlightDetails,
  ProductHighlight,
  ProductHighlightHeadingIcon,
  ProductHighlightHeadingText,
} from './product-details-four.style';
type ChildProps = {
  title: string,
  desc: string,
  icon?: ReactElement,
};

const Highlights: React.FunctionComponent<ChildProps> = ({ title, desc, icon }) => {
  return (
    <>
      <ProductHighlight>
        <ProductHighlightHeading>
          <ProductHighlightHeadingIcon>
            {icon}
          </ProductHighlightHeadingIcon>
          <ProductHighlightHeadingText>{title}</ProductHighlightHeadingText>
        </ProductHighlightHeading>
        <ProductHighlightDetails>
          {desc}
        </ProductHighlightDetails>
      </ProductHighlight>
    </>
  );
};

export default Highlights;