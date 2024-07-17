import "./tea.css";
function Tea() {
  return (
    <>
      <div className="tea">
        <div>
          <div className="tea-image">
            <img src="../../../public/images/image3-new.jpg" />
          </div>
          <div className="tea-box">
            <div className="tea-heading">چای گلستان</div>
            <div className="tea-heading-two">معرفی محصول</div>
          </div>
        </div>
        <div className="divider-border"></div>
        <div className="tea-text-wrapper">
          <div>
            <div className="tea-text-heading">
              <h2>سابقه‌ای به قدمت یک عمر</h2>
            </div>
            <div className="tea-text">
              <p>
                مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌
                طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت
                شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه
                بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم
                بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
                گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌
                لایق بهترین‌ها هستند.
              </p>
              <p>
                برای مردمان ایران زمین نام
                <span> گلستان&nbsp; </span>
                با چای پیوند خورده است؛&zwnj; قدیمی&zwnj;ترین محصول مجموعه
                گلستان،&zwnj; با مدرن&zwnj;ترین و بهداشتی&zwnj;ترین
                دستگاه&zwnj;های روز دنیا تهیه و بسته&zwnj;بندی می&zwnj;شود. چیزی
                كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت،
                &zwnj;عطر و طعم به یادماندنی آن است.
              </p>
            </div>
            <div className="tea-btns">
              <a className="btn-information-more" target="_blank">
                محصولات چای
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tea;
