import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import img from '../images/drop-down.svg';
import { setShelfId } from './action';

const Select = styled.select`
    width: 85%;
    border: none;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    appearance: none;
    background-image: url(${img});
    background-repeat: no-repeat, repeat;
    background-position: right .3em top 50%, 0 0;
    background-size: .65em auto, 100%;
    &:focus {
        outline: none;
    }  
`;

const Sheft = ({ product }) => {
  const shelfs = useSelector(state => state.shelfs);
  const shelfIds = useSelector(state => state.selectedShelfs);
  const dispatch = useDispatch();
  const selectedShelfId = shelfIds.filter((item) => item[product.id])[0];
  return (
    <Select value={selectedShelfId[product.id]} onChange={(e) => dispatch(setShelfId(product.id, e.target.value))}>
      {shelfs.map((shelf, i) => {
        return (
          <option key={i} value={shelf.id}>{shelf.name}</option>
        )
      })}
    </Select>
  )
}

export default Sheft
