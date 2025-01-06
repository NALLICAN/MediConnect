import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {

  const { docID } = useParams();  
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docID);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docID]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        
        <div>
          <img 
            className='bg-primary w-full sm:max-w-72 rounded-lg' 
            src={docInfo?.image} 
            alt={`${docInfo?.name}'s picture`} 
          />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <div className='flex items-center gap-2 mb-3'>
            <p className='text-xl font-semibold'>{docInfo?.name}</p>
            <img className='w-6 h-6' src={assets.verified_icon} alt="Verified Icon" />
          </div>

          <p className='text-lg text-gray-600 mb-2'>{docInfo?.degree} - {docInfo?.speciality}</p>
          <p className='text-sm text-gray-500 mb-4'>Experience: {docInfo?.experience}</p>

          <div>
            <p className='text-lg font-semibold mb-2'>
              About <img className='inline' src={assets.info_icon} alt="Information Icon" />
            </p>
            <p className='text-gray-600'>{docInfo?.about}</p>
          </div>

          <p className='text-gray-500 font-medium mt-5'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo?.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>

        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length > 0 && docSlot.map((item, index) => (
              <div 
                onClick={() => setSlotIndex(index)} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border-gray-200'}`} 
                key={index}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlot[slotIndex]?.map((item, index) => (
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-3 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-pink border-2 border-primary' : 'text-gray-400 border-gray-600 border-2'}`} key={index}>
                  {item.time}
                  </p>        
                
                ))}
        </div>
        <button className='bg-primary text-white text-small font-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      {/*---listing related Doctors---- */}
      <RelatedDoctors docID={docID}  speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;