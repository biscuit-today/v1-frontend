import { useState } from 'react';

// css
import tw, { css, styled } from 'twin.macro';

// icons
import dropdown from '../../assets/icons/arrow_drop_down.svg';
import SmallCategory from './SmallCategory';

const CategoryBox = styled.button`
  ${tw`w-full flex flex-col`}
`

const Category = styled.div`
  ${tw`flex justify-between items-center w-full h-13 box-border px-3 py-4 text-white self-stretch border-b border-solid border-dark-evaluated`}
`

const Img = styled.img`
  &.open {
    ${css`
      transform: rotate(180deg);
      animation: open-rotate 0.5s;    
    `}
  }

  &.close {
    ${css`
      animation: close-rotate 0.5s;    
    `}
  }

  ${css`
      @keyframes open-rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(180deg);
        }
      }

      @keyframes close-rotate {
        from {
          transform: rotate(180deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
  `}
`

type Content = {
  id: number;
  mainName: string;
  subCategories: {
    id: number;
    subName: string;
  }[]
}

type ClickHanlder = (event: any, item: string) => void;

interface BigCategoryProps {
  item: Content;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isClicked: ClickHanlder;
  isCategory: boolean;
}

const BigCategory = ({item, onClick, isClicked, isCategory}: BigCategoryProps) => {

  return (
    <CategoryBox onClick={onClick}>
      <Category>
        <p className="text-h3">{item.mainName}</p>
        <Img 
          src={dropdown} 
          alt="dropdown"
          className={
            isCategory ? "open" : "close" 
          }
        />
      </Category>
      {isCategory ? (
        <>
          {item.subCategories.map((content, idx) => {
            return (
              <SmallCategory 
                key={idx} 
                isClicked={(e) => {
                  isClicked(e, content.subName);
                }} 
                title={content.subName}
              />
            )
          })}
        </>
      ) : null}
    </CategoryBox>
  )
}

export default BigCategory;
