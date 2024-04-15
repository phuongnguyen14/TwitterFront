import React from 'react';
import { Icon } from '@iconify/react';
import {navigationMenu} from "./NavigationMenu";
import {useNavigate} from "react-router-dom";
const Navigation = () => {
    const navigate = useNavigate();
    return(
        <div className="h-screen sticky top-0">
            <div className='py-5' style={{paddingTop: '1rem', paddingLeft: '40%'}}>
                <Icon icon="devicon:twitter" width="2rem" height="2rem"></Icon>
            </div>
            <div>
                <div className='space-y-6' style={{paddingTop: '1rem', paddingLeft:'40%'}}>
                    {navigationMenu.map((item) => <div className='cursor-pointer flex items-center space-x-3 ' onClick={()=>item.title==="Profile"?navigate(`/profile/${5}`)
                    :navigate(item.path)}>
                        {item.icon}
                        <p className='text-x1'>{item.title}</p>
                    </div>)}
                </div>

            </div>
        </div>
    )
}

export default Navigation;