import styled from 'styled-components';
import logoPng from '../../../resources/image/nav-logo.png';

export const HeaderWrapper = styled.header`
  position: relative;
  height: 55px;
  border-bottom: 1px solid #f0f0f0;
  &>.width-limit {
    position: relative;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
  }
  & .nav-item>.iconfont {
    float: left;
    margin-right: 5px;
    font-size: 20px;
  }
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
  float: left;
  line-height: 56px;
  margin-right: 10px;
  padding: 0 15px;
  color: #333;
  cursor: pointer;
  font-size: 17px;
  &.active {
    color: #ea6f5a;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NavSearch = styled.div`
  position: relative;
  float: left;
  margin-top: 9px;
  margin-left: 15px;

  &>input {
    padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    background-color: #eee; 
    border: 1px solid transparent;
    border-radius: 19px;  
    box-sizing: border-box;
    color: #666;
    font-size: 14px;  
    outline: none;
    transition: width .5s;
    &::placeholder {
      color: #999;
    }
  }
  &>input:focus {
    width: 320px;
  }
  &>.search-btn {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    color: #999;
    cursor: pointer;
    outline: none;
    &>.iconfont {
      font-size: 17px;  
    }
  }
  &>input:focus+.search-btn {
    background-color: #969696;
    border-radius: 50%;
    color: #fff!important;
    &>.iconfont {

    }
  }
`;

export const SearchTrendWrapper = styled.div`
  position: absolute;
  top: 47px;
  left: 0;
  padding: 20px 20px 10px;
  width: 250px;
  min-height: 100px;
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  &>.header {
    margin-bottom: 10px;
    color: #969696;
    line-height: 20px;
    font-size: 14px;
    &>.title {
      float: left;
    }
    &>.switch {
      float: right;
      cursor: pointer;
      font-size: 13px;
      &:hover {
        color: #2f2f2f;
      }
      &>i {
        display: inline-block;
        margin-right: 4px;
        line-height: 1;
        font-size: 13px;
      }
    }
    &::after {
      content: " ";
      display: block;
      clear: both;
    }
  }
  &>.list {
    display: inline-block;
    color: #767676;
    font-size: 12px;
    &>li {
      display: inline-block;
      margin-right: 10px;
      line-height: 28px;
      &>a {
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          color: #333;
          border-color: #b4b4b4;
        }
      }
    }

  }
  &::before {
    content: " ";
    position: absolute;
    top: -22px;
    display: inline-block;
    border: 12px solid white;
    border-color: transparent transparent #fff;
  }
  &::after {
    content: " ";
    position: absolute;
    left: 27px;
    top: -5px;
    z-index: -1;
    display: inline-block;
    width: 10px;
    height: 10px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    transform: rotate(45deg);
  }
`;


export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.a`
  float: right;
  padding: 6px 12px;
  height: 38px;
  line-height: 24px;
  border: 1px solid #ea6f5a;
  border-radius: 20px;
  box-sizing: border-box;
  background: white;
  font-size: 15px;
  text-align: center;
  &.login {
    float: right;
    margin: 10px 6px 0 10px;
    color: #969696;
    border: 1px solid transparent;
    font-size: 15px;
    font-weight: 400;
  }
  &.reg {
    margin: 9px 5px 0 15px;
    width: 80px;
    color: #ea6f5a;
    cursor: pointer;
    &:hover {
      color: #ec6149;
      border-color: #ec6149;
      background-color: rgba(236,97,73,.05);
    }
  }
  &.writting {
    margin: 8px 15px 0;
    width: 100px;
    height: 40px;
    color: white;
    cursor: pointer;
    background: #ea6f5a;
    border: 1px solid #ea6f5a;
    &:hover {
      color: #fff;
      background-color: #ec6149;
    }
    &>.iconfont {
      float: none;
      margin-right: 3px;
      vertical-align: middle;
      font-size: 19px;
    }
  }
`;

export const StyleMode = styled.a`
  float: right;
  padding: 17px 10px 17px 15px;
  color: #969696;
  font-size: 17px;
  &>.iconfont {
    margin-right: 0;
    line-height: 20px;
    font-size: 24px;
  }
`;