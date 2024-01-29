import { create } from 'zustand';

type State = {
  body: String;
  frontMatter: Record<string, unknown>;
  errorByMatter: string | null;
};

type Action = {
  updateBody: (body: State['body']) => void;
  updateFrontMatter: (frontMatter: State['frontMatter']) => void;
  updateErrorByMatter: (error: State['errorByMatter']) => void;
};

const useFrontMatterStore = create<State & Action>((set) => ({
  body: '',
  frontMatter: {},
  errorByMatter: null,
  updateBody: (body) => set({ body }),
  updateFrontMatter: (frontMatter) => set({ frontMatter }),
  updateErrorByMatter: (errorByMatter) => set({ errorByMatter }),
}));

export { useFrontMatterStore };
