const getFormatedCPF = (cpf: string) => {
    let _cpf =  cpf.replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return _cpf;
}

export {getFormatedCPF}