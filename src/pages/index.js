import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const MainImage = styled.div`
  position: absolute;
  top:0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;


`


const HomePage = ({data}) => {
  console.log(data.contentfulArtist.homePageImage.resolutions)
  return(
    <MainImage>
      <Img resolutions={data.contentfulArtist.homePageImage.resolutions} style={{width:'100%'}}/>
    </MainImage>
  )
}



export default HomePage

export const mainImageQuery = graphql`
  query mainImageQuery {
    contentfulArtist (artist: {eq: "Sophie Knight"}) {
      artist
      homePageImage {
        file {
          url
        }
        resolutions (width:800) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
