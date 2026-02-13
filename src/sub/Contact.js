import React from 'react';

function Contact(props) {
  const formCheck = (e) => {
    // 일단 submit 막고 테스트(원하면 제거 가능)
    e.preventDefault();

    // 여기서 유효성 검사 로직 넣으면 됨
    // 예: 체크박스 확인, 빈 값 확인 등
    return true;
  };

  return (
    <main>
      <section className='fnqSection'>
        <p className="top-right">Contact US</p>
        <h2 className="title">
          정성을 다해 답변을<br />해 드리겠습니다
        </h2>

        <form
          name="질문과 답변"
          action="./api/fnqinput.php"
          method="post"
          onSubmit={formCheck}
        >
          <div className="grid">
            <div className="left">
              <div className="box">
                <label className="label" htmlFor="name">성함</label>
                <input type="text" name="name" id="name" placeholder="성함을 입력해주세요" />
              </div>

              <div className="box">
                <label className="label" htmlFor="tel">전화번호</label>
                <input type="tel" name="tel" id="tel" placeholder="전화번호를 입력해주세요" maxLength={13} />
              </div>

              <div className="box">
                <label className="label" htmlFor="email">이메일</label>
                <input type="email" name="email" id="email" placeholder="이메일을 입력해주세요" />
              </div>
            </div>

            <div className="right">
              <div className="box textarea">
                <label className="label" htmlFor="txtbox">내용</label>
                <textarea name="txtbox" id="txtbox" placeholder="내용을 입력해주세요"></textarea>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="box">
              <label className="agree" htmlFor="agree">개인정보처리방침 동의합니다</label>
              <input type="checkbox" name="agree" id="agree" />
            </div>

            <button className="send" type="submit">SEND</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
