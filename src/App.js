import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width:100%;
  height:150px;
  justify-content: space-between;
  align-items:center;
  background-color:red;
`

const Ul = styled.ul`
  width:100%;
  display:flex;
  justify-content:space-between;
  flex-flow:row nowrap;
  list-style:none;

  a{
    color:#fff;
    font-size:14px;
    text-decoration:none;
  }

  @media (max-width:768px){
    flex-flow:column nowrap;
    background-color:#3f3f3f;
    position:fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 100px 0px 350px 40px;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }

`

const StyledBurguer = styled.div`
  width: 10rem;
  height: 10rem;
  position: fixed;
  /* top: 15px; */
  /* right: 0px; */
  z-index: 1;

    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

  div {
    width: 150px;
    height: 10px;
    background-color: ${({ open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const settings = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/',
    title: 'Service'
  }
]

const Burguer = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNav open={open} />
    </>
  )

}

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {/* {settings.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))} */}
    </Ul>
  )
}

function App() {
  return (
    <div className="header">
      <Nav>
        <Burguer />
      </Nav>
    </div>
  );
}

export default App;
