import React from 'react'

function Footer() {
    return (
        <>
            <section className="bg-light text-center">
                <h2 className="d-none">hidden</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-social">
                                <ul className="list-unstyled">
                                    <li><a className="wow fadeInUp" href="/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a className="wow fadeInDown" href="/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a className="wow fadeInUp" href="/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a className="wow fadeInDown" href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a className="wow fadeInUp" href="/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a className="wow fadeInDown" href="/"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <p className="company-about fadeIn">© 2021 Wexim. Made With Love By <a href="/">Themesindustry</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer