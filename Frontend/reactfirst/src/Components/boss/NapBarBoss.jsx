import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="dashboard-nav" id="napbar">
      <header>
        <p className="brand-logo">
          <i className="fas fa-anchor"></i> <span id="admin">ADMIN</span>
        </p>
      </header>
      <nav className="dashboard-nav-list">
        <Link to="/boss" className="dashboard-nav-item">
          <i className="fas fa-home"></i> Trang chủ
        </Link>
        <Link to="/boss/statistical" className="dashboard-nav-item">
          <i className="fas fa-file-upload"></i> Quản lý đơn hàng
        </Link>
        <Link to="/boss/manage_collection" className="dashboard-nav-item">
          <i className="fas fa-tachometer-alt"></i> Quản lý hệ thống
        </Link>
        <Link to="/boss/employee" className="dashboard-nav-item">
          <i className="fas fa-users"></i> Quản lý tài khoản
        </Link>
        <div className="nav-item-divider"></div>
        <Link to="/home" className="dashboard-nav-item">
          <i className="fas fa-sign-out-alt"></i> Đăng xuất
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;

