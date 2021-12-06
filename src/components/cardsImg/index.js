import React from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/index";

import "./style.css";

export default function CardsImg() {
  const data = React.useContext(AuthContext);
  const { cards, select } = data;

  return (
    <>
      <div id='cards_landscape_wrap-2'>
        <div className='container'>
          <div className='row'>
            {select === "prontos"
              ? cards.prontos.map((item, index) => {
                  return (
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                      <Link to=''>
                        <div className='card-flyer'>
                          <div className='text-box'>
                            <div className='image-box'>
                              <img src={item.img} alt='' />
                            </div>
                            <div className='text-container'>
                              <h6>{item.title}</h6>
                              <h5>ID: {item._id}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}

            {select === "construçao"
              ? cards.construçao.map((item, index) => {
                  return (
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                      <Link to=''>
                        <div className='card-flyer'>
                          <div className='text-box'>
                            <div className='image-box'>
                              <img src={item.img} alt='' />
                            </div>
                            <div className='text-container'>
                              <h6>{item.title}</h6>
                              <h5>ID: {item._id}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}

            {select === "lançamentos"
              ? cards.lançamentos.map((item, index) => {
                  return (
                    <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3'>
                      <Link to=''>
                        <div className='card-flyer'>
                          <div className='text-box'>
                            <div className='image-box'>
                              <img src={item.img} alt='' />
                            </div>
                            <div className='text-container'>
                              <h6>{item.title}</h6>
                              <h5>ID: {item._id}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
