import {Input,Select} from '@chakra-ui/react'


const Filter = () => {

    const onChange = ()=>{

    }

    return ( 
        <div  style={{position:'relative', width:'50%', margin:'5%'}}>
        <Input placeholder="Busque por titulo" size="lg" onChange={onChange}/>
        <Select placeholder='Select Option'>
            
        </Select>
        </div>
     );
}
 
export default Filter;