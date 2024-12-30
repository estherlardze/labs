import Input from '../Input/Input'
import { Text } from '../text/Text'
import { MdDelete } from "react-icons/md";
import './ItemList.css'

const ItemList = () => {
  return (
    <div className='item-list'>
      <Input label="" id="itemName" name="itemName" value="" className='input--long'/>
      <Input label="" id="itemPrice" name="itemPrice" value="" className='input--mini'/>
      <Input label="" id="itemQuantity" name="itemQuantity" value="" className='input--price'/>
      <Text>Item Total: </Text>
      <MdDelete size={20} className='delete-icon'/>
    </div>
  )
}

export default ItemList
