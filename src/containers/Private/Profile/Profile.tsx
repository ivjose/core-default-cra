import React from 'react';
import { PageHeader } from 'antd';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
const Profile = () => {
  return (
    <div>
      <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" breadcrumb={{ routes }} />
    </div>
  );
};

export default Profile;
