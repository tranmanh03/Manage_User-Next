import axios from '../ultis/axiosCongfig'

const getAllUser  = () => {
    return axios.get(`/admin/getAllUsers`);
}

const addNewUser = (email:string, name:string, password:string, role:string) => {
    return axios.post(`/admin/create`, {
        email, name, password, role
    })
}

const deleteUser = (id:number) => {
    return axios.delete(`admin/delete/${id}`)
}

const updateUser = (id: number, email:string, name:string, password:string, role:string) => {
    return axios.put(`/admin/update/${id}`, {
        email, name, password, role
    })
}

export {
    getAllUser,
    addNewUser,
    deleteUser,
    updateUser
}