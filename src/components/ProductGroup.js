import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import img from '../images/drop-down.svg';
import { setGroupId } from './action/index';

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

const ProductGroup = ({ product }) => {
  const groups = useSelector(state => state.groups);
  const selectedGroups = useSelector(state => state.selectedGroups);
  const dispatch = useDispatch();
  const selectedGroupId = selectedGroups.filter((item) => item[product.id])[0];
  return (
    <Select value={selectedGroupId[product.id]} onChange={(e) => dispatch(setGroupId(product.id, e.target.value))}>
      {groups.map((group, i) => {
        return (
          <option key={i} value={group.id}>{group.name}</option>
        )
      })}
    </Select>
  )
}

export default ProductGroup
