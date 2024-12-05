
const UserInfo = () => {
  return (
    <form className="user-info">
      <div className="user-info-name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g Stephen King"
        />
      </div>
      <div className="user-info-name">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="user-info-name" >
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </form>
  );
};

export default UserInfo;
