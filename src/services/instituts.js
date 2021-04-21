import { http } from './configApi';

export default {
    listar: () => {
        return http.get('instituts');
    },
    salvar: (instituts) => {
        return http.post('instituts', instituts);
    },
    delete: (instituts) => {
        alert("chegou");
        return http.delete('instituts', { data: instituts });
    },
    searchInstitut: (institut) => {
        return http.post('instituts/search', institut);
    },
    donor: (valueDonor) => {
        return http.post('instituts/donor', valueDonor);
    }
}