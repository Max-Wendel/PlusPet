import {useQuery} from '@tanstack/react-query'
import TutorFilter from '../model/TutorFilter'
import TutorProvider from '../providers/TutorProvider'
import Pagination from '../model/Pagination'
import Tutor from '../model/Tutor'

const TutorAPI = {
    useListActives: (        
        page: number,
        size: number,
        sort: string,
        filter: TutorFilter
    ) => useQuery ({
        keepPreviousData: true,
        queryKey:[
            'listActiveTutors', 
            page, 
            size,
            sort,
            filter
        ],
        queryFn: (): Promise<Pagination<Tutor[]>> => TutorProvider.listActives(page, size, sort, filter)
    }),
    archiveTutor: (        
        tutorId: string
    ) => useQuery ({
        keepPreviousData: true,
        queryKey:[
            'archiveTutor', 
            tutorId
        ],
        queryFn: (): Promise<Tutor> => TutorProvider.archiveTutor(tutorId)
    })

};

export default TutorAPI
