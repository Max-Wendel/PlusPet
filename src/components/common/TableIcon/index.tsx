
import PetsIcon from '@mui/icons-material/Pets';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TableIconProps from './types';

function getStatus(status:string){
    switch(status){
        case 'Finalizado':
            return '#079C07';
        case 'Em Atendimento':
            return '#FFA800';
        case 'Aguardando Atendimento':
            return '#485048';
        case 'Cancelado':
            return '#D70404';
        default:
            return '#485048'
    }
}

function getService(service:string){
    const petCareServices = ['Banho & Tosa', 'Banho'];
    const vetServices = ['Consulta Veterinária', 'Retorno'];

    if(petCareServices.indexOf(service) != -1){
        return 1;
    }
    if(vetServices.indexOf(service) != -1){
        return 2
    }
}

function petCareIcon(color:string){
    return (<BubbleChartIcon sx={{color: color}}/>)
}

function vetIcon(color:string){
    return (<PetsIcon sx={{color: color}}/>)
}

function genderIcon(gender:string){
    return gender === 'female'? <FemaleIcon sx={{color:'#FF00C7'}}/> : <MaleIcon sx={{color:'#04E1FF'}}/> 
}

export default function TableIcon({
    service,
    status,
    gender
}:TableIconProps){
    if(gender){
        return genderIcon(gender);
    }else{
        let icon = getService(service);
        let color = getStatus(status);

        switch(icon){
            case 1:
                return petCareIcon(color);
            case 2:
                return vetIcon(color);
        }
    }
}