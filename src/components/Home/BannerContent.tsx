import tw, { styled, css } from "twin.macro";

type BannerProps = {
  bannerUrl: string;
  imgUrl: string;
}

const BannerContainer = styled.img<{image: string}>`
  ${tw`w-[400px] h-[200px] flex`}
  ${({ image }) =>
    css`
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${image});
  `};
`;

const BannerContent = ({bannerUrl, imgUrl}: BannerProps) => {

  const onClickBanner = () => {
    window.open(bannerUrl, "_blank")
  }

  return (
    <BannerContainer onClick={onClickBanner} image={imgUrl}/>
  )
}

export default BannerContent;