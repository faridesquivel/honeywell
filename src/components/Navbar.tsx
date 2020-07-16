import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

    return (
        <div className="NavbarContainer">
            <div className="Title">Honeywell</div>
            <div className="NavbarItemsContainer">
                <div className="NavbarItem">
                    <Link className="Link" id="list" to="/listStudents">Students List</Link>
                </div>
                <div className="NavbarItem">
                    <Link className="Link" to="/addStudent">Add New Student</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;