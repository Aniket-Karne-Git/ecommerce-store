import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
//http://localhost:3000/api/155e6c58-4892-464f-a5c2-066c48826025/billboards

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getBillboard;
