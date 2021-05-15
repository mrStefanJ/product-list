import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import styled from 'styled-components';
import img from '../images/filter.svg';
import { setSearchTerm } from './action/index';
import ProductGroup from './ProductGroup';
import Sheft from './Sheft';

const FormSearch = styled.div`
  position: relative;
  padding: 5px 6px 7px;
  background: #60a5ea;
`;

const Icon = styled.img`
  position: absolute;
  left: 16px;
  top: 11px;
  bottom: 5px;
  width: 18px;
`;

const Input = styled.input`
position: relative;
  border-width: 0;
  border-color: transparent;
  border-radius: 4px;
  width: calc(100% - 37px);
  height: 32px;
  padding: 0;
  padding-left: 37px;
  font-size: 16px;
  color: #aaaaaa;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #aaaaaa;
  }
}
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 10% 10% 25% 25%;
  height: 35px;
  padding-left: 33px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
`;

const ProductName = styled.span`
  padding: 13px 0 11px;
  text-transform: uppercase;
  color: #aaaaaa;
  font-size: 10px;
  line-height: 11.5px;
  font-weight: 700;
  &:nth-child(1) {
    grid-column: 1;
  }
  &:nth-child(2) {
    grid-column: 2;
  }
  &:nth-child(3) {
    grid-column: 3;
  }
  &:nth-child(4) {
    grid-column: 4;
  }
  &:nth-child(5) {
    grid-column: 5;
  }
  &:nth-child(6) {
    grid-column: 6;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 10% 10% 25% 25%;
  padding-left: 33px;
  border-bottom: 1px solid #dddddd;
  text-align: left;
  color: #333333;
`;

const Item = styled.div`
padding: 14px 0 12px;
font-size: 12px;
line-height: 14px;
min-width: 150px;
&:nth-child(1) {
  grid-column: 1;
}
&:nth-child(2) {
  grid-column: 2;
}
&:nth-child(3) {
  grid-column: 3;
}
&:nth-child(4) {
  grid-column: 4;
}
&:nth-child(5) {
  grid-column: 5;
}
&:nth-child(6) {
  grid-column: 6;
}
`;

const ListItems = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  return (
    <>
      <FormSearch>
        <Input
          type="text"
          placeholder="Filter by name"
          value={state.searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <Icon src={img} alt="filter icon" />
      </FormSearch>
      <Products>
        <ProductName>ean / plu</ProductName>
        <ProductName>name</ProductName>
        <ProductName>producer</ProductName>
        <ProductName>size</ProductName>
        <ProductName>shelf</ProductName>
        <ProductName>product group</ProductName>
      </Products>

      <AutoSizer>
        {({ width }) => (
          <List
            height={980}
            width={width}
            itemCount={state.products.length}
            itemSize={41}>
            {({ style, index }) => (
              <Items key={state.products[index].id} style={style}>
                <Item>{state.products[index].ean_plu}</Item>
                <Item>{state.products[index].name}</Item>
                <Item>{state.products[index].producer}</Item>
                <Item>{state.products[index].wt_vol_pce}</Item>
                <Item><Sheft product={state.products[index]} /></Item>
                <Item><ProductGroup product={state.products[index]} /></Item>
              </Items>
            )}
          </List>
        )}
      </AutoSizer>
    </>
  );
};

export default ListItems