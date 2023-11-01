import data from "./data.json";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Planet from "./Planet";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width: 768px) {
      height: 160px;
      flex-direction: column;
    }

    @media (min-width: 1440px) {
      flex-direction: row;
      height: 85px;
    }
  `;

  const Hamburger = styled.svg`
    background-image: url("/src/assets/icon-hamburger.svg");
    background-repeat: no-repeat;
    width: 24px;
    height: 17px;
    opacity: ${isOpen ? "0.5" : ""};

    @media (min-width: 768px) {
      display: none;
    }
  `;

  const Header = styled.h1`
    color: #fff;
    font-size: 28px;
    font-style: normal;
    font-family: "Antonio", sans-serif;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.05px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  const NavLinks = styled.ul`
    display: ${isOpen ? "flex" : "none"};
    position: ${isOpen ? "absolute" : ""};
    background: ${isOpen ? "#070724" : ""};
    width: ${isOpen ? "100%" : ""};
    height: ${isOpen ? "540px" : ""};
    top: 0;
    left: 0;
    flex-direction: column;
    z-index: 10;
    top: 68.5px;
    width: 100%;
    height: 598px;
    padding-top: 24px;

    @media (min-width: 768px) {
      display: flex;
      position: unset;
      flex-direction: row;
      height: unset;
      border-bottom: none;
      background: unset;
    }

    @media (min-width: 1440px) {
      width: 50vw;
      padding: 0;
    }
  `;

  const PlanetList = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    text-decoration: none;
    height: 82px;

    &:last-child {
      border: none;
    }

    @media (min-width: 768px) {
      border: none;
      justify-content: space-evenly;
    }

    @media (min-width: 1440px) {
      &:hover {
        border-top: 4px solid ${(props) => props.planetColor};
        a {
          opacity: 1;
        }
      }
    }
  `;

  const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    opacity: 0.75;
    text-align: center;
    font-family: "Spartan";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1.364px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 11px;
      letter-spacing: 1px;
    }
  `;

  const ListIcon = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;

    @media (min-width: 768px) {
      display: none;
    }
  `;

  const NavLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
  `;

  const ArrowIcon = styled.svg`
    @media (min-width: 768px) {
      display: none;
    }
  `;

  return (
    <>
      <header>
        <Navigation>
          <Header>The Planets</Header>
          <Hamburger onClick={toggleNav} />
          <NavLinks>
            {data.map((planet) => (
              <PlanetList planetColor={planet.color}>
                <NavLeft>
                  <ListIcon
                    style={{ background: `${planet.color}` }}></ListIcon>
                  <StyledNavLink
                    key={planet.name}
                    to={`planets/${planet.name.toLowerCase()}`}
                    onClick={() => {
                      toggleNav();
                    }}>
                    {planet.name}
                  </StyledNavLink>
                </NavLeft>
                <ArrowIcon
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="8">
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </ArrowIcon>
              </PlanetList>
            ))}
          </NavLinks>
        </Navigation>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/planets/mercury" />} />
        <Route path="planets/:planetName" element={<Planet />} />
      </Routes>
    </>
  );
}

export default App;
