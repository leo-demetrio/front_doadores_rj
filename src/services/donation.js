import { http } from './configApi';

export default {
    listar: () => {
        return http.get('donor');
    },
    salvar: (donation) => {
        return http.post('donor', donation);
    },
    delete: (donation) => {
        alert("chegou");
        return http.delete('donor', { data: donation });
    },
    searchDonation: (donation) => {
        return http.post('donor', donation);
    },
    donation: (donation) => {
        return http.post('donors', donation);
    }
}