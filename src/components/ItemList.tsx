import { Items, ReactState } from '../../types/utils';
import Button from './Button';



type ItemList ={
    items:Items[];
    setItems: ReactState <Items[]>;

  };
const ItemList = ({items , setItems}: ItemList) => {
    const handleDelete= (id:string)=>{
        setItems((prev) => prev.filter((data) => data.id !== id));
      }
  return ( items.map((data) =>(
           <div key={data.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
           <p>{data.title}</p>
           <Button onClick={()=> handleDelete(data.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            fill="#ed3737"
            d="M16 9v10H8V9h8 M14.5 3H5v2h14V3h-4.5z M18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
            />
            </svg>
            </Button>
       </div>
      ))
  )
}

export default ItemList
