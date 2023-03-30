import './App.css';


import Types from './pages/Types';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src="https://cdn.dribbble.com/users/91147/screenshots/2241260/h_logo.png"/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>Harini's Boutique</h1><br/>
    <p>
       
    </p><br/><br/>A modern boutique with vintage charm<br/><br/>
   
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                WELCOME to the Beautiful Boutique for Beautiful People 
                </h2><br/>
                <div class="img2">
                    <img src="https://artrend.com.sg/wp-content/uploads/2020/04/1-7-of-13.jpg" alt="" /><img src="https://i.pinimg.com/originals/c3/88/01/c38801cb9e40c95f3a9c9802f50a5759.jpg" alt="" height={200} width={200}/><br/><br/>
                   
                </div>
                <h6><br/> You can find top brand outwears with other accessories, baubles and fotwears   
                </h6><br/>
          <h6> <i>This is the place where you can feel the real fashion</i><br/><br/></h6> 
            <div>
                <a class="slots" href="https:/www.google.com" target="_blank">Check out the new arrivals now </a>
            </div> 
        </div>
    </nav>
</section>
    <Types/>    
    <Contact/>
    </div>
  );
}

export default App;
