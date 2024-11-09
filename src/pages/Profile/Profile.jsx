import React from 'react'
import styles from './Profile.module.scss';
import { badgeData } from '../Badges/constants';

export const students = [
    { 
      name: "Aarav Singh", 
      age: 21,
      badgesObtained: [badgeData[0], badgeData[1]],
      level: 'rookie'
    },
    { 
      name: "Ishika Patel", 
      age: 20,
      badgesObtained: [badgeData[2], badgeData[3]],
      level: 'rookie'
    },
    { 
      name: "Vihan Mehta", 
      age: 22,
      badgesObtained: [badgeData[4]],
      level: 'rookie'
    },
    { 
      name: "Diya Shah", 
      age: 19,
      badgesObtained: [badgeData[1], badgeData[5]],
      level: 'rookie',
    },
    { 
      name: "Rishabh Jain", 
      age: 23,
      badgesObtained: [],
      level: 'newbie'
    },
    { 
      name: "Ananya Iyer", 
      age: 21,
      badgesObtained: [badgeData[0], badgeData[2]],
      level: 'rookie'
    },
    { 
      name: "Kavya Rao", 
      age: 20,
      badgesObtained: [badgeData[3], badgeData[4]],
      level: 'rookie'
    },
    { 
      name: "Vivaan Gupta", 
      age: 22,
      badgesObtained: [badgeData[5]],
      level: 'rookie'
    },
    { 
      name: "Saanvi Deshmukh", 
      age: 18,
      badgesObtained: [badgeData[0], badgeData[1]],
      level: 'rookie'
    },
    { 
      name: "Arjun Kulkarni", 
      age: 23,
      badgesObtained: [badgeData[2]],
      level: 'rookie'
    },
    { 
      name: "Aditi Mishra", 
      age: 19,
      badgesObtained: [badgeData[3]],
      level: 'rookie'
    },
    { 
      name: "Dev Patel", 
      age: 21,
      badgesObtained: [badgeData[1], badgeData[4]],
      level: 'rookie'
    },
    { 
      name: "Tara Nair", 
      age: 20,
      badgesObtained: [badgeData[5]],
      level: 'rookie'
    },
    { 
      name: "Aryan Singh", 
      age: 22,
      badgesObtained: [badgeData[0], badgeData[3]],
      level: 'rookie'
    },
    { 
      name: "Meera Menon", 
      age: 18,
      badgesObtained: [],
      level: 'newbie'
    },
    { 
      name: "Reyansh Sinha", 
      age: 23,
      badgesObtained: [badgeData[2], badgeData[5]], 
      level: 'advanced'
    },
    { 
      name: "Nisha Choudhary", 
      age: 19,
      badgesObtained: [badgeData[1], badgeData[4]],
      level: 'advanced'
    },
    { 
      name: "Shaurya Yadav", 
      age: 22,
      badgesObtained: [badgeData[0], badgeData[5]],
      level: 'advanced'
    },
    { 
      name: "Pooja Verma", 
      age: 21,
      badgesObtained: [badgeData[2]],
      level: 'advanced'
    },
    { 
      name: "Rajeshwari Reddy", 
      age: 20,
      badgesObtained: [badgeData[3], badgeData[5]],
      level: 'advanced'
    }
  ];
  
  

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h1>{students[1].name}</h1>
      <h2>{students[1].age}</h2>
      <h2>{students[1].badgesObtained.map((item) => {
        return (
            <div>
                
                <img src={item.src} alt="" />
            </div>
        );
      })}</h2>
    </div>
  )
}

export default Profile
