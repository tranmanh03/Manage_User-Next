interface ImageView {
    imgView: any,
    category: string,
    promotionTTL: string,
    promotionCopy: string,
    promotionDate1: string,
    promotionDate2: string | null,
    price: string | null
}

interface TypeUser {
    id: number,
    email: string,
    name:   string,
    password: string,
    role: string
}