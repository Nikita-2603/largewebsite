import './styles.css';

const SubHeader = () => {
    const menus = [{
        label: 'World',
        href: '/world'
    },
    {
        label: 'U.S',
        href: '/usa'
    }, {
        label: 'technology',
        href: '/techno'
    },
    {
        label: 'design',
        href: '/design'
    },

    {
        label: 'culture',
        href: '/culture'
    },
    {
        label: 'business',
        href: '/business'
    },
    {
        label: 'politics',
        href: '/politics'
    },
    {
        label: 'opinion',
        href: '/opinion'
    },
    {
        label: 'science',
        href: '/science'
    },
    {
        label: 'health',
        href: '/health'
    },
    {
        label: 'style',
        href: '/style'
    },
    {
        label: 'travel',
        href: '/travel'
    }
    ]

    return <div className='menu'>
        

        <div className='list'>
            <ul className='list-menu'>
                {menus.map(function (item, index) {
                    return <li key={index} className='list-item'>
                        <a className='link'>{item.label}</a>
                    </li>
                })}
            </ul>
        </div>
    </div>
}


export default SubHeader;