import "./dropdown_list.css";

function DropdownList({dropdownTitleList, housingId, toggle, open}) {

  return (
    <div className="selector_structure">
      <div className="selector_header">
        <div className="selector_items" onClick={toggle}>
          <label className="selector_item_text">
            {dropdownTitleList}
          </label>
          <div className={
            open
            ? "selector_button_isActive"
            : "selector_button_isNotActive"
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="selector_item_icon"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </div>
        </div>
      </div>
      <ul className={
        open
          ? "selector_info_isActive"
          : "selector_info_isNotActive"
      }
      id="selectorInfo">
        {housingId.equipments.map(equipment => (
          <li>{equipment}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default DropdownList;
