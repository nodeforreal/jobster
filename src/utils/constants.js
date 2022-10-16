
import {AiOutlineBarChart, AiOutlineProfile} from 'react-icons/ai';
import {MdWorkOutline} from 'react-icons/md';
import {IoBagAddOutline} from 'react-icons/io5';


// toastify - config - style.
export const toastConfig = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {textAlign:'center',textTransform:'lowercase'}
};


// nav links

export const navLinks = [
  {
    id:0,
    label: 'stats',
    path: '/',
    icon:<AiOutlineBarChart className='icon'/>
  },
  {
    id:1,
    label: 'all jobs',
    path: '/all-jobs',
    icon:<MdWorkOutline className='icon'/>

  },
  {
    id:2,
    label: 'add job',
    path: '/add-job',
    icon:<IoBagAddOutline className="icon" />
  },
  {
    id:3,
    label: 'profile',
    path: '/profile',
    icon:<AiOutlineProfile className='icon'/>
  },
]

export const statusOptions = ["interview","declined","pending"]
export const jobTypeOptions = ["full-time","part-time","remote","internship"]

export const filterOptions ={
  status : ["all","interview","declined","pending"],
  jobType: ["all","full-time","part-time","remote","internship"],
  sortBy: ['latest','oldest','a-z','z-a']
}