import React from 'react'

import Card from './component/Card.jsx'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "45$/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "80$/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "7 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "40$/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "95$/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
    companyName: "Netflix",
    datePosted: "1 day ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "70$/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "50$/hr",
    location: "Delhi, India"
  },
  {
    brandLogo:"https://cdn.worldvectorlogo.com/logos/spotify-2.svg",

    companyName: "Spotify",
    datePosted: "6 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "60$/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "8 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "75$/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYJ-GN9cxdOpfXszYyZ8ZaMKacp7BmrQ-Ag&s",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Graphics Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "38$/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8e4313112554403.60186ea0c7798.jpg",
    companyName: "Intel",
    datePosted: "2 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "100$/hr",
    location: "Bangalore, India"
  }
];

  return (
      <div className="parent">
       {jobOpenings.map(function(elem,id){
         
        return <div key={id}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay}
        logo={elem.brandLogo} location={elem.location}/>
        </div>
       })}
      </div>

  )
}

export default App
