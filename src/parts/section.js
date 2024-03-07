import React from 'react';

function Section({ data }) {
    return (
        <>
            <div className="box-line mt-5">
                <div className="box-line-one">
                    <h2>90+</h2>
                    <h3>Bizning mijozlar</h3>
                </div>
                <div className="box-line-one">
                    <h2>150+</h2>
                    <h3>Bizning mijozlar</h3>
                </div>
                <div className="box-line-one">
                    <h2>270+</h2>
                    <h3>Bizning mijozlar</h3>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffc300" fill-opacity="1"
                      d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,197.3C672,203,768,117,864,106.7C960,96,1056,160,1152,165.3C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>

            <div className="pamidor3">
                <img src="img/pamidor 3.png" alt="" />
            </div>

            <div className="title" id="kafelar">
                <h2>Sevimli Fast Food kafelardan taomlarni <span>tez yetkazib berish</span></h2>
            </div>

            <div className="foods">
                {data.map((item) => (
                    <div className="foods-one">
                        <img src={item.url} alt=""/>
                        <h2>King Burger kafe</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Section;