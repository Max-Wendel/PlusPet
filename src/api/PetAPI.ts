import {useQuery} from '@tanstack/react-query'
import Pagination from '../model/Pagination'
import PetFilter from '../model/PETFilter'
import Pet from '../model/Pet'
import PetProvider from '../providers/PetProvider'

const PetAPI = {
    useListActives: (        
        page: number,
        size: number,
        sort: string,
        filter: PetFilter
    ) => useQuery ({
        keepPreviousData: true,
        queryKey:[
            'listActivePets', 
            page, 
            size,
            sort,
            filter
        ],
        queryFn: (): Promise<Pagination<Pet[]>> => PetProvider.listActives(page, size, sort, filter)
    })

};

export default PetAPI
