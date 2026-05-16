import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router';
import { MessageSquareIcon, UsersIcon } from 'lucide-react';

import { getUserFriends } from '../lib/api';
import FriendCard from '../components/FriendCard';
import NoFriendsFound from '../components/NoFriendsFound';

const FriendsPage = () => {

  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <UsersIcon className="size-7 text-primary" />
              Your Friends
            </h1>
            <p className="text-base-content opacity-70 mt-1">
              Connect and chat with your language exchange partners
            </p>
          </div>
          <Link to="/" className="btn btn-outline btn-sm">
            <MessageSquareIcon className="mr-2 size-4" />
            Discover Partners
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <div className="py-10">
            <NoFriendsFound />
          </div>
        ) : (
          <>
            <p className="text-sm text-base-content opacity-60">
              {friends.length} {friends.length === 1 ? "friend" : "friends"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {friends.map((friend) => (
                <FriendCard key={friend._id} friend={friend} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;