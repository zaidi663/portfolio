
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import './App.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import work from './work.png';
import pic2 from './pic2.png';
import pic4 from './pic4.png';
import ahsan from './ahsan.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';





const imageStyle = {
  width: '600px', // Adjust the width to your desired size
  height: 'auto',
  borderRadius:'12px', // Maintain aspect ratio
};

const imageStyle1 = {
 // Maintain aspect ratio
  marginTop:'100px',
  marginBottom:'100px',
  
};


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showIcon, setShowIcon] = React.useState(false);

  const drawerWidth = 240;
  const navItems = ['Work', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);

    
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor:'black' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const [messageVisible, setMessageVisible] = useState(false);

  const handleButtonClick = () => {
    // Show the message
    setMessageVisible(true);

    setTimeout(() => {
      setMessageVisible(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    // You can perform other actions here, such as submitting the request
    // ...
  };
  return (
    <>
      <Box sx={{ display: 'flex',  }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: 'black',  elevation: 0 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              AHSAN ZAIDI
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', textTransform:'capitalize' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>


      <div className='bg-black '>


      <div className='mt-16 bg-black '> 
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
            <div className='pl-4  '>
            <div className='text-5xl md:pl-40 mt-40 text-white bg-black md:w-5/6'><h2>Hi, I AM</h2><h3>AHSAN ZAIDI</h3></div>
            <div className='text-white md:pl-40 mt-2 md:w-8/12 flex justify-center'><p>A sydney based front-end developer passionate about building accessible and user friendly websites</p> </div>
            <div>
            <button
        className="btn-btn md:ml-40 mt-3 rounded-full "
        onMouseEnter={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
        style={{ position: 'relative' }}
      >
        Contact Me
        <span
          className="bullet ml-2"
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
          style={{
            display: showIcon ? 'none' : 'inline-block',
            marginRight: '5px' 
          }}
        >
          &bull; {/* HTML entity for bullet */}
        </span>
        {showIcon && (
          <ArrowOutwardIcon
            style={{
              position: 'absolute',
              right: '2px',
              top: '50%',
              transform: 'translateY(-50%)'
              
            }}
            
          />
        )}
      </button>
      <IconButton
      component="a"
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      style={{ color: '#D3E97A', backgroundColor:'#222222', marginLeft:'10px' }} // Change color to match LinkedIn's brand color
    >
      <LinkedInIcon />
    </IconButton>

    {/* <IconButton
      component="a"
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      style={{ color: '#D3E97A', backgroundColor:'#222222', marginLeft:'10px'  }} // Change color to match Facebook's brand color
    >
      <FacebookIcon />
    </IconButton> */}

    <IconButton
      component="a"
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      style={{ color: '#D3E97A', backgroundColor:'#222222', marginLeft:'10px' }}
    >
      <FontAwesomeIcon icon={faGithub} />
    </IconButton>
     
     
            </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>

          <div className='p-3 md:pl-0'>
                            <div className='flex justify-center w-full mb-14'>
                                <img src={ahsan} alt="" style={imageStyle} />
                            </div>
                            </div>
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: 'white' }} />

      </div>


       {/* Second Page */}

      <div className='bg-black  pt-5  md:px-20' >

     
      <Grid container spacing={2}>
  <Grid item xs={12} md={12} lg={6} xl={6} >
    <div className='px-4 md:px-0 md:w-6/12'></div>
  <div className='text-4xl text-white bg-black leading-loose font-bold pl-3'><h2>FEATURED PROJECTS</h2></div>
  <div className= 'md:w-7/12  paracolor pt-2 pl-3 md:0'> <p>Here are some of the selected projects that showcase my passion for front-end development</p></div>

  <div className='ml-24   '>
                            <div className=' project-1 flex justify-center  '>
                                <img src={work} alt="" style={imageStyle1} />
                            </div>
                            </div>
  </Grid>
  <Grid item xs={12} md={12} lg={6} xl={6}>
    <div className='px-4 md:px-0 md:w-6/12'>

  <div className='   text-2xl text-white bg-black leading-loose md:pt-60 pt-16'><h2>Promotional landing page for our favourite show</h2></div>
  <div className='paracolor  pt-2 text-sm'> <p>Teamed up with a designer to breath life into promotional webpage for our beloved show.
                                            Adventure Time. Delivered a fully responsive design with dynamic content , capabilities
                                             seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p></div>

          <div>
       <input className='custom-input mt-5 h-10 w-full  border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent '  type="text"
         placeholder="PROJECT INFO" />
     </div>

     <div>
       <input className='custom-input mt-2 h-10 w-full border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent '  type="text"
         placeholder="Year" />
     </div>

     <div>
       <input className='custom-input mt-2 h-10 w-full  border-none border-b border-zinc-400 text-sm focus:outline-none  cstm-username bg-transparent '  type="text"
         placeholder="Role" />
     </div>


<div className='flex cursor-pointer'>
  <div className=' mt-5 inline-flex items-center pr-5 '>
    <p className='custom-underline live-demo-color'>LIVE DEMO <ArrowOutwardIcon className="ml-1" /></p> 
  </div>

  <div className=' mt-5 flex items-center  '>
    <p className='custom-underline flex items-center live-demo-color '>
      SEE ON GITHUB&nbsp;
      <IconButton
        component="a"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ color: '#D3E97A' }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>
    </p> 
  </div>
</div>

    </div>                    
  </Grid>

  <Grid item xs={12}  md={12} lg={6} xl={6} >


  <div className='ml-24 md:pl-0'>
                      <div className=' project-1 flex justify-center   '>
                          <img src={pic2} alt="" style={imageStyle1} />
                      </div>
                      </div>
                            
</Grid>
<Grid item xs={12} md={12} lg={6} xl={6} >
  <div className='px-4 md:px-0 md:w-6/12'>
<div className='  text-2xl text-white bg-black leading-loose pt-36 '><h2>Blog Site for World News</h2></div>
<div className='paracolor   pt-2 text-sm'> <p>Mastered CSS Grid Complexities in building an innovative new home page, navigating intricate
                                                  design decisions for a seamless user experience. Leveraged the challenged to enhance skills in
                                                   front-end develment.</p></div>
                                                   

    <div>
 <input className='custom-input mt-5 h-10  border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent w-full'  type="text"
   placeholder="CLIENT" />
</div>

<div>
 <input className='custom-input mt-2 h-10  border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent w-full '  type="text"
   placeholder="PROJECT INFO" />
</div>

<div>
 <input className='custom-input mt-2 h-10 border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent w-full'  type="text"
   placeholder="Year" />
</div>

<div>
 <input className='custom-input mt-2 h-10  border-none border-b border-zinc-400 text-sm focus:outline-none  cstm-username bg-transparent w-full'  type="text"
   placeholder="Role" />
</div>


<div className='flex cursor-pointer'>
<div className=' mt-5 inline-flex items-center pr-5 '>
<p className='custom-underline live-demo-color'>VIEW PROJECT <ArrowOutwardIcon className="ml-1" /></p> 
</div>


</div>

</div>
                  
</Grid>

<Grid item  xs={12} md={12} lg={6} xl={6}>


<div className='ml-24 md:pl-0 '>
                      <div className=' project-1 flex justify-center  '>
                          <img src={pic4} alt="" style={imageStyle1} />
                      </div>
                      </div>
</Grid>
<Grid item xs={12} md={12} lg={6} xl={6} >
  <div className='px-4 md:px-0 md:w-6/12'>
<div className='   text-2xl text-white bg-black leading-loose pt-36'><h2>Ecommerce Product Page</h2></div>
<div className='paracolor   pt-2 text-sm' > <p>Successfully crafted an engaging product page featuring a dynamic lighbox gallery and seamless
                                                    seamless cart functionality, showcasing proficiency in JavaScript development.</p></div>

    <div>
 <input className='custom-input mt-5 h-10  w-full border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent '  type="text"
   placeholder="PROJECT INFO" />
</div>

<div>
 <input className='custom-input mt-2 h-10 w-full border-none border-b border-zinc-400 text-sm focus:outline-none cstm-username bg-transparent '  type="text"
   placeholder="Year" />
</div>

<div>
 <input className='custom-input mt-2 h-10 w-full border-none border-b border-zinc-400 text-sm focus:outline-none  cstm-username bg-transparent '  type="text"
   placeholder="Role" />
</div>


<div className='flex cursor-pointer'>
<div className=' mt-5 inline-flex items-center pr-5 '>
<p className='custom-underline live-demo-color'>LIVE DEMO <ArrowOutwardIcon className="ml-1" /></p> 
</div>

<div className=' mt-5 flex items-center  '>
<p className='custom-underline flex items-center live-demo-color'>
SEE ON GITHUB&nbsp;
<IconButton
  component="a"
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  style={{ color: '#D3E97A' }}
>
  <FontAwesomeIcon icon={faGithub} />
</IconButton>
</p> 
</div>
</div>

</div>
                  
</Grid>
</Grid>

      </div>












{/* FourtPage////////////////////////////////////////////////////////// */}


<div className='bg-black pt-5 ' >

     
<Grid container spacing={2}>


</Grid>


<Divider sx={{ backgroundColor: 'white', marginTop:'50px' }} />
</div>





{/* AboutMe */}




<div className='bg-black   py-36' >

     
<Grid container spacing={2}>
<Grid item xs={6} >
<div className='px-4 md:px-0 md:w-6/12'>
<div className='text-5xl   text-white bg-black  font-bold   '><h2>ABOUT ME</h2></div>
</div>


</Grid>
<Grid item  xs={12} md={12} lg={6} xl={6} >
  <div className='px-4 md:px-0 md:w-6/12'>
<div className='  text-2xl text-white bg-black leading-loose '><h2>I am a front-end developer based in Sydney. Has a Computer Science background</h2></div>
<div className='paracolor  pt-2 text-sm'> <p>I am a front-end developer based in Sydney looking for exciting opportunities. Has Computer Science background
                                                  Likes to focus on accessibility when developing. Passionate and curious about solving problems.
                                                   Currently I am exploring React Js, webflow and a bit of Designing. I enjoy playing football and Photography.
                                                   Learning more to improve skill. </p></div>

  
                                                

<div className='flex'>
<div className=' mt-5 inline-flex items-center pr-5 '>
<p className='custom-underline live-demo-color cursor-pointer'>MORE ABOUT ME <ArrowOutwardIcon className="ml-1" /></p> 
</div>




</div>

</div>
                  
</Grid>

</Grid>

<Divider sx={{ backgroundColor: 'white', marginTop:'90px' }} />







{/* LetsConnect */}

<div className='h-full w-full py-24 '>
<Grid container spacing={2}>
  <Grid item  xs={12} md={12} lg={6} xl={6}>
  <div className='  text-5xl text-white bg-black leading-loose font-bold px-24'><h2>LET'S CONNECT</h2></div>
  <div className='paracolor   pt-2 text-sm px-24'> <p>Say hello to ahsanzaidi663@gmail.com  </p> <p>For more Info. here is my resume</p></div>

  <div className='mx-20 mt-4 logo-pad'>
  <IconButton
      component="a"
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      style={{ color: '#D3E97A' }} // Change color to match LinkedIn's brand color
    >
      <LinkedInIcon />
    </IconButton>

    <IconButton
        component="a"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        style={{ color: '#D3E97A' }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>

      <IconButton
  component="a"
  href="https://twitter.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Twitter"
  style={{ color: '#D3E97A' }} // Change color to match Twitter's brand color
>
  <FaTwitter />
</IconButton>

<IconButton
  component="a"
  href="https://www.instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  style={{ color: '#D3E97A' }} // Change color to match Instagram's brand color
>
  <FaInstagram />
</IconButton>




  </div>

  </Grid>
  <Grid item xs={12} md={12} lg={6} xl={6}>
<div className='px-4 md-0'>

  <div className=''>
       <label className='mt-10  w-24 text-sm display: block text-white  '  >Name</label>
       <input className='h-10 w-96   text-sm focus:outline-none  custom-i text-white  '  type="text"
         placeholder="" />
     </div>


     <div>
  <label className="mt-8  text-sm block text-white">Email</label>
  <input className="focus:outline-none  h-10 w-96 border-none focus:border-transparent text-sm  custom-i text-white" type="email" placeholder="" />
</div>

<div className='mt-8'>
  <label className='mt-10 w-24 text-sm block text-white'>Subject</label>
  <input className='h-10 w-96 border-none text-sm focus:outline-none  custom-i text-white' type="text" placeholder="" />
</div>

<div className='mt-8'>
  <label className='mt-10 w-24 text-sm block text-white'>Message</label>
  <textarea className='h-24 w-96 border-none text-sm focus:outline-none custom-i text-white' placeholder=""></textarea>
</div>

<div className='mt-3'>
        <button className='submit-btn rounded-full font-bold' onClick={handleButtonClick}>
          Submit
        </button>
      </div>
      </div>
      {messageVisible && (
        <div className='mt-3 ' style={{ backgroundColor: '#D3E97A', color: '#000000', padding: '5px', borderRadius: '5px',width:'280px' }}>
          <p>Your request has been submitted.</p>
        </div>
        
      )}
   
  </Grid>

</Grid>
</div>


</div>

</div>


    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
