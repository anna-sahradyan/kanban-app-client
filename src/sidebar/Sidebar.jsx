import React, { useState } from 'react';
import { Bars, Logo, Main, SidebarContainer, SidebarItemBox, SidebarSection, Title, TopSection } from './sidebarStyled';
import { useNavigate } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import menu from '../../data/sidebar';
import SidebarItems from './SidebarItems';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);
  const goHome = () => {
    navigate('/');
  };
  return (
    <SidebarContainer>
      <SidebarSection style={{ width: isOpen ? '230px' : '60px' }}>
        <TopSection>
          <Logo style={{ display: isOpen ? 'block' : 'none' }}>
            <CottageOutlinedIcon
              style={{ cursor: 'pointer' }}
              onClick={goHome} />
          </Logo>
          <Bars
            style={{ marginLeft: isOpen ? '120px' : '0px' }}>
            <button></button>
            <HiMenuAlt3 color={' #F9F6E5'} onClick={toggle} />
          </Bars>
        </TopSection>
        <Title>All Boards</Title>
        <SidebarItemBox>

        </SidebarItemBox>
        {menu.map((item, index) => {
          return <SidebarItems key={index} item={item} isOpen={isOpen} />;
        })}
      </SidebarSection>
      <Main
        style={{
          paddingLeft: isOpen ? '230px' : '60px',
          transition: 'all .5s',
        }}>
        {children}
      </Main>

    </SidebarContainer>
  )
    ;
};

export default Sidebar;
