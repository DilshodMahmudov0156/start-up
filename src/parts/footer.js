import React from 'react';

function Footer(props) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffc300" fill-opacity="1"
                      d="M0,64L34.3,53.3C68.6,43,137,21,206,37.3C274.3,53,343,107,411,144C480,181,549,203,617,192C685.7,181,754,139,823,138.7C891.4,139,960,181,1029,181.3C1097.1,181,1166,139,1234,117.3C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>

            <div className="yellow-box">
                <h2 id="aloqa">Biz bilan Bog'lanish</h2>
                <p>
                    Agarda siz ham o'z biznesingiz uchun web site yasatmoqchi bo'lsangiz biz bilan bog'laning !
                </p>

                <div className="aloqa-box">
                    <div className="aloqa-box-one" data-aos="fade-right">
                        <i className='bx bx-location-plus'></i>
                        <h3>Manzil</h3>
                        <h4>Sh. Rashidov tumani, Ravot QFY, 43-uy</h4>
                    </div>

                    <hr/>

                    <div className="aloqa-box-one" data-aos="fade-right">
                        <i className='bx bxs-phone'></i>
                        <h3>Telefon</h3>
                        <h4>+998 93 300 72 71</h4>
                    </div>

                    <hr/>

                    <div className="aloqa-box-one" data-aos="fade-right">
                        <i className='bx bx-envelope'></i>
                        <h3>Email</h3>
                        <h4>jabduraimov2002@gmail.com</h4>
                    </div>
                    <hr/>

                </div>
            </div>
        </>
    );
}

export default Footer;