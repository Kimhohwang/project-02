import MENU_DATA from "./Components/Sidebar_MenuData";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        {MENU_DATA[0].items.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target={`#${item.label.toLowerCase()}-nav`}
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-folder"></i>
              <span>{item.label}</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            {item.subItems && (
              <ul
                id={`${item.label.toLowerCase()}-nav`}
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
              >
                {item.subItems.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a href={subItem.href}>
                      <i className="bi bi-circle-fill"></i>
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
