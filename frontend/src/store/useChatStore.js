import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
