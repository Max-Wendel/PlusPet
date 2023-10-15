import Tutor from '../model/Tutor';
import TutorFilter from '../model/TutorFilter'
import Pagination from '../model/Pagination'
import { AxiosResponse } from 'axios';
import qs from 'query-string';
import Api from '../service/PlusPetV1Service';
import PetFilter from '../model/PETFilter';
import Pet from '../model/Pet';

const PetProvider = { 

    listActives:(
        page: number,
        size: number,
        sort: string,
        filter: PetFilter
        ): Promise<Pagination<Pet[]>> => {
            let url = '/v1/pet/active';
            let query = {page, size, sort, ...filter};
            url = qs.stringifyUrl({url, query});

            return Api.get(url).then(
                (response: AxiosResponse<Pagination<Pet[]>>) => {
                    return response.data;
                }
            );
        }
};

export default PetProvider;