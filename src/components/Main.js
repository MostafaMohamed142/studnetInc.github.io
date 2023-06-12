import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Main = () => {
    // INIT AOS
    useEffect(() => {
        AOS.init({
          duration: 1000
        });
      }, []);
    //   HANDLING FOR COMPONENT REFRESH
      useEffect(() => {
        AOS.refresh();
      });
  return (
    // MAIN CONTENT
    <div className='container p-5'>
        <div className='postion-relative'>
            <span className='text-light'><i className="fa-solid fa-clock text-light"></i> 15 Minutes</span>
            <h2 className='text-light p-4'>The Big Five: Your Gateway to Greater Discoveries!</h2>
            <p className='text-light p-3'>
            Before we embark on this thrilling journey to uncover your unique career path, we need to get to know you a little better. And what better way than through the 'Big Five Personality Assessment'?<br/>
            </p>
            <p className='text-light p-3' data-aos="fade-right">
            The Big Five is a well-respected psychological model that helps us understand your unique personality traits. No, we're not mind-readers (though that would be cool), we simply use science to help you discover the best career paths suited to your personality.<br/>
            </p>
            <p className='text-light p-3' data-aos="fade-right">
            This isn't a test, so there are no right or wrong answers. Just be honest, because the more truthful you are, the more accurate your career matches will be. And don't worry, we value your privacy and your responses will be kept confidential. This introspective journey will take about 15 minutes of your time. So, grab a snack, settle into your favorite chair, and get ready to dive deep into the fascinating world of you!
            </p>
        </div>
            <button className='btn text-light fs-5 enter' style={{backgroundColor: '#3D3BFF'}}>Enter</button>
    </div>
  )
}

export default Main