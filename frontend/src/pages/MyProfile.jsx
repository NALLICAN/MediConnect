import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: 'Male',
    dob: '2000-01-20'
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm p-4 bg-white shadow-lg rounded-md' style={{ color: 'var(--primary)' }}>

      <h1 className='text-2xl font-bold mb-4'>My Profile</h1>

      <div className='flex flex-col items-center'>

        <img src={userData.image} alt="Profile" className='rounded-full w-24 h-24 mb-4' />

        {
          isEdit
            ? <input
                type="text"
                value={userData.name}
                onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className='border border-gray-300 rounded p-2 mb-2'
              />
            : <p className='text-lg font-medium'>{userData.name}</p>
        }

        <hr className='my-4 w-full border-t border-gray-300' />

        <div className='w-full'>
          <p className='font-semibold'>CONTACT INFORMATION</p>
          <div className='mb-2'>
            <p>Email id:</p>
            <p className='text-gray-700'>{userData.email}</p>
          </div>
          <div className='mb-2'>
            <p>Phone:</p>
            {
              isEdit
                ? <input
                    type="text"
                    value={userData.phone}
                    onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                    className='border border-gray-300 rounded p-2 mb-2'
                  />
                : <p className='text-gray-700'>{userData.phone}</p>
            }
          </div>
          <div className='mb-2'>
            <p>Address:</p>
            {
              isEdit
                ? <div>
                    <input
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                      value={userData.address.line1}
                      type="text"
                      className='border border-gray-300 rounded p-2 mb-2'
                    />
                    <input
                      onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                      value={userData.address.line2}
                      type="text"
                      className='border border-gray-300 rounded p-2 mb-2'
                    />
                  </div>
                : <p className='text-gray-700'>
                    {userData.address.line1}<br />
                    {userData.address.line2}
                  </p>
            }
          </div>
        </div>

        <p className='font-semibold'>BASIC INFORMATION</p>
        <div className='mb-2'>
          <p>Gender:</p>
          {
            isEdit
              ? <select
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  value={userData.gender}
                  className='border border-gray-300 rounded p-2 mb-2'
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p className='text-gray-700'>{userData.gender}</p>
          }
        </div>

        <div className='mb-2'>
          <p>Birthday</p>
          {
            isEdit
              ? <input
                  type="date"
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  value={userData.dob}
                  className='border border-gray-300 rounded p-2 mb-2'
                />
              : <p className='text-gray-700'>{userData.dob}</p>
          }
        </div>

        <div>
          {
            isEdit
              ? <button
                  onClick={() => setIsEdit(false)}
                  className='bg-primary text-white rounded p-2 mt-4'
                >
                  Save Information
                </button>
              : <button
                  onClick={() => setIsEdit(true)}
                  className='bg-primary text-white rounded p-2 mt-4'
                >
                  Edit
                </button>
          }
        </div>

      </div>

    </div>
  );
};

export default MyProfile;