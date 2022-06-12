import Layout from 'layouts/app-layout'
import React from 'react'
import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import GridedPreview from 'components/grided-preview/grided-preview';
import ProductSingleWrapper, { ProductSingleContainer } from 'assets/styles/product-single.style';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: lightgray; */
  position:fixed;
  top:150px;
  left: 0px;
  width:100%;
  border-bottom: solid lightgrey 1px;
  border-top: solid lightgrey 1px;
  
`;

const InnerContainer = styled.header`
  max-width: 1188px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99999;
  width: 100%;
  background-color: ${themeGet('colors.white', '#ffffff')};
  box-shadow: ${themeGet('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)')};
  transition: all 0.3s ease;
`;

const Members = styled.div`
  border: solid black 2px;  
  background-color: lightblue;
`;


const imageArray = [
  {
    url:"https://a0.muscache.com/im/pictures/8696a3d0-40e6-46f8-8398-a41a09f53455.jpg?im_w=720"
  },
  {
    url:"https://a0.muscache.com/im/pictures/82446534-440a-4d8e-9058-fe515a5c5c69.jpg?im_w=720"
  },
  {
    url:"https://a0.muscache.com/im/pictures/6204a4f7-1728-424f-8304-a7775404b1ef.jpg?im_w=720"
  },
  {
    url:"https://a0.muscache.com/im/pictures/3f7fec42-8d28-4ad6-92ae-ebe3e1d8d758.jpg?im_w=720"
  },
  {
    url:"https://a0.muscache.com/im/pictures/0ba4475d-0a5b-4ce0-a22c-5aac20cd45f6.jpg?im_w=720"
  }
]
function TestComponent({deviceType}) {
  return (
    <ProductSingleWrapper>
      <ProductSingleContainer>
        <GridedPreview items={imageArray} deviceType={deviceType}>
        </GridedPreview> 
      </ProductSingleContainer>
    </ProductSingleWrapper>
  )
}

export default TestComponent;
