import { useEffect, useState } from "react";

const Header = ({ logo }: { logo: string | null }) => {
  const [theme, setTheme] = useState<string>( () => sessionStorage.getItem("theme") || "light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    sessionStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="header">
      <div>
        <h5>{logo}</h5>
      </div>
      <div className="header__controls">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5C12.1989 1.5 12.3897 1.57902 12.5303 1.71967C12.671 1.86032 12.75 2.05109 12.75 2.25V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V2.25C11.25 2.05109 11.329 1.86032 11.4697 1.71967C11.6103 1.57902 11.8011 1.5 12 1.5ZM12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM21.75 12.75C21.9489 12.75 22.1397 12.671 22.2803 12.5303C22.421 12.3897 22.5 12.1989 22.5 12C22.5 11.8011 22.421 11.6103 22.2803 11.4697C22.1397 11.329 21.9489 11.25 21.75 11.25H20.25C20.0511 11.25 19.8603 11.329 19.7197 11.4697C19.579 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.579 12.3897 19.7197 12.5303C19.8603 12.671 20.0511 12.75 20.25 12.75H21.75ZM12 19.5C12.1989 19.5 12.3897 19.579 12.5303 19.7197C12.671 19.8603 12.75 20.0511 12.75 20.25V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V20.25C11.25 20.0511 11.329 19.8603 11.4697 19.7197C11.6103 19.579 11.8011 19.5 12 19.5ZM3.75 12.75C3.94891 12.75 4.13968 12.671 4.28033 12.5303C4.42098 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.42098 11.6103 4.28033 11.4697C4.13968 11.329 3.94891 11.25 3.75 11.25H2.25C2.05109 11.25 1.86032 11.329 1.71967 11.4697C1.57902 11.6103 1.5 11.8011 1.5 12C1.5 12.1989 1.57902 12.3897 1.71967 12.5303C1.86032 12.671 2.05109 12.75 2.25 12.75H3.75ZM4.719 4.719C4.78867 4.64915 4.87143 4.59374 4.96255 4.55593C5.05367 4.51812 5.15135 4.49866 5.25 4.49866C5.34865 4.49866 5.44633 4.51812 5.53745 4.55593C5.62857 4.59374 5.71133 4.64915 5.781 4.719L7.281 6.219C7.35073 6.28873 7.40605 6.37152 7.44379 6.46262C7.48152 6.55373 7.50095 6.65138 7.50095 6.75C7.50095 6.84862 7.48152 6.94627 7.44379 7.03738C7.40605 7.12848 7.35073 7.21127 7.281 7.281C7.21127 7.35073 7.12848 7.40605 7.03738 7.44379C6.94627 7.48152 6.84862 7.50095 6.75 7.50095C6.65138 7.50095 6.55373 7.48152 6.46262 7.44379C6.37152 7.40605 6.28873 7.35073 6.219 7.281L4.719 5.781C4.64915 5.71133 4.59374 5.62857 4.55593 5.53745C4.51812 5.44633 4.49866 5.34865 4.49866 5.25C4.49866 5.15135 4.51812 5.05367 4.55593 4.96255C4.59374 4.87143 4.64915 4.78867 4.719 4.719ZM5.781 19.281C5.71137 19.3507 5.62868 19.4061 5.53766 19.4438C5.44664 19.4816 5.34908 19.5011 5.25053 19.5012C5.15198 19.5012 5.05439 19.4819 4.96332 19.4442C4.87225 19.4066 4.78948 19.3514 4.71975 19.2817C4.65002 19.2121 4.59468 19.1294 4.55691 19.0384C4.51913 18.9474 4.49965 18.8498 4.49958 18.7513C4.49951 18.6527 4.51885 18.5551 4.5565 18.4641C4.59415 18.373 4.64937 18.2902 4.719 18.2205L6.219 16.7205C6.28863 16.6508 6.37132 16.5954 6.46234 16.5577C6.55336 16.5199 6.65092 16.5004 6.74947 16.5003C6.84802 16.5003 6.94561 16.5196 7.03668 16.5573C7.12775 16.5949 7.21052 16.6501 7.28025 16.7197C7.34998 16.7894 7.40532 16.8721 7.44309 16.9631C7.48087 17.0541 7.50035 17.1517 7.50042 17.2502C7.50049 17.3488 7.48115 17.4464 7.4435 17.5374C7.40585 17.6285 7.35063 17.7113 7.281 17.781L5.781 19.281ZM19.281 4.719C19.2113 4.64915 19.1286 4.59374 19.0374 4.55593C18.9463 4.51812 18.8487 4.49866 18.75 4.49866C18.6513 4.49866 18.5537 4.51812 18.4626 4.55593C18.3714 4.59374 18.2887 4.64915 18.219 4.719L16.719 6.219C16.5782 6.35983 16.4991 6.55084 16.4991 6.75C16.4991 6.94916 16.5782 7.14017 16.719 7.281C16.8598 7.42183 17.0508 7.50095 17.25 7.50095C17.4492 7.50095 17.6402 7.42183 17.781 7.281L19.281 5.781C19.3508 5.71133 19.4063 5.62857 19.4441 5.53745C19.4819 5.44633 19.5013 5.34865 19.5013 5.25C19.5013 5.15135 19.4819 5.05367 19.4441 4.96255C19.4063 4.87143 19.3508 4.78867 19.281 4.719ZM18.219 19.281C18.3596 19.4218 18.5504 19.501 18.7495 19.5012C18.9485 19.5013 19.1394 19.4224 19.2803 19.2817C19.4211 19.1411 19.5003 18.9503 19.5004 18.7513C19.5006 18.5523 19.4216 18.3613 19.281 18.2205L17.781 16.7205C17.6404 16.5797 17.4496 16.5005 17.2505 16.5003C17.0515 16.5002 16.8606 16.5791 16.7197 16.7197C16.5789 16.8604 16.4997 17.0512 16.4996 17.2502C16.4994 17.4492 16.5784 17.6402 16.719 17.781L18.219 19.281Z"
            fill="#626C7F"
          />
        </svg>
        <label className="switch" htmlFor="toggle">
          <input
            type="checkbox"
            id="toggle"
            className="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="slider round"></span>
        </label>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.775 4.5225C13.0455 4.62306 14.2694 5.04571 15.3312 5.75056C16.393 6.45541 17.2577 7.41922 17.8436 8.551C18.4296 9.68278 18.7174 10.9452 18.68 12.2191C18.6427 13.493 18.2813 14.7364 17.63 15.8319C16.9787 16.9273 16.059 17.8388 14.9577 18.4802C13.8564 19.1215 12.6098 19.4717 11.3356 19.4976C10.0614 19.5235 8.80162 19.2242 7.67517 18.6281C6.54872 18.032 5.59277 17.1586 4.89753 16.0905C7.00203 15.5205 9.87153 14.1375 11.1375 10.764C11.9655 8.553 12.0135 6.3555 11.775 4.5225ZM20.184 12C20.184 10.7916 19.9406 9.59565 19.4683 8.48337C18.9961 7.37108 18.3047 6.36529 17.4355 5.52595C16.5662 4.68661 15.5367 4.03092 14.4086 3.59798C13.2804 3.16504 12.0767 2.96371 10.869 3.006C10.7609 3.00955 10.6549 3.03643 10.5582 3.0848C10.4615 3.13317 10.3763 3.20189 10.3087 3.28623C10.241 3.37058 10.1924 3.46857 10.1661 3.57347C10.1398 3.67838 10.1366 3.78772 10.1565 3.894C10.5015 5.715 10.5765 7.986 9.73203 10.236C8.53203 13.437 5.52903 14.496 3.61653 14.8425C3.50267 14.8631 3.39513 14.9097 3.30231 14.9788C3.20948 15.0479 3.13389 15.1375 3.08145 15.2406C3.02902 15.3437 3.00115 15.4576 3.00003 15.5733C2.99892 15.689 3.02459 15.8034 3.07503 15.9075C3.95967 17.7448 5.44205 19.2273 7.27934 20.112C9.11663 20.9967 11.1999 21.2312 13.1879 20.7772C15.1759 20.3232 16.9508 19.2075 18.2219 17.6128C19.4929 16.0182 20.1847 14.0392 20.184 12Z"
            fill="#626C7F"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
