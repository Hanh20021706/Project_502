import React from 'react'

const HeaderAdmin = () => {
    return (
        <div id="bs-content-row-navbar-collapse-5" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="getting-started.html">Getting Started</a></li>
                <li className="active"><a href="index.html">Documentation</a></li>
                {/* <li class="disabled"><a href="#">Link</a></li> */}
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">Silverbux <b className="caret" /></a>
                    <ul role="menu" className="dropdown-menu">
                        <li className="dropdown-header">Setting</li>
                        <li><a href="#">Action</a></li>
                        <li className="divider" />
                        <li className="active"><a href="#">Separated link</a></li>
                        <li className="divider" />
                        <li className="disabled"><a href="#">Signout</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default HeaderAdmin
