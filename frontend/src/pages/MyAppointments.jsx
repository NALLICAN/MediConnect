import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-lg">
      <p className="text-xl font-semibold text-primary mb-4">My Appointments</p>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 overflow-hidden rounded-full border">
                <img src={item.image} alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-primary">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>

            <div className="text-sm text-gray-700">
              <p className="font-medium">Address</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p className="mt-2"><span className="font-medium">Date & Time:</span> 25, Dec, 2025 | 8:30 PM</p>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button className="bg-primary text-white py-1 px-3 rounded hover:bg-primary-dark transition">Pay Online</button>
              <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;