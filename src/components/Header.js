import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    padding: 10px;
    background: linear-gradient(180deg, #387DC2 0%, #2B65B5 100%);
    text-align: center;
`;

const Title = styled.h1`
    color: #ffffff;
    font-size: 20px;
    line-height: 23px;`;

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  )
}

Header.defaultProps = {
  title: 'Products',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
