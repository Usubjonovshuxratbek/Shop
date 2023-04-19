import React, { useContext} from 'react'
import './Fashion.scss'
import img2 from '../../assets/img/img2.png'
import insta from '../../assets/img/insta.png'
import face from '../../assets/img/face.png'
import twiter from '../../assets/img/twiter.png'
import person from '../../assets/img/person.png'
import { useParams } from 'react-router-dom'
import { Context } from '../../components/Context/Context'

function Fashion() {
    const { product } = useContext(Context)
    const { slug } = useParams()
    const fullProduct = product.find((item) => item.id == slug)
  return (
    <div className='container'>
        <div className='Fashion'>
            <div>
            <h2 className='F_title'>Fast Fashion, And Faster Fashion</h2>
            <h3 className='F_info'>by <span>ANNY JOHNSON</span> - October 8,2020</h3>
            <img className='F_pro' src={fullProduct.img} alt="" />
            <h3 className='F_text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus voluptatibus magni sequi. Voluptatem earum officiis laboriosam repudiandae commodi nihil! Asperiores sunt possimus ea corporis eligendi cumque. Totam, omnis non debitis explicabo itaque alias in beatae, quaerat possimus, minus voluptates.
            </h3>
            <img className='F_img2' src={img2} alt="" />
            <div className='F_about'>
            <h2>Top trends</h2>
            <h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolorum dolore qui sunt repellendus accusamus eveniet laboriosam libero enim soluta!
            </h3>
            <ul>
                <li>consectetur adipiscing elit. Aliquam placerat</li>
                <li>Lorem ipsum dolor sit amet consectetur </li>
                <li>sapien tortor faucibus augue</li>
                <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
            </ul>
            </div>
            <ul className='F_list1'>
                <li>Tags</li>
                <li className='F_item'>____</li>
                <li><span>Fashion, Style, Season</span></li>
            </ul>
            <ul className='F_list2'>
                <li>Share</li>
                <li className='F_span2'>____</li>
                <li><img src={face} alt="" /></li>
                <li><img src={insta} alt="" /></li>
                <li><img src={twiter} alt="" /></li>
            </ul>
            <span className='F_ciz'></span>
            </div>
            <div className='F_add'>
                <h2 className='F_tt'>Leave a reply</h2>
                <h3 className='F_tex'>Your email address will not be published. Required fields are marked *</h3>
                <form action="#" className='form'>
                    <input type="text" placeholder='Enter your name*'/>
                    <span></span>
                    <input type="text" placeholder='Enter your Email*'/>
                    <span></span>
                    <input type="text" placeholder='Enter your Website'/>
                    <span></span>
                </form>
                <input className='F_check' type="checkbox" />
                <h4 className='F_ctex'>Save my name, email, and website in this browser for the next time I commentF_com</h4>
                <input className='F_com' type="text" placeholder='Your Comment*'/>
                <span className='span'></span>
                <button className='F_btn'>POST COMMENT</button>
            </div>
            <div className='Comment'>
                <h3 className='coment'>Coments(3)</h3>
                <div className='F_card'>
                    <img src={person} alt="" />
                    <h3>Scarlet withch</h3>
                    <h4>6 May, 2020</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </h5>
                </div>
                <div className='F_card2'>
                    <img src={person} alt="" />
                    <h3>Scarlet withch</h3>
                    <h4>6 May, 2020</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </h5>
                </div>
                <div className='F_card'>
                    <img src={person} alt="" />
                    <h3>Scarlet withch</h3>
                    <h4>6 May, 2020</h4>
                    <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </h5>
                </div>
            </div>
                <span className='Footer_span'></span>
                <div className='Footer'>
                    <ul className='footer_list'>
                        <li>CONTACT</li>
                        <li>TERMS OF SERVICES</li>
                        <li>SHIPPING AND RETURNS</li>
                    </ul>
                    <ul className='footer_list2'>
                        <li>Give an email, get the newsletter.</li>
                        <li>➡</li>
                    </ul>
                    <p className='f_ciziq'>__________________________________</p>
                    <p className='footer_year'><span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy policy.</p>
                    <ul className='f_ul'>
                        <li><img src={face} alt="" /></li>
                        <li><img src={insta} alt="" /></li>
                        <li><img src={twiter} alt="" /></li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Fashion