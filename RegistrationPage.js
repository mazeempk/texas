import React, { useState } from 'react';
import TeacherRegistration from './TeacherRegistration';
import StudentRegistration from './StudentRegistration';

const RegistrationPage = () => {
  const [isUserLogin, setIsUserLogin] = useState(true);

  const toggleForm = () => {
    setIsUserLogin(!isUserLogin);
  };

  return (
    <div>
      { isUserLogin ? (
        <TeacherRegistration />
      ) : (
        <StudentRegistration />
      )}
      {/* <p>
        Login as a different user?{' '}
        <span onClick={toggleForm}>Student Login</span>
        {' | '}
        <span onClick={toggleForm}>Teacher Login</span>
      </p> */}
      <button type='button' onClick={toggleForm}>As Student</button>
      <button type='button' onClick={toggleForm}>As Teacher</button>

    </div>
  );
};

export default RegistrationPage;