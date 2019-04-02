import styled from 'styled-components';
import logoPng from '../../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPng});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  background: white;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: white;
    background: #ec6149;
  }
`;