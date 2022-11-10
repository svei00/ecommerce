import Item from './Item';
import { Products, Resources, Company, Questions } from './Menu';

const ItemsContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>      
        <Item Links={Products} title="Products" />
        <Item Links={Resources} title='Resources' /> 
        <Item Links={Company} title='Company' /> 
        <Item Links={Questions} title='Questions' />     
    </div>
  );
};

export default ItemsContainer;