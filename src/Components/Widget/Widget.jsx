import "./widget.css";
function Widget() {
  return (
    <>
      <div className="Widget">
        <div className="Widget-wrapper">
          <div>
            <div className="box">
              <div>
                <img
                  src="../../../public/images/statistics-icon-1.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>سرمایه انسانی</p>
              </div>
              <div className="divider-border"></div>
            </div>
            <div className="box">
              <div>
                <img
                  src="../../../public/images/statistics-icon-2.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>مراكز فروش</p>
              </div>
              <div className="divider-border"></div>
            </div>
            <div className="box">
              <div>
                <img
                  src="../../../public/images/statistics-icon-3.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>محصولات گلستان</p>
              </div>
              <div className="divider-border"></div>
            </div>
            <div className="box">
              <div>
                <img
                  src="../../../public/images/statistics-icon-4.png"
                  alt=""
                />
              </div>
              <div className="text">
                <p>مشتریان گلستان</p>
              </div>
              <div className="divider-border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Widget;
