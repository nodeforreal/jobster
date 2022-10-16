import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const Logo = (props) => {
  return (
    <Wrapper {...props}>
      <img src={logo} alt="logo" className='logo' />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Logo