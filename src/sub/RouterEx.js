import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RouterEx(props) {
  const location = useLocation(); //url주소
  const navigate = useNavigate(); //이전 다음
  return (
    <main>
      <section>
        <h3>리엑트 라우더 상세설명 - 서브페이지</h3>
        <p>Route - 페이지 이동</p>
        <p>라우팅이란 사용자가 요청한 url에 따라 해당 주소로 페이지 이동</p>
        <p>리엑트에서는 route를 사용하기 위해 npm i react-router-dom 패키지 설치</p>
        <p>리액트는 SPA(Single Page Application)방식으로서 기존의 MPA(Multi PAge Application)방식에서는 여러개의 페이지를 사용해 새로운 페이지를 로드하는 방식이었으나 새로운 페이지를 로딩하지않고 하나의 페이지(컴포넌트)안에서 필요한 데이터만 로딩하여 출력하는 형태이다</p>
        <p>React-Router-Dom은 신규 페이지를 불러오지 않는 사오항에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링해주는 라이브러리이다</p>
        <h3>1. 리엑트 라우더(React Router)</h3>
        <ul>
          <li>사용자가 입력한 주소를 감지하는 역할 여러환경에서 동작할 수 있도록 여러종류의 라우더 컴포넌트 제공</li>
          <li>가장 많이 사용하는 라우더 컴포넌트는 BrowserRouter, HashRouter이다.</li>
          <li>Browser Router : 컴포넌트를 감싸는 영역으로 주로 메뉴난 헤더를 감싼다</li>
          <li>여러 Router를 감싸서 규칙이 일치하는 라우트 하나만 렌더링</li>
          <li>Route : path 속성의 경로, element속성에 컴포넌트 넣어주고 여러 라우팅을 매칭하고 싶은 경우에 url='*'</li>
          <li>Link = html a태그와 같다 미리보기시 a태그로 변경됨</li>
        </ul>
        <h3>2. 리엑트 라우터 관련태그</h3>
        {/* <p>{productId}빈 페이지 입니다</p> */}
        <ul>
          <li>hash : {location.hash}</li>
          <li>pathname : {location.pathname}</li>
          <li>search : {location.search}</li>
          <li>state : {location.state}</li>
          <li>key : {location.key}</li>
        </ul>
        <p>useNavigate를 사용하여 페이지 버튼 만들기</p>
        <ul>
          <li><button onClick={() => navigate(-2)}>뒤로 2페이지 이동</button></li>
          <li><button onClick={() => navigate(-1)}>뒤로 1페이지 이동</button></li>
          <li><button onClick={() => navigate(1)}>앞으로 1페이지 이동</button></li>
          <li><button onClick={() => navigate(2)}>앞으로 1페이지 이동</button></li>
          <li><button onClick={() => navigate('/')}>첫페이지로 이동</button></li>
        </ul>
      </section>
    </main>
  );
}

export default RouterEx;