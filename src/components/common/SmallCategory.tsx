import { MouseEventHandler, useState } from 'react';

// css
import tw, { styled } from 'twin.macro';

const Category = ({ category }: { category: string }) => {
  return <img src={`/src/assets/icons/category/${category}.svg`} />;
};

const CategoryBox = styled.div`
  ${tw`flex flex-col items-start order-5 w-full px-4 py-3 gap-[10px] text-white border-b border-solid border-dark-grey10`}

  &:hover {
    ${tw`bg-dark-primary-var`}
  }

  &.choose {
    ${tw`bg-dark-primary-var`}
  }
`;

const SubCategory = styled.div`
  ${tw`flex items-center h-fit p-0 gap-[13px]`}
`;

interface SmallProps {
  isClicked?: React.MouseEventHandler<HTMLDivElement>;
  title: string;
}

const SmallCategory = ({ isClicked, title }: SmallProps) => {
  const [isChoose, setIsChoose] = useState<boolean>(false);

  return (
    <CategoryBox onClick={isClicked}>
      <SubCategory>
        <Category category={title} />
        <p className="text-h3">{title}</p>
      </SubCategory>
    </CategoryBox>
  );
};

export default SmallCategory;
