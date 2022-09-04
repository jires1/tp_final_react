import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReceiptIcon from '@mui/icons-material/Receipt';
import StoreIcon from '@mui/icons-material/Store';

const mainNavbarItems = [
  {
    id: 0,
    icon: <EqualizerIcon />,
    label: 'Dashboard',
    route: '',
  },
  {
    id: 1,
    icon: <MailIcon />,
    label: 'Inbox',
    route: 'inbox',
  },
  {
    id: 2,
    icon: <StoreIcon />,
    label: 'Products',
    route: 'products',
  },
  {
    id: 3,
    icon: <ReceiptIcon />,
    label: 'Invoices',
    route: 'invoices',
  },
  {
    id: 4,
    icon: <PermIdentityIcon />,
    label: 'Employees',
    route: 'employees',
  },
  {
    id: 5,
    icon: <QuestionAnswerIcon />,
    label: 'Chat Room',
    route: 'chatRoom',
  },
  {
    id: 6,
    icon: <CalendarMonthIcon />,
    label: 'Calendar',
    route: 'calendar',
  },
];

export default mainNavbarItems;
