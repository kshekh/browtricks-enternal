import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Customers from '@/views/CustomersView.vue';
import Login from '@/views/LoginView.vue';
import UserProfile from '@/views/UserProfileView.vue';
import Settings from '@/views/SettingsView.vue';
import CreateAccount from '@/components/CreateAccount.vue';
import ForgotPassword from '@/components/ForgotPassword.vue';

const routes = [{
        path: '',
        name: '',
        component: Login,
        meta: { title: 'BrowTricks | Login' },
    },
    {
        path: '/signup',
        name: 'Create Account',
        component: CreateAccount,
        meta: { title: 'BrowTricks | Create Account' },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: 'BrowTricks | Login' },
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: { title: 'BrowTricks | Forgot Password' },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: 'BrowTricks | Home' }
    },
    {
        path: '/customers',
        name: 'Customers',
        component: Customers,
        meta: { title: 'BrowTricks | Customers' }
    },
    {
        path: '/user-profile',
        name: 'UserProfile',
        component: UserProfile,
        meta: { title: 'BrowTricks | User' }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta: { title: 'BrowTricks | Settings' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;