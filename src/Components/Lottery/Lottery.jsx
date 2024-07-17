import "./lottery.css";
function Lottery() {
  return (
    <>
      <div className="main-lottery">
        <div className="lottery">
          <div className="lottery-wrapper">
            <div>
              <div className="lottery-heading">
                <div className="lottery-heading-one">
                  <h2>قرعه‌کشی ماهیانه گلستان</h2>
                </div>
                <div className="lottery-heading-two">
                  <h2>قرعه&zwnj;کشی ماهیانه مصرف&zwnj;کنندگان چای گلستان</h2>
                </div>
                <div className="lottery-heading-three">
                  <h2>
                    هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال
                    کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های
                    ماهیانه سال 1403شرکت کنند. نگهداری از بسته‌بندی محصول برای
                    اهدای جایزه الزامی است.
                  </h2>
                </div>
                <a className="btn-information-more" target="_blank">
                  اطلاعات بیشتر
                </a>
              </div>
              <div className="lottery-image">
                <div>
                  <div>
                    <img src="../../../public/images/tea-pic1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lottery;
