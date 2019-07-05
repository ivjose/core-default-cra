import React from 'react';
import { Icon, Dropdown, Menu, Tooltip, Modal, Avatar } from 'antd';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { authContext } from 'contexts/Auth/AuthContext';

export const HeaderRight = styled.div`
  float: right;
  height: 100%;
  overflow: hidden;
  padding-right: 20px;
`;

export const HeaderAction = styled.span`
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  transition: all 0.3s;
  height: 100%;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;

export const HeaderLink = styled(Link)`
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  transition: all 0.3s;
  height: 100%;
  color: inherit;
  &:hover {
    color: inherit;
    background: rgba(0, 0, 0, 0.025);
  }
`;

const HeaderRightNav: React.FC = () => {
  const { logoutUser } = React.useContext(authContext);

  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to Logout?',
      onOk() {
        logoutUser();
      },
      onCancel() {},
    });
  };

  return (
    <HeaderRight>
      <HeaderLink to="dashboard">
        <Icon type="bell" />
      </HeaderLink>
      <Tooltip placement="bottom" title={'FAQ'}>
        <HeaderAction>
          <Icon type="exclamation-circle" />
        </HeaderAction>
      </Tooltip>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">
              <Link to="/profile">
                <Icon type="user" style={{ minWidth: 12, marginRight: 8 }} />
                My Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={showConfirm}>
              <Icon type="logout" />
              Log Out
            </Menu.Item>
          </Menu>
        }
        placement="bottomRight"
      >
        <HeaderAction>
          <Avatar
            style={{ backgroundColor: 'gray', verticalAlign: 'middle' }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span style={{ marginLeft: 8 }}>
            <b>Hi!</b> John Doe
          </span>
        </HeaderAction>
      </Dropdown>
    </HeaderRight>
  );
};

export default HeaderRightNav;
