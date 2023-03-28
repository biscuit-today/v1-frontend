import { useState } from "react";

import Modal from "../components/common/Modal/Modal";
import Nickname from "../components/OnBoarding/Nickname";
import AboutUser from "../components/OnBoarding/AboutUser";
import AboutInterest from "../components/OnBoarding/AboutInterest";

type ClickHanlder = (event: any, item: string) => void;

const OnBoarding = () => {
  const [userData, setUserData] = useState({
    nickname: "",
    period: "",
    job: "",
    interests: "",
  });

  const [page, setPage] = useState<number>(0);

  const isClose = () => {
    return ;
  }

  const isBack = () => {
    if (page === 1) {
      setPage(0);
    } else {
      setPage(1);
    }
  }

  // 0. 닉네임 모달
  const [isName, setIsName] = useState<string>("");
  const [isCount, setIsCount] = useState<number>(0);

  const isChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    const space = /\s/;
    if (space.exec(value)) {
      setIsName(value.replace(' ', ''));
    } else {
      setIsName(value);
    }
    setIsCount(e.target.value.replace(/<br\s*\/?>/gm, "\n").length);
  }

  const nickname = () => {
    setUserData({...userData, nickname: isName});
    setPage(1);
    console.log(isName);
  }

  // 1. 직무, 연차 모달
  const [jobSelected, setJobSelected] = useState<string>("");
  const [yearSelected, setYearSelected] = useState<string>("");

  const aboutUser = () => {
    setUserData({...userData, job: jobSelected, period: yearSelected})
    console.log(jobSelected, yearSelected);
    setPage(2);
  }
  

  // 2. 닉네임, 직무/연차, 관심사 JSON 전달
  const [selectList, setSelectList] = useState<string[]>([]);

  const isClicked: ClickHanlder = (event: any, item: string) => {
    event.stopPropagation();
    if (selectList.includes(item)) {
      // 이미 리스트에 들어있다면 해당 item 삭제
      const arr = selectList.filter((element) => element !== item);
      setSelectList(arr);
    } else {
      // 없으면 해당 item 추가
      setSelectList(selectList => [...selectList, item]);
    }
    console.log(selectList);
  }

  const isSend = () => {
    // setUserData({...userData, interest: selectList})
    console.log(userData);
  }

  return (
    <>
      {page === 0
        ? <Modal content={<Nickname isClicked={nickname} isChange={isChange} isName={isName} isCount={isCount} />} onClose={isClose} />
        : page === 1
          ? <Modal content={<AboutUser isClicked={aboutUser} jobSelected={jobSelected} setJobSelected={setJobSelected} yearSelected={yearSelected} setYearSelected={setYearSelected} isBack={isBack} />} onClose={isClose} />
          : page === 2
            ? <Modal content={<AboutInterest isClicked={isClicked} isSend={isSend} isBack={isBack} selectList={selectList} />} onClose={isClose} />
            : null
      }
    </>
  )
}

export default OnBoarding;