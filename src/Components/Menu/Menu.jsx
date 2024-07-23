import "./menu.css";
const Menu = () => {
  let menuItems = [
    { id: 1, nameItem: "صفحه اصلی", href: "/", alt: "", title: "" },
    { id: 2, nameItem: "شرکت گلستان", href: "/", alt: "", title: "" },
    { id: 3, nameItem: "محصولات", href: "/", alt: "", title: "" },
    { id: 4, nameItem: "وبلاگ", href: "/", alt: "", title: "" },
    { id: 5, nameItem: "قرعه کشی", href: "/", alt: "", title: "" },
    { id: 6, nameItem: "استخدام", href: "/", alt: "", title: "" },
    { id: 7, nameItem: "تماس با ما", href: "/", alt: "", title: "" },
    { id: 8, nameItem: "EN", href: "/", alt: "", title: "" },
  ];
  return (
    <>
      <section className="menu">
        <div className="menu_container">
          <nav className="">
            <div className="">
              <div className="nav-logo">
                <a href="#">
                  <img src="../../../public/images/logo-fr.png" alt="" />
                </a>
              </div>
              <div className="menu_list">
                {menuItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <a href="">{item.nameItem}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Menu;
