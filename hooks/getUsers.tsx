// hooks/use-users.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

const fetchUserById = async (id: number): Promise<User> => {
  const { data } = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
}

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
export const useUserById = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
  });
}