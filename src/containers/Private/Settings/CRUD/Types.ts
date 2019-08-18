export interface FormProps {
  body: string;
  title: string;
  userId: number | string[] | string;
}

export interface UserListProps {
  id: number;
  name: string;
}

export interface PostsListProps extends FormProps {
  id: number;
}
