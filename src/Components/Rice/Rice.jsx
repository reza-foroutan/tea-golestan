import "./rice.css";
function Rice() {
  return (
    <>
      <div className="rice">
        <div>
          <div className="rice-image">
            <img src="../../../public/images/image2-new-1.jpg" />
          </div>
          <div className="rice-box">
            <div className="rice-heading">برنج گلستان</div>
            <div className="rice-heading-two">معرفی محصول</div>
          </div>
        </div>
        <div className="divider-border"></div>
        <div className="rice-text-wrapper">
          <div>
            <div className="rice-text-heading">
              <h2>رکن اول غذای ایرانی</h2>
            </div>
            <div className="rice-text">
              <p>
                مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌
                طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت
                شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه
                بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم
                بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
                گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌
                لایق بهترین‌ها هستند.
              </p>
            </div>
            <div className="rice-btns">
              <a className="btn-information-more" target="_blank">
                محصولات برنج
              </a>
              <a className="btn-information-more" target="_blank">
                آشپزخانه گلستان
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rice;
