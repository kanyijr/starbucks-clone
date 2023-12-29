import React from 'react'
import Container from '../../components/Container/Container'
import './Home.css'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <>
      <Container source={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88047.jpg'
        }  title={"Gift cards keep on giving"}
            button={'Join for free'} text={'Join Starbucks Rewards and start earning free drinks & food when you use gift cards in the app. (Yes, really!)'}
            color={"#d4e9e2"}
            />


    <Container source={' https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87802.jpg'}
     title={"Half off for the holidays"} button={"Join for free"}
     text={"Feeling festive? Starbucks® Rewards members can get half off a drink on Thursday afternoons (12-6 PM) in December."}
     color={'#006241'} text_color={"white"}/>

    

    <Container source={'	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87728.png'}
     title={"The game is on"} button={"Play now"} 
     text={"There’s still time to play Starbucks for Life! This year we’re giving away over 10 million prizes."}
     color={"#f0d0cb"} text_color={"black"}/>



    <Container source={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88115.jpg'}
     title={"Connecting us through film"} button={"Watch now"} 
     text={"Watch the creative team of the new movie, THE COLOR PURPLE discuss the power of shared storytelling."}
     color={"#ad96dc"} text_color={"black"}/>


    <Container source={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87698.png'}
        title={"Mocha merriment"} button={"Order now"} 
        text={"Our Peppermint Mocha is all dressed up with whipped cream and dark-chocolate curls."}
        color={"#006241"} text_color={"white"}/>

    <Container source={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87613.jpg'}
            title={"Order in the app for a joyful journey"} button={"Join for free"} 
            text={"Dashing through the airport? Join Starbucks® Rewards to mobile order and pick up on the way to your gate."}
            color={"#006241"} text_color={"white"}/>

    <Container source={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88049.png'}
            title={"Warm and hearty"} button={"Order now"} 
            text={"The Sausage, Cheddar & Egg Sandwich on a toasted English muffin hits the spot."}
            color={"#76232f"} text_color={"white"}/>

    <div className="app__Home-container">
      <div className="app__Home-container_pholder">
          <div className="app__home-container_pholder-content">
          At participating stores. Some restrictions apply. Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads. See 
          </div>
      </div>

    </div>  

      <div className="app__Home-container">
        <div className="app__Home-container_pholder">
          <div className="app__home-container_pholder-content">
            NO PURCHASE NECESSARY. Participating stores only. Starbucks Partners (employees) are not eligible to win prizes. Ends 12/31/23. To play and for Official Rules, visit 
          </div>
        </div>
      </div>
      

      <div className="app__Home-container">
        <div className="app__Home-container_pholder">
          <div className="app__home-container_pholder-content">
            © 2023 Warner Bros. Entertainment Inc. All Rights Reserved. Rated PG-13.
          </div>
        </div>
      </div>
     
      <div className="app__Home-container">
        <div className="app__Home-container_pholder">
          <div className="app__home-container_pholder-content">
            At participating stores.
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <div className="app__Home-footer">

          <div className="app__Home-footer_container">
            
            <Footer/>
                
         
          
            
            <Footer/>
                
         
          
          
           
            <Footer/>
                
         
           
           
            <Footer/>
                
         
          
         
           
            <Footer/>
                
         
        
           

          </div>
          <hr />

          <div className="app__Home-footer_icons">
             <i class="bi bi-instagram"></i>
             <i class="bi bi-twitch"></i>
             <i class="bi bi-facebook"></i>
             <i class="bi bi-google"></i>
             <i class="bi bi-twitter"></i>
             <i class="bi bi-youtube"></i>
          </div>

         

        

      </div>
      <p className="app__Home-inline_start">Privacy Notice</p>
      <span>|</span>
      <p className="app__Home-inline">Terms of Use</p>
      <span>|</span>
      <p className="app__Home-inline">Do Not Share My Personal Information</p>
      <span>|</span>
      <p className="app__Home-inline">CA Supply Chain</p>
      <span>|</span>
      <p className="app__Home-inline">Accessibility</p>
      <span>|</span>
      <p className="app__Home-inline">Cookie preferences</p>
      
      <p className="app__Home-rights">&copy; 2023 Starbucks Company.All rights reserved.</p>


     
      


     

    </>
  )
}

export default Home
