import { Text } from '../../components/ui/text/Text'
const Address = ({item}: {item: string}) => {
  return (
    <Text variant="description" className="invoice-detail__client">{item}</Text>
  )
}

export default Address
