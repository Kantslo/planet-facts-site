import { useParams } from "react-router-dom";
import data from "./data.json";
import { useState } from "react";
import styled from "styled-components";

export default function Planet() {
  const { planetName } = useParams();
  const planet = data.find(
    (planet) => planet.name.toLowerCase() === planetName.toLowerCase()
  );

  const [content, setContent] = useState(data[0].overview.content);

  const [viewType, setViewType] = useState("overview");

  console.log(planetName);

  const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 304px;

    @media (min-width: 768px) {
      height: 460px;
      grid-area: 1 / 1 / 2 / 3;
    }

    @media (min-width: 1440px) {
      height: 754px;
      grid-area: 1 / 1 / 3 / 2;
    }
  `;

  const PlanetImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.383);

    @media (min-width: 768px) {
      transform: scale(0.634015);
    }

    @media (min-width: 1440px) {
      transform: scale(1);
    }
  `;

  const PlanetSurface = styled.img`
    position: absolute;
    top: 20%;
    transform: scale(0.2);

    @media (min-width: 768px) {
      transform: scale(0.35);
      top: 45%;
    }

    @media (min-width: 1440px) {
      transform: scale(0.6);
      top: 55%;
    }
  `;

  const PlanetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 28px;

    @media (min-width: 768px) {
      width: 339px;
      align-items: start;
      grid-area: 2 / 1 / 3 / 2;
      margin: 0 auto;
    }

    @media (min-width: 1440px) {
      grid-area: 1 / 2 / 2 / 3;
      padding: 0;
    }
  `;

  const PlanetName = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: "Antonio";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 48px;
      margin-bottom: 24px;
    }

    @media (min-width: 1440px) {
      font-size: 80px;
      margin-top: 126px;
    }
  `;

  const Content = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-family: "Spartan";
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    height: 132px;

    @media (min-width: 768px) {
      text-align: left;
      height: 110px;
    }

    @media (min-width: 1440px) {
      font-size: 14px;
      line-height: 25px;
    }
  `;

  const Source = styled.p`
    color: #fff;
    font-family: "Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    opacity: 0.5;
    margin-bottom: 28px;

    @media (min-width: 768px) {
      margin: 32px 0 41px;
    }

    @media (min-width: 1440px) {
      font-size: 14px;
      margin-bottom: 24px;
    }
  `;

  const SourceLink = styled.a`
    color: #fff;
    font-family: "Spartan";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  `;

  const Properties = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 47px;

    @media (min-width: 768px) {
      justify-content: space-between;
      margin: 0 auto;
      flex-direction: row;
      grid-area: 3 / 1 / 4 / 3;
    }

    @media (min-width: 1440px) {
      grid-area: 3 / 1 / 4 / 3;
      gap: 30px;
    }
  `;

  const PropertieDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 327px;
    height: 48px;
    flex-shrink: 0;
    padding: 0 24px;

    @media (min-width: 768px) {
      flex-direction: column;
      align-items: start;
      width: 164px;
      height: 88px;
      padding: 16px 15px;
      margin-top: 41px;
    }

    @media (min-width: 1440px) {
      width: 255px;
      height: 128px;
      justify-content: center;
      padding: 20px 23px;
    }
  `;

  const PropertieName = styled.p`
    color: #fff;
    font-family: "Spartan";
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.727px;
    text-transform: uppercase;
    opacity: 0.5;

    @media (min-width: 1440px) {
      font-size: 11px;
      letter-spacing: 1px;
      line-height: 25px;
    }
  `;

  const PropertieValues = styled.span`
    color: #fff;
    text-align: right;
    font-family: "Antonio";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 24px;
    }

    @media (min-width: 1440px) {
      font-size: 40px;
      letter-spacing: -1.5px;
    }
  `;

  const PlanetContent = styled.div`
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 0.5fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
    }
  `;

  const ViewBtn = styled.button`
    border: none;
    outline: none;
    background: transparent;
    height: 50px;
    border-bottom: ${(props) =>
      props.active ? `4px solid ${planet.color}` : ""};

    @media (min-width: 768px) {
      width: 281px;
      height: 40px;
      flex-shrink: 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: ${(props) => (props.active ? planet.color : "")};
      border: ${(props) => (props.active ? "none" : "")};
    }

    @media (min-width: 1440px) {
      width: 350px;
      height: 48px;
      flex-shrink: 0;
      &:hover {
        background: ${(props) =>
          props.active ? "" : "rgba(216, 216, 216, 0.2)"};
        border: none;
      }
    }
  `;

  const ViewLists = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    @media (min-width: 768px) {
      justify-content: start;
      flex-direction: column;
      gap: 16px;
      border: none;
      grid-area: 2 / 2 / 3 / 3;
    }

    @media (min-width: 1440px) {
      grid-area: 2 / 2 / 3 / 3;
    }
  `;

  const ViewText = styled.p`
    color: white;
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    font-size: 9px;
    cursor: pointer;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      padding: 0 20px;
    }
  `;

  const ViewListNumber = styled.span`
    display: none;

    @media (min-width: 768px) {
      display: inline;
      opacity: 0.5;
      padding-right: 14px;
      color: #fff;
      font-family: "Spartan";
      font-size: 9px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 1.929px;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <div className="planet">
        <PlanetContent>
          <ViewLists>
            <ViewBtn
              active={viewType === "overview"}
              onClick={() => {
                setViewType("overview");
                setContent(planet.overview.content);
              }}>
              <ViewText>
                <ViewListNumber>01</ViewListNumber>
                Overview
              </ViewText>
            </ViewBtn>
            <ViewBtn
              active={viewType === "structure"}
              onClick={() => {
                setViewType("structure");
                setContent(planet.structure.content);
              }}>
              <ViewText>
                <ViewListNumber>02</ViewListNumber>
                Structure
              </ViewText>
            </ViewBtn>
            <ViewBtn
              active={viewType === "surface"}
              onClick={() => {
                setViewType("surface");
                setContent(planet.geology.content);
              }}>
              <ViewText>
                <ViewListNumber>03</ViewListNumber>Surface
              </ViewText>
            </ViewBtn>
          </ViewLists>

          <ImageContainer>
            <PlanetImage
              src={
                viewType === "structure"
                  ? planet.images.internal
                  : planet.images.planet
              }
              alt="image"
            />
            {viewType === "surface" && (
              <PlanetSurface src={planet.images.geology} alt="image" />
            )}
          </ImageContainer>

          <PlanetInfo>
            <PlanetName>{planet.name}</PlanetName>
            <Content>{content}</Content>
            <Source>
              Source <span>:</span>
              <SourceLink href={planet.overview.source}>Wikipedia </SourceLink>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path
                  fill="#FFF"
                  d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                  opacity=".5"
                />
              </svg>
            </Source>
          </PlanetInfo>
          <Properties>
            <PropertieDivs>
              <PropertieName>rotation time</PropertieName>
              <PropertieValues>{planet.rotation}</PropertieValues>
            </PropertieDivs>
            <PropertieDivs>
              <PropertieName>revolution time</PropertieName>
              <PropertieValues>{planet.revolution}</PropertieValues>
            </PropertieDivs>
            <PropertieDivs>
              <PropertieName>radius</PropertieName>
              <PropertieValues>{planet.radius}</PropertieValues>
            </PropertieDivs>
            <PropertieDivs>
              <PropertieName>average temp.</PropertieName>
              <PropertieValues>{planet.temperature}</PropertieValues>
            </PropertieDivs>
          </Properties>
        </PlanetContent>
      </div>
    </>
  );
}
