// // import './Videos.css';
// import React from 'react';
// import{FiShoppingCart} from 'react-icons/fi'
// import{FiFilter} from 'react-icons/fi'
// import{BsPerson} from 'react-icons/bs'
// import{MdOutlinePending} from 'react-icons/md'
// import{HiOutlineCurrencyDollar} from 'react-icons/hi'
// import{BiTimeFive} from 'react-icons/bi'
// import{IoIosCheckboxOutline} from 'react-icons/io'
// import{FcRefresh} from 'react-icons/fc'
// import{AiOutlinePlus} from 'react-icons/ai'


// const Videos = () => {
//     return(
//          <main>
//              <div className="order__container">
//                  <div className="order__title">
//                      {/* <img src={hello} alt="hello" /> */}
//                      <div className="order__heading">
//                          <i className="order__title__icon"><FiShoppingCart /></i>
//                          <h1>Orders</h1>
//                      </div>
//                      <div className="order__title__right">
//                          <i className="order__filter__icon"><FiFilter /></i>
//                          <input type="text" placeholder="Search Orders" />
//                          <button>Export</button>
//                          <button><i className="add__button"><AiOutlinePlus /></i>Add</button>
//                      </div>
//                  </div><br/><br/>

//                  <div className="list__container">

//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border success'><i className='list__component__icon'><MdOutlinePending /></i>Success</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className=" success__icon">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
                                 
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border success'><i className='list__component__icon'><MdOutlinePending /></i>Success</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="success__icon">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
                                
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
//                      <div className="list__component">
//                          <div className="list__component__left">
//                              <div className="list__component__left__top">
//                                  <span className="list__component__title">order5cccb7bd-(3 items)</span>
//                              </div>
//                              <div className="list__component__left__bottom">
//                                  <ul>
//                                      <li className='border'><i className='list__component__icon'><BsPerson /></i>Amit Kumar</li>
//                                      <li className='border pending'><i className='list__component__icon'><MdOutlinePending /></i>Pending</li>
//                                      <li className='border'><i className='list__component__icon'><HiOutlineCurrencyDollar /></i>&#8377;2990.6</li>
//                                      <li ><i className='list__component__icon'><BiTimeFive /></i>20 oct 2021 09:00AM</li>
//                                  </ul>
//                              </div>
                         
//                          </div>
//                          <div className="list__component__right">
                             
//                          <ul>
//                              <li className="switch">
//                                  <label>
//                                  <input type="checkbox"/>
//                                  <span class="slider"></span>
//                                   </label>
//                                  </li>
//                                  <li><i className="list__right__second__icon"><FcRefresh /></i></li>
//                                  <li><i className="list__right__third__icon"><IoIosCheckboxOutline /></i></li>
//                          </ul>
                         
//                          </div>
//                      </div>
                     
//                      </div>

                
//              </div>
//          </main>
//     )
    
// }

// export default Videos;

















import React from "react";
// import "./Video.css";

// import FileCopyIcon from "@material-ui/icons/FileCopy";
import { FiFilter } from "react-icons/fi";
import { AiFillMessage } from "react-icons/ai";
import { RiGlobalLine} from "react-icons/ri";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {MdOutlinePaid} from "react-icons/md";
import{ImSortNumbericDesc} from "react-icons/im"
import{BsFileText} from "react-icons/bs"

function Videos() {
  return (
    <main>
      <div className="head-of-test">
        <h3>
        <AiOutlineVideoCamera /> Videos
        </h3>

        <div className="top-right">
          <button className="filter-icon">
            <FiFilter />
          </button>
          <input className="input" type="text" placeholder="search test..." />
          <button className="add-btn">+ ADD</button>
        </div>
      </div>

      <div className="table-box">
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Simple Interest</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Quantitative Ability</button>
            <button style={{marginLeft:"1%",fontSize:"14px"}}>Quantitative Ability</button>
            <button style={{marginLeft:"1%",fontSize:"14px"}}>Quantitative Ability</button>
            <button style={{marginLeft:"1%",fontSize:"14px"}}>Quantitative Ability</button>
          </div>

          <div className="table-cells" >
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>

          <label className="switch" > 
              <input type="checkbox" />
              <span className="slider"> </span> 
            </label>
            </button> 

            <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
              <AiOutlineEdit /> 
            </button> 

            <button className="question-icons-card" style={{fontSize:"27px",borderRight:"1px solid black "}}>
              <RiGlobalLine /> 
            </button> 

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline /> 
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Think without int,fun QA Learning</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}> EPL Highlights</button>
            
          </div>

          <div className="table-cells">
 
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>

          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>

            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">GD Checklist</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>EPL Highlights</button>
            </div>

          <div className="table-cells">
   

          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>

            <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px",borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Types & Topics of GD</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}> EPL Highlights</button>
      
          </div>

          <div className="table-cells">
  
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">GD Introduction</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Group Discussion</button>
            
          </div>

          <div className="table-cells">
   
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Sample Answer 2</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Group Discussion</button>
        
          </div>

          <div className="table-cells">

          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine/>
            </button>

            <button className="question-icons-del" style={{fontSize:"27px",marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Sample Answer 1</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  3456677 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Group Discussion</button>
           
          </div>

          <div className="table-cells">


          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px",marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Interview Tips</p>
            <p>
            <span style={{fontSize:"15px"}}><BsFileText/>  43291296 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Group Discussion</button>
          </div>

          <div className="table-cells">
  
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px" ,marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        
        <div className="table-row">
          <div className="table-cell">
            <p className="test-name">Why Should We Hire You</p>
            <p className="test-num">
            <span style={{fontSize:"15px"}}><BsFileText/>  24240778 | </span><MdOutlinePaid /> <span style={{color:"red",fontSize:"15px"}}> Paid</span><br/>
              </p>
            {/* <p>
                <ImSortNumbericDesc/> 35674767 | <MdOutlinePaid /> Paid
            </p> */}
            <button style={{marginLeft:"3%",fontSize:"14px"}}>Personal Interview</button>
          </div>

          <div className="table-cells">
   
          <button className="question-icons-pencil" style={{fontSize:"27px",borderRight:"1px solid  black"}}>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            </button>
            
            <button className="question-icons-pencil" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <AiOutlineEdit />
            </button>

            <button className="question-icons-card" style={{fontSize:"27px" ,borderRight:"1px solid black "}}>
              <RiGlobalLine />
            </button>

            <button className="question-icons-del" style={{fontSize:"27px",marginRight:"15px"}}>
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        


        </div>
    </main>
  );
}

export default Videos;
