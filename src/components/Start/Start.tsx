// css
import tw, { styled } from 'twin.macro';

// icons
import Github from '../../assets/icons/github_login.svg';
import Google from '../../assets/icons/google_login.svg';
import { useRecoilState } from 'recoil';
import { isMemberState } from '../../recoils/Start/Atoms';

const Container = styled.div`
  ${tw`w-[290px] flex flex-col gap-9 py-6`}
`

const Introduce = styled.div`
  ${tw`flex flex-col px-3 gap-4 justify-center items-center`}
`

const LoginContainer = styled.div`
  ${tw`flex flex-col py-2 px-1 gap-4 items-center`}
`

const LoginBox = styled.button`
  ${tw`w-[240px] h-17 flex justify-center items-center py-5 px-4 gap-4 rounded-12 shadow-[2px_2px_12px_rgba(0,0,0,0.2)]`}
`

const Start = () => {
  // github 로그인으로 이동
  const GithubLogin = () => {
    window.location.href = "https://j8a706.p.ssafy.io/oauth2/authorization/github";
  }

  // 구글 로그인으로 이동
  const GoogleLogin = () => {
    // window.location.href = GOOGLE_LOGIN_URL;
    window.location.href = "https://j8a706.p.ssafy.io/oauth2/authorization/google";
    
    // 백에서 넘겨주는 회원가입 유무에 따른 true/false
    const [isMember, setIsMember] = useRecoilState(isMemberState);
    setIsMember(true);
  }

  return (
    <Container>
      <Introduce>
        <span className="text-h2">시작하기</span>
        <span className="text-main text-grey50">어떤 설명이나 인사 문구 한 줄</span>
      </Introduce>
      <LoginContainer>
        <LoginBox className='bg-dark-grey20' onClick={GithubLogin} >
          <img src={Github}/>
          <span>GitHub</span>
        </LoginBox>
        <LoginBox className='bg-white' onClick={GoogleLogin}>
          <img src={Google} />
          <span className='text-black'>Google</span>
        </LoginBox>
      </LoginContainer>
    </Container>
  )
}

export default Start;