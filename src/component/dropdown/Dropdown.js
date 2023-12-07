import './Dropdown.scss';
import { useEffect, useRef, useState } from "react";
import arrow_up from './img/arrow_up.png';

export default function Dropdown({ status, listing, title, children }) {
  const [open, setOpen] = useState(status);
  const contentRef = useRef(null);
  const contentStatus = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentStatus.current.style.maxHeight = open ? `${contentRef.current.scrollHeight + 50}px` : '0';
    }
  }, [open]);

  return (
    <div className="Dropdown">
      <div className="Dropdown_Title" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <img className={open ? "Dropdown_Title_Close_Active" : "Dropdown_Title_Close"} src={arrow_up} alt="" />
      </div>
      <div className={"Dropdown_Content"} ref={contentRef}>
        <div className={`Dropdown_Content_${open ? "Active" : "Disable"}`} ref={contentStatus}>
          {!listing && <p>{children}</p>}
          {listing &&
            <ul>
              {children.map((item, index) => {
                return <li key={`${index}-${Math.random()}`}>{item}</li>;
              })}
            </ul>}
        </div>
      </div>
    </div>
  );
}
