import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { Link, useLocation } from 'react-router';
import { BellIcon, LogOutIcon, ShipWheelIcon, UsersIcon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import useLogout from '../hooks/useLogout';
import { getInitials, getInitialColor } from '../lib/utils';

const Navbar = () => {
    const {authUser} = useAuthUser();

    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");
    
    const {logoutMutation} = useLogout();
    const initials = getInitials(authUser?.fullName);
    const bgColor = getInitialColor(authUser?.fullName || "U");

    

    return (
        <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end w-full">
              {/* LOGO - ONLY IN THE CHAT PAGE */}
              {isChatPage && (
                <div className="pl-5">
                  <Link to="/" className="flex items-center gap-2.5">
                    <ShipWheelIcon className="size-9 text-primary" />
                    <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                      LingoPals
                    </span>
                  </Link>
                </div>
              )}
    
              <div className="flex items-center gap-3 sm:gap-4 ml-auto">
                <Link to={"/friends"}>
                  <button className="btn btn-ghost btn-circle">
                    <UsersIcon className="h-6 w-6 text-base-content opacity-70" />
                  </button>
                </Link>
                <Link to={"/notifications"}>
                  <button className="btn btn-ghost btn-circle">
                    <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                  </button>
                </Link>
              </div>
    
              {/* TODO */}
              <ThemeSelector />
    
              <div className={`avatar w-9 h-9 flex items-center justify-center rounded-full ${bgColor} text-white font-bold text-sm`}>
                {initials}
              </div>
    
              {/* Logout button */}
              <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
                <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;