// import Tutor from '../model/Tutor';
// import TutorFilter from '../model/TutorFilter'
// import Pagination from '../model/Pagination'
// import { AxiosResponse } from 'axios';
// import qs from 'query-string';
// import Api from '../service/PlusPetV1Service';

// const getHttp = <T>(path: string): Promise<T> =>
//   Api.get<T>(path).then((response) => response.data);

// const postHttp = <R>(path: string, data?: any): Promise<R> =>
//   Api.post<typeof data, AxiosResponse<R>>(path, data).then(
//     (response) => response.data
//   );

// const patchHttp = <R>(path: string, data?: any): Promise<R> =>
//   Api.patch<typeof data, AxiosResponse<R>>(path, data).then(
//     (response) => response.data
//   );

// const deleteHttp = <R>(path: string): Promise<R> =>
//   Api.delete(path).then((response: AxiosResponse) => response.data);

// export const getlistActiveTutors = (page: number,
//             size: number,
//             sort: string,
//             filter: TutorFilter) => {
//   let url = '/v1/tutor';
//   let query = {page, size, sort, ...filter};
//   url = qs.stringifyUrl({url, query});


//   return getHttp<Pagination<Tutor[]>>(url);
// };

// export const getSolicitacaoDetalhada = (id: number) =>
//   getHttp<Solicitacao>(`/solicitacoes/${id}/detalhes`);

// export const salvarSolicitacao = (data: Solicitacao, comRessalva = false) => {
//   let url = '/solicitacoes';
//   if (comRessalva === true) {
//     url += '/?comRessalva=true';
//   }
//   return postHttp<Solicitacao>(url, data);
// };

// export const atualizarSolicitacao = (
//   sequencial: number,
//   data: Partial<Solicitacao>
// ) => {
//   return patchHttp<Solicitacao>(`/solicitacoes/${sequencial}`, data);
// };

// export const salvarDocumentos = (id: number, data: Documento[]) =>
//   postHttp<Documento[]>(`/solicitacoes/${id}/documentos`, data);

// export const alterarStatus = (dados: MudancaStatus) =>
//   postHttp<Solicitacao>(`/solicitacoes/${dados.idSolicitacao}/status`, dados);

// export const alterarResponsavel = (
//   solicitacao: Solicitacao,
//   responsavel: string
// ) =>
//   postHttp<Solicitacao>(
//     `/solicitacoes/${solicitacao.sequencial}/responsavel/${responsavel}`
//   );

// export const salvarPendencia = (id: number, data: SolicitacaoPendencia) =>
//   postHttp<SolicitacaoPendencia>(`/solicitacoes/${id}/pendencias`, data);

// export const alterarPendencia = (id: number, data: SolicitacaoPendencia) =>
//   patchHttp<SolicitacaoPendencia>(
//     `/solicitacoes/${id}/pendencias/${data.sequencial}`,
//     data
//   );

// export const excluirPendencia = (id: number, idPendencia: number) =>
//   deleteHttp<any>(`/solicitacoes/${id}/pendencias/${idPendencia}`);

// export const resolverPendencia = (id: number, data: SolicitacaoPendencia) =>
//   patchHttp<SolicitacaoPendencia>(
//     `/solicitacoes/${id}/pendencias/${data.sequencial}/resolver`,
//     data
//   );

// export const concluirResolucaoPendencia = (idSolicitacao: number) =>
//   postHttp<Solicitacao>(`/solicitacoes/${idSolicitacao}/pendencias/concluir`);

// export const usuarioEResponsavel = (solicitacao: Solicitacao) => {
//   const userMatricula = getUserMatricula();
//   switch (solicitacao.status.codigo) {
//     case SolicitacaoStatus.AGUARDANDO_ANALISE:
//       return true;
//     case SolicitacaoStatus.ANALISADA:
//       return true;
//     case SolicitacaoStatus.EM_ANALISE:
//       return (
//         solicitacao.responsavelAnalise.toUpperCase() ===
//         userMatricula.toUpperCase()
//       );
//     case SolicitacaoStatus.CONFERIDA:
//       return true;
//     case SolicitacaoStatus.EM_CONFERENCIA:
//       return (
//         solicitacao.responsavelConferencia?.toUpperCase() ===
//         userMatricula.toUpperCase()
//       );
//     case SolicitacaoStatus.FINALIZADA:
//       return true;
//     case SolicitacaoStatus.ANALISE_COM_PENDENCIA:
//       return true;
//     default:
//       return false;
//   }
// };

// export const usuarioPodeCancelar = (solicitacao: Solicitacao) => {
//   switch (solicitacao.status.codigo) {
//     case SolicitacaoStatus.FINALIZADA:
//     case SolicitacaoStatus.CANCELADA:
//       return false;
//     default:
//       return true;
//   }
// };

// export const getIdGedSolicitacao = (
//   solicitacao: Solicitacao | Partial<Solicitacao>,
//   tipoDoc: DocumentoTipoCodigo
// ) => {
//   return solicitacao.documentos?.find(
//     (doc: Documento) => doc.tipoCodigo === tipoDoc
//   )?.idDocGED;
// };





import Tutor from '../model/Tutor';
import TutorFilter from '../model/TutorFilter'
import Pagination from '../model/Pagination'
import { AxiosResponse } from 'axios';
import qs from 'query-string';
import Api from '../service/PlusPetV1Service';

const TutorProvider = { 

    listActives:(
        page: number,
        size: number,
        sort: string,
        filter: TutorFilter
        ): Promise<Pagination<Tutor[]>> => {
            let url = '/v1/tutor/active';
            let query = {page, size, sort, ...filter};
            url = qs.stringifyUrl({url, query});

            return Api.get(url).then(
                (response: AxiosResponse<Pagination<Tutor[]>>) => {
                    return response.data;
                }
            );
        },
        archiveTutor:(tutorId: string): Promise<Tutor> => {
                let url = '/v1/tutor/active/'+tutorId;
    
                return Api.put(url).then(
                    (response: AxiosResponse<Tutor>) => {
                        return response.data;
                    }
                );
            }
};

export default TutorProvider;