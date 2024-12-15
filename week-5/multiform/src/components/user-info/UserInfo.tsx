import { useSelector, useDispatch } from 'react-redux';
import './userinfo.css'
import { RootState } from '../../store';
import {setUserData, setErrorMessage} from '../../features/formSlice'

const UserInfo = () => {

  const {userData, errorMessage} = useSelector((state:RootState) => state.form);
  const dispatch = useDispatch();
  const { name, email, phone } = userData;


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    dispatch(setUserData({ name, value }));
  
    const error = value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    dispatch(setErrorMessage({ name, value: error }));
  };
  


  return (
    <form className="user-info">
      <div className="user-info-name">
        <div className="user-info-label">
          <label>Name</label>
          {errorMessage.name && <p className="error-message">{errorMessage.name}</p>}
        </div>
        <input
          type="text"
          style={{border: errorMessage.name ? "2px solid red" : ""}}
          placeholder="e.g. Stephen King"
          name="name"
          className="user-info-input"
          onChange={handleChange}
          value={name}
        />
      </div>

      <div className="user-info-name">
        <div className="user-info-label">
          <label>Email Address</label>
          {errorMessage.email && <p className="error-message">{errorMessage.email}</p>}
        </div>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          style={{border: errorMessage.email ? "2px solid red" : ""}}
          name="email"
          className="user-info-input"
          onChange={handleChange}
          value={email}
        />
      </div>

      <div className="user-info-name">
        <div className="user-info-label">
          <label>Phone Number</label>
          {errorMessage.phone && <p className="error-message">{errorMessage.phone}</p>}
        </div>
        <input
          type="tel"
          placeholder="e.g. 123 123 123"
          style={{border: errorMessage.phone ? "2px solid red" : ""}}
          className="user-info-input"
          name="phone"
          onChange={handleChange}
          value={phone}
        />
      </div>
    </form>
  );
};

export default UserInfo;
