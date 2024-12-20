import { Heading } from "./components/ui/heading/Heading";
import Button from "./components/ui/button/Button";
import Icon from "./components/ui/icon/Icon";
import { Text } from "./components/ui/text/Text";
import Avatar from "./components/ui/avatar/Avatar";
import Badge from "./components/ui/Badge/Badge";

export const App = () => {
  return (
    <div>
      <Heading variant="h2">Invoice</Heading>
      <Button variant="default">Create Invoice</Button>
      <Icon
        src="https://via.placeholder.com/150"
        alt="Placeholder Icon"
        size="sm"
        radius="rounded-full"
      />
      <Text variant="caption">Hello World</Text>
      <Avatar src="https://via.placeholder.com/150" alt="Placeholder Avatar" />
      <Badge variant="primary" color="paid">Badge</Badge>
    </div>
  );
};
