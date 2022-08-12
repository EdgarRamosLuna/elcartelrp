import React, {useState, useEffect} from 'react';
import { Button } from '../../styles/Home';

  
const ScrollTop = (props) =>{
  const {idView} = props;
  const [visible, setVisible] = useState(false)
  const id = idView;
  const toggleVisible = () => {
    const scrolled = document.getElementById(id).scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    const scrolled = document.getElementById(id);
    scrolled.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
 

  useEffect(() => {
    const scrolled = document.getElementById(id);
    scrolled.addEventListener('scroll', toggleVisible);
  }, [])
  
  
  
  return (
    <Button>
     <div className="btnScroll" onClick={scrollToTop} 
     style={{display: visible ? 'flex' : 'none'}}>
      <img src="/assets/img/scrollTop.png" alt="" />
     </div>
    </Button>
  );
}
  
export default ScrollTop;