
/* MOBILE MENU */

.menu-btn {
    display: none;
    background: #a855f7;
    color: white;
    border: none;
    padding: 8px 13px;
    font-size: 22px;
    border-radius: 6px;
    cursor: pointer;
}

@media (max-width: 768px) {

    .navbar {
        position: relative;
    }

    .menu-btn {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 15px;
        background: #19192d;
    }

    .nav-links.active {
        display: flex;
    }
}
