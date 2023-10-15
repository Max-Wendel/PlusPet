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