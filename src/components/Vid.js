import "./Vid.css";
import React from "react";
import { BsFileText} from "react-icons/bs";
import { MdOutlinePaid } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import {AiOutlineVideoCamera } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { RiGlobalLine } from "react-icons/ri";

const Vid = () => {
  return (
    <main>
      <div className="order__container">
        <div className="order__title">
          {/* <img src={hello} alt="hello" /> */}
          <div className="order__heading">
            <i className="order__title__icon">
        <AiOutlineVideoCamera /> 
              
            </i>
            <h1>Videos</h1>
          </div>
          <div className="order__title__rights">
            <i className="order__filter__icon">
              <FiFilter />
            </i>
            <input type="text" placeholder="Search Test....." />
            <button className="add-test">+Add</button>
          </div>
        </div>
        <br />
        <br />

       <div className="list__container">
          <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Simple Interest</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                    <BsFileText/> <span className="span_num">37988765</span>
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Quantitative Ability</button>
            <button className="button_video">Quantitative Ability</button>
            <button className="button_video">Quantitative Ability</button>
            <button className="button_video">Quantitative Ability</button>
                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
          </div>



          <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Think Without Ink,Fun QA Learning</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                    
                    <BsFileText/> <span className="span_num">37988765</span>
                  
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">EPL Highlights</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
             

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Menti Quiz - Set Theory LRDI</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                  
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">EPL Highlights</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
             

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">GD Checklist</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                    
                    <BsFileText/> <span className="span_num">37988765</span>
                  
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Group Discussion</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
           

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Types and Topics of GD</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                    
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Group Discussion</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
               

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">GD Introduction</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                  
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Group Discussion</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li> 

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>

         
             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Sample Answer 2</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                    
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Personal Interview</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Sample Answer 1</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                  
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Personal Interview</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>


             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Interview Tips</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                   
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Personal Interview</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
           
             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Why Should we Hire You</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                   
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Personal Interview</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
           

             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Simple Interest</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                   
                    <BsFileText/> <span className="span_num">37988765</span>
                 
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Quantitative Ability</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>
          
             <div className="list__component">
            <div className="list__component__lefts">
              <div className="list__component__left__top">
                <span className="list__component__title">Simple Interest</span>
              </div>
              <div className="list__component__left__bottom">
                <ul>
                  <li className="border">
                  
                    <BsFileText/> <span className="span_num">37988765</span>
                   
                  </li>
                  <li>
                    <i className="list__component__icon">
                    <MdOutlinePaid />
                    </i>
                  <span className="span_paid">Paid</span>
                  </li>
                  <br/>
                  <button className="button">Quantitative Ability</button>

                </ul>
              </div>
            </div>
            <div className="list__component__rights">
              <ul>
                <li className="switch">
                  <label>
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </li>

                <li><i className="question-icons-users">
                  <AiOutlineEdit/>
                </i></li>

               <li> <i className="question-icons-card">
                  <RiGlobalLine/>
                </i></li>

                <li><i className="question-icons-del">
                  <MdDeleteOutline />
                </i></li>
              </ul>
            </div>
             </div>


        </div>
      </div>
    </main>
  );
};

export default Vid;