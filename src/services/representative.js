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
    searchRepresentative: (idRepresentative) => {
        return http.get(`representatives/${idRepresentative.value}`);
    },
    donor: (valueDonor) => {
        return http.post('instituts/donor', valueDonor);
    }
}