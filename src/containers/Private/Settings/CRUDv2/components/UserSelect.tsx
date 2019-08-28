import React from 'react';

import { Select } from 'components/AntFormik';
import CRUDService from '../api/CRUDService';
import { UserListProps } from '../Types';

const UserSelect: React.FC = React.memo(() => {
  const [dropdown, getDropdown] = React.useState<UserListProps[]>([]);
  const children: any = [];

  React.useEffect(() => {
    const loadList = async () => {
      try {
        const response = await CRUDService.userList();

        getDropdown([...response]);
      } catch (error) {
        console.log('Error', error);
      }
    };

    loadList();
  }, []);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dropdown.length; i++) {
    children.push(<Select.Option key={dropdown[i].id}>{dropdown[i].name}</Select.Option>);
  }

  return (
    <Select showSearch name="userId" label="Fruits Select">
      {children}
    </Select>
  );
});

export default UserSelect;
