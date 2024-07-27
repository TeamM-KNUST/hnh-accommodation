import { create } from 'zustand';
import useProcessStore from './useProcess';

export const useAppStore = create(() => ({
  ...useProcessStore(),

}));