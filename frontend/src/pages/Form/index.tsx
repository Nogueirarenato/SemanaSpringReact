import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';



function Form( ){
    const params = useParams();

    return(
        //Passa o parâmetro do movieID
        <FormCard movieID={`${params.movieID}`}/>
    );
}

export default Form;