import {FaUser, FaUsersCog} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'
import {MdArrowDropDown} from 'react-icons/md'


export const links = [
    {name: 'our communities', icon:<MdArrowDropDown/>, submenu:true, sublinks:[
        {
            Icon: <FaUser className='text-black'/>,
            Head:"General User",
            sublink:[
                {name:'stephen',link:"/"},
            ]
        },
        {   
            Icon: <FaUsersCog className='text-black'/>,
            Head:"Election Candidates",
            sublink:[
                {name:'Michael',link:"/"},
            ]
        },
        {
            Icon: <HiUserGroup className='text-black'/>,
            Head:"Decide To Run",
            sublink:[
                {name:'christopher',link:"/"},
            ]
        },
        {
            Icon: <FaUser className='text-black'/>,
            Head:"Reporter",
            sublink:[
                {name:'Daniella',link:"/"},
            ]
        },
    ]},
    {name: 'election data',icon:<MdArrowDropDown/>, submenu:true, sublinks:[
        {
            
            sublink:[
                {name:'Election Day Live Update',link:"/"},
                {name:'post-Election Analysis',link:"/"},
            ]
        },]},
    {name: 'e-buddy'},
    {name: 'veo platform'},
    {name: 'Login'},
]