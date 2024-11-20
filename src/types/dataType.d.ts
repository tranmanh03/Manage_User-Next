interface ImageView {
    imgView: unknown;
    category: string;
    promotionTTL: string;
    promotionCopy: string;
    promotionDate1: string;
    promotionDate2: string | null;
    price: string | null;
}

interface TypeUser {
    id: number;
    email: string;
    name: string;
    password: string;
    role: string;
}

interface AuthState {
    account: {
        token: string;
        refreshToken: string;
        id: string;
        email: string;
        name: string;
        password: string;
        role: string;
    } | null;
    isAuthenticated: boolean;
}

interface UserInfor {
    email: string;
    name: string;
    password: string;
    role: string;
}
