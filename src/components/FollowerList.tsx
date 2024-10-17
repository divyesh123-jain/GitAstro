import React from 'react';
import Image from 'next/image';
interface Follower {
  id: string;
  name: string;
  avatar: string;
}

interface FollowersListProps {
  followers: Follower[];
  onFollowerClick: (followerId: string) => void;
}

const FollowersList: React.FC<FollowersListProps> = ({ followers, onFollowerClick }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Followers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {followers.map((follower) => (
          <div 
            key={follower.id} 
            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onFollowerClick(follower.id)}
          >
            <Image src={follower.avatar} alt={follower.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="text-center">{follower.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowersList;
