import { Button } from '@mui/material'
import React from 'react'
import './Portfolio.css';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Portfolio() {
  return (
    <div className='portfolio_page'>
      <h1>My Portfolio</h1>
      <div className=''>
        <Button>Dashboard</Button>
        <Button>MIS & Updates</Button>
        <Button>Insights</Button>
      </div>
      <div className='content'>             
        <div className='portfolio_left'>
          <div className='input_feild'>
            <TextField
              style = {{width: 350}} 
              placeholder="Search by company name..."
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                  </InputAdornment>
              ),
              }}
            />
            <Button >
              <FilterListIcon /> Filter
            </Button>
          </div>
          <h2>Activity feed</h2>
          <div className='feed'>
            <div className='info'>
              <h6>Investor update</h6>
              <MoreVertIcon/>
            </div>
            <din className='info_logo' >
              <img src='images/ace_logo.png' />
              <div className='info_name' >
                <h5>Ace Green Recycling</h5>
                <p>Battery Recycling | Bengaluru</p>
              </div>
            </din>
            <div className='para'>
              <p> 
              Ace Green Recycling is a beacon of environmental stewardship and innovation in the realm of waste management. Committed to sustainability and eco-conscious practices, Ace Green Recycling employs cutting-edge technologies and strategic processes to reduce, reuse, and recycle waste materials effectively. Their  municipalities, and educational institutions, they strive to promote sustainable practices and inspire positive change. <br/>
              With a steadfast dedication to environmental preservation and a focus on continuous improvement, Ace Green Recycling stands as a shining example of how businesses can lead the way towards a greener, more sustainable future.
              </p>
              <img src='images/img1.jpg' />
              <p>With a steadfast dedication to environmental preservation and a focus on continuous improvement, Ace Green Recycling stands as a shining example of how businesses can lead the way towards a greener, more sustainable future.</p>
              <Button style={{ color: '#186E47' }}>Read More</Button>
            </div>
            <p>4 days ago</p>
          </div>
          <div className='feed'>
            <div className='info'>
              <h6>Feature launch</h6>
              <MoreVertIcon/>
            </div>
            <din className='info_logo' >
              <img src='images/ace_logo.png' />
              <div className='info_name' >
                <h5>Ace Green Recycling</h5>
                <p>Battery Recycling | Bengaluru</p>
              </div>
            </din>
            <div className='para'>
              <p> 
              Ace Green Recycling is a beacon of environmental stewardship and innovation in the realm of waste management. Committed to sustainability and eco-conscious practices, Ace Green Recycling employs cutting-edge technologies and strategic processes to reduce, reuse, and recycle waste materials effectively. Their  municipalities, and educational institutions, they strive to promote sustainable practices and inspire positive change. <br/>
              With a steadfast dedication to environmental preservation and a focus on continuous improvement, Ace Green Recycling stands as a shining example of how businesses can lead the way towards a greener, more sustainable future.
              </p>
              
             
              <Button style={{ color: '#186E47' }}>Read More</Button>
            </div>
            <p>15-03-2024</p>
          </div>
          <div className='feed'>
            <div className='info'>
              <div className='heading'>
                <h6>Fund investment update</h6>
                <h6 className="ellipsis">Live deal</h6>
              </div>
              
              <MoreVertIcon/>
            </div>
            <din className='info_logo' >
              <img src='images/ace_logo.png' />
              <div className='info_name' >
                <h5>Ace Green Recycling</h5>
                <p>Battery Recycling | Bengaluru</p>
              </div>
            </din>
            <div className='para2'>
              <p> 
              Ace Green Recycling is a beacon of environmental stewardship and innovation in the realm of waste management. Committed to sustainability and eco-conscious practices, Ace Green Recycling employs cutting-edge technologies and strategic processes to reduce, reuse, and recycle waste materials effectively. Their  municipalities, and educational institutions, they strive to promote sustainable practices and inspire positive change. <br/>
              With a steadfast dedication to environmental preservation and a focus on continuous improvement, Ace Green Recycling stands as a shining example of how businesses can lead the way towards a greener, more sustainable future.
              </p>
              <img src='images/img2.jpg' />
              <p>With a steadfast dedication to environmental preservation and a focus on continuous improvement, Ace Green Recycling stands as a shining example of how businesses can lead the way towards a greener, more sustainable future.</p>
              <Button >View Deal</Button>
            </div>
            <p>15-03-2024</p>
          </div>
        </div>
        
        <div className='portfolio_right'>

        </div>
      </div>
    </div>
  )
}

export default Portfolio;