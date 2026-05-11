/*
|-----------------------------------------
| setting up Controller for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

import RevalidatePath, { IRevalidatePath } from './model';

export const getAllPaths = async (): Promise<IRevalidatePath[]> => {
  return RevalidatePath.find().sort({ createdAt: -1 });
};

export const addPath = async (path: string): Promise<IRevalidatePath> => {
  return RevalidatePath.create({ path });
};

export const deletePath = async (id: string): Promise<boolean> => {
  const result = await RevalidatePath.findByIdAndDelete(id);
  return !!result;
};
