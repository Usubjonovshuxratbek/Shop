import React, { useState } from 'react'
import './SliderItem.scss'
import Mac from '../../assets/img/mac.png'

function SliderItem() {
    const arr = [1,2,3,4,5]
    const [designer, setDesigner] = useState(4)
    const [power, setPower] = useState(2)
    const [display, setDisplay] = useState(4)
    const [camera, setCamera] = useState(5)
    const [answer, setAnswer] = useState(5)
    const [portability, setPortability] = useState(4)
    return (
        <div className='slideritem'>
            <div className="slideritem-top">
                <div>
                    <p>Портативные колонки </p>
                    <h4>Apple iPhone 13 Pro Max 256 ГБ серый</h4>
                </div>
                <div>
                    <button><i className='bi bi-heart'></i></button>
                    <button><i class="bi bi-bar-chart-line"></i></button>
                </div>
            </div>
            <div className="slideritem-main">
                <img src={Mac} alt="" />
                <div className="progresswrapper">
                <div className="progresss">
                    <p>Дизайн</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={designer >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                    <div className="progresss">
                    <p>Батарея</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={power >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                    <div className="progresss">
                    <p>Дисплей</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={display >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                    <div className="progresss">
                    <p>Камера</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={camera >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                    <div className="progresss">
                    <p>Ответ</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={answer >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                    <div className="progresss">
                    <p>Портативность</p>
                    <div>
                        {
                            arr?.map((item,index)=>(
                                <span className={portability >=index +1 ? 'activer': null}></span>
                            ))
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem
