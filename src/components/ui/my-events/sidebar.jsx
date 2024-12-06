import { useNavigate } from 'react-router-dom'

const SIDEBAR_ITEMS = [
    {
        id: 1,
        title: 'Sự kiện đã tạo',
        link: '/my-events/manage',
        icon: 'calendar'
    },
    {
        id: 2,
        title: 'Quản lý nhân sự',
        link: '/my-events/staff',
        icon: 'profile-2user'
    },
    {
        id: 3,
        title: 'Mã giảm giá',
        link: '/my-events/discount',
        icon: 'ticket'
    }
]

function SidebarItem({ title, link, icon, isActive, onClick }) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        if (onClick) {
            onClick()
        }
        navigate(`${link}`)
    }
    return (
        <div 
            className={`flex flex-row items-center gap-2 text-[#1b1b1b] hover:cursor-pointer hover:bg-[#ddeffa] hover:gap-4 px-4 py-4 rounded-r-2xl w-full ${isActive ? 'text-[#219ce4] bg-[#ddeffa] rounded-r-2xl border-l-4 border-[#219ce4]' : 'text-[#1b1b1b]'}`}
            onClick={() => handleOnClick()}
        >
            <img src={`/assets/icons/${icon}.svg`} alt={icon} width={14} height={14} />
            <span className={`${isActive ? 'text-[#219ce4] bg-[#ddeffa]' : 'text-[#1b1b1b]'} text-base font-semibold`}>{title}</span>
        </div>
    )
}

export default function AdminSidebar() {
    return (
        <div className={`w-[18%] h-full min-h-screen flex flex-col items-center py-4 bg-[#fafafa] border-r-[1px] border-[#d9d9d9]`}>
            <div className="flex flex-col items-start w-full">
                {SIDEBAR_ITEMS.map(item => (
                    <SidebarItem key={item.id} title={item.title} link={item.link} icon={item.icon} isActive={item.link === window.location.pathname} />
                ))}
            </div>
        </div>
    )
}