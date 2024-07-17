import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer-width-fixer">
          <section className="footer-socail">
            <div>
              <div>
                <a href="#">
                  <div className="icon-facebook"></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="icon-linkdin"></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="icon-instagram"></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="icon-telegram"></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="icon-aparat"></div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div className="icon-mag-golestan"></div>
                </a>
              </div>
            </div>
          </section>
          <section className="footer-divider-border"></section>
          <section className="footer-menu">
            <div className="footer-menu-wrapper"></div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
