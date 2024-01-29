import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Div,  SidebarItem,  SidebarTitle, Span, SpanIcon } from './sidebarStyled';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SidebarItems = ({ item, isOpen }) => {
    const [expandMenu, setExpandMenu] = useState(false);
    if (item.children) {
      return (
        <>
          <Div>
            <SidebarTitle>
              <Span>
                {item.icon && <SpanIcon>{item.icon}</SpanIcon>}
                {isOpen && <Div >{item.title}</Div>}
              </Span>
              <Div>
                <MdKeyboardArrowRight
                  onClick={() => setExpandMenu(!expandMenu)}
                />
              </Div>
            </SidebarTitle>
            <Div>
              {item.children.map((child, index) => {
                return (
                  <Div key={index}>
                    <NavLink to={child.path} >
                      <SidebarItem >
                        <SidebarTitle >
                                 <span>
                                   {child.icon && <SpanIcon >{child.icon}</SpanIcon>}
                                   {isOpen && <Div>{child.title}</Div>}
                                 </span>
                        </SidebarTitle>
                      </SidebarItem>
                    </NavLink>
                  </Div>
                );
              })}
            </Div>
          </Div>
        </>
      );
    } else {
      return (
        <Div>
          <NavLink to={item.path}>
            <SidebarItem>
              <SidebarTitle>
                <Span>
                  {item.icon && <SpanIcon>{item.icon}</SpanIcon>}
                  {isOpen && <Div>{item.title}</Div>}
                </Span>
              </SidebarTitle>
            </SidebarItem>
          </NavLink>
        </Div>
      );
    }
  }
;

export default SidebarItems;